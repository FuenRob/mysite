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
    "revision": "a98a3966ff5a3951ab59ef7ab6943da5"
  },
  {
    "url": "404/index.html",
    "revision": "283c8bef7688fa8850e85b29fd201699"
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
    "revision": "f2929ceddd2b5e3bfe40a5a9864c5f25"
  },
  {
    "url": "app-e47e8accb4c34945e4f8.js"
  },
  {
    "url": "app-e47e8accb4c34945e4f8.js.map",
    "revision": "18786e076418f2042436429aefb65c70"
  },
  {
    "url": "b6af9739c9a830b31df685647e62250f52a69803-7234b904e5713a050423.js"
  },
  {
    "url": "b6af9739c9a830b31df685647e62250f52a69803-7234b904e5713a050423.js.map",
    "revision": "4a37566f27da824d2f549087e8fcebb6"
  },
  {
    "url": "blog/configurar-docker-con-xdebug-y-vscode/index.html",
    "revision": "6e9ffbf4d33a66bf6cde7b8d55f307b8"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-1/index.html",
    "revision": "40e39ab8725f90a59e56a1dd4b5b4071"
  },
  {
    "url": "blog/un-blog-en-gatsbyjs/index.html",
    "revision": "4cbfb276425dc25ba7e24ee0f6e2b0a8"
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
    "revision": "9162422012fb01df0c409f70651f9204"
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
    "url": "component---src-pages-contact-js-16f3f8a59a6be29ba1ed.js"
  },
  {
    "url": "component---src-pages-contact-js-16f3f8a59a6be29ba1ed.js.map",
    "revision": "a04607342d204dfe36823d94a2f5ad59"
  },
  {
    "url": "component---src-pages-index-js-0a5febe7b7fe14b8dd15.js"
  },
  {
    "url": "component---src-pages-index-js-0a5febe7b7fe14b8dd15.js.map",
    "revision": "b385f88d53838c5d8ce70718b914d434"
  },
  {
    "url": "component---src-templates-blog-post-js-32455e539c17ac925324.js"
  },
  {
    "url": "component---src-templates-blog-post-js-32455e539c17ac925324.js.map",
    "revision": "9db7c5cd50b97bbf3b91eed4a7ce566b"
  },
  {
    "url": "contact/index.html",
    "revision": "96dcca248fcca0fa4a3b7602671d6d6e"
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
    "revision": "540c46a238fb9124d59f267aa170d884"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "49c65cb8f2df42994bb64fae91cdf2ec"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "73cddaafc84f1b89d85312c81540c4a3"
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
    "revision": "2adb380b6dc42388464d969a55960fc9"
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
    "url": "page-data/blog/un-blog-en-gatsbyjs/page-data.json",
    "revision": "814064936cb8d5e1fbf009d9f488ba43"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "553427bbf6a7b2410ac3abe56d682565"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "aa7f001dde688b0d488f774af283a68c"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "robots.txt",
    "revision": "40f24cd77599d4e8e15d74d49935bd6f"
  },
  {
    "url": "sitemap.xml",
    "revision": "13a3dbda95fd81095193a45377c49a69"
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
    "url": "webpack-runtime-189f473bc249686fe8ba.js"
  },
  {
    "url": "webpack-runtime-189f473bc249686fe8ba.js.map",
    "revision": "24d63191c14a1d0fa767a48b1324b801"
  },
  {
    "url": "webpack.stats.json",
    "revision": "21c8f31af8dd046a3398145d491cfde6"
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
