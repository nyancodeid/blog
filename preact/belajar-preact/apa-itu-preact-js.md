---
title: "Belajar Preact: Apa itu Preact JS?"
lang: id-ID
description: Berkenalan dengan lebih dekat dengan Preact dan apa perbedaannya dengan React.
image: /thumbnail/belajar-preact-perkenalan.png
published: 1/25/2020, 00:55:21 AM
category: preact
subcategory: belajar-preact
tags: preact,cli,preactjs,javascript,react
next: /preact/belajar-preact/setup-preact-app.html
meta:
  - name: keywords
    content: preact,cli,preact.js,react
---
# Belajar Preact: Apa itu Preact JS?

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage src="/images/belajar-preact-perkenalan-cover.png" />

==Preact adalah sebuah javascript library yang menggambarkan dirinya sebagai alternatif library berukuran **3kB** untuk pengguna React dengan API ES6 yang sama.== Bagi pengguna yang belum pernah menggunakan React sebagai library untuk project saya ingin bermain dengan Preact yang menonjolkan diri sebagai library yang ringan namun dengan fitur yang sama dengan React.

## Table of Content
[[toc]]

## Introduction
Seperti disebutkan di atas, Preact adalah alternatif library berukuran 3kb untuk React yang dikembangkan oleh **Jason Miller** dan para kontributor lainnya di Github. Preact dikembangkan dengan tujuan membangun JavaScript framework yang berukuran kecil dengan fitur yang sama dengan React.

