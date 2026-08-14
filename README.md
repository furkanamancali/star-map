# Overhead

The sky above you right now, in one HTML file.

**[furkanamancali.github.io/star-map](https://furkanamancali.github.io/star-map/)**

No build step, no dependencies, no network calls once loaded. It asks for your location
(falling back to Istanbul if you decline), works out what is up, and draws it: the whole
naked-eye sky to magnitude 6.5, the planets, the Moon with its real phase and terminator,
the Milky Way, constellation figures and a set of deep-sky objects.

## On a phone

Tap **Point at sky** and hold the phone up. The map follows the back of the handset, so
whatever you aim at is what you see, right to the zenith, and the picture rolls with the
phone when you turn it sideways.

- **Pinch** to zoom, **tap** anything to identify it.
- **Drag sideways** while pointing to trim the compass — magnetometers are routinely a
  few degrees out indoors, near a car, or next to anything magnetic.
- **Night vision** turns the whole screen red, which is what keeps your eyes dark-adapted.
- Tap **Stop pointing** for manual control.

Add it to your home screen and it installs: full screen, and it keeps working with no
signal, which is where stargazing tends to happen.

Two things the browser insists on: the page must be served over **https**, and iOS asks
permission for motion on the first tap. Android without an absolute-orientation sensor
falls back to a relative heading — the map says so, and the sideways drag lines it up.

## Time

The clock runs live, and can be paused, run at up to a day a second, or pushed a day
either side of now with the **Shift** slider. **Sunset** and **Midnight** jump straight
to tonight; the sunset solve is a real horizon crossing at −0.833°, refraction and the
Sun's semidiameter included, so it agrees with published times to about a minute.

## Data and accuracy

Stars are the Yale Bright Star Catalogue to magnitude 6.5 — 8,392 of them, packed base 36
at sixteen characters each and decoded into typed arrays at load. Positions come from
low-order analytic series: VSOP-style planet elements and the standard lunar terms, good
to roughly an arcminute for the Moon and better for the planets at this scale. It is a
naked-eye map, not an ephemeris.
