"use strict";
(() => {
  self.addEventListener("install", function (n) {
    self.skipWaiting();
  }),
    self.addEventListener("activate", function (n) {
      self.registration.unregister().then(function () {
        return self.clients.matchAll();
      }).then(function (e) {
        e.forEach((t) => t.navigate(t.url));
      });
    });
})();
