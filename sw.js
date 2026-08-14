/* Overhead — offline cache.
   The map is one self-contained page with no runtime fetches, so the whole app is
   a handful of files. Serve them from cache first, since the point is a phone in a
   field with no signal, and refresh them in the background for the next launch. */

const CACHE = "overhead-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function refresh(request) {
  return fetch(request).then(res => {
    if (res && res.ok && res.type === "basic") {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(request, copy));
    }
    return res;
  });
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  /* a link carrying ?v=7 or #anything is still the same page — match the document
     without its query, or a shared URL would miss the cache and fail offline */
  if (req.mode === "navigate") {
    e.respondWith(
      caches.match("./index.html", { ignoreSearch: true })
        .then(hit => {
          const net = refresh(req).catch(() => hit);
          return hit || net;
        })
    );
    return;
  }

  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => {
      const net = refresh(req).catch(() => hit);
      return hit || net;
    })
  );
});
