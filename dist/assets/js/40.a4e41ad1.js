(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{407:function(a,t,e){"use strict";e.r(t);var n=e(26),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"membuat-github-profile-lebih-menarik-dengan-wakatime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#membuat-github-profile-lebih-menarik-dengan-wakatime"}},[a._v("#")]),a._v(" Membuat Github Profile lebih menarik dengan Wakatime")]),a._v(" "),e("Author",{attrs:{name:"Ryan Aunur Rassyid"}}),a._v(" "),e("FeaturedImage",{attrs:{src:"/images/covers/mengintegrasikan-wakatime-dengan-github-profile.jpg",author:"Markus Winkler",source:"unsplash.com",sourceLink:"https://unsplash.com/photos/ZDwh_sxsX2g"}}),a._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),e("p",[a._v("Github baru-baru ini merilis fitur yang memungkinkan para penggunanya membuat README sebagai profile yang nantinya ditampilkan secara mencolok di halaman utama profile kita. Tujuan dibuat nya fitur ini memungkinkan pemilik akun tersebut menjelaskan dan menampilkan apa yang tidak bisa kita tampilkan di diskripsi singkat github profile (bio).")]),a._v(" "),e("p",[a._v("Fitur Github profile-level README memungkinakan kita menuliskan biografi kita dengan lebih informatif dan kreatif. Karenanya dengan fitur ini kita dimungkinkan untuk menjelaskan biografi khususnya yang berhubungan dengan github profile atau profesionalisme dengan format "),e("strong",[a._v("Markdown")]),a._v(" yang tidak hanya 1 atau 2 baris saja tapi satu file penuh. Tentu ini membuka banyak peluang untuk kita menjabarkan skill yang mereka miliki, harapan kita kedepannya atau bahkan menjelaskan highligh repository yang ditampilkan pada halaman profile kita juga.")]),a._v(" "),e("p",[a._v("Pada artikel berikut kita akan membuat tampilan Github Readme yang menarik dengan ditambahkannya statistik dari Wakatime yang meliputi Bahasa Pemrogramman yang dipakai di github kita, Bahasa dan Waktu yang telah dipakai selama satu minggu ini, dan jumlah visitor github profile kita.")]),a._v(" "),e("p",[a._v("Menarik bukan, let's do this!")]),a._v(" "),e("h2",{attrs:{id:"table-of-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table-of-content"}},[a._v("#")]),a._v(" Table of Content")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[a._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#table-of-content"}},[a._v("Table of Content")])]),e("li",[e("a",{attrs:{href:"#prerequisites"}},[a._v("Prerequisites")])]),e("li",[e("a",{attrs:{href:"#create-github-profile"}},[a._v("Create Github Profile")]),e("ul",[e("li",[e("a",{attrs:{href:"#create-repository"}},[a._v("Create Repository")])]),e("li",[e("a",{attrs:{href:"#create-github-readme-profile"}},[a._v("Create Github Readme Profile")])]),e("li",[e("a",{attrs:{href:"#add-github-repository-secret"}},[a._v("Add Github Repository Secret")])]),e("li",[e("a",{attrs:{href:"#github-action-configuration"}},[a._v("Github Action Configuration")])])])]),e("li",[e("a",{attrs:{href:"#result"}},[a._v("Result")])]),e("li",[e("a",{attrs:{href:"#conclution"}},[a._v("Conclution")])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[a._v("#")]),a._v(" Prerequisites")]),a._v(" "),e("p",[a._v("Pertama mari kita asumsikan bahwa kalian sudah punya akun Wakatime dan memasang plugin nya di editor kalian. Bagi yang belum silahkan membuat akun dan mengintegrasikkannya ke text editor favorit kalian terlebih dahulu. Setelah itu kita juga akan membutuhkan beberapa hal berikut:")]),a._v(" "),e("ul",[e("li",[a._v("Github Personal Access Token (repo, user, dan workflow)")]),a._v(" "),e("li",[a._v("Wakatime API Key")])]),a._v(" "),e("p",[a._v("API Key diatas jangan sampai hilang atau diketahui orang lain, karena API key adalah informasi yang private. Jadi jangan sampai ketahuan orang lainnya ya.")]),a._v(" "),e("p",[a._v("Untuk membuat Github API Key pertama kita buka terlebih dahulu alamat berikut, "),e("a",{attrs:{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/settings/tokens"),e("OutboundLink")],1),a._v('. Lalu klik tombol "Generate new token".')]),a._v(" "),e("p",[e("img",{attrs:{src:"https://telegra.ph/file/e72d4259b16be01142287.png",alt:"Github Personal Access Token"}}),a._v(" "),e("em",[a._v("Github Personal Access Token")])]),a._v(" "),e("p",[a._v("Nanti kita akan di-"),e("em",[a._v("redirect")]),a._v(" untuk memasukkan password akun github kita, ini wajar karena kita akan membuat token yang mana merupakan informasi sensitif dan private. Setelah memasukkan password maka kita akan di-"),e("em",[a._v("redirect")]),a._v(" ke halaman buat personal akses token. Dibagian field "),e("strong",[a._v("Note")]),a._v(" kita isi dengan "),e("code",[a._v("GithubProfileToken")]),a._v(" atau terserah teman-teman. Nah untuk field scope kita centang bagian "),e("strong",[a._v("read, workflow, dan user")]),a._v(" dan yang lain biarkan kosong.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://telegra.ph/file/f5dfcc5cae9e4db505deb.png",alt:""}}),a._v(" "),e("em",[a._v("Membuat Github Personal Access Token")])]),a._v(" "),e("p",[a._v('Kalau sudah kita bisa klik tombol submit "Generate token". Lalu simpan kode token yang ditampilkan dinotepad atau dicatatan karena kode access token tersebut tidak akan ditampilkan kembali oleh Github. Selanjutnya kita akan membuat Wakatime API Token. Buka halaman dashboard Wakatime lalu pilih setting, atau bisa kunjungi link berikut '),e("a",{attrs:{href:"https://wakatime.com/settings/account",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://wakatime.com/settings/account"),e("OutboundLink")],1),a._v(". Selanjutnya kita tinggal klik field "),e("strong",[a._v("Secret API Key")]),a._v(" dan API Key akan muncul. Lalu simpan key nya di notepad atau catatan seperti tadi.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://telegra.ph/file/c67351a45af8422a83dfd.png",alt:"Wakatime Secret API Key"}})]),a._v(" "),e("h2",{attrs:{id:"create-github-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-github-profile"}},[a._v("#")]),a._v(" Create Github Profile")]),a._v(" "),e("p",[a._v("Untuk membuat gihub profile sebenernya cukuplah mudah namun kali ini karena kita akan mengintegrasikan dengan statistik dan matriks dari Wakatime jadi mungkin akan sedikit ribet. But, worth it untuk dicoba dan diterapkan.")]),a._v(" "),e("h3",{attrs:{id:"create-repository"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-repository"}},[a._v("#")]),a._v(" Create Repository")]),a._v(" "),e("p",[a._v("Setelah kita mempersiapkan API Key yang dibutuhkan. Selanjutnya kita bisa membuat repository yang nantinya akan kita pakai sebagai readme profile kita. Repository yang dibuat tidak bisa sembarang nama, karena repository yang diperuntunkan untuk github profile memiliki nama khusus yaitu username github profile kalian. Misalnya nama github profile nya adalah "),e("strong",[a._v("nyancodeid")]),a._v(" maka kita harus membuat repository dengan nama yang sama dengan username kita yaitu "),e("strong",[a._v("nyancodeid")]),a._v(". Jadi nantinya alamat url repository adalah "),e("a",{attrs:{href:"https://github.com/nyancodeid/nyancodeid",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/nyancodeid/nyancodeid"),e("OutboundLink")],1),a._v(". Cara membuatnya sama seperti membuat repository github pada umumnya.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://telegra.ph/file/db20928830b1178fe4795.png",alt:"Repository Profile"}})]),a._v(" "),e("h3",{attrs:{id:"create-github-readme-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-github-readme-profile"}},[a._v("#")]),a._v(" Create Github Readme Profile")]),a._v(" "),e("p",[a._v("Next, kita membuat file dengan nama "),e("code",[a._v("README.md")]),a._v(". Kalian tidak diharuskan cloning dan melakukkannya di local kalian, kalian bisa membuat file dan meng-editnya langsung di website githubnya. Dan kalian bisa mencontoh github profile milik user "),e("strong",[a._v("nyancodeid")]),a._v(" dibawah ini dan menyesuaikan dengan profile atau skill kalian.")]),a._v(" "),e("p",[a._v('::: info Perhatian!\nPastikan kalian merubah setiap kata "nyancodeid" dengan username github kalian.\n:::')]),a._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("##")]),a._v(" Hi there, I'm Ryan - aka NyanDev 👋")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token url"}},[a._v("["),e("span",{pre:!0,attrs:{class:"token content"}},[a._v("![Nyancodeid's github stats")]),a._v("](https://github-readme-stats.vercel.app/api?username=nyancodeid)")]),a._v("](https://github.com/nyancodeid/nyancodeid)\n\n"),e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("###")]),a._v(" I'm a Single Fighter Developer!")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[a._v("-")]),a._v(" 🔭 I’m currently working on a ton of side project!\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[a._v("-")]),a._v(" 🌱 I’m currently learning about DevOps specially Docker and K8s\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[a._v("-")]),a._v(" 👯 I’m looking to collaborate with other developer\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[a._v("-")]),a._v(" 🥅 2020 Goals: Contribute more to Open Source projects\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[a._v("-")]),a._v(" ⚡ Fun fact: I love cooking, finding bug and create unfinished side project \n\n"),e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("###")]),a._v(" 📊 Weekly development breakdown")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!--START_SECTION:waka--\x3e")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!--END_SECTION:waka--\x3e")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("###")]),a._v(" 📫 Contact Me")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[a._v("-")]),a._v(" Facebook - "),e("span",{pre:!0,attrs:{class:"token url"}},[a._v("["),e("span",{pre:!0,attrs:{class:"token content"}},[a._v("Ryan Aunur Rassyid")]),a._v("](https://facebook.com/ryan.hac)")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[a._v("-")]),a._v(" Twitter - "),e("span",{pre:!0,attrs:{class:"token url"}},[a._v("["),e("span",{pre:!0,attrs:{class:"token content"}},[a._v("@ryanaunur")]),a._v("](https://twitter.com/ryanaunur)")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[a._v("-")]),a._v(" Blog - "),e("span",{pre:!0,attrs:{class:"token url"}},[a._v("["),e("span",{pre:!0,attrs:{class:"token content"}},[a._v("https://blog.nyandev.id")]),a._v("](https://blog.nyandev.id)")]),a._v("\n")])])]),e("p",[a._v("Lalu "),e("code",[a._v("commit")]),a._v(" file yang dibuat tadi untuk menyimpan file.")]),a._v(" "),e("h3",{attrs:{id:"add-github-repository-secret"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-github-repository-secret"}},[a._v("#")]),a._v(" Add Github Repository Secret")]),a._v(" "),e("p",[a._v("Selanjutnya kita perlu mempersiapkan variable environment atau kalau di github dipanggil dengan Github Secret. Masih dihalaman repository, kita klik menu "),e("strong",[a._v("Settings")]),a._v(". Setelahnya kita akan diredirect ke halaman repository setting, lalu kita pilih sub-menu "),e("strong",[a._v("Secrets")]),a._v(". Disini kita akan menyimpan 2 API Key yang kita buat tadi.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://telegra.ph/file/32c26975d7d3a1a17db4b.png",alt:""}})]),a._v(" "),e("p",[a._v("Lalu kita akan klik "),e("code",[a._v("New repository secret")]),a._v(".")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://telegra.ph/file/f275177e58018bdeba82b.png",alt:""}}),a._v(" "),e("img",{attrs:{src:"https://telegra.ph/file/8ba7eeca876633261b15a.png",alt:""}})]),a._v(" "),e("p",[a._v("Buat 2 repository secret yang mana masing masing nama nya adalah:")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Name")]),a._v(" "),e("th",[a._v("Value")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("GH_TOKEN")]),a._v(" "),e("td",[a._v("(Github Personal Access Token)")])]),a._v(" "),e("tr",[e("td",[a._v("WAKATIME_API_KEY")]),a._v(" "),e("td",[a._v("(Wakatime API Key)")])])])]),a._v(" "),e("p",[a._v("Setelah repository secret berhasil dibuat semua, kita lanjut menkonfigurasi github action-nya.")]),a._v(" "),e("h3",{attrs:{id:"github-action-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-action-configuration"}},[a._v("#")]),a._v(" Github Action Configuration")]),a._v(" "),e("p",[a._v("Untuk memungkinkan kita membuat konten yang semi-dinamis kita perlu adanya github action yang mana tugasnya adalah mengenerate konten yang kita perlukan dan menampilkannya di file github profile kita. Jadi Github Action akan melakukkan pekerjaannya tiap tengah malam untuk mengenerate statistik yang kita perlukan untuk ditampilkan di github profile kita.")]),a._v(" "),e("p",[a._v("Selanjutnya kita perlu membuat file konfigurasi untuk github action terlebih dahulu pada repository kita dengan nama "),e("code",[a._v(".github/workflows/waka.yml")]),a._v(" pastikan kalian menulis path folder nya juga ya, supaya file tersebut dibuat sesuai dengan foldernya. Isi file konfigurasi nya seperti ini:")]),a._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Waka Readme\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("workflow_dispatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("schedule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cron")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'0 0 * * *'")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("jobs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("update-readme")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Update this repo's README\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("runs-on")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ubuntu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("latest\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("steps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("uses")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" anmol098/waka"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("readme"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("stats@master\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("with")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("WAKATIME_API_KEY")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" $"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" secrets.WAKATIME_API_KEY "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("GH_TOKEN")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" $"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" secrets.GH_TOKEN "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("SHOW_COMMIT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"False"')]),a._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("SHOW_DAYS_OF_WEEK")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"False"')]),a._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("SHOW_LANGUAGE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"True"')]),a._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("SHOW_OS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"True"')]),a._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("SHOW_PROJECTS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"False"')]),a._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("SHOW_TIMEZONE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"True"')]),a._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("SHOW_EDITORS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"True"')]),a._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("SHOW_SHORT_INFO")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"False"')]),a._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("SHOW_LOC_CHART")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"False"')]),a._v("\n")])])]),e("p",[a._v("Untuk menambahkan atau menghilangkan statistik dan metrik yang kita perlukan kamu bisa melihat opsi lengkapnya pada repository berikut:")]),a._v(" "),e("a",{staticClass:"link-preview",attrs:{href:"https://github.com/anmol098/waka-readme-stats",target:"_blank"}},[e("div",{staticClass:"link-preview--content"},[e("p",{staticClass:"title"},[a._v("GitHub - anmol098/waka-readme-stats: This GitHub action helps to add cool dev metrics to your github profile Readme")]),e("p",[a._v("This GitHub action helps to add cool dev metrics to your github profile Readme - anmol098/waka-readme-stats")]),a._v(" "),e("p",[a._v("github.com")])]),e("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://avatars2.githubusercontent.com/u/15426564?s=400&v=4)"}})]),e("p",[a._v("Jangan lupa untuk "),e("code",[a._v("commit")]),a._v(" file nya untuk menyimpan. Karena pada konfigurasi diatas kita mengatur Github Action untuk berjalan pada tiap tengah malam saja maka untuk pertama kali kita akan menjalankan Actionnya secara manual. Buka menu "),e("code",[a._v("Actions")]),a._v(" di menu atas repository. Maka kita akan melihat action "),e("code",[a._v("Waka Readme")]),a._v("pada sidebar daftar "),e("strong",[a._v("Workflows")]),a._v(". Klik lalu akan muncul tombol "),e("code",[a._v("Run Workflow")]),a._v(" dan jalankan dengan klik tombol hijau "),e("code",[a._v("Run Workflow")]),a._v(".")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://telegra.ph/file/16ee4357a35dfb4c754a6.png",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"result"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#result"}},[a._v("#")]),a._v(" Result")]),a._v(" "),e("p",[a._v("Terakhir kita tinggal melihat hasilnya dengan mengunjungi halaman profile kalian di github pada link "),e("code",[a._v("https://github.com/username")]),a._v(". Seharusnya hasilnya tidak akan jauh beda seperti ini:")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://telegra.ph/file/b7b6067959cd5e5544a4d.png",alt:"Github Profile Result"}}),a._v(" "),e("img",{attrs:{src:"https://telegra.ph/file/30894eb38cb27cfd899e5.png",alt:"Github Profile Result"}})]),a._v(" "),e("h2",{attrs:{id:"conclution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclution"}},[a._v("#")]),a._v(" Conclution")]),a._v(" "),e("p",[a._v("Dengan adanya Github Profile kalian akan semakin kenal dengan developer-developer yang aktif di Github atau maintener project OSS favorit kalian di-github. Dan berpeluang kalian mudah dikenali oleh developer lain yang mengunjungi profile kalian. Sapaan singkat, daftar skill, insight kedepan serta tujuan kalian akan meningkatkan peluang kalian bertemu dengan orang yang memiliki visi serta tujuan yang sama, diharapkan peluang kerja sama lewat github akan semakin tinggi.")]),a._v(" "),e("p",[a._v("Dengan penjelas atas portofolio yang terpampang di github profile kalian serta skill yang dimiliki akan semakin memberikan peluang bagi kalian mendapatkan client dan pekerjaan. Jadi buat github profile versi kalian yang lebih menarik dan lebih kreatif lagi dan lagi.")]),a._v(" "),e("p",[a._v("Terima kasih sudah membaca!")]),a._v(" "),e("Disqus")],1)}),[],!1,null,null,null);t.default=s.exports}}]);