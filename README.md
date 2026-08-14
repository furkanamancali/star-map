# Overhead

A star map of the sky above you, in a single HTML file.

Open `index.html` in a browser — no build step, no dependencies, no network calls.
It asks for your location (falling back to Istanbul if you decline), works out what is
up right now, and draws it: stars to magnitude 5.6, the planets, the Moon with its real
phase, the Milky Way, constellation figures and a handful of deep-sky objects.

## On a phone

Tap **Point at sky** and hold the phone up. The map follows the back of the handset, so
whatever direction you aim at is what you see, right up to the zenith, and the picture
rolls with the phone when you turn it sideways.

- **Pinch** to zoom, **tap** anything to identify it.
- **Drag sideways** while pointing to trim the compass — magnetometers are routinely a
  few degrees out indoors, near a car, or next to anything magnetic.
- Tap **Stop pointing** to go back to dragging the sky by hand.

Two things the browser insists on: the page must be served over **https** (iOS will not
hand out motion access otherwise), and iOS shows a permission prompt on the first tap.
Android without an absolute-orientation sensor falls back to a relative heading — the map
says so, and the sideways drag is how you line it up.

## Accuracy

Positions come from low-order analytic series — VSOP-style planet elements, the standard
lunar terms — good to roughly an arcminute for the Moon and better than that for the
planets at this scale. It is a naked-eye map, not an ephemeris.
