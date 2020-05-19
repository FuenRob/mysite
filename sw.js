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
    "revision": "a4673db7dcabd2e62250b8e59c2463d5"
  },
  {
    "url": "404/index.html",
    "revision": "c7886035a90a67ebabae116e4d00718d"
  },
  {
    "url": "5b3513a32482471b7563a5aaec54ca307e0f774d-e5f23bdcda77cd3d107e.js"
  },
  {
    "url": "5b3513a32482471b7563a5aaec54ca307e0f774d-e5f23bdcda77cd3d107e.js.map",
    "revision": "29884a0467242e1fdbde4a26f42c424f"
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
    "revision": "51708fc783c73d134353323517a65f8c"
  },
  {
    "url": "app-f77513aa15f3f26d735d.js"
  },
  {
    "url": "app-f77513aa15f3f26d735d.js.map",
    "revision": "4f89fc6bcb400b0df2c6c0fb45431455"
  },
  {
    "url": "aviso-legal/index.html",
    "revision": "8fdf0e1ba7a6739deb7236bee42233d4"
  },
  {
    "url": "blog/2/index.html",
    "revision": "1d8a379e5fd09f6b66183ff7b06f144a"
  },
  {
    "url": "blog/configurar-docker-con-xdebug-y-vscode/index.html",
    "revision": "45005c966f471aeb2205a855776bdb46"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-1/index.html",
    "revision": "31eb0c1fda1afdb435bb09b526caf441"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-2/index.html",
    "revision": "11fcc9986183cacdfdc271bdfc7c42ae"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-3/index.html",
    "revision": "b3d9982db95fb6f8c1819691b467b46b"
  },
  {
    "url": "blog/index.html",
    "revision": "b9a3d8382169b97b141d940e4ce50e21"
  },
  {
    "url": "blog/un-blog-en-gatsbyjs/index.html",
    "revision": "a07d7a62defaca4c03801e97c466d99a"
  },
  {
    "url": "cb1608f2-09726aaf060f570ced18.js"
  },
  {
    "url": "cb1608f2-09726aaf060f570ced18.js.map",
    "revision": "83efdaeb64bc59ee6affab4b8cd95780"
  },
  {
    "url": "chunk-map.json",
    "revision": "b2c448848385276eb8b9ef7a3cf6356b"
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
    "url": "component---src-pages-about-js-97dbef458c785ba5b972.js"
  },
  {
    "url": "component---src-pages-about-js-97dbef458c785ba5b972.js.map",
    "revision": "11a4f9a7c5a72463c892b824d22e08df"
  },
  {
    "url": "component---src-pages-contact-js-ce44e35ce0a99b18196b.js"
  },
  {
    "url": "component---src-pages-contact-js-ce44e35ce0a99b18196b.js.map",
    "revision": "af2b5703e94195eaf78ac4b57d1dc829"
  },
  {
    "url": "component---src-pages-index-js-7b41bb03568138437041.js"
  },
  {
    "url": "component---src-pages-index-js-7b41bb03568138437041.js.map",
    "revision": "d1117c1a885918b4b141b364e509619f"
  },
  {
    "url": "component---src-templates-blog-list-js-5a42bef6dce6470408bf.js"
  },
  {
    "url": "component---src-templates-blog-list-js-5a42bef6dce6470408bf.js.map",
    "revision": "01d802fbb5ad4a016a2f6afd089371b7"
  },
  {
    "url": "component---src-templates-blog-post-js-02c901414b0b7cdb9b00.js"
  },
  {
    "url": "component---src-templates-blog-post-js-02c901414b0b7cdb9b00.js.map",
    "revision": "f83437347d43110a7020d601addb45b7"
  },
  {
    "url": "condiciones-de-uso/index.html",
    "revision": "7dc7e62d303e31e2a086fb597d596bc7"
  },
  {
    "url": "contact/index.html",
    "revision": "9342d4ca19a78bc00c0aa58e7482738f"
  },
  {
    "url": "d3e0ddf8626fa0443a290073f4e52e7484009146-ee82fbe867d2a6f79747.js"
  },
  {
    "url": "d3e0ddf8626fa0443a290073f4e52e7484009146-ee82fbe867d2a6f79747.js.map",
    "revision": "87d12092774122ab261e478fcf0b48e9"
  },
  {
    "url": "favicon.ico",
    "revision": "3a318e3ceb32f2e06b497c0795ae14cb"
  },
  {
    "url": "framework-42a655f998346a20003c.js"
  },
  {
    "url": "framework-42a655f998346a20003c.js.map",
    "revision": "0db8a8d93c15a1313946a36baa79f311"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "c50d4301a754557d7a5d66545d184620"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "49c65cb8f2df42994bb64fae91cdf2ec"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d4ae460f371a7cd566e1ca07eca3bcc4"
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
    "revision": "aa530e236643bf52be8c278330ea49c8"
  },
  {
    "url": "page-data/aviso-legal/page-data.json",
    "revision": "6918d675cdae32a188e6d7a02d940b74"
  },
  {
    "url": "page-data/blog/2/page-data.json",
    "revision": "694e5e1f8e15ab55872283b6ab91dd7f"
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
    "url": "page-data/blog/crud-de-usuarios-en-nodejs-parte-3/page-data.json",
    "revision": "6bc32f61519a42391b247f0f57b3a5b9"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "989453f68d2dfd658d0920d3cac5c566"
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
    "revision": "834bbf3d543e4072836a33f9371aa512"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "370540de45beab23485401db09393ab2"
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
    "revision": "1fffc4e3e0d587cba71a20c8537a92fa"
  },
  {
    "url": "politica-de-privacidad/index.html",
    "revision": "3b05d1c7721799a2299a862afc5637a4"
  },
  {
    "url": "robots.txt",
    "revision": "40f24cd77599d4e8e15d74d49935bd6f"
  },
  {
    "url": "sitemap.xml",
    "revision": "836215af576255bfffc2e3da32da4737"
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
    "url": "styles-4773e5fdece67d6f48f5.js"
  },
  {
    "url": "styles-4773e5fdece67d6f48f5.js.map",
    "revision": "41d7e5b452053b2539821ba9fafbdeae"
  },
  {
    "url": "styles.cb79d528309bad591abe.css"
  },
  {
    "url": "webpack-runtime-16652c10998a557f27c9.js"
  },
  {
    "url": "webpack-runtime-16652c10998a557f27c9.js.map",
    "revision": "b76f41e0afb77304805b3a5ddf262ed8"
  },
  {
    "url": "webpack.stats.json",
    "revision": "716391efa4d3e307ec7576ebf69814a7"
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
  if (!resources || !(await caches.match(`/app-f77513aa15f3f26d735d.js`))) {
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
