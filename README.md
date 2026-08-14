# Overhead

A star map of the sky above you, in a single HTML file.

Open `index.html` in a browser — no build step, no dependencies, no network calls.
It asks for your location (falling back to a default if you decline), computes what is
overhead right now, and draws it on a canvas you can drag to spin and scroll to zoom.
Tap an object to identify it.

## Known issue

Planets render; stars do not. The star catalog is drawn from the same projection path
as the planets, so the bug is likely in catalog loading or magnitude filtering rather
than in the projection math.
