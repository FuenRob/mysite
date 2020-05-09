/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dc9a8ca7d386fdc6ccab71dbf5238c71"
  },
  {
    "url": "404/index.html",
    "revision": "ecb4c185dd34e05d7647d8f9b299b148"
  },
  {
    "url": "69ca9dfa785447e3d8b116b383997bcdc8df623a-e5f23bdcda77cd3d107e.js"
  },
  {
    "url": "69ca9dfa785447e3d8b116b383997bcdc8df623a-e5f23bdcda77cd3d107e.js.map",
    "revision": "aadbed59a0b18bdfbd676cb5e3a83b0e"
  },
  {
    "url": "a9a7754c-ee96fd59234b9b1c3c36.js"
  },
  {
    "url": "a9a7754c-ee96fd59234b9b1c3c36.js.map",
    "revision": "ae0ef606e4444fd9e350c6fb986190b3"
  },
  {
    "url": "about/index.html",
    "revision": "07039883f36230e259de1dd183582678"
  },
  {
    "url": "app-e47e8accb4c34945e4f8.js"
  },
  {
    "url": "app-e47e8accb4c34945e4f8.js.map",
    "revision": "18786e076418f2042436429aefb65c70"
  },
  {
    "url": "aviso-legal/index.html",
    "revision": "bbb6625cb595a26f954abecae555aee3"
  },
  {
    "url": "b6af9739c9a830b31df685647e62250f52a69803-0415fe71ddaed5e36ee7.js"
  },
  {
    "url": "b6af9739c9a830b31df685647e62250f52a69803-0415fe71ddaed5e36ee7.js.map",
    "revision": "aa43f5dd8ff0d982a13a6319a9e2fd59"
  },
  {
    "url": "blog/configurar-docker-con-xdebug-y-vscode/index.html",
    "revision": "e81e27c2122988a13216483450a7c65c"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-1/index.html",
    "revision": "36c55fc7e0516420d74c841834121fab"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-2/index.html",
    "revision": "a4bd61c29e839503184c4db8aa2f6b9c"
  },
  {
    "url": "blog/un-blog-en-gatsbyjs/index.html",
    "revision": "8de85ac3547a4b2f19ebaf828ab51471"
  },
  {
    "url": "cb1608f2-c1de7097eefdc5002486.js"
  },
  {
    "url": "cb1608f2-c1de7097eefdc5002486.js.map",
    "revision": "8b42620d1813b2148e1066f9915cb9fc"
  },
  {
    "url": "chunk-map.json",
    "revision": "677cbad5ddc0ff84b253372c23c7e0e0"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ab12cfe2f77aa8ed5f67.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ab12cfe2f77aa8ed5f67.js.map",
    "revision": "f12670209ce24181aecb2826c71ece11"
  },
  {
    "url": "component---src-pages-404-js-feaa2d13cfd75b89fb42.js"
  },
  {
    "url": "component---src-pages-404-js-feaa2d13cfd75b89fb42.js.map",
    "revision": "046485f0d08251a133bd6e3ef82e1c2b"
  },
  {
    "url": "component---src-pages-about-js-d33814c3d320910937cd.js"
  },
  {
    "url": "component---src-pages-about-js-d33814c3d320910937cd.js.map",
    "revision": "c6c1636639e1329d0d5745f58666bb94"
  },
  {
    "url": "component---src-pages-contact-js-50f207eb7753228a5ab4.js"
  },
  {
    "url": "component---src-pages-contact-js-50f207eb7753228a5ab4.js.map",
    "revision": "c4d1b5c824a01168a540dc9f062f909e"
  },
  {
    "url": "component---src-pages-index-js-6f829890dc7ed67cdff4.js"
  },
  {
    "url": "component---src-pages-index-js-6f829890dc7ed67cdff4.js.map",
    "revision": "c240b2c650c6755f5b10373602f9d2f2"
  },
  {
    "url": "component---src-templates-blog-post-js-32455e539c17ac925324.js"
  },
  {
    "url": "component---src-templates-blog-post-js-32455e539c17ac925324.js.map",
    "revision": "9db7c5cd50b97bbf3b91eed4a7ce566b"
  },
  {
    "url": "condiciones-de-uso/index.html",
    "revision": "8563ef355f72c819f6c8fff22588fda3"
  },
  {
    "url": "contact/index.html",
    "revision": "19e6223d22dd3d06fe339c3e3b969575"
  },
  {
    "url": "favicon.ico",
    "revision": "3a318e3ceb32f2e06b497c0795ae14cb"
  },
  {
    "url": "framework-a664bcaf9ba5ea30c3df.js"
  },
  {
    "url": "framework-a664bcaf9ba5ea30c3df.js.map",
    "revision": "ecb37f72159a9b4dba60bff55374bfc0"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "b70e4de2789994d5a94813fe5fbaced3"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "49c65cb8f2df42994bb64fae91cdf2ec"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c017f6f172011ef6d9ee8900d4fdb77b"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "73c038b333a48fd5ecec6576c2d37fee"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "a9c8dcacd4fe16f1c014b6a6ac74700a"
  },
  {
    "url": "page-data/aviso-legal/page-data.json",
    "revision": "6918d675cdae32a188e6d7a02d940b74"
  },
  {
    "url": "page-data/blog/configurar-docker-con-xdebug-y-vscode/page-data.json",
    "revision": "6f0392252f8ce7340f312b304a275f66"
  },
  {
    "url": "page-data/blog/crud-de-usuarios-en-nodejs-parte-1/page-data.json",
    "revision": "da4f02cef51743cfc513f14ab3db27ce"
  },
  {
    "url": "page-data/blog/crud-de-usuarios-en-nodejs-parte-2/page-data.json",
    "revision": "aeb28ffa1c116b09ae9e5fb691dbb0ce"
  },
  {
    "url": "page-data/blog/un-blog-en-gatsbyjs/page-data.json",
    "revision": "814064936cb8d5e1fbf009d9f488ba43"
  },
  {
    "url": "page-data/condiciones-de-uso/page-data.json",
    "revision": "42ae659877e6e8df3cc23f9beb46d245"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "553427bbf6a7b2410ac3abe56d682565"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "a16d42f326c78d81b65872e9692a01eb"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/politica-de-cookies/page-data.json",
    "revision": "283d3422c6db2720f18c6f3ff2d11512"
  },
  {
    "url": "page-data/politica-de-privacidad/page-data.json",
    "revision": "3485ef8ab781e1c2110641485c2378af"
  },
  {
    "url": "politica-de-cookies/index.html",
    "revision": "121dc39d0e4da9f5bd340e6ab24229a0"
  },
  {
    "url": "politica-de-privacidad/index.html",
    "revision": "9b7e6fe79cb212f83a6b986bdd6aa9c1"
  },
  {
    "url": "robots.txt",
    "revision": "40f24cd77599d4e8e15d74d49935bd6f"
  },
  {
    "url": "sitemap.xml",
    "revision": "7eaac7923f0b5b6a031c5219650f94b4"
  },
  {
    "url": "static/13f79d1fb92f130327434f44b966716d/0f3a1/image-post1.jpg"
  },
  {
    "url": "static/13f79d1fb92f130327434f44b966716d/a7715/image-post1.jpg"
  },
  {
    "url": "static/13f79d1fb92f130327434f44b966716d/image-post1.jpeg"
  },
  {
    "url": "static/466c7fe618f63d32b0272d13185dfd52/46604/dockerphp.png"
  },
  {
    "url": "static/466c7fe618f63d32b0272d13185dfd52/6bc03/dockerphp.png"
  },
  {
    "url": "static/466c7fe618f63d32b0272d13185dfd52/dockerphp.png"
  },
  {
    "url": "static/d/1595160865.json"
  },
  {
    "url": "static/d/664295784.json"
  },
  {
    "url": "styles-d2f400bc950559b91852.js"
  },
  {
    "url": "styles-d2f400bc950559b91852.js.map",
    "revision": "d39223410ec443d3fd5a1a0400f1fc7a"
  },
  {
    "url": "styles.478eeca92009ec5ccdf2.css"
  },
  {
    "url": "webpack-runtime-26a28bf220be028c6ebe.js"
  },
  {
    "url": "webpack-runtime-26a28bf220be028c6ebe.js.map",
    "revision": "416a7af0a877ebbcb765ba8652c95916"
  },
  {
    "url": "webpack.stats.json",
    "revision": "c3b51e960aaf8edb7659ed422a8168d1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-e47e8accb4c34945e4f8.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
