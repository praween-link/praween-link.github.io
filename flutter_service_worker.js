'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "dff836a7aac3c8d908878cb18f069636",
"assets/assets/images/atd/1.jpg": "828f15db32ac52b3bd90b692e81fd93b",
"assets/assets/images/atd/2.jpg": "1a90f0e9073ff59f2f0602ea2980aa0c",
"assets/assets/images/atd/3.jpg": "f7276692a82a98cbdbe4065967ec977f",
"assets/assets/images/atd/4.jpg": "f559d536dbad70b084744d365bf4913d",
"assets/assets/images/complaint/1.jpg": "1cac45f878c3b91d09b164778d288915",
"assets/assets/images/complaint/10.jpg": "d74f40a4ba6874077c3bce440160a9b6",
"assets/assets/images/complaint/11.jpg": "9c4803441cce9c74ff5d9f0658d96237",
"assets/assets/images/complaint/12.jpg": "c279786080913a87909023b25dad8752",
"assets/assets/images/complaint/13.jpg": "ec0050d0ae745cb3b9c074bb96c4ade8",
"assets/assets/images/complaint/14.jpg": "57e440d80a550744ee3e956cd3efc2ec",
"assets/assets/images/complaint/15.jpg": "e79929f6ad8e224367373f68f65bc868",
"assets/assets/images/complaint/2.jpg": "ba028c13d11deabcb3ac32d6b8adcecd",
"assets/assets/images/complaint/3.jpg": "5bd132eefc77122ce6802c6f1124f445",
"assets/assets/images/complaint/4.jpg": "e26e40b00e9a8f81580004f3b36bdd1a",
"assets/assets/images/complaint/5.jpg": "98fae1489efd521e5eb7d7e58f1c2c75",
"assets/assets/images/complaint/6.jpg": "1bc9dd6706ffd32303980f2b6427f197",
"assets/assets/images/complaint/7.jpg": "ee3901dedaa94b166213af916184a3d1",
"assets/assets/images/complaint/8.jpg": "623d3eb1f3e05f8c78c8be3fca82da6a",
"assets/assets/images/complaint/9.jpg": "835c27ce9f6abc1c076c51a654934588",
"assets/assets/images/developer.png": "2ce74c0e19b15bc007d3dec5e06d83da",
"assets/assets/images/logos/codechef.png": "bde61bb9ee32f1efafdd54c50e7086f8",
"assets/assets/images/logos/github.png": "0308580d935e638fd5cf4628cfacf64d",
"assets/assets/images/logos/hackerrank.png": "07e7b175dd9a59e1867d5c30324bc77f",
"assets/assets/images/logos/linkedin.png": "5a2851a21320065aad87d57c0d4269e9",
"assets/assets/images/logos/yt.png": "38cd398e343e8bf428d08f39726ece27",
"assets/assets/images/mytask/1.jpg": "df5ed3af3682d7af981a64da455b35b2",
"assets/assets/images/mytask/10.jpg": "e008eae5de4df19b3661db2a312b166a",
"assets/assets/images/mytask/2.jpg": "86e9c33d60822cf822f9b3df249ca202",
"assets/assets/images/mytask/3.jpg": "c58b57879755e305a896667e0ffc4a36",
"assets/assets/images/mytask/4.jpg": "425c11e00749fcc7295082701bbc8bbe",
"assets/assets/images/mytask/5.jpg": "08262367d69c0500d51dd26aa2faa9e6",
"assets/assets/images/mytask/6.jpg": "393443557a2520e4d221279c730d42f3",
"assets/assets/images/mytask/7.jpg": "300caf49dc983d410d6434564808e35c",
"assets/assets/images/mytask/8.jpg": "e08c46d850da7636aadbf9adf6b6bd16",
"assets/assets/images/mytask/9.jpg": "2e6c2805d9642df210ac40355fb8d969",
"assets/assets/images/programming/bootstrap.png": "d97367411f3fe3f55425d419966852de",
"assets/assets/images/programming/css.png": "eb4bddbd0c2e9ada45205f79e251bf5d",
"assets/assets/images/programming/dart.png": "f29d00f70909bb30314cbfeac3287346",
"assets/assets/images/programming/flutter.png": "f6e7dba7d4b29085b3691c0f45d2c1b9",
"assets/assets/images/programming/html.png": "3bd0f9c381fd67eca703154c6cc3ac57",
"assets/assets/images/programming/java.png": "d2b64a8dbc2457ffdbec7ccde10fedb8",
"assets/assets/images/programming/python.png": "05bca84c99fd0b892a68a968b951c08b",
"assets/assets/images/resume.png": "70f93513731850c1c4a7a9b510cf97b9",
"assets/assets/images/ui/1.jpg": "81700e809de83a7c1c49e27ae2bba6e6",
"assets/assets/images/ui/2.jpg": "77289e89fb857f9189eca8322fa023c4",
"assets/assets/images/ui/3.jpg": "f8cec8335214461e292c4bc31b471111",
"assets/assets/images/ui/4.jpg": "4bd0c69f91859f0e73cdc9da2ac62185",
"assets/assets/images/ui/5.jpg": "ba9e9efc1dfc7177290b53d89cd0b3b1",
"assets/assets/images/ui/6.jpg": "7b7492170b1035754863696f5b43b965",
"assets/assets/images/ui/7.jpg": "01208f06a6d56388139c65f500a1711a",
"assets/assets/images/ui/8.jpg": "16b2ebb30c643d5913f0ddf8a67a70c5",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "e350a54d7d5cee5a7882cfce8e6e29c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "26e6b3edc84cc98e438b1e39140d8c1c",
"/": "26e6b3edc84cc98e438b1e39140d8c1c",
"main.dart.js": "8d98962a0c39c9e5d687a4a607d30525",
"manifest.json": "22b551ed82be8aee41cbfae59832e7a3",
"version.json": "89c8f1ed5d57129caf2917c99a168add"
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
