# Model integration: the next phase

This archive contains the interface. It does not include a backend, AI model or
real medical calculations. The notes below identify future integration points;
they do not describe an existing API.

## Current implementation

`js/uploads.js` stores selected files in `selectedPhotos`, using the keys
`front`, `left` and `right`. The measured leg length is available in `lengthInput`.

In `js/analysis.js`:

- `begin()` starts the demo.
- `frame()` advances stages using the duration in `config.js`.
- `finish()` creates a sample result with a volume of 3,142 cm³.
- `verts` and `faces` from `hero.js` provide the preset mesh.
- `historyRender()` and `updateHistoryChart()` show local demo records.
- The `#download-report` and `#download-model` handlers generate local files.

## When the backend is ready

1. In `begin()`, create `FormData` containing the three photos and leg length.
2. Send it to the agreed API endpoint. Do not put secret credentials in browser code.
3. Receive actual processing stages using an agreed mechanism, such as job status
   polling or server events. Progress should reflect backend work rather than
   the current demo timer.
4. Load the actual mesh format returned by your pipeline. The interface does not
   currently include a general-purpose GLB/OBJ loader.
5. Pass real volume, scale, reconstruction quality and assessment status to a
   result-rendering function, replacing the current `finish()` behavior.
6. Update history, comparisons, charts and exports: they currently assume preset
   values. In particular, the chart's “0.0%” change label is demo content, not a
   general calculation.
7. Export the actual mesh instead of the sample OBJ and generate reports from
   the returned data. The value 3142 is also explicit in the report template.
8. Remove demo labels only after the real functionality is connected and verified.

Before integration, agree on mesh format and units, the measured region's
boundaries, scale calibration, result structure, errors and job cancellation.

Medical wording, thresholds and assessment reliability need separate agreement
with your team and clinicians. Technical image suitability and mesh quality do
not, by themselves, constitute a medical assessment.
