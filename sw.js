self.addEventListener("install", e => {
  e.waitUntil(caches.open("app-cache").then(cache => {
    return cache.addAll(["./","./index.html","./manifest.webmanifest"]);
  }));
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
