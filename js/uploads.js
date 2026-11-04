/** Photo selection and preview; files are not sent to a server.
 * selectedPhotos stores a File and temporary object URL for each view.
 * analysis.js uses selectedPhotos, slots, lengthInput and setPhoto().
 */
// No upload or analysis endpoint is connected yet.
const selectedPhotos = new Map(),
  slots = [...document.querySelectorAll(".photo-slot")],
  lengthInput = document.querySelector("#leg-length"),
  scanAction = document.querySelector("#scan-action"),
  scanStatus = document.querySelector("#scan-status");

// Basic form readiness; analysis.js also requires pose confirmation.
function updateScan() {
  const length = Number(lengthInput.value);
  scanAction.disabled =
    selectedPhotos.size !== 3 || !lengthInput.value || length < 10 || length > 150;
  scanStatus.textContent =
    selectedPhotos.size === 3
      ? scanAction.disabled
        ? "Three photos selected. Enter a leg length between 10 and 150 cm."
        : "Three photos selected. Ready for the next step."
      : "";
}

// Remove one photo and release its temporary object URL.
function clearPhoto(slot) {
  const key = slot.dataset.view,
    old = selectedPhotos.get(key);
  if (old) URL.revokeObjectURL(old.url);
  selectedPhotos.delete(key);
  const img = slot.querySelector("img");
  img.hidden = true;
  img.removeAttribute("src");
  slot.querySelector(".photo-empty").hidden = false;
  slot.querySelector(".photo-caption").hidden = true;
  slot.querySelector(".remove-photo").hidden = true;
  slot.querySelector("input").value = "";
  updateScan();
}

// Validate file type and size, then open a local preview.
function setPhoto(slot, file) {
  const error = slot.querySelector(".photo-error");
  error.textContent = "";
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    error.textContent = "Please choose an image file.";
    return;
  }
  if (file.size > LEG_CONFIG.upload.maxFileSizeMB * 1024 * 1024) {
    error.textContent = "Please choose an image smaller than 20 MB.";
    return;
  }
  const url = URL.createObjectURL(file),
    probe = new Image();
  probe.onload = () => {
    clearPhoto(slot);
    selectedPhotos.set(slot.dataset.view, {
      file,
      url,
      width: probe.naturalWidth,
      height: probe.naturalHeight,
    });
    const img = slot.querySelector("img");
    img.src = url;
    img.hidden = false;
    slot.querySelector(".photo-empty").hidden = true;
    slot.querySelector(".photo-caption").hidden = false;
    slot.querySelector(".remove-photo").hidden = false;
    updateScan();
  };
  probe.onerror = () => {
    URL.revokeObjectURL(url);
    error.textContent = "This image could not be opened. Try a JPG, PNG or WebP image.";
  };
  probe.src = url;
}

// File selection, removal and drag-and-drop for each photo slot.
slots.forEach((slot) => {
  slot.querySelector("input").addEventListener("change", (e) => setPhoto(slot, e.target.files[0]));
  slot.querySelector(".remove-photo").onclick = () => {
    clearPhoto(slot);
    slot.querySelector(".photo-error").textContent = "";
  };
  slot.addEventListener("dragover", (e) => {
    e.preventDefault();
    slot.classList.add("dragover");
  });
  slot.addEventListener("dragleave", () => slot.classList.remove("dragover"));
  slot.addEventListener("drop", (e) => {
    e.preventDefault();
    slot.classList.remove("dragover");
    if (e.dataTransfer.files.length !== 1) {
      slot.querySelector(".photo-error").textContent = "Drop one photo in each field.";
      return;
    }
    setPhoto(slot, e.dataTransfer.files[0]);
  });
});
lengthInput.addEventListener("input", updateScan);
document
  .querySelectorAll(".analyze")
  .forEach(
    (button) =>
      (button.onclick = () =>
        document.querySelector("#scan").scrollIntoView({ behavior: "smooth", block: "start" })),
  );

// Toggle history visibility; analysis.js renders the records.
const historyButton = document.querySelector("#view-history");
historyButton.onclick = () => {
  const detail = document.querySelector("#history-detail");
  detail.hidden = !detail.hidden;
  historyButton.setAttribute("aria-expanded", String(!detail.hidden));
  historyButton.textContent = detail.hidden ? "View all history →" : "Hide history ↑";
};
