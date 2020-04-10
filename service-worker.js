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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ea6c80c4fcb083bcb3f9b7a8a9ef8954"
  },
  {
    "url": "assets/css/0.styles.203c6911.css",
    "revision": "934f503b77ab2bca65109d09b361fe84"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fb132031.js",
    "revision": "8751a7de9a3a11261ca1242919ef078d"
  },
  {
    "url": "assets/js/11.0681e1e8.js",
    "revision": "b83f72dff252202f9ca6a7da784e7d4a"
  },
  {
    "url": "assets/js/12.5f443c91.js",
    "revision": "bf75eba45746dc712d1e01941ce84bcb"
  },
  {
    "url": "assets/js/13.2462a100.js",
    "revision": "d5728867f15d7dd22166eb0fb7dd4697"
  },
  {
    "url": "assets/js/14.06fba456.js",
    "revision": "46dfd3f5062e3b39df32bf9b3378dbf2"
  },
  {
    "url": "assets/js/15.87adf84b.js",
    "revision": "75f991b814acc213bfe34b18029c276e"
  },
  {
    "url": "assets/js/16.bd57391d.js",
    "revision": "2e5a0c8229a2e537bd8472f372f8cb97"
  },
  {
    "url": "assets/js/17.d739a131.js",
    "revision": "953cdeb40e237e8bdac8157df511334c"
  },
  {
    "url": "assets/js/18.2f67d38b.js",
    "revision": "8312b61c37eeef6725190893e9e75623"
  },
  {
    "url": "assets/js/19.7b8463ae.js",
    "revision": "1dfbb4d1de339c204a0f5df1653dd1a5"
  },
  {
    "url": "assets/js/20.84cdbca1.js",
    "revision": "5f60d9e174212ca77a9683af4c749c03"
  },
  {
    "url": "assets/js/21.b604dcd6.js",
    "revision": "f92402e5127a75ee0376ae62c1bb4c8b"
  },
  {
    "url": "assets/js/22.00d17d08.js",
    "revision": "7c766233a6c7262b134db46aaae4fdfb"
  },
  {
    "url": "assets/js/23.3c3a4ce3.js",
    "revision": "8930d07f7be86eef29735da6b2dab5c2"
  },
  {
    "url": "assets/js/24.379489b6.js",
    "revision": "5918435c0bf009a37212213275ecae31"
  },
  {
    "url": "assets/js/25.e1734726.js",
    "revision": "0a6d23b5f1511095f4ac9735d4cab555"
  },
  {
    "url": "assets/js/26.0c7de951.js",
    "revision": "88a2292bdb8a08311e2f4d4668b3a24b"
  },
  {
    "url": "assets/js/27.ee9474ed.js",
    "revision": "e1d025a2751bb0b8f8c620f0bf709449"
  },
  {
    "url": "assets/js/28.23b840a4.js",
    "revision": "d6a7aeb4331d4eeee855773ff06917df"
  },
  {
    "url": "assets/js/29.fe94ad03.js",
    "revision": "919122346bbcd83899f737f0b8db610b"
  },
  {
    "url": "assets/js/3.9ef79fcc.js",
    "revision": "ceb92406a4d803566059726fe574413e"
  },
  {
    "url": "assets/js/30.49e27b92.js",
    "revision": "d07c38d455a2c3a80cc300e52edfefc6"
  },
  {
    "url": "assets/js/31.53e1c2c5.js",
    "revision": "5d354c5dfc67bdd29f4b8c4d5dab05f2"
  },
  {
    "url": "assets/js/4.b5922726.js",
    "revision": "a39f329a0651e8decadd4dee8f8925b8"
  },
  {
    "url": "assets/js/5.e8aacdb8.js",
    "revision": "f52e8e906e55a31b442f7604fea14abd"
  },
  {
    "url": "assets/js/6.3889e0d2.js",
    "revision": "e696ff1f464ffff505da8fb779638afd"
  },
  {
    "url": "assets/js/7.aad75bfe.js",
    "revision": "f16a6d29a69cf069f59cf9044a325f46"
  },
  {
    "url": "assets/js/8.cbf7bdec.js",
    "revision": "4291a0401384dc8adac10dbf698fe434"
  },
  {
    "url": "assets/js/9.1a742798.js",
    "revision": "e2d0608ba01f5a077b54d3a885b951f3"
  },
  {
    "url": "assets/js/app.a57da3d5.js",
    "revision": "1ae1c8240fd0195a115277e782a2a30f"
  },
  {
    "url": "assets/js/vendors~notification.a618ab5b.js",
    "revision": "83b0bd3c031662016099e529a249ea18"
  },
  {
    "url": "images/egg.png",
    "revision": "4cd1b7550f33f26665b50fd241bc4ff8"
  },
  {
    "url": "images/leaf-1.jpg",
    "revision": "6761551abf93e5acb033e0c54b422a23"
  },
  {
    "url": "images/logo.jpg",
    "revision": "f2b064ca6a62f65da527811ac1aa51f3"
  },
  {
    "url": "images/moon.png",
    "revision": "7afc9045f57e3b602279d050d569eebd"
  },
  {
    "url": "images/web学习路线2.png",
    "revision": "ea261e3d375d5af70bd4a719dfd19a83"
  },
  {
    "url": "index.html",
    "revision": "61f35d54581c929ec110b7910ef5ee66"
  },
  {
    "url": "pages/javascript/code.html",
    "revision": "de388ce7518b4cb56be1f4f7e553980a"
  },
  {
    "url": "pages/javascript/source.html",
    "revision": "a88eb61830ed593a79c484b07416f624"
  },
  {
    "url": "pages/javascript/test1.html",
    "revision": "75fe48fa72f698d4b28ddd6667458268"
  },
  {
    "url": "pages/logs/index.html",
    "revision": "43f79394c826c8ba903a6f42e9f4395d"
  },
  {
    "url": "pages/python/code.html",
    "revision": "984495b41a70490aa2058a2d420975d8"
  },
  {
    "url": "pages/python/source.html",
    "revision": "7c3ee6d180e81b362977c7a61fabd38a"
  },
  {
    "url": "pages/python/test2.html",
    "revision": "65072f56a0fb9ac19d8033ce680b864c"
  },
  {
    "url": "pages/python/test3.html",
    "revision": "23d49e7713451422111969ae9e02f899"
  },
  {
    "url": "pages/react-native/basics.html",
    "revision": "da996f5ce63fe142d2dde8dd986f3a5f"
  },
  {
    "url": "pages/react-native/code.html",
    "revision": "778d61732f61a90b48f8eb97b4204d7e"
  },
  {
    "url": "pages/react-native/source.html",
    "revision": "8a1ac937eea6b024365eac90f8b8f81c"
  },
  {
    "url": "pages/react-native/test1.html",
    "revision": "b97cce45e49f5b9793b6572bcc281bb8"
  },
  {
    "url": "pages/react/code.html",
    "revision": "1cedb59f715c15e97a8a15075086563b"
  },
  {
    "url": "pages/react/source.html",
    "revision": "9929d83be0f12b8da99a7002da188ce9"
  },
  {
    "url": "pages/react/test1.html",
    "revision": "2bc2a15bace4d50d55327f399a9fec12"
  },
  {
    "url": "pages/vue/code.html",
    "revision": "7fc83a69d1f0e13c072c5f4ed999828d"
  },
  {
    "url": "pages/vue/source.html",
    "revision": "ca4cdaf33663eeb3ecbc7bddcf66a298"
  },
  {
    "url": "pages/vue/test1.html",
    "revision": "d8f401b69ddae1326c46f6946ea02b07"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
