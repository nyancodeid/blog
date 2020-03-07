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
    "revision": "dad32aa8ed3989b28fb7d0297ec7e1a6"
  },
  {
    "url": "assets/css/0.styles.4ca54422.css",
    "revision": "ef0995568ccefe6b5ede4d5afec1da0a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.46671c6b.js",
    "revision": "afd135548c26c3869e6d73d289e72ec7"
  },
  {
    "url": "assets/js/11.0401d3a4.js",
    "revision": "81d5177c493f5f180bebf113c9604065"
  },
  {
    "url": "assets/js/12.70c19123.js",
    "revision": "a5041afb3617e47a06e0d8eb68b4bcad"
  },
  {
    "url": "assets/js/13.3e93abb7.js",
    "revision": "0c61a2dae3484480b3c8566df6821fae"
  },
  {
    "url": "assets/js/14.8744dd80.js",
    "revision": "64cc073c4f992bd12aafa4df326505b7"
  },
  {
    "url": "assets/js/15.abc94b33.js",
    "revision": "b06981c9cd0a01db2b94bbf060e2760a"
  },
  {
    "url": "assets/js/16.9d541d69.js",
    "revision": "2544ceabf22edd10dca8033aa96878d1"
  },
  {
    "url": "assets/js/17.0e1a1f86.js",
    "revision": "06bba60c02248d21ff9090db475c213e"
  },
  {
    "url": "assets/js/18.0d5c2dce.js",
    "revision": "556c4cfcf1cba1f80b6dd094e8fab93d"
  },
  {
    "url": "assets/js/19.e696c2bd.js",
    "revision": "2e37c00d9a6eddb7f376edc253af0f3f"
  },
  {
    "url": "assets/js/2.abbe9cb6.js",
    "revision": "1014a8a951718887d9fbf393da9f91f0"
  },
  {
    "url": "assets/js/20.ac47badb.js",
    "revision": "3e31f93d35db2d252b698b7d5a22e9d7"
  },
  {
    "url": "assets/js/21.2a9ed746.js",
    "revision": "8fa1880749c5ade63a137ac4ed8d9d4c"
  },
  {
    "url": "assets/js/22.377bec70.js",
    "revision": "716d3bc56bd26d6fd8d4684581f7dd27"
  },
  {
    "url": "assets/js/23.50504de9.js",
    "revision": "13d1c6a3b403c1be334ae21fc6b86a50"
  },
  {
    "url": "assets/js/24.08adb48e.js",
    "revision": "a833d625f46b0bed4033b5c4177e21c3"
  },
  {
    "url": "assets/js/25.6645a74f.js",
    "revision": "869bdf62414b0297d3b0d9c1377cce7d"
  },
  {
    "url": "assets/js/26.691edb55.js",
    "revision": "96b44e3ffb948dc8d4be3fe75ac14698"
  },
  {
    "url": "assets/js/27.d9ee9da7.js",
    "revision": "2d55e0f901189f47e3c4e9a1d27b7200"
  },
  {
    "url": "assets/js/28.79d9ee62.js",
    "revision": "8e01e35242e75bbdf3e6b1c7f80c3475"
  },
  {
    "url": "assets/js/29.022ffaed.js",
    "revision": "78c8b61d642a5973ae743b59816e954f"
  },
  {
    "url": "assets/js/3.87454ec6.js",
    "revision": "007b92b4e1c1cfbc80a32d2c081bfa78"
  },
  {
    "url": "assets/js/30.f0fe4128.js",
    "revision": "864d995b0750ea80141058043ce0fb73"
  },
  {
    "url": "assets/js/31.ad942c63.js",
    "revision": "8b78e40b2e9756bc89fe16c4948ecbe9"
  },
  {
    "url": "assets/js/32.0e1eb767.js",
    "revision": "46f20480473e554fd29949b07cbc20ab"
  },
  {
    "url": "assets/js/33.aef5b8e7.js",
    "revision": "4ddbf67a89cbcbb0253b5d62f2694f82"
  },
  {
    "url": "assets/js/34.39bf9858.js",
    "revision": "efdf9f196f1f05e4616c2a50b86e568e"
  },
  {
    "url": "assets/js/35.a25d745c.js",
    "revision": "b60648a30ac32ce2ff5ea646c80b8658"
  },
  {
    "url": "assets/js/36.b98f0069.js",
    "revision": "1a11c3c04cff729985fe34a350f48c26"
  },
  {
    "url": "assets/js/37.8112e4b6.js",
    "revision": "c72179b650d04cce01fbc4711c6400b5"
  },
  {
    "url": "assets/js/38.1669e6d9.js",
    "revision": "f7c82925dd4611b77575a0cd6b303000"
  },
  {
    "url": "assets/js/4.e70ae272.js",
    "revision": "0e837274e1536ba0c6ead20c644ce04d"
  },
  {
    "url": "assets/js/5.16ee427d.js",
    "revision": "42303fae21f8697077c59128683184fd"
  },
  {
    "url": "assets/js/6.b6678df2.js",
    "revision": "87a535a18e2ddba2f80a14d8c0f6b46d"
  },
  {
    "url": "assets/js/7.84e86e63.js",
    "revision": "6eca5a6e3f3cb9cee66f0bfa0ae2918f"
  },
  {
    "url": "assets/js/8.ea447abf.js",
    "revision": "0918fcb5d835ce4c9adad27158518556"
  },
  {
    "url": "assets/js/9.6c3aae6b.js",
    "revision": "4bc508d3eb1ac8ac7bb79f70ce45628f"
  },
  {
    "url": "assets/js/app.d8a3dceb.js",
    "revision": "9ceb0d7adea75ab118416291ae8629ac"
  },
  {
    "url": "bookmark/harapan-adalah-candu-bagi-orang-orang-kalah.md.html",
    "revision": "b6a28e9f238750368c2cbd8f85ff2085"
  },
  {
    "url": "bookmark/index.html",
    "revision": "ec432bca296e5237c042c9c34ee9779f"
  },
  {
    "url": "bookmark/lonely-poor-surabayan.html",
    "revision": "1413c829e298ce28d64494c5f5fedcd4"
  },
  {
    "url": "devops/index.html",
    "revision": "9717f42a3ec60967a44457ab87954da9"
  },
  {
    "url": "fonts/charter-regular-webfont.woff",
    "revision": "0329ae93aa60383ea3f0029ead09fb67"
  },
  {
    "url": "fonts/charter-regular-webfont.woff2",
    "revision": "d23eb1a45378c78e4eb2f6c2048001af"
  },
  {
    "url": "fonts/charter-regular.otf",
    "revision": "6d2ccbe36a2dd3dd73c87780600b74f0"
  },
  {
    "url": "fonts/hasklig-regular.otf",
    "revision": "23605e016e3e71426f75af4691317e9b"
  },
  {
    "url": "fonts/hasklig/Hasklig-Regular.eot",
    "revision": "aeca20ec65107a826245343143eee8a8"
  },
  {
    "url": "fonts/hasklig/Hasklig-Regular.otf",
    "revision": "23605e016e3e71426f75af4691317e9b"
  },
  {
    "url": "fonts/hasklig/Hasklig-Regular.svg",
    "revision": "a1163734e23f972ab6a7d4aa20167dc6"
  },
  {
    "url": "fonts/hasklig/Hasklig-Regular.ttf",
    "revision": "3b4d87b0e411d79075dc472b97ee3c6d"
  },
  {
    "url": "fonts/hasklig/Hasklig-Regular.woff",
    "revision": "56a61640c6e7eb609d1430c72cdefe6d"
  },
  {
    "url": "fonts/keivit-bold-webfont.woff",
    "revision": "2b98b3d571b47ac9b66faee0ac51b18d"
  },
  {
    "url": "fonts/keivit-bold-webfont.woff2",
    "revision": "af20a363074555abfe3c299f3e9e712a"
  },
  {
    "url": "fonts/keivit-bold.otf",
    "revision": "6b39c3bc9dd0b080cd10337e0131c801"
  },
  {
    "url": "fonts/keivit-regular-webfont.woff",
    "revision": "60154a96c66965413e53f4378ed80b3c"
  },
  {
    "url": "fonts/keivit-regular-webfont.woff2",
    "revision": "c4edd4fa8c5e93a602a84da6944f9414"
  },
  {
    "url": "fonts/keivit-regular.otf",
    "revision": "50f4325b6fdab7b63d1f12399a50b4e8"
  },
  {
    "url": "fonts/medium.otf",
    "revision": "0dfd04903a45443a9cd24c9bb1413237"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "4455da30635d70c34f65b78c8cb5b0d4"
  },
  {
    "url": "icons/android-icon-144x144.png",
    "revision": "7abd0f3a747f96d1eb58f57ec1babce4"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "26b34d01a77dab4f2f50d2ef993d7f94"
  },
  {
    "url": "icons/android-icon-36x36.png",
    "revision": "07779725df3b12063d322a25b30d7287"
  },
  {
    "url": "icons/android-icon-48x48.png",
    "revision": "3a48fde5fbb6fccfb9113950836d077d"
  },
  {
    "url": "icons/android-icon-72x72.png",
    "revision": "bca78706a45758e1f3819393b00c41fe"
  },
  {
    "url": "icons/android-icon-96x96.png",
    "revision": "3b1238e24554e7a717390e3803af1c9a"
  },
  {
    "url": "icons/apple-icon-114x114.png",
    "revision": "7b249f2ac7494579ad5913bdbbe3dfe1"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "0f82c33b2e083f254a3fafb4e0fe21d1"
  },
  {
    "url": "icons/apple-icon-144x144.png",
    "revision": "7abd0f3a747f96d1eb58f57ec1babce4"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "12adc447fd97e08218945f68cba73086"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "97e36a85aba2262697b469bfa6fcd6d2"
  },
  {
    "url": "icons/apple-icon-57x57.png",
    "revision": "2ccc54d2781cd501e8ab71655aab893f"
  },
  {
    "url": "icons/apple-icon-60x60.png",
    "revision": "3b72eb3d9d7bc9d23402f1ed681dfab4"
  },
  {
    "url": "icons/apple-icon-72x72.png",
    "revision": "bca78706a45758e1f3819393b00c41fe"
  },
  {
    "url": "icons/apple-icon-76x76.png",
    "revision": "a9276838b53933ae0ff74181c1249fe6"
  },
  {
    "url": "icons/apple-icon-precomposed.png",
    "revision": "fe8ef35a1f3c8f3bc7caefbb4c945f3e"
  },
  {
    "url": "icons/apple-icon.png",
    "revision": "fe8ef35a1f3c8f3bc7caefbb4c945f3e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "e6bbc9b90ecc84c21ab3cc26e1921b7c"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "df83cddda2daf28ee6dc330d0e5f363e"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "3b1238e24554e7a717390e3803af1c9a"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "7abd0f3a747f96d1eb58f57ec1babce4"
  },
  {
    "url": "icons/ms-icon-150x150.png",
    "revision": "d68155d1e2d5b31d8620f431a4a8b95c"
  },
  {
    "url": "icons/ms-icon-310x310.png",
    "revision": "d080c32261b23f71014e640211766eab"
  },
  {
    "url": "icons/ms-icon-70x70.png",
    "revision": "3e7b6e63a1f0182fd56aa54c680beae5"
  },
  {
    "url": "images/covers/belajar-financial-literasi-nyandev-blog.jpg",
    "revision": "99a753acac185f0babfa380284ab77fb"
  },
  {
    "url": "images/covers/belajar-preact-bundler.jpg",
    "revision": "ada79aaa5c7bbb65f061a29b4c289022"
  },
  {
    "url": "images/covers/belajar-preact-hello-world.jpg",
    "revision": "a388897556a93437719d6c72042b2665"
  },
  {
    "url": "images/covers/belajar-preact-perkenalan.png",
    "revision": "eef8ff86d0350c60f8f533472a08c3ac"
  },
  {
    "url": "images/covers/cara-setup-nodejs-project-dengan-typescript.jpg",
    "revision": "50b2f53b8030f097b01c2f11f35a8be2"
  },
  {
    "url": "images/covers/extract-meta-data--nyandev-blog.jpg",
    "revision": "c81f55975ac38dd2ae98362fc8dda7e4"
  },
  {
    "url": "images/covers/harapan-adalah-candu-bagi.jpg",
    "revision": "b306c4935eb5ab99c4ed4f7fd5e0b717"
  },
  {
    "url": "images/covers/infomasi-password-modem-telkom.jpg",
    "revision": "24e6eedc6e2ab8f19144dd9a46274350"
  },
  {
    "url": "images/covers/javascript-modules-bundler-nyandev-blog.jpg",
    "revision": "dd812d877d8b1ea9fbf4529ad3f7d570"
  },
  {
    "url": "images/covers/javascript-modules-bundler-nyandev-blog.png",
    "revision": "1d7f4d03e96b765b259a850c45ae628a"
  },
  {
    "url": "images/covers/javascript-virtual-dom-nyandev-blog.jpg",
    "revision": "05fed71bf5d98a899d32ba517c65dd5d"
  },
  {
    "url": "images/covers/javascript-virtual-dom-nyandev-blog.png",
    "revision": "ad514bf7085105c80e9474d18c705d1f"
  },
  {
    "url": "images/covers/lonely-poor-surabayan.jpg",
    "revision": "0c4939b3562aaa56cb42bd0e4feb4b99"
  },
  {
    "url": "images/covers/membuat-api-qr-code-dengan-cloudflare-worker.jpg",
    "revision": "152dd5ca4c235d1f861ead9010b1ea8d"
  },
  {
    "url": "images/covers/preact-cli--nyandev-blog.jpg",
    "revision": "4dfe27d40118127f92e7d609dfff2d6c"
  },
  {
    "url": "images/covers/preact-hooks--nyandev-blog.jpg",
    "revision": "c76a5880f6b953fb1aeab469fe394e66"
  },
  {
    "url": "images/covers/preact-unistore--nyandev-blog.png",
    "revision": "46b555477af76d7af988ccccefe0b92d"
  },
  {
    "url": "images/covers/programming-icons.jpg",
    "revision": "bbf5f5cd408ad74dca9f0666dff88f8b"
  },
  {
    "url": "images/covers/programming-icons.png",
    "revision": "2e14dc05860e0ba171e74c925bf47b8d"
  },
  {
    "url": "images/covers/tips-login-wifiid-linux--nyandev-blog.jpg",
    "revision": "4b55074b3c3e99531c9ff5dcda981e69"
  },
  {
    "url": "images/covers/unistore-array-state.jpg",
    "revision": "d7366e5d6bd29abb82d8cb226637786f"
  },
  {
    "url": "images/posts/14a74b7b05be374ea53fe.png",
    "revision": "5651b95dd7287fd3680ca6b1f0b5180e"
  },
  {
    "url": "images/posts/16f03fc52e1f6cadee414.png",
    "revision": "50998a707fa0df7ff921929284093be7"
  },
  {
    "url": "images/posts/7755e0da64e4b66e6cbd4.png",
    "revision": "54f01ec5fc8bba407998c925a2410e54"
  },
  {
    "url": "images/posts/devtool-timeline.png",
    "revision": "51a414a1da85d8f84b31f6d5dcabcabd"
  },
  {
    "url": "images/posts/dom-element.png",
    "revision": "65df98dedecebb8d28413dbb4c2cdde2"
  },
  {
    "url": "images/posts/javascript-bundlers.png",
    "revision": "9900ae0bacccbc73e4b8aaea885e0745"
  },
  {
    "url": "images/posts/javascript-export-compatibility.png",
    "revision": "f1e6ea85b78f6df7a72b53cbfcce72c6"
  },
  {
    "url": "images/posts/javascript-import-compatibility.png",
    "revision": "d94ad04db1112dcbe6e02d32bfc44ef4"
  },
  {
    "url": "images/posts/modem-HG8245H.png",
    "revision": "8b82d5a2de6a6ab2440ece4f87be4010"
  },
  {
    "url": "images/posts/module-bundler.png",
    "revision": "0ff2a967e702cd0f4f007ad434363d58"
  },
  {
    "url": "images/posts/preact-bundle-pobia.png",
    "revision": "8db5680d7991f1af31e5e196df29d882"
  },
  {
    "url": "images/posts/schema-bundler.png",
    "revision": "2bf73464d7eebb6b4e5d2c0ef38112a8"
  },
  {
    "url": "images/posts/screenshot-preact-hello-world.png",
    "revision": "c359c4307417d3d259e93778d774a7c4"
  },
  {
    "url": "images/profiles/avatar.jpg",
    "revision": "30e02b03e0fdfd856e8f85f0e425b32a"
  },
  {
    "url": "index.html",
    "revision": "cb2d349f68b2359d258a70f258c29ad9"
  },
  {
    "url": "informasi/belajar-finansial-literasi.html",
    "revision": "b3b690e8a6b967eb51b2ad46fc2d47ce"
  },
  {
    "url": "informasi/index.html",
    "revision": "674fea8438109ca4d70825a0d74dfd34"
  },
  {
    "url": "informasi/password-modem-telkom-hg8245h.html",
    "revision": "4e7f59d5d28691de3294aef19c740106"
  },
  {
    "url": "javascript/index.html",
    "revision": "6eca5699ca01c47307ac19270a90e4a8"
  },
  {
    "url": "javascript/membuat-api-qr-code-dengan-cloudflare-worker.html",
    "revision": "3919e2cd5e891662cb65741b5a4a4389"
  },
  {
    "url": "javascript/modules-and-bundler.html",
    "revision": "c21e07ad30a501f4caadc89823d9cc9c"
  },
  {
    "url": "javascript/setup-nodejs-project-dengan-typescript.html",
    "revision": "5d8c80dedfcf1da745c2013d8125188b"
  },
  {
    "url": "javascript/virtual-dom.html",
    "revision": "6115691151b55acb2ed2d14e22b5300e"
  },
  {
    "url": "logo.png",
    "revision": "b3539ff484fe4aaebcdae1f4a84c918e"
  },
  {
    "url": "logo.svg",
    "revision": "2baecf043886b72588aa50d30774fe8b"
  },
  {
    "url": "preact/belajar-preact/apa-itu-preact-js.html",
    "revision": "b128414c67de7621e58ff5ae02c5bcb8"
  },
  {
    "url": "preact/belajar-preact/index.html",
    "revision": "4bda02553739ed82beaa843cedcac7a2"
  },
  {
    "url": "preact/belajar-preact/preact-hello-world.html",
    "revision": "563d6ceb181409ea1d748df1f2f215ac"
  },
  {
    "url": "preact/belajar-preact/setup-preact-app.html",
    "revision": "2db4383b2d89bafe51ec919f560db1d6"
  },
  {
    "url": "preact/index.html",
    "revision": "2079335f9ce6d19091f8d70620f1e99c"
  },
  {
    "url": "preact/preact-cli.html",
    "revision": "5b11d792cc7b08815bdad188abeb91d4"
  },
  {
    "url": "preact/preact-hooks.html",
    "revision": "ef0ad973d68cc85cb12d391531bc696d"
  },
  {
    "url": "preact/preact-unistore.html",
    "revision": "d336eaebb5bdba442324d89f68f00595"
  },
  {
    "url": "preact/unistore-array.html",
    "revision": "1c8aafabd0999789c4524802b9f98ca0"
  },
  {
    "url": "thumbnail/belajar-finansial-literasi--nyandev-blog.jpg",
    "revision": "cbcd1583416102117074fe0e43e30330"
  },
  {
    "url": "thumbnail/belajar-preact-bundler.jpg",
    "revision": "0461b49bc95a07d43240475fc30f5748"
  },
  {
    "url": "thumbnail/belajar-preact-hello-world.jpg",
    "revision": "e08a3bbfcd560f7b8b7e5e5f7aab9f89"
  },
  {
    "url": "thumbnail/belajar-preact-parcel-bundler.jpg",
    "revision": "9b4e04b11ab9ed185f038a18948d3a00"
  },
  {
    "url": "thumbnail/belajar-preact-perkenalan.jpg",
    "revision": "8327285aba0a69abfbd9cd9eaf89d38b"
  },
  {
    "url": "thumbnail/extract-meta-data--nyandev-blog.jpg",
    "revision": "433a308ce49fe75c3310cadfff68415a"
  },
  {
    "url": "thumbnail/javascript-modules-bundler-nyandev-blog.jpg",
    "revision": "0f358f8d2614900d593396208c9d2af2"
  },
  {
    "url": "thumbnail/javascript-virtual-dom-nyandev-blog.jpg",
    "revision": "05a1eba49d664dd8a8588f4baa85cdc0"
  },
  {
    "url": "thumbnail/lonely-poor-surabayan.jpg",
    "revision": "efeaefd21ac2d4d8419a9873f99b0248"
  },
  {
    "url": "thumbnail/preact-cli--nyandev-blog.jpg",
    "revision": "f4eb0eeb77d60724a65e22c1b768172a"
  },
  {
    "url": "thumbnail/preact-hooks--nyandev-blog.jpg",
    "revision": "08c4a0e3e72f82f6032843f1f1564f24"
  },
  {
    "url": "thumbnail/preact-unistore--nyandev-blog.jpg",
    "revision": "328acf1fdb2421dc39a5ef41712aef17"
  },
  {
    "url": "thumbnail/tips-login-wifiid-linux--nyandev-blog.jpg",
    "revision": "21a0aaf44636aa619338980baafc6639"
  },
  {
    "url": "tips/index.html",
    "revision": "d9a085197cda95fc77cef01ad77091d9"
  },
  {
    "url": "tips/meta-data-extract.html",
    "revision": "d1c47b07e7dc1af0efc946648d077e42"
  },
  {
    "url": "tips/wifi-id-not-redirected.html",
    "revision": "beb9af0937451d553bd5c522f02fb6b6"
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
