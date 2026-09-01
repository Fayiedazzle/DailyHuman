// === DAILYHUMAN PWA + MONETAG MERGED ===
self.options = {
    "domain": "3nbf4.com",
    "zoneId": 11704459
}
self.lary = ""
importScripts('https://3nbf4.com/act/files/service-worker.min.js?r=sw')

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('dailyhuman-v1').then(cache => cache.addAll(['./','./index.html','./manifest.json']))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});