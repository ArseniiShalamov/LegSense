/** DEMO analysis; no AI model or API is connected yet.
 * 1. Checks image resolution and exposure on the device.
 * 2. Animates a preset mesh through several processing stages.
 * 3. Displays a SAMPLE volume and saves metadata in localStorage.
 * 4. Exports an HTML report and sample OBJ mesh.
 * Photos are not saved in history or sent to a server.
 * Future pipeline integration points are described in docs/INTEGRATION.md.
 */
(() => {
  const $ = (s) => document.querySelector(s),
    flow = $("#analysis-flow"),
    result = $("#scan-result"),
    errorBox = $("#analysis-error"),
    progress = $("#analysis-progress"),
    stageRows = [...document.querySelectorAll("#analysis-stages li")],
    pose = $("#pose-check");
  let busy = false,
    startAt = 0,
    currentStage = 0,
    modelAngle = 0.8,
    modelPaused = matchMedia("(prefers-reduced-motion: reduce)").matches,
    dragging = false,
    previousX = 0,
    activeRecord = null,
    history = [],
    pending = new Set();
  const storageKey = "legsense-demo-history-v1";
  try {
    const data = JSON.parse(localStorage.getItem(storageKey) || "[]");
    if (Array.isArray(data))
      history = data
        .filter(
          (v) =>
            v && Number.isFinite(v.volume) && Number.isFinite(v.length) && Number.isFinite(v.time),
        )
        .slice(0, 30);
  } catch {}
  const scanBtn = $("#scan-action");

  // Form readiness: three photos, leg length and confirmed pose.
  function refresh() {
    scanBtn.disabled =
      busy ||
      pending.size > 0 ||
      selectedPhotos.size !== 3 ||
      !pose.checked ||
      !lengthInput.value ||
      !lengthInput.validity.valid;
    if (!busy && selectedPhotos.size === 3)
      scanStatus.textContent = !pose.checked
        ? "Confirm the pose and framing checklist to continue."
        : scanBtn.disabled
          ? "Enter a length between 10 and 150 cm."
          : "Ready to preview. Reconstruction and medical analysis are not connected.";
  }
  pose.addEventListener("change", refresh);
  lengthInput.addEventListener("input", refresh);
  const slotObserver = new MutationObserver(refresh);
  slots.forEach((slot) =>
    slotObserver.observe(slot, { subtree: true, attributes: true, attributeFilter: ["hidden"] }),
  );

  // Local technical checks; not a medical assessment.
  async function checkImage(slot, droppedFile) {
    const input = slot.querySelector("input"),
      file = droppedFile || input.files[0];
    if (!file) return;
    const key = slot.dataset.view;
    pending.add(key);
    refresh();
    try {
      const bitmap = await createImageBitmap(file);
      const notes = [];
      if (Math.min(bitmap.width, bitmap.height) < 600)
        notes.push("Low resolution: use at least 600 pixels on the shorter side.");
      const c = document.createElement("canvas");
      c.width = c.height = 48;
      const context = c.getContext("2d", { willReadFrequently: true });
      context.drawImage(bitmap, 0, 0, 48, 48);
      const pixels = context.getImageData(0, 0, 48, 48).data;
      let sum = 0;
      for (let i = 0; i < pixels.length; i += 4)
        sum += pixels[i] * 0.2126 + pixels[i + 1] * 0.7152 + pixels[i + 2] * 0.0722;
      const light = sum / (pixels.length / 4);
      if (light < 40) notes.push("Very dark image: try brighter, even lighting.");
      if (light > 240) notes.push("Very bright image: check for lost detail.");
      bitmap.close();
      slot.querySelector(".photo-error").textContent = notes.length
        ? notes.join(" ")
        : "Resolution and exposure checked. Please confirm framing yourself.";
    } catch {
      slot.querySelector(".photo-error").textContent =
        "Automatic quality check unavailable for this format. Review the image yourself.";
    } finally {
      pending.delete(key);
      refresh();
    }
  }
  slots.forEach((slot) =>
    slot.querySelector("input").addEventListener("change", () => checkImage(slot)),
  );
  // Apply the same checks to dropped images; freeze inputs during a run.
  slots.forEach((slot) =>
    slot.addEventListener("drop", (e) => {
      if (e.dataTransfer.files.length === 1) checkImage(slot, e.dataTransfer.files[0]);
    }),
  );
  slots.forEach((slot) =>
    slot.addEventListener(
      "drop",
      (e) => {
        if (busy) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      },
      true,
    ),
  );
  const originalChart = $(".history-chart").innerHTML;

  // Chart of saved demo sessions.
  function updateHistoryChart() {
    const chart = $(".history-chart");
    if (!history.length) {
      chart.innerHTML = originalChart;
      $(".history-summary>p").innerHTML = "<strong>3,142</strong> <b>cm³</b>";
      $(".history-summary small").textContent = "−1.8% since first scan";
      $(".demo-label").textContent = "ILLUSTRATIVE DATA";
      return;
    }
    const records = history.slice(0, 8).reverse(),
      points = records.map((r, i) => ({
        x: 62 + (records.length === 1 ? 0 : (i / (records.length - 1)) * 754),
        y: 250 - ((r.volume - 3000) / 300) * 224,
      }));
    const line = points.map((p, i) => (i ? "L" : "M") + p.x + " " + p.y).join(" "),
      last = points[points.length - 1];
    chart.innerHTML =
      '<defs><linearGradient id="demo-area" x2="0" y2="1"><stop stop-color="#75cdb6" stop-opacity=".3"/><stop offset="1" stop-color="#75cdb6" stop-opacity="0"/></linearGradient></defs><path d="' +
      line +
      " L" +
      last.x +
      ' 250 L62 250Z" fill="url(#demo-area)"/><path d="' +
      line +
      '" fill="none" stroke="#50ba9f" stroke-width="2"/>' +
      points
        .map(
          (p) =>
            '<circle cx="' +
            p.x +
            '" cy="' +
            p.y +
            '" r="5" fill="white" stroke="#50ba9f" stroke-width="2"/>',
        )
        .join("") +
      '<g fill="#8ca4a9" font-size="11"><text x="0" y="26">3,300</text><text x="0" y="250">3,000 cm³</text><text x="62" y="277">First saved demo</text><text x="716" y="277">Latest demo</text></g>';
    $(".demo-label").textContent = "SAVED DEMO SESSIONS · PRESET VOLUME";
    $(".history-summary>p").innerHTML =
      "<strong>" + history[0].volume.toLocaleString() + "</strong> <b>cm³</b>";
    $(".history-summary small").textContent =
      history.length > 1 ? "0.0% change · preset demo values" : "First saved demo";
  }

  // History table; only date, length and sample volume are stored.
  function historyRender() {
    updateHistoryChart();
    const detail = $("#history-detail");
    detail.replaceChildren();
    const note = document.createElement("p");
    note.textContent =
      "Saved demo sessions on this device only. Preset measurements are not medical results. Photos are never saved in this history.";
    detail.append(note);
    if (history.length) {
      const table = document.createElement("table");
      table.className = "history-table";
      const head = document.createElement("tr");
      for (const label of ["Date", "Sample volume", "Entered length", "Change"]) {
        const th = document.createElement("th");
        th.textContent = label;
        head.append(th);
      }
      const thead = document.createElement("thead");
      thead.append(head);
      table.append(thead);
      const body = document.createElement("tbody");
      history.forEach((r, i) => {
        const tr = document.createElement("tr"),
          prev = history[i + 1],
          change = prev ? `${r.volume - prev.volume} cm³` : "First demo";
        for (const text of [
          new Date(r.time).toLocaleString(),
          `${r.volume.toLocaleString()} cm³`,
          `${r.length} cm`,
          change,
        ]) {
          const td = document.createElement("td");
          td.textContent = text;
          tr.append(td);
        }
        body.append(tr);
      });
      table.append(body);
      detail.append(table);
      const clear = document.createElement("button");
      clear.className = "text-button history-clear";
      clear.textContent = "Clear demo history";
      clear.onclick = () => {
        history = [];
        try {
          localStorage.removeItem(storageKey);
        } catch {}
        historyRender();
      };
      detail.append(clear);
    } else {
      const empty = document.createElement("p");
      empty.className = "history-empty";
      empty.textContent = "No demo sessions saved yet. Complete a preview to see it here.";
      detail.append(empty);
    }
  }
  historyRender();

  // Disable inputs while processing.
  function lock(yes) {
    busy = yes;
    slots.forEach((s) => {
      s.querySelector("input").disabled = yes;
      s.querySelector(".remove-photo").disabled = yes;
      s.querySelector(".photo-picker").style.pointerEvents = yes ? "none" : "";
    });
    lengthInput.disabled = yes;
    pose.disabled = yes;
    $("#sample-run").disabled = yes;
    refresh();
  }
  const descriptions = [
    "Checking file availability and your capture checklist.",
    "Illustrating a point cloud from a preset model.",
    "Connecting points into the sample surface mesh.",
    "Previewing where your model’s volume calculation will run.",
    "Preparing the demonstration report.",
  ];
  function cancel() {
    lock(false);
    flow.hidden = true;
    scanStatus.textContent = "Preview cancelled. Your selected photos are still available.";
  }
  $("#cancel-analysis").onclick = cancel;

  // API INTEGRATION POINT: currently starts only the demo timer.
  function begin() {
    refresh();
    if (scanBtn.disabled) return;
    lock(true);
    currentStage = 0;
    startAt = performance.now();
    flow.hidden = false;
    result.hidden = true;
    errorBox.hidden = true;
    $("#cancel-analysis").hidden = false;
    $("#flow-title").textContent = "Bringing the shape to life.";
    $("#flow-subtitle").textContent = "Demonstration sequence · Your photos stay on this device.";
    $("#source-thumbs").replaceChildren();
    for (const view of ["front", "left", "right"]) {
      const record = selectedPhotos.get(view);
      if (!record) {
        fail("One of the images is missing. Please select all three views again.");
        return;
      }
      const img = new Image();
      img.src = record.url;
      img.alt = view + " source photo";
      $("#source-thumbs").append(img);
    }
    flow.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function fail(message) {
    lock(false);
    errorBox.hidden = false;
    $("#analysis-error-text").textContent = message;
    $("#cancel-analysis").hidden = true;
  }
  scanBtn.onclick = begin;
  $("#retry-analysis").onclick = begin;
  $("#new-scan").onclick = () => {
    flow.hidden = true;
    $("#scan").scrollIntoView({ behavior: "smooth", block: "start" });
  };
  $("#sample-run").onclick = async () => {
    if (busy) return;
    try {
      for (const view of ["front", "left", "right"]) {
        const response = await fetch("assets/" + view + ".svg");
        if (!response.ok)
          throw Error("Sample images could not be loaded. Try again or select your own photos.");
        const file = new File([await response.blob()], view + "-sample.svg", {
          type: "image/svg+xml",
        });
        setPhoto(document.querySelector('[data-view="' + view + '"]'), file);
      }
      lengthInput.value = "72";
      pose.checked = true;
      scanStatus.textContent = "Sample images selected. Click Analyze My Leg to try the demo.";
      setTimeout(refresh, 250);
    } catch (e) {
      scanStatus.textContent = e.message;
    }
  };

  // RESULT INTEGRATION POINT: currently creates sample measurements.
  function finish() {
    try {
      activeRecord = {
        time: Date.now(),
        volume: 3142,
        length: Number(lengthInput.value),
        demo: true,
      };
      const prev = history[0];
      $("#result-length").textContent = activeRecord.length + " cm";
      $("#result-date").textContent = new Date(activeRecord.time).toLocaleString();
      $("#result-change").textContent = prev
        ? `${activeRecord.volume - prev.volume} cm³ (${(((activeRecord.volume - prev.volume) / prev.volume) * 100).toFixed(1)}%)`
        : "First demo";
      history.unshift(activeRecord);
      history = history.slice(0, 30);
      try {
        localStorage.setItem(storageKey, JSON.stringify(history));
        $("#save-status").textContent =
          "Demo session saved to history on this device. Photos are not saved.";
      } catch {
        $("#save-status").textContent =
          "Local saving is unavailable. Download your report to keep this demo session.";
      }
      historyRender();
      result.hidden = false;
      $("#cancel-analysis").hidden = true;
      $("#flow-title").textContent = "Your preview is ready.";
      $("#flow-subtitle").textContent =
        "Sample mesh and measurements · No medical assessment performed.";
      lock(false);
    } catch (e) {
      fail("The result could not be prepared. Your photos are still selected; please try again.");
    }
  }
  const meshCanvas = $("#result-model"),
    meshCtx = meshCanvas.getContext("2d");
  let mw = 0,
    mh = 0;
  function size() {
    const rect = meshCanvas.getBoundingClientRect();
    mw = rect.width;
    mh = rect.height;
    if (!mw) return;
    const ratio = Math.min(devicePixelRatio, 2);
    meshCanvas.width = mw * ratio;
    meshCanvas.height = mh * ratio;
    meshCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }
  new ResizeObserver(size).observe(meshCanvas);
  meshCanvas.onpointerdown = (e) => {
    dragging = true;
    previousX = e.clientX;
    meshCanvas.setPointerCapture(e.pointerId);
  };
  meshCanvas.onpointermove = (e) => {
    if (dragging) {
      modelAngle += (e.clientX - previousX) * 0.012;
      previousX = e.clientX;
    }
  };
  meshCanvas.onpointerup = meshCanvas.onpointercancel = () => (dragging = false);
  $("#model-pause").onclick = () => {
    modelPaused = !modelPaused;
    $("#model-pause").textContent = modelPaused ? "▶ Play" : "Ⅱ Pause";
    $("#model-pause").setAttribute(
      "aria-label",
      modelPaused ? "Play result model" : "Pause result model",
    );
  };
  if (modelPaused) $("#model-pause").textContent = "▶ Play";

  // Canvas: point cloud → mesh → completed model.
  function frame(now) {
    requestAnimationFrame(frame);
    if (flow.hidden || !mw) return;
    let fraction = 1;
    if (busy) {
      const elapsed = now - startAt;
      fraction = Math.min(1, elapsed / LEG_CONFIG.analysis.demoDurationMs);
      currentStage = Math.min(4, Math.floor(fraction * 5));
      progress.value = Math.round(fraction * 100);
      stageRows.forEach((li, i) => {
        li.classList.toggle("complete", i < currentStage || fraction === 1);
        li.classList.toggle("active", i === currentStage && fraction < 1);
      });
      $("#stage-description").textContent =
        (window.LegSenseI18n
          ? window.LegSenseI18n.translate(descriptions[currentStage])
          : descriptions[currentStage]) +
        " " +
        Math.round(fraction * 100) +
        "%";
      if (fraction === 1) {
        $("#stage-description").textContent = "Preview complete. Sample values are shown below.";
        finish();
      }
    }
    if (!modelPaused && !dragging) modelAngle -= 0.006;
    const ctx = meshCtx;
    ctx.clearRect(0, 0, mw, mh);
    const scale = Math.min(mw / 4.2, mh / 6),
      co = Math.cos(modelAngle),
      si = Math.sin(modelAngle),
      cx = mw * 0.55,
      cy = mh * 0.49;
    const points = verts.map((v) => ({
      x: cx + (v.x * co + v.z * si) * scale,
      y: cy + v.y * scale,
      z: -v.x * si + v.z * co,
    }));
    ctx.beginPath();
    ctx.ellipse(mw * 0.5, mh * 0.89, mw * 0.36, 20, 0, 0, Math.PI * 2);
    ctx.strokeStyle = "#e3fff3";
    ctx.lineWidth = 2;
    ctx.stroke();
    const reveal = busy ? Math.min(1, fraction * 1.7) : 1,
      threshold = mh * (0.03 + reveal * 0.9);
    if (!busy || currentStage >= 2) {
      for (const f of faces
        .map((f) => ({ f, z: f.reduce((a, i) => a + points[i].z, 0) / 3 }))
        .sort((a, b) => a.z - b.z)
        .map((o) => o.f)) {
        if (f.some((i) => points[i].y > threshold)) continue;
        ctx.beginPath();
        f.forEach((i, k) =>
          k ? ctx.lineTo(points[i].x, points[i].y) : ctx.moveTo(points[i].x, points[i].y),
        );
        ctx.closePath();
        ctx.fillStyle = "rgba(19,157,143,.43)";
        ctx.fill();
        ctx.strokeStyle = "#dcfff3b0";
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
    }
    points.forEach((p) => {
      if (p.y > threshold) return;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = "#e0fff1";
      ctx.fill();
    });
    if (busy) {
      const scanY = mh * 0.07 + ((fraction * 2) % 1) * mh * 0.8;
      ctx.fillStyle = "#afffe577";
      ctx.fillRect(mw * 0.18, scanY, mw * 0.65, 2);
    }
  }
  requestAnimationFrame(frame);

  // Download locally generated files.
  function download(name, type, content) {
    const url = URL.createObjectURL(new Blob([content], { type }));
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  $("#download-model").onclick = () => {
    const obj = ["# LegSense PRESET DEMO mesh. Not reconstructed from photos."];
    verts.forEach((v) => obj.push(`v ${v.x} ${-v.y} ${v.z}`));
    faces.forEach((f) => obj.push("f " + f.map((i) => i + 1).join(" ")));
    download("legsense-demo-mesh.obj", "text/plain", obj.join("\n"));
  };
  $("#download-report").onclick = () => {
    if (!activeRecord) return;
    const report = `<!doctype html><html lang="en"><meta charset="utf-8"><title>LegSense demo report</title><style>body{font:16px Arial;max-width:780px;margin:60px auto;padding:25px;color:#173a3e}h1{font-size:38px}strong{color:#148b78}section{padding:22px;background:#edf7f3;border-radius:15px;margin:20px 0}p{line-height:1.8}@media print{body{margin:0}}</style><h1>LegSense · Demo report</h1><p>${new Date(activeRecord.time).toISOString()}</p><section><p><strong>ILLUSTRATIVE DATA — NOT A MEDICAL RESULT</strong></p><p>Preset volume: 3,142 cm³<br>Entered leg length: ${activeRecord.length} cm<br>Reconstruction quality: not evaluated</p></section><h2>Health assessment: insufficient data</h2><p>The medical model is not connected. This demonstration cannot determine health status or whether a doctor visit is needed. No medical recommendation has been generated.</p><h2>About this preview</h2><p>The displayed 3D mesh and volume are preset examples, not reconstructed from your photos. Photos remain in your browser and are not included in this report. Use your browser’s Print command to save this report as a PDF.</p></html>`;
    download(
      "legsense-demo-report.html",
      "text/html",
      window.LegSenseI18n ? window.LegSenseI18n.translateHTML(report) : report,
    );
  };
  refresh();
})();
