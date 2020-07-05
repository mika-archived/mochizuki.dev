/* eslint-disable no-restricted-globals */
const sw = (self as any) as ServiceWorkerGlobalScope;

sw.addEventListener("install", () => {
  sw.skipWaiting();
});

sw.addEventListener("activate", () => {
  sw.registration
    .unregister()
    .then(() => sw.clients.matchAll())
    .then(clients => clients.forEach(client => (client as any).navigate(client.url)));
});
