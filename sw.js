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
    "revision": "79668ee1dd1f3553ae3e022901a738d4"
  },
  {
    "url": "404/index.html",
    "revision": "36ff380a891b05bb951af9c945b6159b"
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
    "revision": "5312afaf25d5b58fab61a0b4a3308997"
  },
  {
    "url": "app-595e1ca223fbcc778599.js"
  },
  {
    "url": "app-595e1ca223fbcc778599.js.map",
    "revision": "989f9dca8930269b87bf313bcc21dfe6"
  },
  {
    "url": "aviso-legal/index.html",
    "revision": "18d1eaf4ae610bcd87b43d1f3de9d845"
  },
  {
    "url": "blog/2/index.html",
    "revision": "1d968cc4edd9e68a95c73427c5664fa8"
  },
  {
    "url": "blog/configurar-docker-con-xdebug-y-vscode/index.html",
    "revision": "5848307d83b753aa2d61d0c171253489"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-1/index.html",
    "revision": "cf2f37a1d785ee5ee8d59d64b0ba6013"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-2/index.html",
    "revision": "99083f7581a0cc24b2ee83ad5a00aaf2"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-3/index.html",
    "revision": "660ff430b4d7816d034f79e1734659bd"
  },
  {
    "url": "blog/index.html",
    "revision": "e0e75bb2eb5a69756c3b11b368fd55a8"
  },
  {
    "url": "blog/un-blog-en-gatsbyjs/index.html",
    "revision": "7f3df670e8eff0db4411ed7b160eed23"
  },
  {
    "url": "blog/usar-prestashop-17-con-docker-compose/index.html",
    "revision": "ac5fbb2b5553b3a00d85a4356724bd86"
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
    "revision": "03ed53363c85011fa749213732fcd096"
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
    "url": "component---src-pages-index-js-5318602309b065c6b93f.js"
  },
  {
    "url": "component---src-pages-index-js-5318602309b065c6b93f.js.map",
    "revision": "b4247fda2c80bd8ba73eaf771b1ba527"
  },
  {
    "url": "component---src-templates-blog-list-js-2fa5ac2915a253458911.js"
  },
  {
    "url": "component---src-templates-blog-list-js-2fa5ac2915a253458911.js.map",
    "revision": "aaa921cd636c7cec1753164e69f168e4"
  },
  {
    "url": "component---src-templates-blog-post-js-6ae2ebee1104056a2b97.js"
  },
  {
    "url": "component---src-templates-blog-post-js-6ae2ebee1104056a2b97.js.map",
    "revision": "c05fcbf193122d7af2aabbe063ea96a9"
  },
  {
    "url": "condiciones-de-uso/index.html",
    "revision": "da02e93a9f257616026cbf90e8187e80"
  },
  {
    "url": "contact/index.html",
    "revision": "330a7a6ea8419068b1548bc33f01febd"
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
    "revision": "abf1847655cbef5489976c75cc9c4754"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "49c65cb8f2df42994bb64fae91cdf2ec"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8098a694a0f6a31425fe0421b9da3d67"
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
    "revision": "4be6b240cd5190974f41c8c950da5508"
  },
  {
    "url": "page-data/aviso-legal/page-data.json",
    "revision": "667e7355ebb309949e2925e8af1c086d"
  },
  {
    "url": "page-data/blog/2/page-data.json",
    "revision": "bc8a2232a0872f8b38ba3fdb6167884a"
  },
  {
    "url": "page-data/blog/configurar-docker-con-xdebug-y-vscode/page-data.json",
    "revision": "2244157b68186bd3648f96451880d5d0"
  },
  {
    "url": "page-data/blog/crud-de-usuarios-en-nodejs-parte-1/page-data.json",
    "revision": "f569f37bd849074ea714733a3c1dbe23"
  },
  {
    "url": "page-data/blog/crud-de-usuarios-en-nodejs-parte-2/page-data.json",
    "revision": "82a9d665a340872a8b882d306a806b45"
  },
  {
    "url": "page-data/blog/crud-de-usuarios-en-nodejs-parte-3/page-data.json",
    "revision": "2962c5e09d583f1276876a7f4ffddbc6"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "2bd8beb0f11ddce08a96aeab08176628"
  },
  {
    "url": "page-data/blog/un-blog-en-gatsbyjs/page-data.json",
    "revision": "8b21db1ca747078ff8456a558e591fe7"
  },
  {
    "url": "page-data/blog/usar-prestashop-17-con-docker-compose/page-data.json",
    "revision": "2f770209cb2e1de2ba8c3164afcf5326"
  },
  {
    "url": "page-data/condiciones-de-uso/page-data.json",
    "revision": "f5e622d6be05290e13a9c604ec6ef323"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "834bbf3d543e4072836a33f9371aa512"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7d4890c2af037c8d3bf6c09448e47181"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/politica-de-cookies/page-data.json",
    "revision": "e8085a72ff92ad09752d5c37bd38e968"
  },
  {
    "url": "page-data/politica-de-privacidad/page-data.json",
    "revision": "41b7ef397e20b0d428a66bf61305d1dc"
  },
  {
    "url": "politica-de-cookies/index.html",
    "revision": "4e643a1be5b14e7c2fb987e5b2025377"
  },
  {
    "url": "politica-de-privacidad/index.html",
    "revision": "fa7694444c0888aa98d363294a94705d"
  },
  {
    "url": "robots.txt",
    "revision": "40f24cd77599d4e8e15d74d49935bd6f"
  },
  {
    "url": "sitemap.xml",
    "revision": "db492f2c48d5183c6c7fcca056289cea"
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
    "url": "static/8e8ef179e353cb6f9f6124ab5ba7ad30/0dadc/usar-prestashop-17-con-docker-compose.png"
  },
  {
    "url": "static/8e8ef179e353cb6f9f6124ab5ba7ad30/31987/usar-prestashop-17-con-docker-compose.png"
  },
  {
    "url": "static/8e8ef179e353cb6f9f6124ab5ba7ad30/46604/usar-prestashop-17-con-docker-compose.png"
  },
  {
    "url": "static/8e8ef179e353cb6f9f6124ab5ba7ad30/usar-prestashop-17-con-docker-compose.png"
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
    "url": "styles.b67c49ebaa15e159c109.css"
  },
  {
    "url": "webpack-runtime-bcb8b4e3746982762ef4.js"
  },
  {
    "url": "webpack-runtime-bcb8b4e3746982762ef4.js.map",
    "revision": "a03b9746221b798159b21f65f32ddfca"
  },
  {
    "url": "webpack.stats.json",
    "revision": "5dc90038ef43ba2fdf63da8bcabe0f1d"
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
  if (!resources || !(await caches.match(`/app-595e1ca223fbcc778599.js`))) {
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
