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
    "revision": "dc636461af60b5d4f68b82c17b6b7f10"
  },
  {
    "url": "404/index.html",
    "revision": "6b532fa4b8501f207a41d9d1293d8e56"
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
    "revision": "32aa5045099a99054400243ed91a2111"
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
    "revision": "1e4acc0af039e7cab6ba56bba217d861"
  },
  {
    "url": "blog/2/index.html",
    "revision": "ec2ff0428ff53c5d6f49298bf6ea3efe"
  },
  {
    "url": "blog/configurar-docker-con-xdebug-y-vscode/index.html",
    "revision": "95f5b4956e73f98686fb50ac28493be9"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-1/index.html",
    "revision": "05f72bdd8c476e9611f04d2d3312533b"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-2/index.html",
    "revision": "034bdda08b2d14f24f9e953d0d6ec4d6"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-3/index.html",
    "revision": "39a78d15a9b5eff1adf4542c0c2b9b72"
  },
  {
    "url": "blog/index.html",
    "revision": "be59d0fae719655401eed692feff79b2"
  },
  {
    "url": "blog/un-blog-en-gatsbyjs/index.html",
    "revision": "1c30b0c28f275857b22ef105e58c6378"
  },
  {
    "url": "blog/usar-prestashop-17-con-docker-compose/index.html",
    "revision": "ad2d5663008f67b65516873c9d868b4e"
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
    "revision": "9469affbb7ef9d7369f3a2bec0916301"
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
    "url": "component---src-pages-index-js-7b41bb03568138437041.js"
  },
  {
    "url": "component---src-pages-index-js-7b41bb03568138437041.js.map",
    "revision": "d1117c1a885918b4b141b364e509619f"
  },
  {
    "url": "component---src-templates-blog-list-js-1485ad81c52f6b15c971.js"
  },
  {
    "url": "component---src-templates-blog-list-js-1485ad81c52f6b15c971.js.map",
    "revision": "4651a54299c792060973735f8aa78f13"
  },
  {
    "url": "component---src-templates-blog-post-js-1c8a02bc1b1b088ef87a.js"
  },
  {
    "url": "component---src-templates-blog-post-js-1c8a02bc1b1b088ef87a.js.map",
    "revision": "24816e9dd601e254c24cd5e183ee1939"
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
    "revision": "aa1179f167ba1ea88ad96b4023df6a67"
  },
  {
    "url": "contact/index.html",
    "revision": "5bf32b2c8a4b502bcd447e3fea47b42f"
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
    "revision": "c5ef0521eb383733c8a4cfd130cd46f1"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "49c65cb8f2df42994bb64fae91cdf2ec"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9491b6c63564b787be27244cc9f1003f"
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
    "revision": "d389278d4799196ab68fa631b58cecc3"
  },
  {
    "url": "page-data/aviso-legal/page-data.json",
    "revision": "c35932a5c06caaa32fba710cc8a1df0c"
  },
  {
    "url": "page-data/blog/2/page-data.json",
    "revision": "bc8a2232a0872f8b38ba3fdb6167884a"
  },
  {
    "url": "page-data/blog/configurar-docker-con-xdebug-y-vscode/page-data.json",
    "revision": "de0b33ea55f4ab0d4c2422b0d42484be"
  },
  {
    "url": "page-data/blog/crud-de-usuarios-en-nodejs-parte-1/page-data.json",
    "revision": "e04c6cf80a606a894de7b549a873e58e"
  },
  {
    "url": "page-data/blog/crud-de-usuarios-en-nodejs-parte-2/page-data.json",
    "revision": "b252425a3ae5f2d49d902ab43b3f8993"
  },
  {
    "url": "page-data/blog/crud-de-usuarios-en-nodejs-parte-3/page-data.json",
    "revision": "edda1f9f356d4fc5d72ee0fa1dcd176f"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "6d938ff0db0f4e84c80a996741c2e557"
  },
  {
    "url": "page-data/blog/un-blog-en-gatsbyjs/page-data.json",
    "revision": "ed5d6450c7e3d0a3d3edc345343db043"
  },
  {
    "url": "page-data/blog/usar-prestashop-17-con-docker-compose/page-data.json",
    "revision": "87195d515ae30970ad08d7b247d371c6"
  },
  {
    "url": "page-data/condiciones-de-uso/page-data.json",
    "revision": "3effd1d1f431834163cd314360e8f082"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "834bbf3d543e4072836a33f9371aa512"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "3ddbf225a4a90621e6ec493f9fdf5716"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "6aad2e60174b31b7665891bc28140848"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/politica-de-cookies/page-data.json",
    "revision": "89e3df95470372493f426cf3ee9a9768"
  },
  {
    "url": "page-data/politica-de-privacidad/page-data.json",
    "revision": "194d70f28f18446eb7918b3ff2a4e49e"
  },
  {
    "url": "politica-de-cookies/index.html",
    "revision": "b703af270e73696a59622d35d68e8782"
  },
  {
    "url": "politica-de-privacidad/index.html",
    "revision": "4e4097f650caf31795c32b8f29037959"
  },
  {
    "url": "robots.txt",
    "revision": "40f24cd77599d4e8e15d74d49935bd6f"
  },
  {
    "url": "sitemap.xml",
    "revision": "6b475b684dffb896cb8a03a9b44d0318"
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
    "url": "styles.aea0316bae1e7196f15a.css"
  },
  {
    "url": "webpack-runtime-3c0612e77ee523ad244b.js"
  },
  {
    "url": "webpack-runtime-3c0612e77ee523ad244b.js.map",
    "revision": "cea3fc5e102ee939479008fd6f85ccf8"
  },
  {
    "url": "webpack-runtime-4a3bd895045a9a5960d0.js"
  },
  {
    "url": "webpack-runtime-4a3bd895045a9a5960d0.js.map",
    "revision": "4d1b46d89df744c04af03adc98712b38"
  },
  {
    "url": "webpack.stats.json",
    "revision": "186d34423f21655c138dd92aa9157956"
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
