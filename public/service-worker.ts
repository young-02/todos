self.addEventListener("install", (event) => {
  console.log("Service worker installing...");
  // Add a call to skipWaiting here if you want the service worker to immediately take control
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activating...");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
});

self.addEventListener("fetch", (event) => {
  console.log("Fetching:", event.request.url);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
});
