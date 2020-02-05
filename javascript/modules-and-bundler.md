---
title: "Javascript: Module and Bundler"
lang: id-ID
description: Lebih mengenal apa itu Module dan Bundler dan alasan mereka ada.
image: /thumbnail/javascript-modules-bundler-nyandev-blog.jpg
published: 1/26/2020, 07:55:23 AM
category: javascript
tags: javascript,module,bundler,belajar
meta:
  - name: keywords
    content: javascript,module,bundler,belajar
---
# Javascript: Module and Bundler

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage src="/images/covers/javascript-modules-bundler-nyandev-blog.jpg" />

## Table of Content
[[toc]]

## Module
Pertama mari kita belajar apa itu Module. Ketika javascript pertama kali diperkenalkan, javascript memiliki sistem yang sangat mendasar untuk memuat "module". Dengan cara menempatkan tag script dalam file html dan menentukan lokasi file javascript yang akan di-load kedalam website. Mekanisme ini kurang baik, bahkan untuk project kecil karena beberapa alasan:

1. Karena semua diload dalam konteks global yang memicu tabrakan nama (*name collisions*) dan penimpaan (*overrides*).
2. Banyak pekerjaan manual bagi developer untuk mengetahui dependensi dan urutan module yang diload.

Permasalahan tersebut diperburuk ketika aplikasi pada sisi client (browser) berkembang lebih besar dan lebih besar lagi sampai menjadi project yang kompleks. Untuk menyelesaikan masalah module ini, komunitas javascript mulai memperkenalkan solusinya sekitar tahun 2009 sebagai *CommonJS* (**CJS**) dan *Asynchronous Module Definition* (**AMD**).

CommonJS mendefinisikan prosess memuat modul secara **Synchronous** (berurutan) di lingkunagan server. NodeJS, sebagian besar, mengadopsi prosess memuat module ini dan mengimplementasikannya. Selain itu, `Browserify` adalah salah satu alat pertama yang memungkinkan proses memuat module mirip CommonJS di browser. AMD mendefinisikan proses memuat module secara **Asyncrhonous** (tidak berutuan) yang berfokus pada memuat module di browser. Tool yang paling terkenal yang mengimplementasikannya adalah `RequireJS`.

Ada juga cara definisi lain yang disebut. *Universal Module Definition* (**UMD**) pada dasarnya adalah sebuah function wrapper yang memungkinkan suatu module bisa dipkai oleh banyak module loader contohnya AMD dan CommonJS diatas. Hal bagus tentang UMD adalah kamu bisa memuatnya sebagai AMD, atau CJS, atau secara global melalui `window` object. Namun, itu semua bergantung pada environment apa yang memuatnya. UMD biasanya digunakan untuk library kecil yang sering digunakan kembali (*resuable*).


```js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'b'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('b'));
    } else {
        // Browser globals
        factory((root.commonJsStrict = {}), root.b);
    }
}(this, function (exports, b) {
    //use b in some fashion.

    // attach properties to the exports object to define
    // the exported module properties.
    exports.action = function () {};
}));
```

:::: preview https://riptutorial.com/javascript/example/16339/universal-module-definition--umd-

::: preview-content JavaScript - Universal Module Definition (UMD) | javascript Tutorial
javascript documentation: Universal Module Definition (UMD)

riptutorial.com
:::
::: preview-thumbnail https://riptutorial.com/Images/logo_rip.png
:::
::::

Setelahnya, pada tahun 2015. Sistem module native akhirnya diperkenalkan dalam spesifikasi `ECMAScript`. Definisi module ini umumnya dikenal sebagai **ES Module** atau **ES6 Module Definition**. Ini mendefinisikan semantik untuk mengimport dan mengexport module secara asynchronous.

Contoh pendefinisian module di javascript
### ES6 Module
Ciri khusus untuk penulisan module dalam standart ECMAScript 6 (ES6) adalah adanya sintax `import` dan `export`. Sesuai namanya `import` digunakan untuk meng-import module ke dalam kode base, sedangkan `export` digunakan untuk meng-*export* function atau varible yang nantinya menjadi sebuah module yang dapat digunakan berulang di kode base (*reuseable*) atau module lain menjadi sebuah *dependency* (berkaitan). 

