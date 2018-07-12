/**
 * This is my service worker script!
 * I added a service worker to my site to experiment with this technology
 * How:
 * What:
 */

//this is a service worker

//**Changed to constants below
// const staticCacheName = 'staticfiles';

//constants for service worker to function
const version = "V0.03";
const staticCacheName = version + "staticfiles";
const imageCacheName = "images"; //pair this with fetch-handling code

const cacheList = [staticCacheName, imageCacheName];

//listens for install event to make sure service worker can be installed before it caches files
//**This event is for cleaning up old caches - don't worry if you don't fully understand it
addEventListener("install", installEvent => {
  skipWaiting(); //skip waiting, yay!!!
  installEvent.waitUntil(
    caches.open(staticCacheName).then(staticCache => {
      return staticCache.addAll([
        "/img/github.svg",
        "/css/stylesheet.css",
        "/offline.html"
      ]);
    }) // end open then
  ); // end waitUntil
}); // end addEventListener

//**This event is for cleaning up old caches - don't worry if you don't fully understand it
addEventListener("activate", activateEvent => {
  activateEvent.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.filter(cacheName => {
            //if (cacheName != staticCacheName) --> replaced with line below
            if (!cacheList.includes(cacheName)) {
              //** don't understand this line...
              return caches.delete(cacheName);
              console.log("done!");
            } // end if
          }) // end filter
        ); // end return Promise.all
      }) // end keys then
      .then(() => {
        clients.claim();
      }) // end then
  ); // end waitUntil
}); // end addEventListener

// When the browser requests a file...

addEventListener("fetch", fetchEvent => {
  const request = fetchEvent.request;
  fetchEvent.respondWith(
    // First, look in the cache.
    caches.match(request).then(responseFromCache => {
      if (responseFromCache) {
        return responseFromCache;
      } // end if
      // Otherwise fetch from the network.
      return fetch(request).catch(error => {
        // Show a fallback page instead
        return caches.match("/offline.html");
      }); // end fetch catch + return
    }) // end match then
  ); // end respondWith
}); // end addEventListener

// // When the user requests an HTML file...
// if (request.headers.get('Accept').includes('text/html')) {
// 	fetchEvent.respondWith(
// 		// fetch that page
// 		fetch(request)
// 		.catch( error => {
// 			// otherwise show the fallback page.
// 			return caches.match('/offline.html');
// 		}) // end fetch catch
// 	); // end respondWith
// 	return; // go no further
// } // end if

//**Previous 'fetch' code - new, updated code above
// addEventListener('fetch', fetchEvent => {
//     const request = fetchEvent.request;
//     fetchEvent.respondWith(
//         // First, look in the cache.
//         caches.match(request)
//         .then(responseFromCache => {
//             if (responseFromCache) {
//                 return responseFromCache;
//             } // end if
//             // Otherwise fetch from the network.
//             return fetch(request);
//         })
//     );
// });

//**For some reason I wrote this code before with "fetch(request)" rather
//**than "caches.match(request)" and everything broke

// addEventListener('fetch', fetchEvent => {
//     const request = fetchEvent.request;
//     fetchEvent.respondWith(
//         caches.match(request)
//         .then(responseFromCache => {
//             return responseFromCache || fetch(request);
//         }) // end fetch then
//     ); // end respondWith
// }); // end addEventListener
