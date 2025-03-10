self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("camera-pwa-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/camera",
        // Add other critical assets
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
