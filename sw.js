// Minimal service worker: only here so Android installs the test as a proper app.
// It caches nothing and passes every request straight to the network.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
