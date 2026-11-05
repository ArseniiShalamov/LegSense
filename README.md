# LegSense

Complete source code for the current LegSense website, built with plain HTML,
CSS and JavaScript. Includes illustrations, animations and three interface
languages: English, Russian and Hebrew.

This is a **standalone static website**. It does not require React, a build step,
a Sites account or API keys. You can push the files to GitHub and host them on
any static hosting service, including GitHub Pages.

## Quick start

1. Open the project folder in VS Code or another editor.
2. Start a local HTTP server from that folder:

   ```bash
   python3 -m http.server 8000
   ```

3. Open <http://localhost:8000>.

Alternatively, install the **Live Server** extension in VS Code and open
`index.html` using **Open with Live Server**.

Do not rely on double-clicking `index.html` with a `file://` URL: loading sample
images through `fetch()` requires an HTTP server.

## Project structure

```text
LegSense/
├── index.html              Main page and English copy
├── about.html              Separate project information page
├── css/
│   └── styles.css          Styling, responsive layout, RTL and reveal animations
├── js/
│   ├── config.js           Editable animation and upload settings
│   ├── hero.js             Rotating sample leg in the hero section
│   ├── uploads.js          Photo selection, preview, replacement and removal
│   ├── analysis.js         Demo processing, results, history and report downloads
│   ├── translations.js     Russian and Hebrew translations of English strings
│   ├── i18n.js             Language switching, persistence and report translation
│   ├── scroll.js           Scroll-triggered reveal animations
│   └── ambient.js          Background particles, glows and cursor attraction
├── assets/
│   ├── front.svg           Front-view leg illustration
│   ├── left.svg            Left-view leg illustration
│   └── right.svg           Right-view leg illustration
├── docs/
│   ├── EDITING.md          How to edit copy, styles and animations
│   └── INTEGRATION.md      Future AI pipeline integration points
├── package.json            Optional code-formatting tool only
└── package-lock.json       Locked formatter version
```

CSS is separate from HTML. JavaScript is split by responsibility and includes
English comments. The `<script>` order at the end of `index.html` matters:
`analysis.js` uses geometry from `hero.js` and selected photos from `uploads.js`.
These are ordinary sequential scripts, not ES modules.

## About the project page

Open `about.html` or use **About LegSense** in the navigation or footer.
The separate page explains the purpose, workflow, technology and research status
with animated illustrations and interactive steps. It supports all three languages.
Page-specific styles and interactions are in `css/about.css` and `js/about.js`.
The background retains the saved 128-particle configuration.

## Working features

- Three languages, saved language preference and right-to-left Hebrew layout.
- Light and dark themes on both pages, with a saved preference.
- Rotating sample 3D leg, manual rotation and pause controls.
- Background particles with smooth cursor attraction.
- Scroll reveal effects and reduced-motion support.
- Three photo inputs with drag-and-drop, preview and individual replacement.
- Image type, file size, resolution and exposure checks.
- User confirmation of pose and framing, plus measured leg length input.
- Animated mesh-building demonstration and results screen.
- On-device demo session history and comparison.
- Downloadable HTML report and sample OBJ mesh.

## Demo limitations

**The AI model and backend are not connected.** The website does not reconstruct
a leg from the uploaded photos. The animation uses preset geometry; the volume
of 3,142 cm³ is a sample value, not a measurement. The entered leg length does
not yet scale this preset mesh.

The user currently confirms framing and camera angles using a checkbox.
Reconstruction quality and medical recommendations are not calculated.
The health assessment section displays an insufficient-data message.

To try the interface, select **Try the animation with sample images**, then
**Analyze My Leg**.

## User data

Photos remain in the current browser tab's memory. They are not uploaded to a
server or saved in history. Select them again after reloading the page.

The site stores these values in `localStorage`:

- `legsense-language`: the selected language.
- `legsense-demo-history-v1`: up to 30 demo records containing the date, sample
  volume, entered length and demo flag.

History belongs to the current browser and site origin. Records from the
published website do not automatically transfer to localhost or GitHub Pages.

Reports download as HTML. For a PDF, open a downloaded report and use the
browser's **Print → Save as PDF** command.

## Push to GitHub

Create an empty repository and upload **the contents of this folder**, or run
these commands from the project folder. Replace the example URL with your own:

```bash
git init
git add .
git commit -m "Add LegSense website"
git branch -M main
git remote add origin https://github.com/YOUR_NAME/YOUR_REPOSITORY.git
git push -u origin main
```

For GitHub Pages, choose **Settings → Pages → Deploy from a branch → main → /(root)**.
All asset paths are relative, so the project also works at a URL such as
`https://YOUR_NAME.github.io/YOUR_REPOSITORY/`.

The archive excludes `.git`, `node_modules`, credentials, browser history and
service-specific Sites hosting configuration. No repository or deployment was
created automatically on your behalf.

## Light and dark themes

Use the sun/moon button beside the language selector. Theme colors are defined
in `css/theme.css`; persistence and accessible labels are handled by `js/theme.js`.
The preference is stored as `legsense-theme` in localStorage. This script loads
in the document head so the saved theme is applied before the page is painted.

## Code formatting

This is optional and is not required to run the website. With Node.js installed:

```bash
npm ci
npm run format
```

To check formatting without changing files:

```bash
npm run format:check
```

See [docs/EDITING.md](docs/EDITING.md) for editing examples.
