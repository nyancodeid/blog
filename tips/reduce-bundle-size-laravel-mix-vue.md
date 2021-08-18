---
title: "Tips: Reduce Bundle Size of Laravel Mix + Vue 2 Project"
description: Sebelum kita masuk ke dalam pembahasan, perlu diketahui bahwa project yang kali ini kita bahas adalah Web App (bukan website) yang dimana...
image: /images/covers/reduce-bundle-size-laravel-mix-vue.jpeg
lang: id-ID
published: 6/3/2020, 03:01:21 PM
category: tips
author: Ryan Aunur Rassyid
tags: 
  - bundle
  - laravel
  - mix
  - vue
  - reduce
  - file
  - size
meta:
  - name: keywords
    content: bundle,laravel,mix,vue,reduce,file,size
feed:
  enable: true
---
# Tips: Reduce Bundle Size of Laravel Mix + Vue 2 Project

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage 
  src="/images/covers/reduce-bundle-size-laravel-mix-vue.jpeg"
  author="Markus Spiske"
  source="unsplash.com"
  sourceLink="https://unsplash.com/photos/wkieEIVb1pA" />

## Diclaimer
Sebelum kita masuk ke dalam pembahasan, perlu diketahui bahwa project yang kali ini kita bahas adalah **Web App** (bukan website) yang dimana tujuan dari meminimalkan bundle size adalah untuk meningkatkan kecepatan loading dan minimalkan library yang tidak dibutuhkan. 

## Table of Content
[[toc]]

## FYI (For Your Information)
Supaya ada gambaran ukuran file dan apa saja file nya, berikut adalah hasil menjalankan perintah yarn prod. 

