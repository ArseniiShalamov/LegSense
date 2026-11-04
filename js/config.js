/** Editable settings for animations and uploads. */
const LEG_CONFIG = Object.freeze({
  hero: {
    rotationSpeed: 0.21, // Automatic rotation speed in radians per second.
    dragSensitivity: 0.012, // Mouse drag rotation sensitivity.
  },
  background: {
    desktopCount: 128, // Particle count on desktop devices.
    mobileCount: 52, // Fewer particles on touch devices.
    attractionRadius: 520, // Cursor attraction radius in pixels.
    attractionStrength: 0.85, // Attraction strength, from 0 to 1.
    particleFollowSeconds: 0.72, // Higher values produce slower, softer particle movement.
    cursorFollowSeconds: 0.28, // Cursor-follow smoothing time in seconds.
  },
  upload: {
    maxFileSizeMB: 20, // Maximum size of a single photo in MB.
  },
  analysis: {
    demoDurationMs: 11000, // DEMO duration; does not represent actual analysis time.
  },
});
