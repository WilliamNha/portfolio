'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "79201592dc365b806e2f8c0a0e52ac82",
"index.html": "fbbdc3cc84a565951fabe2c159d0b831",
"/": "fbbdc3cc84a565951fabe2c159d0b831",
"main.dart.js": "2aa69ac4b93db26d568ae47b75fba4cb",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "763319801fd65e6d2b435a6bde96df3d",
"icons/android-chrome-192x192.png": "371aa06d391dd0ea33dcc8b6e01f9620",
"icons/apple-touch-icon.png": "4e93681167f13aed8f5452a0c25d54f9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/android-chrome-512x512.png": "97d4e9d50a9d325e924ec1a796028534",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ca62dacd50981dd0b35760e8a6177a2a",
"assets/AssetManifest.json": "3c27d354ac79c7f91cadd22c8021b5b4",
"assets/NOTICES": "9688e45bbd3485aeb8b47e49e022f73a",
"assets/FontManifest.json": "e6c672eb07f0377c6147582ccbdc1904",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "46f2916d23509649e5dba50b1edb7f87",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svg/android.svg": "14ed07e698c69df6da8744861c0ef7cd",
"assets/assets/svg/flutter.svg": "faf8f499559f6b2f815f454a5794eae3",
"assets/assets/svg/skills/javascript.svg": "891a71b9a98f1d58491e1b06c4d356a2",
"assets/assets/svg/skills/firebase.svg": "1da8d950e3f30a69d7c957c26238e1de",
"assets/assets/svg/skills/java.svg": "2c224f8151107740bd0ca61109862f4c",
"assets/assets/svg/skills/python.svg": "146716bdf1a351db5705ec1e6a25ed08",
"assets/assets/svg/skills/flask.svg": "d98463abd102acdc2b1eb8d5eb70b2d2",
"assets/assets/svg/skills/kotlin.svg": "554a29baa80695e0fc8326e51c6abd86",
"assets/assets/svg/skills/dart.svg": "63a1fa89591745e789e439a1f2d1abf1",
"assets/assets/svg/skills/css.svg": "09e4ec27756a18c936f92f4e2957e822",
"assets/assets/svg/skills/html-1.svg": "a2d427be56a5448f2788d0e0f68aba0c",
"assets/assets/svg/skills/c.svg": "3eeaad17a17654e9ee1cfdc724eedc7c",
"assets/assets/svg/skills/flutter-logo.svg": "bd9fec894dfe707631e11a1dfedb25b5",
"assets/assets/svg/skills/mysql.svg": "60c2bdb8b85b43b3c5178581456a1baa",
"assets/assets/images/flutter_logo.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/images/telegram.png": "d28cb5ebc39b6fef79a5367b5bb987a6",
"assets/assets/images/javascript_logo.png": "c647884d2940f119b665a453f9c2c8f3",
"assets/assets/images/dart_logo.png": "94b8139a9f1f2c226184af4106495c66",
"assets/assets/images/my_profile.png": "9b7440bd37031300bb5ea5f091ef93c9",
"assets/assets/images/work/shop_easy/get_in.png": "4e9d72a7e366f6018c147e17e13e216d",
"assets/assets/images/work/shop_easy/wallet.png": "7e00bc5ec642dff2279b890fd3545085",
"assets/assets/images/work/shop_easy/home.png": "b69a6ea18affd5f3498caa9674a7ca27",
"assets/assets/images/work/shop_easy/shoes.png": "876b4c35a4a4bd88afd9adfa5a5443c6",
"assets/assets/images/work/cryptovest/crypto_2.png": "48ea0d5c7bf649270df8174c81486666",
"assets/assets/images/work/cryptovest/crypto_3.png": "b52ebf055914f6485de6f5f522f685d2",
"assets/assets/images/work/cryptovest/crypto_1.png": "abc54c5b015d532ca54054b72519a63c",
"assets/assets/images/work/cryptovest/crypto_4.png": "9d3ff9b07deacbb2b6bbfc65802225a4",
"assets/assets/images/firebase_logo.png": "dae7f44af6bf5c3f4b6eeb4d65eb2bde",
"assets/assets/images/flask_logo.png": "11f57ab546859a3dea8f6cfdb50131f7",
"assets/assets/images/python_logo.png": "6fc4498c9bcf3eaa74d1781529bf9f02",
"assets/assets/images/graduation-cap.png": "7504814cf9416936f964475b539d6dfe",
"assets/assets/images/elon_musk.png": "c13a0a906d938f93bbf66547089809d6",
"assets/assets/images/my_pic.png": "4786f041381b381ab678ee990e62bca1",
"assets/assets/logo/logo.png": "9188d28c6bdd114e5c01ee055d382097",
"assets/assets/fonts/roboto/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/opensans/OpenSans-Light.ttf": "8ac55d3905f927b83e36d04a7342b839",
"assets/assets/fonts/opensans/OpenSans-Bold.ttf": "8ff9b5735ccb338267f0034d83fe8214",
"assets/assets/fonts/opensans/OpenSans-Regular.ttf": "22ab03a6b890f2f142a137a38bf1d4ae",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
