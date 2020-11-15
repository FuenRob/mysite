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
    "revision": "0b291d575f30d5223baf6fa0e6f8e22d"
  },
  {
    "url": "404/index.html",
    "revision": "89ee8240e7cc0cc4d02323c7b7a438ca"
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
    "revision": "db52c00d325d1902e78fb4cfce83a926"
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
    "revision": "18abf56db02cf7a4a8fed0b91d4fc81a"
  },
  {
    "url": "blog/2/index.html",
    "revision": "48a00b1c1ca3e270daaf19648063ab24"
  },
  {
    "url": "blog/3/index.html",
    "revision": "705c9f1d26e8222220d42514e06bd9ed"
  },
  {
    "url": "blog/5-extensiones-de-vscode-que-todo-dev-debe-tener/index.html",
    "revision": "91badcab64fe8e20ca24e3df3b35a5ff"
  },
  {
    "url": "blog/como-deshacer-un-commit-erroneo/index.html",
    "revision": "a5b7a9d9ff1867f6c5eaa89bcfa9326c"
  },
  {
    "url": "blog/como-usar-los-secrets-de-github/index.html",
    "revision": "b7b67a4535e262420da56ba0d3d07af1"
  },
  {
    "url": "blog/configurar-docker-con-xdebug-y-vscode/index.html",
    "revision": "451ba82028cf09010a6e5debfe4d5a22"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-1/index.html",
    "revision": "a44710b24a9dc0b54b2865691c038515"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-2/index.html",
    "revision": "c95e70989b2bb2dcafc0b33430795c69"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-3/index.html",
    "revision": "1a475a3dda2944b4a72eb0470e5440fb"
  },
  {
    "url": "blog/desarrollar-una-pagina-de-configuracion-para-un-plugin-de-wordpress/index.html",
    "revision": "dcad737eb60a5ef9337d369abe2fa2ef"
  },
  {
    "url": "blog/generar-json-web-token-en-nodejs/index.html",
    "revision": "6bf59fb85a3897a5bdf676cba69e8e45"
  },
  {
    "url": "blog/index.html",
    "revision": "5f443fe8bdfa43dc1554a73c133b5c2c"
  },
  {
    "url": "blog/que-es-deployer-y-como-usarlo/index.html",
    "revision": "72ca8da3633f8e2fd2d576eb99ae9acb"
  },
  {
    "url": "blog/un-blog-en-gatsbyjs/index.html",
    "revision": "aa634bb7a5555e1e39185717a9e1c1de"
  },
  {
    "url": "blog/usar-prestashop-17-con-docker-compose/index.html",
    "revision": "31fba20dc9090f2b60406d79c9d0421e"
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
    "revision": "3070fb78a20c2658ecb4590f64888e38"
  },
  {
    "url": "contact/index.html",
    "revision": "6f36111231c64ef34ff6c89261b879ce"
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
    "revision": "a75fe68655fb4d94963a6a1e03ee0fa4"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "49c65cb8f2df42994bb64fae91cdf2ec"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4e0c6b034b8c7379ccda9c6f3540d4bd"
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
    "revision": "af62eb018251c75f9b021eb0789a13a5"
  },
  {
    "url": "page-data/aviso-legal/page-data.json",
    "revision": "667e7355ebb309949e2925e8af1c086d"
  },
  {
    "url": "page-data/blog/2/page-data.json",
    "revision": "8e83c5a0ea2e93dd512c76e9379ee69d"
  },
  {
    "url": "page-data/blog/3/page-data.json",
    "revision": "45c150db4afc3fa9deb23d32f109fb0c"
  },
  {
    "url": "page-data/blog/5-extensiones-de-vscode-que-todo-dev-debe-tener/page-data.json",
    "revision": "349d9bfc792f7c214385214d496d52eb"
  },
  {
    "url": "page-data/blog/como-deshacer-un-commit-erroneo/page-data.json",
    "revision": "50fa571de0c86d3e1d99ce0f41981b1e"
  },
  {
    "url": "page-data/blog/como-usar-los-secrets-de-github/page-data.json",
    "revision": "cbc29c262d9289deba4e2978af69a8af"
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
    "revision": "59693ad0f01593041b2e941368d24da7"
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
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "37b180914d412e5b39b53fa065611a68"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "5754f99344b4061c4e13f6383d6e2996"
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
    "revision": "ddc86b47052974fccb4d04ec9516ba91"
  },
  {
    "url": "politica-de-privacidad/index.html",
    "revision": "fd84fc4d062ff8c0da5eb586c58db287"
  },
  {
    "url": "robots.txt",
    "revision": "40f24cd77599d4e8e15d74d49935bd6f"
  },
  {
    "url": "sitemap.xml",
    "revision": "9ddbb9ee381b41452c1d11eb108905b6"
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
    "url": "static/1663bd3891c31dc71eb22887786bb242/31987/como-deshacer-un-commit-erroneo.png"
  },
  {
    "url": "static/1663bd3891c31dc71eb22887786bb242/46604/como-deshacer-un-commit-erroneo.png"
  },
  {
    "url": "static/1663bd3891c31dc71eb22887786bb242/a8378/como-deshacer-un-commit-erroneo.png"
  },
  {
    "url": "static/1663bd3891c31dc71eb22887786bb242/como-deshacer-un-commit-erroneo.png"
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
    "url": "static/ff8131d6e5212fdddaddb1f20be4e03e/31987/actions-github-banner.png"
  },
  {
    "url": "static/ff8131d6e5212fdddaddb1f20be4e03e/46604/actions-github-banner.png"
  },
  {
    "url": "static/ff8131d6e5212fdddaddb1f20be4e03e/actions-github-banner.png"
  },
  {
    "url": "static/ff8131d6e5212fdddaddb1f20be4e03e/f3583/actions-github-banner.png"
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
    "url": "webpack-runtime-ebfabf86294c5b3799ee.js"
  },
  {
    "url": "webpack-runtime-ebfabf86294c5b3799ee.js.map",
    "revision": "43d767372bd43013a13fabbee7ce084a"
  },
  {
    "url": "webpack.stats.json",
    "revision": "3fe34edd737acb3c7244545bb9ce084f"
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