#### values.js
```js
// (1)
export function isNumber(data) {
  return (typeof data === "number);
}
```
#### number.js
```js
import {isNumber} from './values.js' // (2)

// (3)
export function add(a, b) {
  if(isNumber(a) && isNumber(b)) {
    return a + b;
  }
  return NaN;
}
```

Contoh diatas adalah script module sederhana yang dimaksudkan untuk menjumlahkan dua parameter di method `add`. 
1. file `values.js` meng-*export* method `isNumber` yang dimaksudkan untuk memastikan apakah variable `data` bertipe data number. Dengan menambahkan `export` didepan syntax function akan secara otomatis function `isNumber` akan diexpose sebagai module agar dapat di pakai ketika di import di kode base atau module lain.
2. file `number.js` meng-*import* module yang sudah dibuat sebelumnya yaitu `values.js` menggunakan syntax `import`. Namun apa itu `{ isNumber }`? , dalam ES6 penulisan ini disebut [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) yang memungkinkan kita mengurai nilai dari sebuah Object dan Array kedalam variable yang berbeda. 
3. file `number.js` juga meng-*export* sebuah method yang berfungsi untuk menjumlahkan parameter `a` dan `b` dengan memanfaatkan method di module `values.js` yaitu `isNumber`, yang mengkonfirmasi bahwa parameter yang dilempar bertipe data `number`.

Dari contoh diatas kita tau bahwa Module ini saling berkaitan (*dependency*). module `number.js` membutuhkan method pada module `values.js` yang tidak menuntut kemungkinan bahwa module lain juga akan membutuhkan kedua module ini (*reuseable*).


### CommonJS Module

```js
const number = require('./values.js')

module.exports = {
  add: function(a, b) {
    if (number.isNumber(a) && number.isNumber(b)) {
      return a + b;
    }
    return NaN;
  }
}
```

### Module: Support Browser
Penggunaan ES6 Module pada Javascript secara native bisa dilakukkan pada browser yang support dengan syntax `import` dan `export`, kompatibilitas browser ini menyesuikan versi dan browser apa yang didukung. Berikut adalah daftar rincian kompatibilitas browser menurut situs developer.mozilla.org

#### Import
![Import Syntax - ES6 Module](/images/posts/javascript-import-compatibility.png)
*Import Native ES6 Module - developer.mozilla.org*

#### Export
![Export Syntax - ES6 Module](/images/posts/javascript-export-compatibility.png)
*Export Native ES6 Module - developer.mozilla.org*

:::: preview https://developer.mozilla.org/id/docs/Web/JavaScript/Panduan/Modules

::: preview-content JavaScript Module - JavaScript | MDN
This guide gives you all you need to get started with JavaScript module syntax.

developer.mozilla.org
:::
::: preview-thumbnail https://developer.mozilla.org/static/img/opengraph-logo.72382e605ce3.png
:::
::::

## Bundler

### Introduction
Seperti namanya, **Bundler** adalah cara dimana item-item yang terpecah digabung/dibundel menjadi satu buat item. Dalam dunia Web Development, **Javascript Bundler** berarti sebuah tools yang bertugas untuk membundel semua module javascript menjadi satu file javascript yang bisa dieksekusi oleh browser. 

