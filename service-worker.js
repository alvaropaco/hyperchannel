function _postDeleteCacheHook(e){return"function"==typeof brocswPostDeleteCacheHook?brocswPostDeleteCacheHook(e):Promise.resolve()}function logDebug(){if(toolbox.options.debug)if(arguments.length>1){for(var e=[],o=1;o<arguments.length;o++)e.push(arguments[o])
console.log(arguments[0],e)}else console.log(arguments[0])}var swEnvironment={}
importScripts("sw-toolbox.js")
var CACHE_PREFIX="brocsw-v",CACHE_VERSION=CACHE_PREFIX+"1515592041661"
toolbox.options.cache.name=CACHE_VERSION,toolbox.options.debug=!0
var urlsToPrefetch=["/","assets/hyperchannel.css","assets/hyperchannel.js","assets/hyperchannel.map","assets/vendor.css","assets/vendor.js","assets/vendor.map","fonts/subspace.eot","fonts/subspace.svg","fonts/subspace.ttf","fonts/subspace.woff","img/avatar-ga.jpeg","img/avatar-sb.png","img/avatar-sk.png","img/bg.jpg","index.html"]
urlsToPrefetch.forEach(function(e){toolbox.router.any(e,toolbox.cacheFirst)}),toolbox.precache(urlsToPrefetch),toolbox.router.any(/activity\-streams\.js/,toolbox.networkFirst),toolbox.router.any(/socket\.io\.js/,toolbox.networkFirst),toolbox.router.any(/sockethub\-client\.js/,toolbox.networkFirst),self.addEventListener("install",function(e){console.log("Handling install event. Resources to pre-fetch:",urlsToPrefetch),self.skipWaiting&&self.skipWaiting()}),self.addEventListener("activate",function(e){logDebug("Deleting out of date caches, current cache version:",CACHE_VERSION),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return-1===e.indexOf("$$$inactive$$$")&&0===e.indexOf(CACHE_PREFIX)&&e!==CACHE_VERSION}).map(function(e){return logDebug("Deleting out of date cache:",e),caches.delete(e).then(function(){return _postDeleteCacheHook(e)})}))}).then(function(){self.clients.claim()}))})

//# sourceMappingURL=service-worker.map