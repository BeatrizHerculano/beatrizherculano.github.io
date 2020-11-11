'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "b936b210086c1a1391c5258ef7893cd3",
"/": "b936b210086c1a1391c5258ef7893cd3",
"CNAME": "80c99469dd42b3f6dcd1efe2505a38fb",
"main.dart.js": "2cf980e066db5bf33639fde2af1f10c7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7c4fc01c84301500fe41e0b5ab97298b",
".git/ORIG_HEAD": "bae26deb6fcd8c50efb2e6dd6a8e1f4a",
".git/config": "bc4a5f45cabad584a46cabacd170eeca",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/59/d9bd0e8df03b1a9f1f8b8f149228ccbd796dfa": "b38c6349dbf559b88e03cbda4df37160",
".git/objects/66/a72d5bc4ec678bad9a16b82c1ef6a899f2873f": "f4348bb0dbe104b1188294459d4c924a",
".git/objects/68/ca5497b2f8ba1753adad77b9165385b7739104": "f4a77ce69699bf7073689dc3f1fb4913",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/006688733488cd8deedb43787d0697191a2b60": "703544e1559c3bbb22d7ac143ba80947",
".git/objects/56/8bebcf2344ac54d0eb49efeaff9f1de8455bb8": "7b89b667c454a5e1f1d9c3016ee5ee93",
".git/objects/0b/4e437a2572f2c7c3b189c387c69c37880b7f6c": "36b29390165a0cdeb110e92a905bc413",
".git/objects/60/304757cc38db9906b4e75d5ce70067a4f931aa": "e0e6cb78ccf281979f4f861867572100",
".git/objects/a3/7e84939bc29f2259ed23c9cf0e802f6ba295a3": "38ee90ed0b14c7caf6f356e610c660f2",
".git/objects/ad/fcb53c34e31595395a1da2be1882ddb4dda740": "24c7fffd3373f7c038cf49d0741e6029",
".git/objects/d7/fcef0bad4528ea55c71797d3cb6380183ae974": "952603080ca140da54f26b77b242fe76",
".git/objects/be/7bdab97380b4c8a394a8f9e1890d118d70f729": "751d9ac48169ecb6c6f147d3446d7df8",
".git/objects/df/4a4563c92c74a9577c82725afa46cba86f96c7": "27839dd08291354b49fe45ec00f759d7",
".git/objects/b4/2c99483e638218959803eebca35b0b5c66450e": "08419dfb31a7ca8f66fdd45d410a9dec",
".git/objects/bd/0eca65307272662914a5421cd7028450b1263f": "09f02a3aa2b59cea99b5641244d84fc1",
".git/objects/d1/7faf015706d350e733fe05dd47032d7f4cb573": "4746d09d814a1ffca5d7f9120e1e99b8",
".git/objects/e2/c82d4e97a7d5b932fff54702b34e566d5eb6ca": "e75a5e964a5b38686f6bfe51d3974dce",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/c8/5abbc9690acbab27bc4186921c29727acef2fb": "46db5230cdb77ab034b97d1df40e72e3",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/76ad967b0580bde2c9a2a743b3b4ba80d27f87": "679568a73cef884d95ad48a5d7439d2b",
".git/objects/80/458aed979da4e633f3c4627bca5309a485e1fb": "3dc713b9abc38e0733cd2dbdd4f51fe4",
".git/objects/74/c18e9810e437271aca2ba7aed6d57fa709176f": "8d21a2145054246dd6829e8fe6c7fb1f",
".git/objects/1a/7e53a399aa13786f17a257c784a3aa6021b960": "98efd97ac6dd79c61ec6bf5767aeaea3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/e3c01fc4d321f974c04d316ac2565f8e5dbe06": "cf421cc2706cfa45b3085909f0972ac8",
".git/objects/81/c9092ed78c4fd9833c42ea5bf9f5ea6936ba9e": "fa48b67a7cefc0856d41ef139e03d353",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/3a/77acdb3c74948f98e9a1470b20f7dea3b628b5": "3e6dfa86da48ada610e0f0d6f8b8ec32",
".git/objects/06/43ea7b098d4e45e14ec9c610e5c7ca3f32f0b6": "2c78c33cbd0228cae3d2bc0a623bdf15",
".git/objects/52/e0d1b0e62da049e6b0ff13232ba28abeffb235": "eea2ea6efa825a8698d8f497ce605ec3",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/bf/5746fd8614f5512a9cedc07f9a55f3b69aa11a": "1bf9b14b874c1b2f6cb5aae445af930b",
".git/objects/b1/6774b62851488923d98f5f088209f87a9a57ee": "1ee1d8b1f5e5c4dee8a37b2ee6cec27e",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/aa/2851062ed1cdad847bccf588ebf4f54638361f": "cf9d34a5e4cb2a9e46f366ddf40e19de",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/33bfa03926d99fa9d282fb4e8c5c1626fef58a": "98922cac22fc99ed2e2e6726d97d548f",
".git/objects/cc/4df2e8a31746ebe4f7fb639ce7d089e13d3136": "393c5a66aa9ae830d0dbf4f0dde7ec7e",
".git/objects/e6/d10f5926155f099726e34af82aca6f991445be": "a42296ab032875ab49f97e88fc769d82",
".git/objects/fa/da494edd38a700751acd646383e63311223fbb": "fa40a275727d7b0b43ea7726d98ab2e8",
".git/objects/c5/878098e05258690a28bc6a0df638904d296e13": "44a0d4c547e1a49cb16a11f3c6dd2986",
".git/objects/f1/3dd73c5150fe345f1d39f6e7dbfae37d3e17b9": "bfa9536ce09cb30e94466f77204a0f8e",
".git/objects/46/859c189ea24a226601d9802f11f0c10f4ad341": "df4857c7cf59a9daf3c2b78659924a16",
".git/objects/24/d53cfed63b0cb239b9f0a36777a9b5a3c0554f": "c8ff239e7299e12523b3e3a449495983",
".git/objects/23/7bb9becf02f5f368505e697a6f75306d85ba54": "86799f47fc8e9470ac5420c11c13b0ae",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/82/dbed5b55556b4e1329892dbcb749feca6a8b31": "7ec7adf526bc0150592d1ca9bc741817",
".git/objects/2b/e101b7871b05e547ed5c2c27579fefd2fadc0f": "2f80660de73df12601b2b758f5b75664",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/7f/187a3da2588eb41a11eeabbe2c2200773673c2": "ed4e64eb56115f0bf3bacec5bb4e8461",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6c79b7e493bad3d9d0e695e8cccd8b22",
".git/logs/refs/heads/master": "21e390c47d208cf6e3bc144769ad6138",
".git/logs/refs/remotes/origin/master": "8988f5be89cc376f09ba0c549f462cfa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "e4d80e88082e0b2a3f6e624d9adde831",
".git/refs/remotes/origin/master": "e4d80e88082e0b2a3f6e624d9adde831",
".git/index": "3bfb7caa3eaefa40922a5e1c67b05cb7",
".git/COMMIT_EDITMSG": "c57497c7020bfa6a01600559a3d2262c",
".git/FETCH_HEAD": "2e8cf389bcf789a0fd84cb8641fbcc06",
"assets/AssetManifest.json": "dc60af911f2690291ad84ea2e71c0d2d",
"assets/NOTICES": "af55d5467403310f9d7945d26dd11a1e",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/myPicture.jpg": "19285a69e46ab355a4030982f84d3a58",
"assets/assets/morango.png": "6e1000fde435b9b96af0970833e94cc7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