![Module Bundlers](/images/posts/javascript-bundlers.png)
*Module Bundler - [dev.to](https://dev.to/tanhauhau/what-is-module-bundler-and-how-does-it-work-3gp2)*


### Kenapa kita butuh Bundler
Untuk memudahkan memahami apa itu javascript bundle maka kita telaah kembali kenapa ia diciptakan. Javascript Module memang keren, ia mengatasi permasalah *dependency* dan *name collision*. Namun ada permasalahan lagi, yaitu ketika kita sudah mempunyai project yang kompleks dan berskala besar, maka kita akan dihadapi dengan banyaknya module yang terpecah dan browser akan meng-import/memanggil satu per-satu file module tersebut. 

```html
<html>
  <script src="/src/foo.js"></script>
  <script src="/src/bar.js"></script>
  <script src="/src/baz.js"></script>
  <script src="/src/qux.js"></script>
  <script src="/src/quux.js"></script>
</html>
```

Jika kita jeli untuk melihat performa web kita maka pemanggilan resource yang banyak akan membuat loading website kita terasa lamban dan bandwidth yang dipakai juga semakin banyak. Dan yang paling penting adalah *waktu* untuk website dimuat secara sempurna oleh browser akan sangat lama hanya karena resourse yang dibutuhkan banyak. 

![Loading Resources](/images/posts/devtool-timeline.png)

Karena setiap file yang diminta memerlukan HTTP Request terpisah. Sekarang kalau kita memerlukan 5 file javascript untuk digunakan pada website kita kenapa kita tidak gabung saja file tersebut menjadi satu file yang hanya memerlukan satu HTTP Request.

```html
<html>
  <script src="/dist/bundle.js"></script>
</html>
```

::: tip For Your Information
Sekarang protocol HTTP/2 mengatasi permasalah ini dengan adanya fitur bernama [Server Push](https://en.wikipedia.org/wiki/HTTP/2_Server_Push).
:::

#### Alasan pendukung lain
1. Browser tidak mendukung sistem modul, meskipun ini tidak sepenuhnya benar saat ini karena kebanyakan browser modern sudah support. 
2. Bundler membantu kita mengelola *dependency relationship*, secara otomatis bundler akan mengurutkan sendiri urutan pemanggilan module sesuai dengan relasi/hubungan antar module.
3. Bundle juga membantu kita untuk memuat asset/resources dalam urutan pemanggilan yang sesuai dengan kegunaannya. Asset ini tidak hanya file javascript, bundler juga mengatur pemanggilan asset stylesheet (css), gambar, dan lain sebagainya.

### Javascript Bundler Tool
Ada banyak macam-macam bundler tool, tapi yang sering dipakai oleh para Javascript Developer menurut survey **State of Javascript 2019** adalah:

1. Webpack - [webpack.js.org](https://webpack.js.org/)
2. Gulp - [gulpjs.com](http://gulpjs.com/)
3. Parcel - [parceljs.org](https://parceljs.org/)
4. Rollup - [rollupjs.org](https://rollupjs.org/)
5. Browserify - [browserify.org](http://browserify.org/)
6. Fusebox - [fuse-box.org](http://fuse-box.org/)

:::: preview https://2019.stateofjs.com/other-tools/build_tools

::: preview-content The State of JavaScript 2019: Other Tools
Discover the most popular JavaScript features & technologies of the year.

2019.stateofjs.com
:::
::: preview-thumbnail https://2019.stateofjs.com/images/captures/build_tools.png
:::
::::

### Yang dilakukkan Bundler Tool
Bundler tidak hanya membuat segalanya menjadi satu dan dipanggil secara urut, tidak. Budler memiliki tugas yang sangat penting dalam prosess pembuatan website.

![Bundler Works](/images/posts/schema-bundler.png)
*Working scheme of a web bundler*

Ada tiga hal yang dilakukkan oleh Bundler tool ini, yaitu:

1. **Collection**
2. **Transformation**
3. **Optimization**

Sementara bundler mendeteksi dan mengumpulkan assets yang ada pada project, bundler juga akan menganalisa bagaimana module-module itu didefinisikan, bagaimana mereka ber-relasi, apakah file asset memerlukan transformasi (seperti Typescript, Sass, Stylus, atau Pug), dan bagaimana file tersebut diload kedalam file HTML. Pada fase **Transformasi** segala informasi tersebut di prosess dan dimanipulasi sesuai dengan konfigurasi file yang didefinisikan, contohnya file *Typescript* di compile sehingga menjadi file Javascript dan file Sass (.scss) di compile menjadi file CSS. Dan akhirnya fase **Optimasi** dilakukkan untuk meng-*optimasi* file asset seperti javascript, css, dan bahkan gambar juga (dikonfigurasi terlebih dahulu).

<Disqus />
