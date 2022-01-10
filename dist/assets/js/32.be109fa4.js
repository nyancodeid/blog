(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{449:function(a,t,e){"use strict";e.r(t);var s=e(34),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"membuat-api-generate-qr-code-menggunakan-cloudflare-worker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#membuat-api-generate-qr-code-menggunakan-cloudflare-worker"}},[a._v("#")]),a._v(" Membuat API Generate QR-Code menggunakan Cloudflare Worker")]),a._v(" "),e("Author",{attrs:{name:"Ryan Aunur Rassyid"}}),a._v(" "),e("FeaturedImage",{attrs:{src:"/images/covers/membuat-api-qr-code-dengan-cloudflare-worker.jpg",author:"Guilherme Cunha",source:"unsplash.com",sourceLink:"https://unsplash.com/photos/4zwozQxDbD4"}}),a._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),e("p",[a._v("Berawal dari konsep "),e("strong",[a._v("Serverless")]),a._v(", kita tau bahwa nodejs sudah hadir diberbagai Cloud Provider yang menyediakan produk serverless nya. Contoh saja "),e("strong",[a._v("AWS")]),a._v(" dengan "),e("strong",[a._v("AWS Lambda")]),a._v(" nya dan "),e("strong",[a._v("Google Firebase")]),a._v(" dengan "),e("strong",[a._v("Firebase Function")]),a._v(" nya. Kita tidak ada masalah tentunya, toh dengan "),e("em",[a._v("serverless")]),a._v(" kita nggak lagi peduli dengan server, kita hanya berharap aplikasi kita berjalan dengan baik.")]),a._v(" "),e("p",[a._v("Jadi kenapa kita bahas "),e("em",[a._v("serverless")]),a._v(" kalau tidak ada masalah? ya ini cukup menarik. Kita tau bahwa "),e("em",[a._v("serverless")]),a._v(" punya kelemahan yaitu "),e("em",[a._v("boot time")]),a._v(". Jadi selama app kita di-"),e("em",[a._v("serverless")]),a._v(" nggak ada yang akses selama waktu tenggang (idle) yang sudah ditentukan provider maka app kita akan dibekukan. Jadi, setiap kali ada yang akses maka akan dicairkan kembali atau dalam istilahnya adalah "),e("em",[a._v("cold start")]),a._v(". Ini memakan waktu beberapa ms atau detik sih (berterima kasih ke fitur snapshot nya "),e("code",[a._v("V8")]),a._v(") karena untuk nodejs kita perlu install dependency sebelum kita bisa menjalankan program seutuhnya.")]),a._v(" "),e("a",{staticClass:"link-preview",attrs:{href:"https://dashbird.io/blog/can-we-solve-serverless-cold-starts",target:"_blank"}},[e("div",{staticClass:"link-preview--content"},[e("p",{staticClass:"title"},[a._v("Can We Solve Serverless Cold Starts?")]),e("p",[a._v("What are cold starts and practical ways to solve them")]),a._v(" "),e("p",[a._v("dashbird.io")])]),e("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://dashbird.io/images/blog/2019-03-20/cold-ice-optimized-square.jpg)"}})]),e("p",[a._v("Nah NodeJS pada versi baru-baru ini merilis fitur yang sudah lama dinanti yaitu "),e("strong",[a._v("Worker")]),a._v(". Worker ini memungkinkan kita menjalankan sebuah pekerjaan di thread lain yang tidak membebankan main thread. Fitur inilah yang dipakai oleh "),e("strong",[a._v("Cloudflare Worker")]),a._v(". Fitur ini menyelesaikan masalah "),e("em",[a._v("cold start")]),a._v(" dari serverless sebelumnya karena server hanya menjalankan script worker kita saja dan server selalu standby (tidak mati). Cold start yang diperlukan hanya lah "),e("strong",[a._v("4ms")]),a._v(", ini berbeda jauh bahkan 50x lebih cepat.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.statically.io/img/telegra.ph/f=auto,q=100/file/9a8ce65436f84d53c5a18.png",alt:"NodeJS Workers"}}),a._v(" "),e("em",[a._v("NodeJS Thread - source "),e("a",{attrs:{href:"https://nodesource.com/blog/worker-threads-nodejs",target:"_blank",rel:"noopener noreferrer"}},[a._v("nodesource.com"),e("OutboundLink")],1)])]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("Gaol")]),a._v(" "),e("p",[a._v("Goal dari tutorial kali ini adalah Membuat API yang bisa generate QR-Code berupa gambar dari text yang kita inputkan.")])]),a._v(" "),e("h2",{attrs:{id:"persiapan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#persiapan"}},[a._v("#")]),a._v(" Persiapan")]),a._v(" "),e("p",[a._v("Sebelum kita masuk tutorial kita perlu mempersiapkan tools yang akan kita gunakan, yaitu:")]),a._v(" "),e("ul",[e("li",[a._v("Node.js ("),e("code",[a._v("^v12.16")]),a._v(")")]),a._v(" "),e("li",[a._v("Wrangler ("),e("code",[a._v("^v1.6.0")]),a._v(")")])]),a._v(" "),e("p",[a._v("Yang belum install node.js silahkan install terlebih dahulu sesuai dengan platform yang digunakan masing-masing. Ingat bahwa gunakan versi "),e("code",[a._v("12")]),a._v(" keatas atau LTS terbaru ya.")]),a._v(" "),e("p",[a._v("Selanjutnya kita install tool bernama "),e("code",[a._v("wrangler")]),a._v(", tool (CLI) ini disediakan secara official oleh Cloudflare Worker sendiri untuk memudahkan kita membuat project di Cloudflare Worker. Cara installnya adalah:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g @cloudflare/wrangler\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# atau untuk pengguna `yarn`")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" global "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" @cloudflare/wrangler\n")])])]),e("p",[a._v("Jika sudah tinggal kita test menampilkan versi dengan menuliskan perintah dibawah ini:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v(" -v\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# v12.16.0")]),a._v("\n$ wrangler -V\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# wrangler v1.6.0")]),a._v("\n")])])]),e("p",[a._v("Selanjutnya kita akan configurasi wrangler supaya bisa deploy ke akun "),e("strong",[a._v("Cloudflare Worker")]),a._v(" kita dengan cara ketik perintah:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ wrangler config\n")])])]),e("p",[a._v("Untuk API Key nya kita buat dulu di:\n"),e("a",{attrs:{href:"https://dash.cloudflare.com/profile/api-tokens",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://dash.cloudflare.com/profile/api-tokens"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v('Lalu klik "'),e("strong",[a._v("Create Token")]),a._v('", Selanjutnya isi permission nya sesuai dengan gambar dibawah ini. Sesuaikan inputan yang lain lalu klik "'),e("strong",[a._v("Continue to summary")]),a._v('" dan copy tokennya.')]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.statically.io/img/telegra.ph/f=auto,q=100/file/e80da438e093dff6c22cb.png",alt:"Cloudflare Token"}}),a._v(" "),e("em",[a._v("Create Token Cloudflare Worker Permissions")])]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("Penting")]),a._v(" "),e("p",[a._v("Karena token tidak bisa dilihat kembali harap simpan baik baik kode token yang sudah diberikan. Seperti halnya password pastikan kamu menyimpannya dengan aman.")])]),a._v(" "),e("h2",{attrs:{id:"setup-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-project"}},[a._v("#")]),a._v(" Setup Project")]),a._v(" "),e("p",[a._v("Karena semua tool yang dibutuhkan sudah siap, selanjutnya kita akan setup project kita menggunakan "),e("em",[a._v("wrangler")]),a._v(". Buka command line dan arahkan ke "),e("em",[a._v("directory")]),a._v(" kerja kita. Untuk setup project dengan menggunakan "),e("em",[a._v("wrangler")]),a._v(" kita bisa menjalankan perintah:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ wrangler generate qr-code\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# open `qr-code` directory")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" qr-code\n")])])]),e("p",[a._v("Kita disini akan coding dari awal tanpa menggunakan template. Disini wrangler akan membuat folder sesuai dengan nama project kita yaitu "),e("code",[a._v("qr-code")]),a._v(". Selanjutnya kita buka directory nya dan kita cek terlebih dahulu file "),e("code",[a._v("wrangler.toml")]),a._v(" yang digunakan untuk config project wrangler kita. Konfigurasikan file "),e("code",[a._v("wrangler.toml")]),a._v(" seperti berikut ini:")]),a._v(" "),e("div",{staticClass:"language-git extra-class"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[a._v("name = "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"qr-api"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[a._v('-type = "javascript"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v('+type = "webpack"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[a._v('-account_id = ""')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v('+account_id = "YOUR_ACCOUNT_ID"')]),a._v("\nworkers_dev = true\nroute = "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\nzone_id = "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("Catatan")]),a._v(" "),e("p",[a._v("Jika field "),e("code",[a._v("account_id")]),a._v(" sudah ada, kamu tidak perlu menggantinya.")])]),a._v(" "),e("p",[a._v("Disini "),e("code",[a._v("type")]),a._v(" diubah dari javascript ke webpack karena kita akan menggunakan "),e("em",[a._v("bundler")]),a._v(" "),e("strong",[a._v("webpack")]),a._v(" untuk meng-"),e("em",[a._v("compile")]),a._v(" npm package kita supaya menjadi satu file "),e("code",[a._v(".js")]),a._v(". Kita tidak perlu melakukkan konfigurasi webpack karena wrangler sudah melakukkannya untuk kita.")]),a._v(" "),e("h2",{attrs:{id:"coding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coding"}},[a._v("#")]),a._v(" Coding")]),a._v(" "),e("p",[a._v("Untuk proses koding sendiri kita akan bekerja pada file "),e("code",[a._v("index.js")]),a._v(". Pada Cloudflare Worker kita akan mendefinisikan function "),e("code",[a._v("handleRequest")]),a._v(" yang menangani request atau yang bertugas sebagai gateway dari request kita. Karena Cloudflare menggunakan "),e("code",[a._v("fetch")]),a._v(" maka kita harus tau terlebih dahulu apa itu "),e("code",[a._v("Request")]),a._v(" dan "),e("code",[a._v("Response")]),a._v(".")]),a._v(" "),e("a",{staticClass:"link-preview",attrs:{href:"https://developer.mozilla.org/id/docs/Web/API/Fetch_API",target:"_blank"}},[e("div",{staticClass:"link-preview--content"},[e("p",{staticClass:"title"},[a._v("Fetch API - Referensi API Web | MDN")]),e("p",[a._v("XMLHttpRequest")]),a._v(" "),e("p",[a._v("developer.mozilla.org")])]),e("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://developer.mozilla.org/static/img/opengraph-logo.72382e605ce3.png)"}})]),e("p",[a._v("Oke kita koding saja supaya tau penerapan nya.")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'fetch'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("event")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("respondWith")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("handleRequest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("p",[a._v("Request kita akan dihandle oleh Listener tersebut jadi fungsi ini wajib ada pada script kalian. Bahasa mudahnya adalah "),e("code",[a._v('"Jika ada request maka jalankan fungsi ini"')]),a._v(". Nah selanjutnya adalah kita buat "),e("code",[a._v("handleRequest")]),a._v(" untuk mempermudah kita menangani request dan melakukkan "),e("em",[a._v("decision")]),a._v(" atau routing.")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("async")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("handleRequest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("request")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("method "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("===")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'GET'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" url "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" text "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("searchParams"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'text'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("generateQrCode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" text "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("catch")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Response")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Internal Server Error'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("status")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("500")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Response")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Method Not Allowed'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("status")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("405")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Rencannya kita melempar "),e("code",[a._v("text")]),a._v(" kedalam url query yang memudahkan kita memanggil Worker kita bahkan didalam element "),e("code",[a._v("<img />")]),a._v(" sekalipun. Karena merunut penulis, jika kita mengirim request dengan method POST maka itu hanya bisa terjadi jika kita menggunakan "),e("code",[a._v("fetch")]),a._v(" atau "),e("code",[a._v("ajax")]),a._v(" (XHR). Jadi akan lebih jadi merepotkan. Kita akan memperlakukkan API kita sama halnya dengan file image yang langsung di panggil saja tanpa perlu melakukkan ajax dan lain sebagainya. URL pemanggilan nya akan kita buat seperti ini:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("https://domain.com?text"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("TEXT_QR_CODE_KITA\n")])])]),e("p",[a._v("Selanjutnya kita akan membuat function "),e("code",[a._v("generateQrCode")]),a._v(", tapi sebelum itu kita harus install package yang memungkinkan kita generate gambar kode qr dengan mudah yaitu "),e("code",[a._v("qr-image")]),a._v(". Kita install menggunakan perintah:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" qr-image\n")])])]),e("p",[a._v("Lalu kita bisa import package nya, dan pastikan letakkan di atas sendiri. Karena kita hanya perlu method "),e("code",[a._v("imageSync")]),a._v(" maka kita import method "),e("code",[a._v("imageSync")]),a._v(" saja. Dengan cara seperti berikut:")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" imageSync "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'qr-image'")]),a._v("\n")])])]),e("p",[a._v("Sekarang kita bisa buat function "),e("code",[a._v("generateQrCode")]),a._v(" yang fungsi nya merubah text yang diminta menjadi gambar QR Code. Kita juga akan memasang "),e("code",[a._v("Cache-Control")]),a._v(" pada header response kita supaya tidak melakukkan request berulang untuk text yang sama, kita bisa menghemat request dengan ini.")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("generateQrCode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  text\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" image "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("imageSync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("text "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://blog.nyan.my.id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Response")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("image"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("status")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("headers")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v("'Content-Type'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'image/png'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[a._v("'Cache-Control'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'public, max-age=31536000'")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Untuk opsi lain seperti merubah lebar margin, "),e("em",[a._v("error correction level")]),a._v(", dan type image ("),e("code",[a._v("png")]),a._v(", "),e("code",[a._v("svg")]),a._v(", "),e("code",[a._v("eps")]),a._v(", dan "),e("code",[a._v("pdf")]),a._v(") kamu bisa lihat di halaman NPM nya untuk melihat opsi lain yang ada pada package "),e("code",[a._v("qr-image")]),a._v(".")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.statically.io/img/telegra.ph/f=auto,q=100/file/e49a121b2d1d5452618bc.png",alt:"qr-image"}}),a._v(" "),e("em",[a._v("Konfigurasi lain yang ada pada package "),e("code",[a._v("qr-image")])])]),a._v(" "),e("p",[a._v("Oke semua script sudah ada dan yang dibutuhkan sudah siap. Selanjutnya kita akan melakukkan test.")]),a._v(" "),e("h2",{attrs:{id:"preview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preview"}},[a._v("#")]),a._v(" Preview")]),a._v(" "),e("p",[a._v("Wrangler menyediakan fitur "),e("code",[a._v("preview")]),a._v(" untuk melakukkan uji coba atau test terhadap script worker yang akan kita publish. Caranya dengan menjalankan perintah berikut:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ wrangler preview\n")])])]),e("p",[a._v("Maka browser akan membuka website yang memungkinkan kita melakukkan test, dan melihat console dari program javascript kita. Domain yang disediakan memang "),e("code",[a._v("example.com")]),a._v(" tapi jangan khawatir ini hanya untuk test saja dan memang seperti itu adanya.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.statically.io/img/telegra.ph/f=auto,q=100/file/85d4c27668a1862a86fe8.png",alt:"Wrangler Preview"}}),a._v(" "),e("em",[a._v("Preview Script sebelum kita Deploy")])]),a._v(" "),e("h2",{attrs:{id:"build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[a._v("#")]),a._v(" Build")]),a._v(" "),e("p",[a._v("Pada tahap ini script kita sudah berjalan sesuai dengan keinginan kita. Selanjutnya adalah prosess deploy, tapi judul tahap ini "),e("code",[a._v("build")]),a._v("?. Ya, wrangler menyediakan perintah build karena hasil build script kita yang ada pada "),e("code",[a._v("worker/script.js")]),a._v(" juga bisa kita manfaatkan untuk Web Worker kita sendiri.")]),a._v(" "),e("p",[a._v("Untuk build script, kita bisa menjalankan perintah seperti berikut:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ wrangler build\n")])])]),e("p",[a._v("Prosess build script:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("⬇️ Installing wranglerjs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n⬇️ Installing wasm-pack"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n Built successfully, built project size is "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("44")]),a._v(" KiB.\n")])])]),e("h2",{attrs:{id:"deploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[a._v("#")]),a._v(" Deploy")]),a._v(" "),e("p",[a._v("Akhirnya kita bisa melakukkan deploy script kita ke Cloudflare Worker. Untuk melakukkan deploy kita perlu tau bahwa perintah ini tidak memerlukkan perintah sebelumnya ("),e("code",[a._v("build")]),a._v(") karena secara otomatis perintah ini akan build sekaligus mempublish script kita.")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" wrangler publish\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("Catatan")]),a._v(" "),e("p",[a._v("Karena "),e("code",[a._v("wrangler publish")]),a._v(" memerlukkan informasi API KEY yang disimpan kedalam folder dengan akses Administrasi/root maka kita perlu menambahkan "),e("code",[a._v("sudo")]),a._v(" bagi pengguna Linux.")])]),a._v(" "),e("p",[a._v("Setelah prosess deploy berhasil kita juga bisa tau alamat worker kita.")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("Successfully published your script to https://qr-api.nyandev.workers.dev\n")])])]),e("p",[a._v("Contoh response worker yang berjalan dengan sangat baik:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ http https://qr-api.nyandev.workers.dev?text"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nyandev\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Result")]),a._v("\nHTTP/1.1 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),a._v(" OK\nCF-RAY: 570693510c77e811-LAX\nCache-Control: public, max-age"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("31536000")]),a._v("\nConnection: keep-alive\nContent-Length: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("336")]),a._v("\nContent-Type: image/png\nDate: Sat, 07 Mar "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2020")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),a._v(":03:15 GMT\nExpect-CT: max-age"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("604800")]),a._v(", report-uri"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"')]),a._v("\nServer: cloudflare\nVary: Accept-Encoding\n")])])]),e("h2",{attrs:{id:"hasil-akhir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hasil-akhir"}},[a._v("#")]),a._v(" Hasil Akhir")]),a._v(" "),e("p",[a._v("Berikut adalah script penuh dari hasil akhir kita dalam membuat generator qr-code:")]),a._v(" "),e("Gist",{attrs:{id:"nyancodeid/03a24d32cb4e25f018e446a2cf9443e2"}}),a._v(" "),e("p",[a._v("Kamu bisa melihat hasil akhir dan script sepenuhnya di Repository yang sudah saya buat dibawah ini:")]),a._v(" "),e("a",{staticClass:"link-preview",attrs:{href:"https://github.com/nyancodeid/qr-code-api",target:"_blank"}},[e("div",{staticClass:"link-preview--content"},[e("p",{staticClass:"title"},[a._v("GitHub - nyancodeid/qr-code-api: Cloudflare Worker Generate QR Code")]),e("p",[a._v("Cloudflare Worker Generate QR Code. Contribute to nyancodeid/qr-code-api development by creating an account on GitHub.")]),a._v(" "),e("p",[a._v("github.com")])]),e("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://avatars1.githubusercontent.com/u/24630806?s=400&v=4)"}})]),e("h2",{attrs:{id:"referensi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#referensi"}},[a._v("#")]),a._v(" Referensi")]),a._v(" "),e("a",{staticClass:"link-preview",attrs:{href:"https://developers.cloudflare.com/workers/tutorials/build-a-serverless-function",target:"_blank"}},[e("div",{staticClass:"link-preview--content"},[e("p",{staticClass:"title"},[a._v("Build a Serverless Function | Cloudflare Workers")]),e("p",[a._v("Use Cloudflare’s APIs and edge network to build secure, ultra-fast applications.")]),a._v(" "),e("p",[a._v("developers.cloudflare.com")])]),e("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://cdn.statically.io/img/telegra.ph/f=auto,q=100/file/73935aea4865c151c4c70.png)"}})]),e("Disqus")],1)}),[],!1,null,null,null);t.default=n.exports}}]);