(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{256:function(a,e,n){"use strict";n.r(e);var t=n(19),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"tips-menambahkan-algolia-docsearch-di-vuepress"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tips-menambahkan-algolia-docsearch-di-vuepress"}},[a._v("#")]),a._v(" Tips: Menambahkan Algolia DocSearch di Vuepress")]),a._v(" "),n("Author",{attrs:{name:"Ryan Aunur Rassyid"}}),a._v(" "),n("FeaturedImage",{attrs:{src:"/images/covers/tips-menambahkan-algolia-docsearch-di-vuepress.png",source:"docsearch.algolia.com",sourceLink:"https://docsearch.algolia.com"}}),a._v(" "),n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),n("p",[a._v("Search ("),n("em",[a._v("Pencarian")]),a._v(") adalah sebuah fitur vital dalam penyimpanan. Tak hayal Google dikenal dengan mesin pencarinya yang andal. Berjuta-juta dokumen yang ada di internet dikenalinya supaya memudahkan orang untuk mencari dokumen yang ingin dicarinya. Pada artikel kali ini kita akan bahas "),n("strong",[a._v("Algolia DocSearch")]),a._v(" dan cara implementasinya di "),n("strong",[a._v("Vuepress")]),a._v(".")]),a._v(" "),n("p",[a._v("Vuepress menyebut dirinya static-site generator yang fungsi nya menghasilkan website statis menggunakan Framework "),n("strong",[a._v("Vue")]),a._v(". Vuepress sendiri banyak dipakai untuk membuat sebuah website dokumentasi pada project atau library. Bahkan saat artikel ini ditulis, website "),n("strong",[a._v("https://blog.nyandev.id")]),a._v(" ini bangun diatas Vuepress.")]),a._v(" "),n("p",[a._v("Vuepress sendiri menyediakan fitur search built-in yang hanya meng-"),n("em",[a._v("index")]),a._v(" judul tiap halaman. Jadi, ketika pengunjung ingin mencari kata yang ada dalam artikel (content) maka tidak akan ada sugesti yang muncul. Untuk mengatasi permasalahan ini kita bisa menggunakan fitur search "),n("em",[a._v("Algolia DocSearch")]),a._v(" yang sudah tersedia plugin (build-in functionality) pada Vuepress untuk mempermudah kita meng-implementasikannya.")]),a._v(" "),n("h2",{attrs:{id:"table-of-contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[a._v("#")]),a._v(" Table of Contents")]),a._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#introduction"}},[a._v("Introduction")])]),n("li",[n("a",{attrs:{href:"#table-of-contents"}},[a._v("Table of Contents")])]),n("li",[n("a",{attrs:{href:"#persiapan"}},[a._v("Persiapan")])]),n("li",[n("a",{attrs:{href:"#algolia-docsearch-sraper"}},[a._v("Algolia DocSearch Sraper")]),n("ul",[n("li",[n("a",{attrs:{href:"#instalasi-docsearch"}},[a._v("Instalasi DocSearch")])]),n("li",[n("a",{attrs:{href:"#konfigurasi-scraper"}},[a._v("Konfigurasi Scraper")])]),n("li",[n("a",{attrs:{href:"#file-env"}},[a._v("File .env")])]),n("li",[n("a",{attrs:{href:"#menjalankan-scraper"}},[a._v("Menjalankan Scraper")])])])]),n("li",[n("a",{attrs:{href:"#integrasi-vuepress"}},[a._v("Integrasi Vuepress")])]),n("li",[n("a",{attrs:{href:"#referensi"}},[a._v("Referensi")])])])]),n("p"),a._v(" "),n("h2",{attrs:{id:"persiapan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#persiapan"}},[a._v("#")]),a._v(" Persiapan")]),a._v(" "),n("p",[a._v("Adapun hal-hal yang perlu kita persiapkan terlebih dahulu yaitu:")]),a._v(" "),n("ul",[n("li",[a._v("Alogila Active Account.")]),a._v(" "),n("li",[a._v("Docker "),n("code",[a._v("v19.03.8")]),a._v(" atau "),n("code",[a._v("latest")]),a._v(".")]),a._v(" "),n("li",[a._v("Vuepress")])]),a._v(" "),n("h2",{attrs:{id:"algolia-docsearch-sraper"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#algolia-docsearch-sraper"}},[a._v("#")]),a._v(" Algolia DocSearch Sraper")]),a._v(" "),n("p",[a._v("Untuk melakukkan menambahkan object pada index, kita bisa melakukkan sraping menggunakan module yang tersedia dari Algolia DocSearch. Alogila secara secara gratis telah menyediakan layanan indexing yang bernama DocSearch. Namun layanan ini diperuntunkan untuk website resmi dokumentasi suatu program atau layanan yang "),n("em",[a._v("open-source")]),a._v(". Layanan tersebut melakukkan indexing pada halaman keseluruhan website tiap 24 jam.")]),a._v(" "),n("p",[a._v("Untuk website pribadi atau bukan dokumentasi kamu tetap bisa menggunakan layanan tersebut namun dengan catatan dijalankan sendiri (Run your own). Terima kasih kepada Docker yang membuat semuanya mudah tanpa memperdulikan kesalahan env dan version conflict suatu dependency.")]),a._v(" "),n("a",{staticClass:"link-preview",attrs:{href:"https://github.com/algolia/docsearch-scraper",target:"_blank"}},[n("div",{staticClass:"link-preview--content"},[n("p",{staticClass:"title"},[a._v("GitHub - algolia/docsearch-scraper: DocSearch - Scraper")]),n("p",[a._v("DocSearch - Scraper. Contribute to algolia/docsearch-scraper development by creating an account on GitHub.")]),a._v(" "),n("p",[a._v("github.com")])]),n("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://avatars3.githubusercontent.com/u/2034458?s=400&v=4)"}})]),n("p",[a._v("Kita bisa menjalankan nya dari code-base (dengan setup project python dan install beberapa dependency) atau menggunakan docker. Pada artikel kali ini kita akan menggunakan docker, kenapa docker? karena docker membuat aplikasi tersebut berjalan didalam container terisolasi yang tujuan utamanya menghindari bentrok pada versi library atau package yang dibutuhkan. Alasan lainnya kita hanya melakukkan satu perintah maka docker yang akan mengurus sisanya sehingga aplikasi dapat berjalan dengan baik (otomatis) tanpa melakukkan konfigurasi apapun.")]),a._v(" "),n("h3",{attrs:{id:"instalasi-docsearch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#instalasi-docsearch"}},[a._v("#")]),a._v(" Instalasi DocSearch")]),a._v(" "),n("p",[a._v("Untuk memasang atau menjalankan docsearch kita perlu terlebih dahulu mengunduh docker image nya supaya dapat berjalanan sebagai docker container nantinya.")]),a._v(" "),n("p",[a._v("Kita tinggal jalankan perintah docker pull, seperti di bawah ini:")]),a._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[a._v("$ docker pull algolia/docsearch-scraper\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[a._v("Catatan")]),a._v(" "),n("p",[a._v("Perlu diketahui bahwa prosess mengunduh docker image tersebut memakan disk dan penggunaan data internet yang lumayan banyak. Jika kamu menggunakan hotspot atau data selular (modem), pastikan kuota anda terpenuhi dan cukup untuk melakukkan pengunduhan image.")])]),a._v(" "),n("h3",{attrs:{id:"konfigurasi-scraper"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#konfigurasi-scraper"}},[a._v("#")]),a._v(" Konfigurasi Scraper")]),a._v(" "),n("p",[a._v("Kita membutuhkan 2 file konfigurasi yaitu "),n("code",[a._v("config.json")]),a._v(" dan "),n("code",[a._v(".env")]),a._v(". File "),n("code",[a._v("config.json")]),a._v(" berisi konfigurasi url dan element apa saja yang akan si scrape, sedangkan file "),n("code",[a._v(".env")]),a._v(" berisi informasi sensitif berupa ID Aplikasi dan API Key.")]),a._v(" "),n("h4",{attrs:{id:"file-config-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#file-config-json"}},[a._v("#")]),a._v(" File config.json")]),a._v(" "),n("Gist",{attrs:{id:"d5c7d2b9da18bb58d48b7f3dc0c9acce",file:"config.json"}}),a._v(" "),n("h3",{attrs:{id:"file-env"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#file-env"}},[a._v("#")]),a._v(" File .env")]),a._v(" "),n("Gist",{attrs:{id:"d5c7d2b9da18bb58d48b7f3dc0c9acce",file:".env"}}),a._v(" "),n("h3",{attrs:{id:"menjalankan-scraper"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#menjalankan-scraper"}},[a._v("#")]),a._v(" Menjalankan Scraper")]),a._v(" "),n("p",[a._v("Sebelum menjalankan kita install terlebih dahulu "),n("code",[a._v("jq")]),a._v(" (JSON Command-line processor).")]),a._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[a._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" jq\n")])])]),n("p",[a._v("Untuk Sistem operasi Mac dan Windows bisa kunjungi langkah install nya di web wiki dokumentasi resmi jq.")]),a._v(" "),n("a",{staticClass:"link-preview",attrs:{href:"https://github.com/stedolan/jq/wiki/Installation",target:"_blank"}},[n("div",{staticClass:"link-preview--content"},[n("p",{staticClass:"title"},[a._v("Installation · stedolan/jq Wiki · GitHub")]),n("p",[a._v("Command-line JSON processor. Contribute to stedolan/jq development by creating an account on GitHub.")]),a._v(" "),n("p",[a._v("github.com")])]),n("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://avatars3.githubusercontent.com/u/79765?s=400&v=4)"}})]),n("p",[a._v("Selanjutnya kita bisa menjalankan DocSearch untuk melakukkan prosess indexing pada website kita. Untuk me-running DocSearch kita tinggal mengetikkan perintah dibawah ini.")]),a._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[a._v("$ docker run -it --env-file"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(".env -e "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"CONFIG='),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /path/to/your/config.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" jq -r tostring"),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v(" algolia/docsearch-scraper\n")])])]),n("p",[a._v("Setelah prosess indexing berjalan kita tinggal cek apakah indexing sudah dibuat di Algolia, caranya buka Dashboard Aloglia kalian.")]),a._v(" "),n("h2",{attrs:{id:"integrasi-vuepress"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#integrasi-vuepress"}},[a._v("#")]),a._v(" Integrasi Vuepress")]),a._v(" "),n("p",[a._v("Selanjutnya kita konfigurasi vuepress agar ter-integrasi dengan algolia yang nantinya default search kita adalah Alogila tersebut. Sebelumnya kita perlu mempersiapkan API Key khusus untuk search saja. API Key yang dibuat untuk scraping jangan digunakan pada tahap ini, karena privilege di API tersebut bukan untuk pencarian.")]),a._v(" "),n("ol",[n("li",[a._v("Buka halaman dashboard Alogila.")]),a._v(" "),n("li",[a._v("Pilih Menu "),n("strong",[a._v("API Keys")]),a._v(".")]),a._v(" "),n("li",[a._v("Pilih tab "),n("strong",[a._v("All API Keys")]),a._v(".")]),a._v(" "),n("li",[a._v("Kita buat API Key baru dengan klik "),n("strong",[a._v("New API Key")]),a._v(".")])]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/posts/algolia-keys-search.png",alt:"Algolia API Key Search"}})]),a._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[a._v("Selanjutnya isi "),n("em",[a._v("Description")]),a._v(' dengan "Search API" atau deskripsi API kalian.')]),a._v(" "),n("li",[n("em",[a._v("Indices")]),a._v(" dengan nama Index.")]),a._v(" "),n("li",[n("em",[a._v("ACL")]),a._v(" pilih "),n("strong",[a._v("search")]),a._v(".")]),a._v(" "),n("li",[a._v("Lalu Update.")])]),a._v(" "),n("p",[a._v("Simpan API Key yang dihasilkan yang nantinya akan kita gunakan. Selanjutnya kita setting vuepress kita, buka file config vuepress kalian. Lalu sesuaikan dengan konfigurasi berikut.")]),a._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[a._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  themeConfig"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    algolia"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      appId"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'YOUR_APPLICATION_ID'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      apiKey"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'YOUR_SEARCH_API_KEY'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      indexName"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'YOUR_INDEX_NAME'")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("p",[a._v("Lalu coba jalankan "),n("code",[a._v("npm run dev")]),a._v(" atau "),n("code",[a._v("vuepress dev")]),a._v(".")]),a._v(" "),n("h2",{attrs:{id:"referensi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#referensi"}},[a._v("#")]),a._v(" Referensi")]),a._v(" "),n("a",{staticClass:"link-preview",attrs:{href:"https://docsearch.algolia.com/docs/how-do-we-build-an-index",target:"_blank"}},[n("div",{staticClass:"link-preview--content"},[n("p",{staticClass:"title"},[a._v("How do we build a DocSearch index? | DocSearch")]),n("p",[a._v("import useBaseUrl from '@docusaurus/useBaseUrl';")]),a._v(" "),n("p",[a._v("docsearch.algolia.com")])]),n("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://docsearch.netlify.com/img/og_image.png)"}})])],1)}),[],!1,null,null,null);e.default=s.exports}}]);