(function(){"use strict"
self.CACHE_BUSTER="1528973649563|0.7394285459017598",self.addEventListener("install",function(n){return self.skipWaiting()}),self.addEventListener("activate",function(n){return self.clients.claim()}),self.addEventListener("push",function(n){n.waitUntil(self.clients.matchAll().then(function(t){var e=t.some(function(n){return n.focused}),i=void 0
if(!e){try{i=n.data?n.data.json():"no payload",console.log("Push payload:",i)}catch(n){return void console.log("No payload received, or not valid JSON format")}var o="Highlighted message from "+i.author+" in "+i.channel,s=i.message
return self.registration.showNotification(o,{body:s})}}))}),self.addEventListener("notificationclick",function(n){n.waitUntil(self.clients.matchAll().then(function(n){return n.length>0?n[0].focus():self.clients.openWindow("/")}))})})()

//# sourceMappingURL=sw.map