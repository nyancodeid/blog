(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{251:function(a,e,t){"use strict";t.r(e);var n=t(19),s=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"belajar-preact-setup-preact-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#belajar-preact-setup-preact-app"}},[a._v("#")]),a._v(" Belajar Preact: Setup Preact App")]),a._v(" "),t("Author",{attrs:{name:"Ryan Aunur Rassyid"}}),a._v(" "),t("FeaturedImage",{attrs:{src:"/images/covers/belajar-preact-bundler.jpg",author:"Nielsen Ramon",source:"unsplash.com",sourceLink:"https://unsplash.com/photos/okvqMfl78YE"}}),a._v(" "),t("h2",{attrs:{id:"table-of-content"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-of-content"}},[a._v("#")]),a._v(" Table of Content")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#table-of-content"}},[a._v("Table of Content")])]),t("li",[t("a",{attrs:{href:"#introduction"}},[a._v("Introduction")])]),t("li",[t("a",{attrs:{href:"#setup-project"}},[a._v("Setup Project")]),t("ul",[t("li",[t("a",{attrs:{href:"#install-preact-cli"}},[a._v("Install Preact-CLI")])]),t("li",[t("a",{attrs:{href:"#membuat-project-web"}},[a._v("Membuat Project Web")])])])]),t("li",[t("a",{attrs:{href:"#npm-script"}},[a._v("NPM Script")]),t("ul",[t("li",[t("a",{attrs:{href:"#start-development-server"}},[a._v("Start Development Server")])]),t("li",[t("a",{attrs:{href:"#build-project"}},[a._v("Build Project")])])])]),t("li",[t("a",{attrs:{href:"#kesimpulan"}},[a._v("Kesimpulan")])]),t("li",[t("a",{attrs:{href:"#referensi"}},[a._v("Referensi")])])])]),t("p"),a._v(" "),t("p",[a._v("Sebelum kita akan membuat project Preact App, kita akan belajar bagaimana cara setup project kita menggunakan tool CLI bernama "),t("code",[a._v("preact-cli")]),a._v(". Konsepnya mirip dengan "),t("code",[a._v("create-react-app")]),a._v(" yang memudahkan kita membuat setup dan mengelolah project kita.")]),a._v(" "),t("p",[a._v('Jika kalian belum tau atau belum paham familiar dengan modern web development, dalam artikel blog ini dengan judul "'),t("strong",[a._v("Javascript: Module and Bundler")]),a._v('" membahas sedikit tentang konsep modern web development yang sedikit berbeda dengan proses development web yang kita ketahui simple dan hanya membutuhkan Text Editor dan Browser.')]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("Informasi")]),a._v(" "),t("p",[a._v("Kalau teman teman sudah mengetahui atau sudah terbiasa dengan workflow project menggunakan React, kamu bisa skip dan lanjut ke series selanjutnya.")])]),a._v(" "),t("a",{staticClass:"link-preview",attrs:{href:"https://blog.nyandev.id/javascript/modules-and-bundler.html",target:"_blank"}},[t("div",{staticClass:"link-preview--content"},[t("p",{staticClass:"title"},[a._v("Javascript: Module and Bundler | NyanDev Blog")]),t("p",[a._v("Lebih mengenal apa itu Module dan Bundler dan alasan mereka ada.")]),a._v(" "),t("p",[a._v("blog.nyandev.id")])]),t("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://blog.nyandev.id/thumbnail/javascript-modules-bundler-nyandev-blog.jpg)"}})]),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),t("p",[a._v("Dalam membangun website menggunakan Preact kamu tidak harus menggunakan tool bundler seperti yang akan kita lakukkan sekarang. Kenapa? karena Preact sendiri adalah sebuah library yang sebenarnya bisa berjalan di browser langsung. Namun, dikarenakan kita ingin website kita berjalan secara optimal dan kompatibel diberbagai browser atau istilahnya "),t("code",[a._v("Cross Browser Compatibility")]),a._v(" kita perlu yang namanya Bundler supaya kita tidak dipusingkan dengan script ini berjalan dibrowser kita tapi tidak dibrowser mantan. Kan report.")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("Basic")]),a._v(" "),t("p",[a._v("Ilmu basic yang harus anda pahami selama tutorial series ini adalah:")]),a._v(" "),t("ul",[t("li",[a._v("Basic Command Prompt")]),a._v(" "),t("li",[a._v("Basic NodeJS dan NPM")])])]),a._v(" "),t("h2",{attrs:{id:"setup-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-project"}},[a._v("#")]),a._v(" Setup Project")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("Important: Node.js > V6.x is a minimum requirement.")])]),a._v(" "),t("h3",{attrs:{id:"install-preact-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-preact-cli"}},[a._v("#")]),a._v(" Install Preact-CLI")]),a._v(" "),t("p",[a._v("Pertama kita akan install "),t("code",[a._v("preact-cli")]),a._v(" secara global menggunakan NPM. Supaya kita bisa menggunakannya berulang kali dan memudahkan dalam pembuatan dan memanage project Preact kalian.")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g preact-cli\n")])])]),t("p",[a._v("jika kalian menggunakan yarn, kalian bisa install preact-cli dengan cara berikut")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" global "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" preact-cli\n")])])]),t("h3",{attrs:{id:"membuat-project-web"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#membuat-project-web"}},[a._v("#")]),a._v(" Membuat Project Web")]),a._v(" "),t("p",[a._v("Setelah preact-cli di install kita akan lanjut membuat project Preact kita. Sekarang preact-cli memiliki sejumlah template untuk memudahkan kita setup project secara cepat.")]),a._v(" "),t("p",[a._v("Kita akan menggunakan template "),t("code",[a._v("simple")]),a._v(" untuk memulai project kecil kita. Jika lebih memilih untuk menggunakan "),t("strong",[a._v("yarn")]),a._v(" pada project kalian, kalian bisa menambahkan argument "),t("code",[a._v("--yarn")]),a._v(" pada akhir perintah dibawah ini.")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("Catatan")]),a._v(" "),t("p",[a._v("Karena "),t("code",[a._v("yarn")]),a._v(" memiliki kelebihan cepat dalam melakukkan instalasi dependensi jadi selama tutorial series ini saya akan menggunakan "),t("code",[a._v("yarn")]),a._v(" dari pada "),t("code",[a._v("npm")]),a._v(". Namun penulis tidak memaksakan bahwa kamu harus menggunakan "),t("code",[a._v("yarn")]),a._v(" dari pada "),t("code",[a._v("npm")]),a._v(", karena pada dasarnya mereka sama.")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("preact create simple preact_hello_world --yarn\n")])])]),t("p",[t("strong",[a._v("Output")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("⠋ Creating project\n✔ Done"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n\nTo get started, "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" into the new directory:\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" preact_hello_world\n\nTo start a development live-reload server:\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" start\n\nTo create a production build "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("in ./build"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(":\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" build\n\nTo start a production HTTP/2 server:\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" serve\n")])])]),t("p",[a._v("Kamu akan menemui folder yang dibuat secara otomatis oleh Preact-CLI. Kurang lebih isi folder project kita akan seperti berikut.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("├── node_modules/\n├── assets/\n├── src/\n  ├── index.js\n├── .gitignore\n├── yarn.lock\n├── package.json\n├── manifest.json\n")])])]),t("h2",{attrs:{id:"npm-script"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-script"}},[a._v("#")]),a._v(" NPM Script")]),a._v(" "),t("p",[a._v("Ketika kita menjalankan perintah "),t("code",[a._v("yarn dev")]),a._v(" sebenarnya ini adalah perintah untuk "),t("code",[a._v("yarn")]),a._v(" agar menjalankan script "),t("code",[a._v("dev")]),a._v(" yang bisa kamu lihat di file packages.json. Pada propertis scripts disitu secara default akan ada "),t("code",[a._v("dev")]),a._v(", "),t("code",[a._v("build")]),a._v(", dan "),t("code",[a._v("server")]),a._v(". Disitulah isi perintah yang sebenarnya dijalankan oleh yarn.")]),a._v(" "),t("h3",{attrs:{id:"start-development-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-development-server"}},[a._v("#")]),a._v(" Start Development Server")]),a._v(" "),t("p",[a._v("Setiap kali kita ingin mengerjakan project kita. Kita harus menyalakan Development Server kita terlebih dulu dengan mengetik perintah "),t("code",[a._v("yarn dev")]),a._v(". Perintah tersebut menjalankan server development supaya kita bisa mengakses nya pada browser dengan alamat "),t("code",[a._v("http://localhost:8080")]),a._v(" (secara default) dan mendapatkan perubahan langsung secara real-time setiap kali kamu melakukkan perubahan dan menyimpannya.")]),a._v(" "),t("h3",{attrs:{id:"build-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-project"}},[a._v("#")]),a._v(" Build Project")]),a._v(" "),t("p",[a._v("Untuk menghasilkan versi release dari Project, kita bisa menjalankan perintah "),t("code",[a._v("yarn build")]),a._v(". Dan hasilnya kita bisa lihat di folder "),t("code",[a._v("dist/")]),a._v(".")]),a._v(" "),t("h2",{attrs:{id:"kesimpulan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kesimpulan"}},[a._v("#")]),a._v(" Kesimpulan")]),a._v(" "),t("p",[a._v("Pada pembahasan kita kali ini, kamu belajar tentang bagaimana cara setup sebuah project Preact menggunakan bantuan Preact-CLI. Dengan adanya tool Preact-CLI mengelola dan menkonfigurasi Preact menjadi lebih mudah dan kamu tidak lagi repot untuk mengkonfigurasi production ready ataupun konfigurasi webpack yang diperlukan.")]),a._v(" "),t("p",[a._v("Finally, kamu bisa mempersiapkan Project Preact kamu dengan lancar dan siap digunakan untuk Tutorial selanjutnya.")]),a._v(" "),t("h2",{attrs:{id:"referensi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#referensi"}},[a._v("#")]),a._v(" Referensi")]),a._v(" "),t("a",{staticClass:"link-preview",attrs:{href:"https://stackoverflow.com/questions/23730882/what-is-the-role-of-src-and-dist-folders",target:"_blank"}},[t("div",{staticClass:"link-preview--content"},[t("p",{staticClass:"title"},[a._v("javascript - What is the role of src and dist folders? - Stack Overflow")]),t("p",[a._v("I'm looking at a git repo for a jquery plugin. I want to make a few changes for use in my own project, but when I opened up the repo it had a structure I've never seen before. I'm not sure which fi...")]),a._v(" "),t("p",[a._v("stackoverflow.com")])]),t("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png?v=73d79a89bded)"}})]),t("Disqus")],1)}),[],!1,null,null,null);e.default=s.exports}}]);