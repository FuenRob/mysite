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
    "revision": "2052f5e4a87a5bf185f6a29962a5bf2d"
  },
  {
    "url": "404/index.html",
    "revision": "c78febb7c550674272b92cc1ece738a2"
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
    "revision": "4e8008fb796f33c4425a0f289f3f8c95"
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
    "revision": "2166bfc57a806e81a143b6592429ee7e"
  },
  {
    "url": "blog/2/index.html",
    "revision": "f7acaa2870e69c5d9dcf6b6ec1f99612"
  },
  {
    "url": "blog/5-extensiones-de-vscode-que-todo-dev-debe-tener/index.html",
    "revision": "89f3b5f3aa07a3425224d652d26997d0"
  },
  {
    "url": "blog/configurar-docker-con-xdebug-y-vscode/index.html",
    "revision": "e587650040cac13982276fc09b1612ba"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-1/index.html",
    "revision": "fc6b93f90facdf3d242c0bce201b2efc"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-2/index.html",
    "revision": "5d465cbd64f07f166dec4fe0b1777bba"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-3/index.html",
    "revision": "73093caa084c613c84c266a5c52e0fef"
  },
  {
    "url": "blog/desarrollar-una-pagina-de-configuracion-para-un-plugin-de-wordpress/index.html",
    "revision": "13c1c14bdc5198bd8e53130dbe7e16b0"
  },
  {
    "url": "blog/generar-json-web-token-en-nodejs/index.html",
    "revision": "ac786924b247198246caabdb27d4c71a"
  },
  {
    "url": "blog/index.html",
    "revision": "8f4bad91be7130cfd2fa42c02f1c68e7"
  },
  {
    "url": "blog/que-es-deployer-y-como-usarlo/index.html",
    "revision": "e50ec1f8dd0333f35ae06e71ef06e053"
  },
  {
    "url": "blog/un-blog-en-gatsbyjs/index.html",
    "revision": "ecfd19e7d27afc595d7f8fa55abb7dcd"
  },
  {
    "url": "blog/usar-prestashop-17-con-docker-compose/index.html",
    "revision": "3022f6750e41d40d216cdb9adbe877b9"
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
    "revision": "353eac8cff70176731bf2535cc733c2d"
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
    "url": "component---src-pages-index-js-3fba11bf5f43d4a33252.js"
  },
  {
    "url": "component---src-pages-index-js-3fba11bf5f43d4a33252.js.map",
    "revision": "d52fb0a919d3cc0694011248754dab11"
  },
  {
    "url": "component---src-templates-blog-list-js-a65c26ba8bebc0fcf54e.js"
  },
  {
    "url": "component---src-templates-blog-list-js-a65c26ba8bebc0fcf54e.js.map",
    "revision": "9568ab4ff0a08fd21c34b4ef652aa99b"
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
    "revision": "44199f42ad945968435f8bc469cc4789"
  },
  {
    "url": "contact/index.html",
    "revision": "a0494d5a08a2c8d17db93b8d4ea1181d"
  },
  {
    "url": "d3e0ddf8626fa0443a290073f4e52e7484009146-ff3494902bbf45d66612.js"
  },
  {
    "url": "d3e0ddf8626fa0443a290073f4e52e7484009146-ff3494902bbf45d66612.js.map",
    "revision": "4421a2b2c3d72563b951e7e587f17ae7"
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
    "revision": "acb1f5c801997e9424136ddc88c08781"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "49c65cb8f2df42994bb64fae91cdf2ec"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f000de84058f20a7fb48e1d109826595"
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
    "revision": "239c38a02cf7cd0120f40cc9f5a7fdd5"
  },
  {
    "url": "page-data/aviso-legal/page-data.json",
    "revision": "667e7355ebb309949e2925e8af1c086d"
  },
  {
    "url": "page-data/blog/2/page-data.json",
    "revision": "09f32df70ddd6f8de04c06edb83b7730"
  },
  {
    "url": "page-data/blog/5-extensiones-de-vscode-que-todo-dev-debe-tener/page-data.json",
    "revision": "349d9bfc792f7c214385214d496d52eb"
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
    "url": "page-data/blog/desarrollar-una-pagina-de-configuracion-para-un-plugin-de-wordpress/page-data.json",
    "revision": "eb154a63a083d7195b41da3853c50817"
  },
  {
    "url": "page-data/blog/generar-json-web-token-en-nodejs/page-data.json",
    "revision": "404c7e9a4bca687f50e2b52faed86b6c"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "a114b2c0fcafdbe8a75be1b0df89a305"
  },
  {
    "url": "page-data/blog/que-es-deployer-y-como-usarlo/page-data.json",
    "revision": "580e65b7af07708bc235e90d489bb9d6"
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
    "revision": "c9ef019d11143543bb21521c62ed5807"
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
    "revision": "cf8bb7e990cc22183b7ca26d09a78af2"
  },
  {
    "url": "politica-de-privacidad/index.html",
    "revision": "50aa601e964441a3bc280c5e8405bc2a"
  },
  {
    "url": "robots.txt",
    "revision": "40f24cd77599d4e8e15d74d49935bd6f"
  },
  {
    "url": "sitemap.xml",
    "revision": "21e558f98e59492b7a272d8d1ea81c7d"
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
    "url": "static/5c7dba3d346a6301edc7ddcf417b27cf/31987/generar-json-web-token-en-nodejs.png"
  },
  {
    "url": "static/5c7dba3d346a6301edc7ddcf417b27cf/46604/generar-json-web-token-en-nodejs.png"
  },
  {
    "url": "static/5c7dba3d346a6301edc7ddcf417b27cf/eeb1b/generar-json-web-token-en-nodejs.png"
  },
  {
    "url": "static/5c7dba3d346a6301edc7ddcf417b27cf/generar-json-web-token-en-nodejs.png"
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
    "url": "styles.92e78578c20e52cee141.css"
  },
  {
    "url": "webpack-runtime-c6691b2f895793005652.js"
  },
  {
    "url": "webpack-runtime-c6691b2f895793005652.js.map",
    "revision": "acea50787ab21a69e1859a1d42781ae1"
  },
  {
    "url": "webpack.stats.json",
    "revision": "98e738d24087dfa005dead3ba7c47a85"
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
