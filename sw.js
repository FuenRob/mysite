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
    "revision": "35425d7f144e2f7e4111b9f716229718"
  },
  {
    "url": "404/index.html",
    "revision": "227c0ce8f81d6a5e7863f69ed8516a0a"
  },
  {
    "url": "505b62317f0ce1886a0f4b7cd0ebf6019d251f61-1e702cc961624471a34a.js"
  },
  {
    "url": "505b62317f0ce1886a0f4b7cd0ebf6019d251f61-1e702cc961624471a34a.js.map",
    "revision": "b00403912e1e7f695a220ead7fc70cfc"
  },
  {
    "url": "9c6c4dab96575556586440b4276b5a5e7d3ed3c7-78795acfad00c623eb0e.js"
  },
  {
    "url": "9c6c4dab96575556586440b4276b5a5e7d3ed3c7-78795acfad00c623eb0e.js.LICENSE.txt",
    "revision": "012b3ce98ce6ac0ac7f0b8e13e162fa9"
  },
  {
    "url": "9c6c4dab96575556586440b4276b5a5e7d3ed3c7-78795acfad00c623eb0e.js.map",
    "revision": "16e8a4bf1d858cc610a8801cdf5c3477"
  },
  {
    "url": "a9a7754c-2386239dcdf0f04f1690.js"
  },
  {
    "url": "a9a7754c-2386239dcdf0f04f1690.js.LICENSE.txt",
    "revision": "5b6a3f1ca6e193597e4d49c7a42851aa"
  },
  {
    "url": "a9a7754c-2386239dcdf0f04f1690.js.map",
    "revision": "571f898e07022f1f8e0475fd9cacfbf3"
  },
  {
    "url": "about/index.html",
    "revision": "6197d0314768acc6ca5bec97ad9f880d"
  },
  {
    "url": "app-ba5c5993b411999af54b.js"
  },
  {
    "url": "app-ba5c5993b411999af54b.js.LICENSE.txt",
    "revision": "a132a411173507cc7e308c078456c62f"
  },
  {
    "url": "app-ba5c5993b411999af54b.js.map",
    "revision": "b11d79529d1dd4e4d966b2f9f2ace52a"
  },
  {
    "url": "aviso-legal/index.html",
    "revision": "0a92659a50de19f5dfbc0ed265d64866"
  },
  {
    "url": "blog/2/index.html",
    "revision": "3b6d63127bbe60f833ef6e361e7d15d4"
  },
  {
    "url": "blog/3/index.html",
    "revision": "f3cb005d08aff3c3077259ff4d57bf26"
  },
  {
    "url": "blog/5-extensiones-de-vscode-que-todo-dev-debe-tener/index.html",
    "revision": "243dac9c446528839d90970b8a70cd17"
  },
  {
    "url": "blog/como-deshacer-un-commit-erroneo/index.html",
    "revision": "5da8b4a117afb2c8d6adcce5e3f70eb5"
  },
  {
    "url": "blog/como-usar-los-secrets-de-github/index.html",
    "revision": "952e42978601ee4247eeaf2c70216c8b"
  },
  {
    "url": "blog/configurar-docker-con-xdebug-y-vscode/index.html",
    "revision": "ef4684ef45804538b59e32211b76bb9a"
  },
  {
    "url": "blog/crear-listado-de-tareas-con-vuejs/index.html",
    "revision": "dfd99927d83c60c51d7788ee3378f79e"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-1/index.html",
    "revision": "3d03953eca448b809ffca69cf865f7fe"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-2/index.html",
    "revision": "afefffe9478fd08c5d59065795457b76"
  },
  {
    "url": "blog/crud-de-usuarios-en-nodejs-parte-3/index.html",
    "revision": "d644e1c9c641bc10dfe02cae1d3af80e"
  },
  {
    "url": "blog/desarrollar-una-pagina-de-configuracion-para-un-plugin-de-wordpress/index.html",
    "revision": "a44ec4362e86cdff03fd58b0a66de177"
  },
  {
    "url": "blog/generar-json-web-token-en-nodejs/index.html",
    "revision": "d08dc06341733d45256e6297f075dafa"
  },
  {
    "url": "blog/index.html",
    "revision": "ffd30096baadc0144c4f1a1ee5e611b5"
  },
  {
    "url": "blog/integrar-sanityio-en-reactjs/index.html",
    "revision": "b42fd126920cded523b95f631e12ccac"
  },
  {
    "url": "blog/que-es-deployer-y-como-usarlo/index.html",
    "revision": "2b8eb811a6d212b15cac5232fdd99b45"
  },
  {
    "url": "blog/un-blog-en-gatsbyjs/index.html",
    "revision": "4b56aba83317faa73b47e1f9b63ea690"
  },
  {
    "url": "blog/usar-prestashop-17-con-docker-compose/index.html",
    "revision": "b24e58548abecccc9c2befb3d6cbab17"
  },
  {
    "url": "blog/usar-variables-en-css/index.html",
    "revision": "bedef108738cebff74b8687288630fa6"
  },
  {
    "url": "cb1608f2-8be864fd25be3f47a99c.js"
  },
  {
    "url": "cb1608f2-8be864fd25be3f47a99c.js.LICENSE.txt",
    "revision": "5b6a3f1ca6e193597e4d49c7a42851aa"
  },
  {
    "url": "cb1608f2-8be864fd25be3f47a99c.js.map",
    "revision": "2ce7944ec42e6af3ed86e2722249adbe"
  },
  {
    "url": "chunk-map.json",
    "revision": "98f504f528d98d62f57e7155954956f2"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-d3ee03be2ef85643f368.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-d3ee03be2ef85643f368.js.map",
    "revision": "e0d91a69f4259a63d8fe8814bfd0c1e9"
  },
  {
    "url": "component---src-pages-404-js-c529e7aec52d1dedf22c.js"
  },
  {
    "url": "component---src-pages-404-js-c529e7aec52d1dedf22c.js.map",
    "revision": "b56669b717545a365415d1394a3ac81c"
  },
  {
    "url": "component---src-pages-about-js-d7016457c2e5f6ba7ebe.js"
  },
  {
    "url": "component---src-pages-about-js-d7016457c2e5f6ba7ebe.js.map",
    "revision": "72d4ab10b9a42185ab90e86d094ea183"
  },
  {
    "url": "component---src-pages-contact-js-92d68664ced0d4792ed4.js"
  },
  {
    "url": "component---src-pages-contact-js-92d68664ced0d4792ed4.js.map",
    "revision": "17a3075a67de695e852df0c8fa2980cc"
  },
  {
    "url": "component---src-pages-index-js-321bf2ae32dd67f66193.js"
  },
  {
    "url": "component---src-pages-index-js-321bf2ae32dd67f66193.js.map",
    "revision": "0376c502352116d751ff9f3d545805f0"
  },
  {
    "url": "component---src-templates-blog-list-js-3b32af073e43bdaf0a85.js"
  },
  {
    "url": "component---src-templates-blog-list-js-3b32af073e43bdaf0a85.js.map",
    "revision": "41387b689035d876933421208764286d"
  },
  {
    "url": "component---src-templates-blog-post-js-8afcdb8e819e7bfdb54e.js"
  },
  {
    "url": "component---src-templates-blog-post-js-8afcdb8e819e7bfdb54e.js.map",
    "revision": "459d0dd73a7e7701aaeae51b0d4fdb61"
  },
  {
    "url": "condiciones-de-uso/index.html",
    "revision": "041d0e9f8598641186d7330129402ce4"
  },
  {
    "url": "contact/index.html",
    "revision": "75b0b4205b524ea7fc4ece7cd57b81a9"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "23d0d14928dc92c170ecbee16ad8bf66"
  },
  {
    "url": "favicon.ico",
    "revision": "3a318e3ceb32f2e06b497c0795ae14cb"
  },
  {
    "url": "framework-beda7bde9d7dca0755ce.js"
  },
  {
    "url": "framework-beda7bde9d7dca0755ce.js.LICENSE.txt",
    "revision": "2d04beb28a7e5a084e12f5839e351c08"
  },
  {
    "url": "framework-beda7bde9d7dca0755ce.js.map",
    "revision": "86234b44ed7ca7a7d47bd3ab5c4b8e11"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "bcd59e08757a7a45bec674ad774c7692"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "60fb65c5d48d4b7f448d8522d62a2971"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "004c208a573506c2b4efe380827466d5"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "4feb128bf87666119e6618ae2fb0867f"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "3a318e3ceb32f2e06b497c0795ae14cb"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "b5e12cbdfd54f1f4e0f77cda8bab6fae"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "687cebdd4659a74041c9d379de145026"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "91f7ce6f3814418652da24ebd585ef03"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "32dffce56751db56740fa8279be60711"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "904cf96047bd81117d2bba721340cdc4"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f20f362c5323268cf86ae29a7cdf08f1"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "0403882eff297f66cd423bdf455c44a5"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "984a0c60649449443e37ec4fe48f48a6"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "b64bf738d83fd3684a8409e6fb408da6"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "622fd7f67895051046627e4ae55fc6bc"
  },
  {
    "url": "page-data/aviso-legal/page-data.json",
    "revision": "f6dbb83f007d2c819339c7792daebb53"
  },
  {
    "url": "page-data/blog/2/page-data.json",
    "revision": "ed54f86475c494daa643c1ac7d92a793"
  },
  {
    "url": "page-data/blog/3/page-data.json",
    "revision": "bc690ff95f93f8728b7636f5a7f72d04"
  },
  {
    "url": "page-data/blog/5-extensiones-de-vscode-que-todo-dev-debe-tener/page-data.json",
    "revision": "3cd8f36442c7070836fe3154d8b0dc67"
  },
  {
    "url": "page-data/blog/como-deshacer-un-commit-erroneo/page-data.json",
    "revision": "d3fd121a29c629638fa9d5b542094e0c"
  },
  {
    "url": "page-data/blog/como-usar-los-secrets-de-github/page-data.json",
    "revision": "67f6ef42d4851372bfccbdffda779d09"
  },
  {
    "url": "page-data/blog/configurar-docker-con-xdebug-y-vscode/page-data.json",
    "revision": "3c37ce2ba97d7d094f6d83d2518b85d2"
  },
  {
    "url": "page-data/blog/crear-listado-de-tareas-con-vuejs/page-data.json",
    "revision": "e532873968bda66aa3322f123d79ce2b"
  },
  {
    "url": "page-data/blog/crud-de-usuarios-en-nodejs-parte-1/page-data.json",
    "revision": "1afc3e47f4068702c5818e70b999d6e2"
  },
  {
    "url": "page-data/blog/crud-de-usuarios-en-nodejs-parte-2/page-data.json",
    "revision": "e178147e3abfe51a13357b8457b8e486"
  },
  {
    "url": "page-data/blog/crud-de-usuarios-en-nodejs-parte-3/page-data.json",
    "revision": "16a65c4c257aea730f55ab8737e57ef0"
  },
  {
    "url": "page-data/blog/desarrollar-una-pagina-de-configuracion-para-un-plugin-de-wordpress/page-data.json",
    "revision": "89647c4d4032d33a05a9fa0a10ca1dac"
  },
  {
    "url": "page-data/blog/generar-json-web-token-en-nodejs/page-data.json",
    "revision": "537071f8694810d9b0e3719b6d5af255"
  },
  {
    "url": "page-data/blog/integrar-sanityio-en-reactjs/page-data.json",
    "revision": "94396f8ca6a62ef828f5cd8b5ee0058e"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "e38f5e35098a30404253e773cc956b37"
  },
  {
    "url": "page-data/blog/que-es-deployer-y-como-usarlo/page-data.json",
    "revision": "38df415e1430888da307ec594ab26561"
  },
  {
    "url": "page-data/blog/un-blog-en-gatsbyjs/page-data.json",
    "revision": "f4ac4de48692cc53daea837a7ca5ad04"
  },
  {
    "url": "page-data/blog/usar-prestashop-17-con-docker-compose/page-data.json",
    "revision": "b2ab17616617af1fccb798884ce2a5da"
  },
  {
    "url": "page-data/blog/usar-variables-en-css/page-data.json",
    "revision": "ed184a0b23e0051eeb6acfbb9c299a89"
  },
  {
    "url": "page-data/condiciones-de-uso/page-data.json",
    "revision": "4f39f62fe0956105265578555836ecd5"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "c27d4c5a28f14948cc47f06f86d95af0"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "c44ca2a93629a44c6d11d5d94e113cf3"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/politica-de-cookies/page-data.json",
    "revision": "52e5784c51f97c9c16a5b6724f1fdebb"
  },
  {
    "url": "page-data/politica-de-privacidad/page-data.json",
    "revision": "c530105510c16cf7512cc293d5993719"
  },
  {
    "url": "page-data/sq/d/414621567.json",
    "revision": "5663e4fd27220886e441eba668ce03fc"
  },
  {
    "url": "page-data/sq/d/754622331.json",
    "revision": "fb864f301487806708cd76be22b0bd86"
  },
  {
    "url": "politica-de-cookies/index.html",
    "revision": "4c71047797e71dadfdb43eb84f341d29"
  },
  {
    "url": "politica-de-privacidad/index.html",
    "revision": "69338b4d27ebf88b1de4e767e2befa27"
  },
  {
    "url": "polyfill-67d3d386ca9315df205e.js"
  },
  {
    "url": "polyfill-67d3d386ca9315df205e.js.map",
    "revision": "9028faace9d91b656433901f1be4f1aa"
  },
  {
    "url": "robots.txt",
    "revision": "40f24cd77599d4e8e15d74d49935bd6f"
  },
  {
    "url": "sitemap.xml",
    "revision": "e7643259f24088f09ca7b1dedf5eae9d"
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
    "url": "static/32ef9d9bca4a1a59b0fc0b9cb277ad7f/0f3a1/usar-variables-en-css.jpg"
  },
  {
    "url": "static/32ef9d9bca4a1a59b0fc0b9cb277ad7f/a7715/usar-variables-en-css.jpg"
  },
  {
    "url": "static/32ef9d9bca4a1a59b0fc0b9cb277ad7f/usar-variables-en-css.jpg"
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
    "url": "static/9dfbdaa5df3a6a9bc61fe84d058918bb/31987/crear-listado-tareas-con-vuejs.png"
  },
  {
    "url": "static/9dfbdaa5df3a6a9bc61fe84d058918bb/46604/crear-listado-tareas-con-vuejs.png"
  },
  {
    "url": "static/9dfbdaa5df3a6a9bc61fe84d058918bb/crear-listado-tareas-con-vuejs.png"
  },
  {
    "url": "static/9dfbdaa5df3a6a9bc61fe84d058918bb/eeb1b/crear-listado-tareas-con-vuejs.png"
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
    "url": "styles-540f25bd5e5cb35d6f53.js"
  },
  {
    "url": "styles-540f25bd5e5cb35d6f53.js.map",
    "revision": "13e007bb9378c307da4f984fad46609a"
  },
  {
    "url": "styles.884e45f9d47dc7c7135b.css"
  },
  {
    "url": "webpack-runtime-022ea8f4ac3bd6d29dc4.js"
  },
  {
    "url": "webpack-runtime-022ea8f4ac3bd6d29dc4.js.map",
    "revision": "3a8ca4974cbd16b096f43e584cebde2b"
  },
  {
    "url": "webpack.stats.json",
    "revision": "0fd0cece783c7f2a0c9f57e69a9c2312"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

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
  if (!resources || !(await caches.match(`/app-ba5c5993b411999af54b.js`))) {
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
