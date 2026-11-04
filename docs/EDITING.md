# Editing LegSense

## Change text

Open `index.html`, find the English text you want to change and replace it.
English comments identify the hero, capture guide, uploads, results, history
and technology sections.

For example, the upload heading is:

```html
<h2 id="scan-title">Ready when you are.</h2>
```

Change the text between the tags. Keep `id="scan-title"`: it is used for
accessibility and element relationships.

Next, open `js/translations.js`. Each entry contains the English source as its
key, followed by `ru` (Russian) and `he` (Hebrew) translations:

```javascript
"Ready when you are.": {
  ru: "Готовы, когда вы готовы.",
  he: "מוכנים כשאתם מוכנים.",
},
```

The key must **exactly match the English text**, including punctuation. If you
change the English copy, update its dictionary key too. New strings without a
translation entry remain in English. Technology names such as WebGL are not
translated.

Headings containing `<br>` or `<em>` have a separate entry for each text segment.
Messages shown after user actions are in `uploads.js` and `analysis.js`; their
translations are in the same dictionary.

`i18n.js` also contains rules for units, dates, progress percentages and two
report strings. When editing these English templates, update their matching
rules in `translate()`.

## Change colors, sizes and spacing

Open `css/styles.css`. Numbered section comments help you locate the right rules.

| Selector                            | Purpose                              |
| ----------------------------------- | ------------------------------------ |
| `.hero`, `.copy`, `h1`              | Hero section and main heading        |
| `.pill`, `.secondary`               | Primary and secondary buttons        |
| `.features`, `.feature`             | Feature strip                        |
| `.angle-card`                       | Capture angle cards                  |
| `.photo-picker`                     | Photo upload fields                  |
| `.scan-bar`                         | Leg length field and analysis button |
| `.analysis-flow`, `.result-metrics` | Processing and result metrics        |
| `.history-panel`                    | History chart                        |
| `.tech-story`                       | Dark technology section              |
| `.scroll-reveal`                    | Scroll reveal effects                |
| `.ambient-background`               | Background canvas                    |

`@media` rules handle smaller screens and reduced-motion preferences.
`html[dir="rtl"]` rules support Hebrew; `html[lang="ru"]` rules accommodate
longer Russian labels. Preserve these when editing the layout.

Some later rules refine earlier declarations. Search for all occurrences of a
selector when checking its final styling.

## Configure animations

Open `js/config.js`:

```javascript
background: {
  desktopCount: 128,
  mobileCount: 52,
  attractionRadius: 520,
  attractionStrength: 0.85,
  particleFollowSeconds: 0.72,
  cursorFollowSeconds: 0.28,
},
```

- `desktopCount` / `mobileCount`: number of background particles.
- `attractionRadius`: cursor attraction radius in pixels.
- `attractionStrength`: attraction strength; normally keep it between 0 and 1.
- `particleFollowSeconds`: higher values give slower, softer particle movement.
- `cursorFollowSeconds`: higher values increase cursor-follow delay.
- `hero.rotationSpeed`: automatic leg rotation speed.
- `analysis.demoDurationMs`: demonstration duration in milliseconds.

Use positive values for smoothing times and demo duration. Zero values can
disable motion or cause invalid calculations.

Particle and glow colors are in `js/ambient.js`. The preset leg cross-sections
are in the `rings` array in `js/hero.js`.

## Replace illustrations

The illustrations are local SVG files in `assets/`. Replace them as needed and
update the HTML `src` and `alt` attributes. Update `alt` translations too.
The sample-run button uses these same three files. If you rename them, also
update the paths in the `#sample-run` handler in `analysis.js`.

## Change the photo size limit

`upload.maxFileSizeMB` in `config.js` sets the maximum file size.
If you change it, update the message “Please choose an image smaller than
20 MB.” in `uploads.js` and its entries in `translations.js`.

## Check your changes

1. Start a local HTTP server and refresh the page.
2. Check English, Russian and Hebrew.
3. Select the three sample images, run the demo and wait for the result.
4. Check photo replacement, cancellation, history and report downloads.
5. Narrow the browser window to check the mobile layout.
6. If something breaks, open the browser console. Common causes are missing
   commas or quotes, incorrect paths and accidentally removed element IDs.