![Preact Bundlephobia](/images/posts/preact-bundle-pobia.png)
*Preact size - [bundlephonbia.com](https://bundlephobia.com/result?p=preact@10.2.1)*

Dengan ukuran total 3kb, ini berarti kamu tidak perlu khawatir tentang library/framework JavaScript yang ada pada project kamu mengambil sebagian besar dari ukuran total aplikasi JavaScript.

Preact ini cepat, namun alasan utamanya bukan berasal dari ukurannya yang kecil. Ini dikarenakan salah satu library Virtual DOM tercepat di luar sana, berkat implementasi `diff` (memeriksa perbedaan) yang sederhana dan dapat diprediksi.

Beberapa tujuan utama yang ingin dicapai oleh Preact adalah:
- **Performa**: Merender DOM secara cepat dan efisien
- **Ukuran**: Berukuran kecil dan ringan
- **Efisiensi**: Penggunaan memory yang efektif
- **Mudah Dipahami**: Memahami basis kode harus tidak lebih dari beberapa jam
- **Kompatibilitas**: Sebagian besar Preact bertujuan supaya kompatibel dengan React API. `preact-compat` berupaya untuk mencapai kompatibilitas sebanyak mungkin dengan React. Kita akan bahas `preact-compat` lebih lanjut di lain artikel.

Preact memiliki performa dan kompatibelitas baik dengan browser (mendukung semua browser) meskipun mungkin memerlukan beberapa polyfill untuk IE7 dan IE8. Preact sekarang sedang digunakan oleh perusahaan seperti Lyft, Housing.com dan m.uber.com. Tim Developer **Uber** baru-baru ini menulis sebuah artikel yang menyoroti bagaimana Preact digunakan untuk membangun versi seluler Uber yang pada penerapannya menyebabkan kinerja yang lebih baik karena ukurannya yang sangat minim.

:::: preview https://preactjs.com/about/project-goals/

::: preview-content Project Goals – Preact
Preact is a fast 3kB alternative to React with the same modern API.

preactjs.com
:::
::: preview-thumbnail https://preactjs.com/assets/app-icon.png
:::
::::

:::: preview https://eng.uber.com/m-uber/

::: preview-content Building m.uber: Engineering a High-Performance Web App for the Global Market
In this article, we discuss how Uber Engineering designed m.uber, a lightweight web app that delivers a native app experience for riders on mobile browsers.

eng.uber.com
:::
::: preview-thumbnail https://eng.uber.com/wp-content/uploads/2017/06/image2-1.jpg
:::
::::

## Apa yang membuat Preact dan React berbeda
Mungkin kalian akan bertanya-tanya, khususnya bagi pengguna React. Itulah pertanyaan yang akan ditanyakan oleh banyak developer React karena dari aspek apa Preact harus dipertimbangkan. React sudah merupakan JavaScript library yang layak yang berukuran ~45kb. Jadi mengapa kamu perlu mempertimbangkan untuk membangun aplikasi dengan Preact?

> Preact itself is not intended to be a reimplementation of React. There are differences. Many of these differences are trivial, or can be completely removed by using preact-compat, which is a thin layer over Preact that attempts to achieve 100% compatibility with React. — Preactjs.com

Saya mengutip tulisan yang paling penting dan ditonjolkan di situs resmi Preact. Bahwasanya React dan Preact memiliki sedikit perbedaan, bahkan Preact ingin sepenuhnya kompatibel dengan komponen React itu sendiri. Dengan menambahkan lapisan tipis (*tiny wrapper/layer*) yang mendukung komponen React sepunuhnya kompatibel dengan Preact. 

:::: preview https://preactjs.com/guide/v10/differences-to-react

::: preview-content Differences to React – Preact
Preact is a fast 3kB alternative to React with the same modern API.

preactjs.com
:::
::: preview-thumbnail https://preactjs.com/assets/app-icon.png
:::
::::

### Perbedaan Utama
Perbedaan utama ketika membandingkan aplikasi Preact dan React adalah Preact tidak mengirimkan [*Synthetic Event System* ](https://reactjs.org/docs/events.html)sendiri. Preact menggunakan `addEventlistener` bawaan browser untuk penanganan event secara internal. Lihat [GlobalEventHandlers](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers) untuk daftar lengkap DOM event handler.

Karena untuk menghandle event apa yang di butuhkan oleh Preact sudah tersedia dan didukung oleh event handler bawaan browser tanpa harus mengimplementasikan event handler khusus, yang nantinya akan membebani prosess Maintenance atau pemeliharaan Preact itu sendiri dan juga untuk meminimalisir penggunaan memory yang tidak perlu. 

Perbedaan utama lainnya adalah bahwa Preact sedikit lebih mengikuti spesifikasi DOM. Salah satu contohnya adalah kamu bisa menggunakan `class`, bukan `className`.

```jsx
// This:
<div class="foo" />

// ...is the same as:
<div className="foo" />
```

pembahasan lain tentang perbedaan Preact dan React akan di bahas pada lain artikel.

## Kesimpulan
> Jadi kapan harus memilih Preact atau React?

Jawaban untuk pertanyaan tersebut sebenarnya tergantung pada kasus penggunaan kamu. Pilihan untuk beralih dari React ke Preact adalah bahwa, Anda kemungkinan besar harus menghapus beberapa fitur, atau setidaknya memerlukan beberapa konfigurasi untuk menggunakan beberapa fitur yang ada pada module React (`preact-compat`). Contohnya adalah Unit Testing.

React menggunakan alat pengujian (*unit testing*) yang disebut `Enzim` yang dikembangkan oleh Airbnb untuk menguji komponennya. Pengujian unit juga dimungkinkan dalam Preact, meskipun dengan beberapa konfigurasi dan batasan Webpack.

Hal lain yang perlu kamu perhatikan adalah tidak adanya [Synthetic Events](https://reactjs.org/docs/events.html) di Preact. Target browser yang di dukung oleh Preact tidak memerlukan fitur tambahan ini, oleh karena itu, Preact menggunakan `addEventListener` asli bawaan browser untuk Event Handling. Penghapusan fitur ini dapat dikatakan bahwa Preact menjadi lebih baik di antara keduanya karena mengarah ke source code dengan ukuran yang sangat kecil.

Preact dapat dipertimbangkan untuk kasus penggunaan seperti widget self-contained web / embed atau Aplikasi Web Progresif (PWA) dan dalam aplikasi di mana kinerja diprioritaskan, karena ukurannya yang minimal.

React dapat digunakan dalam aplikasi yang kompleks dan aplikasi skala besar dengan data yang berubah seiring waktu. Keuntungan lain yang dimiliki React adalah ekosistemnya yang luar biasa. Ada berbagai packages React untuk berbagai kasus penggunaan dan dapat di cari dengan mudah Github atau NPM membuktikan hal ini, meskipun komunitas plugin Preact telah berkembang sekarang.

Seperti yang saya sebutkan di atas, semuanya kembali lagi sesuai dengan kasus penggunaan pada Project kamu, jika kamu ingin membangun aplikasi kecil yang melakukan satu hal dengan sangat baik, Preact mungkin adalah apa yang kamu butuhkan.

React dapat digunakan ketika Anda mencari untuk membangun project yang terlihat melakukkan task yang berat. Tidak ada gunanya membangun aplikasi dengan Preact dan harus mengimpor seperti 10–15 modul karena kompatibilitas, saya pikir pada titik ini, kamu harus membangun menggunakan React.

Jangan memaksakan sebuah library atau framework ada pada Project kamu.

:::: preview https://github.com/preactjs/preact

::: preview-content GitHub - preactjs/preact
⚛️ Fast 3kB React alternative with the same modern API. Components & Virtual DOM. - preactjs/preact

github.com
:::
::: preview-thumbnail https://repository-images.githubusercontent.com/42283287/9627fe00-7d80-11e9-923a-fac3017d3356
:::
::::
:::: preview https://github.com/facebook/react

::: preview-content GitHub - facebook/react
A declarative, efficient, and flexible JavaScript library for building user interfaces. - facebook/react

github.com
:::
::: preview-thumbnail https://avatars0.githubusercontent.com/u/69631?s=400&v=4
:::
::::