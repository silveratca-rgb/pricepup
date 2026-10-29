// PricePup moved to https://pricepup.github.io : this worker clears the old app and sends everyone to the new address.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) { try { c.navigate('https://pricepup.github.io/' + (new URL(c.url).hash || '')); } catch (err) {} }
})()));