![Webpack Bundle Result](https://cdn.statically.io/img/telegra.ph/f=auto,q=100/file/2d683ddff0ce4f9f191f6.png)
*Webpack Bundle Result*

Kita akan memperkecil dan membagi kembali file CSS dan JS yang sudah dibundle menjadi beberapa part supaya memaksimalkan prosess load dalam website. Sebelumnya ukuran file vendor.js ini parah banget bisa sampai 2MB lebih. 

## Metode dan Teknik
Oke kita mulai dengan menganalisa metode apa yang cocok digunakan untuk memperkecil ukuran file-file diatas. Berikut teknik atau tips yang sekiranya cocok dan yang akan kita gunakan:

1. Extract Vue Styles
2. Laravel Mix Extract (Code Splitting Build In)
3. TailwindCSS Variants and CorePlugin selection.
4. TailwindCSS Purge
5. ES2015/ES6 Import Transform Cherry-Pick
6. Use Luxon, not Moment.js

Dan library yang cukup dikenal yang dipakai pada project ini adalah **Vue, Leaflet, Luxon, Lodash, TaildwindCSS, Axios, Geolib** dan beberapa plugin vue lainnya.

Oke sekarang kita petakkan mana library yang paling besar dampaknya terhadap ukuran file bundlenya dan yang bisa kita diminimalisir ukurannya. Dan ternyata **Lodash** dan **TailwindCSS** bisa, sedangkan yang lainnya sudah jadi ukuran fixed atau bisa dibilang sudah pas.

Selanjutnya kita bisa langsung eksekusi dengan memanfaatkan Tips diatas yang sudah kita pilih dan bisa diterapkan.

> Screenshot diatas diambil setelah melakukkan teknik/tips optimasi nomor 2, 3, 4, dan 6

## Penerapan
Setelah diteliti metode atau teknik apa yang cocok, maka langsung saja kita terapkan satu persatu pada project kita.

### Extract Vue Style
Vue sendiri pada default nya memiliki template file yang berekstensi .vue yang mana memiliki 3 elemen didalamnya, yaitu template, style, script. Nah kita akan mengeleminasi style supaya di extract keluar dari file bundle-nya yaitu app.js . Jadi secara default file vue akan di-bundle (CSS dan JS nya) menjadi satu file yang pada project ini yaitu app.js. Kita tidak mau itu terjadi dan akan mengeluarkan setiap style yang ada di file Vue menjadi file CSS sendiri. 

Kita bisa melakukkan nya dengan menambahkan opsi di file `webpack.mix.js` kita.

```js
mix.options({
  ...
  extractVueStyles: 'public/css/app-ui.css'
})
```

Nah hasil style nya akan di berada di `public/css/app-ui.css`. Jangan lupa untuk menambahkan di Laravel View nya untuk memuat file css diatas.

### Laravel Mix Extract 
Laravel Mix sendiri punya mekanisme untuk memisahkan antara Logical App/Web dan Vendor atau library yang kita gunakan. Gunanya apa dipisah? untuk mencegah browser men-download ulang file vendor kembali ketika cache di browser dimuat ulang. Kita tidak mau ketika kita melakukkan perubahan pada Logical Web kita membuat browser memuat kembali library/vendor yang tidak kita ubah. Jadi kita pisah supaya yang dimuat ulang oleh browser adalah Logical web kita saja sedangkan file vendor tetap akan mengambil dari file yang sudah disimpan sebagai cache oleh browser.

Kita bisa melakukkan nya dengan menambahkan opsi di file `webpack.mix.js` kita.

```js
mix.extract()

if (mix.inProduction()) {
  mix.version();
}
```

Untuk memaksimalkan fitur extract ini kita bisa menambahkan versioning pada production build.

:::: preview https://laravel-mix.com/docs/5.0/extract

::: preview-content Library Code Splitting | Laravel Mix Documentation
Documentation for Laravel Mix.

laravel-mix.com
:::
::: preview-thumbnail https://cdn.statically.io/img/telegra.ph/f=auto,q=100/file/73935aea4865c151c4c70.png
:::
::::


### TailwindCSS Variants, CorePlugin, and Purge
**TailwindCSS** memiliki ukuran yang sedikit brutal karena semua style akan kita pakai semua jika kita tidak melakukkan *purgecss* (mengeliminasi style yang tidak terpakai secara otomatis) dan memilih secara manual style mana yang kita pakai atau kita keep nantinya.

Pada file `tailwind.config.js` kita akan menambahkan beberapa konfigurasi dan pastikan bahwa anda sudah mengkonfigurasi Laravel Mix anda dengan TailwindCSS sesuai dengan dokumentasi tailwind yang ada.

:::: preview https://tailwindcss.com/docs/installation/

::: preview-content Installation - Tailwind CSS
Quick start guide for installing and configuring Tailwind CSS.

tailwindcss.com
:::
::: preview-thumbnail https://tailwindcss.com/img/twitter-large-card.png
:::
::::

Berikut adalah beberapa contoh konfigurasi Tailwind yang dipakai pada project ini.

```js
module.exports = {
  purge: [
    './resources/js/**.*.vue'
  ],
  corePlugins: {
    float: false,
    fill: false,
    objectFit: false,
    ...
  },
  variants: {
    appearance: [],
    backgroundColor: [],
    borderColor: [],
    ...
  }
}
```

Untuk versi lengkapnya bisa ke Gist Github ini:
https://gist.github.com/nyancodeid/19e2402d3f006a3d68f816ca5f59d977#file-tailwind-config-js


### ES2015 Import Transform Cherry-Pick
Untuk meng-import sebuah library di project biasanya kita melakukkan cara berikut:

```js
import _ from 'lodash'
import * as geolib from 'geolib'
```

Dengan melakukkan import dengan cara diatas, artinya kita meng-import seleuruh fitur dan method ada ada pada *library/package* tersebut. Untuk meminimalisir ukuran bundle biasakan untuk meng-import method atau function yang diperlukan saja. Cara nya dengan import yang diperlukan atau biasa disebut **Cherry-Pick** (choose and take only).

Contoh penerapan untuk library diatas adalah sebagai berikut:

```js
import uniqBy from 'lodash/uniqBy'
import getDistance from 'geolib/es/getDistance'
```

pada script diatas kita hanya ingin method **uniqBy** pada lodash dan method **getDistance** pada geolib. Kita bisa hemat banyak space dengan memakai yang kita perlu saja.

Setiap cara atau fitur yang dipakai pasti punya kekurangan dan kelebihannya, misalnya jika kita menggunakan *cherry-pick* kita akan kesulitan untuk *maintenance* jika kita perlu banyak method lain yang dimana kita harus meng-import satu per satu nya.

Untuk memudahkan pekerjaan kita, kita bisa menggunakan plugin untuk babel yang bernama `babel-plugin-lodash` yang secara otomatis men-transform lodash yang di import seluruhnya menjadi method yang diperlukan. Contohnya seperti berikut:

![babel-plugin-lodash - A simple transform to cherry-pick Lodash modules so you don’t have to.](https://cdn.statically.io/img/telegra.ph/f=auto,q=100/file/a8e3b51b2be1da2c9f608.png)
*babel-plugin-lodash - A simple transform to cherry-pick Lodash modules so you don’t have to.*

:::: preview https://www.npmjs.com/package/babel-plugin-lodash

::: preview-content babel-plugin-lodash-npm
Modular Lodash builds without the hassle.

www.npmjs.com
:::
::: preview-thumbnail https://static.npmjs.com/338e4905a2684ca96e08c7780fc68412.png
:::
::::

Kamu hanya perlu membuat file konfigurasi babel yaitu `.babelrc` pada root folder project. Laravel Mix akan secara otomatis akan melakukkan merge pada konfigurasi babel milik Laravel Mix dengan custom config babel kita buat tadi.

```json
{
  "plugins": ["lodash"]
}
```

### Use Luxon, not Moment.js
Project ini sebelumnya menggunakan Moment untuk memudahkan bekerja dengan Tanggal dan Waktu. Setelah mengetahui bahwa Moment juga membuat library yang serupa tapi dengan method dan penulisan yang lebih mudah dipahami kini kita memilih Luxon sebagai library yang menangani Waktu dan Tanggal. 

Menurut situs **BundlePhobia** sendiri Moment.js memiliki ukuran bundle sebesar **278KB** sedangkan Luxon memiliki ukuran **69KB**. Dari segi ukuran bundle sudah terlihat bahwa Luxon lebih unggul. 

Tidak hanya keuntungan dari sisi ukuran saja yang lebih kecil, tapi penulisan kode jadi lebih mudah dipahami. Perbedaan paling jelas terlihat dari penulisan kode keduanya adalah Moment.js menerima tipe data apapun kedalam pemanggilan fungsi nya, sedangkan Luxon memisahkan hal tersebut. Berikut adalah contoh perbedaan penulisan Moment.js dan Luxon

![Moment.js and Luxon Creation example](https://cdn.statically.io/img/telegra.ph/f=auto,q=100/file/1f93e51fd4c5e4b2ba8d7.png)
*Moment.js and Luxon Creation example*

Gimana? mudah di baca kan. Mungkin awalnya sedikit ribet tapi keuntungan yang tak dirasakan diawal akan dirasakan ketika anda tidak melihat kodingan anda selama beberapa hari.

## Moment of Truth a.k.a Result
Setelah melakukkan beberapa optimasi diatas berikut adalah uji hasil bundle production:

![Result](https://cdn.statically.io/img/telegra.ph/f=auto,q=100/file/4fa783f5a900759e7cece.png)

File vendor.js turun sebanyak 29% , file app.js turun sebanyak 15%, di ikuti kenaikan file css yang tidak berdampak banyak dengan performa web kita jadi tidak masalah kalau file css sedikit lebih besar.

![Webpack Bundle Analyzer](https://cdn.statically.io/img/telegra.ph/f=auto,q=100/file/53d67284002708f67c025.png)
*Webpack Bundle Analyzer*

Done, kita sepakat bahwa hasilnya cukup memuaskan. Kita bisa mengurangi ukuran dari file bundle kita dengan cara cara yang lain yang mungkin anda tau. Kita sangat menantikan cara cara brilian lainnya untuk membuat web lebih dan lebih baik lagi. 

## Update 1.1.0
Ada beberapa perubahan yang saya lakukkan yang cukup banyak berdampak pada ukuran bundle nya. Ternyata terdapat library yang masuk kedalam file app.js yang tentu ini tidak diharapkan karena library seharusnya masuk ke vendor.js

Jadi perubahan tersebut adalah:

1. Move all required style into app.scss (sebelumnya di-import pada app.js inisialiasi Vue)
2. Temporary Disable JavascriptObfuscate for this article cases
3. Vue Plugin import fixed

Berikut ukuran terakhir yang didapat:

![Result Update 1.1.0](https://cdn.statically.io/img/telegra.ph/f=auto,q=100/file/06dda2e9862d835e25151.png)

Detail hasil dari Webpack Bundle Analyzer

![Bundle Analyzer](https://cdn.statically.io/img/telegra.ph/f=auto,q=100/file/cbe7c454e2bcf3ebf04a9.png)
*Webpack Bundle Analyzer update 1.1.0 results*

Akhir kata semoga ilmu nya bermanfaat, sekian terima kasih.

<Disqus />
