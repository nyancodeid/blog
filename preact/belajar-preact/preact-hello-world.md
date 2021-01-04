---
title: "Belajar Preact: Hello World [#3]"
lang: id-ID
description: Program Hello world adalah gerbang pertama dari runtutan series belajar Preact kita selanjutnya
image: /images/covers/belajar-preact-hello-world.jpg
published: 1/27/2020, 07:55:23 PM
category: preact
subcategory: belajar-preact
tags: 
  - preact
  - preactjs
  - javascript
  - react
prev: /preact/belajar-preact/setup-preact-app.html
meta:
  - name: keywords
    content: preact,preactjs,react,javascript
feed:
  enable: true
---
# Belajar Preact: Hello World

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage 
  src="/images/covers/belajar-preact-hello-world.jpg"
  author="Julian Santa Ana"
  source="unsplash.com"
  sourceLink="https://unsplash.com/photos/FKqH1QhUqaw" />

## Introduction
Setelah kita melaukkan setup Project Preact, kita bisa langsung membuat aplikasi sederhana yang biasa dilakukkan ketika berkenalan dengan suatu program atau bahasa baru. Ya, tidak lain tidak bukan adalah `Hello World`. Kita mulai dengan sederhana dan bertahap, sebelum kita ke puncak tujuan kita, belajar Preact dan menggunakannya di project yang akan kita buat nantinya.

Dari project sederhana `Hello World` ini kita akan berkenal dengan:
- Component
- Component Life Cycle
- State dan Props

Dari tiga hal diatas, kita akan bahas secara terpisah di series selanjutnya. Jadi kita akan berkenalan terlebih dahulu bagaiaman eksistensi dan peranan mereka dalam membangun Component UI di Preact.

Goal kita disini adalah membuat komponent `<HelloWorld />` dengan menampilkan nama kita. jadi hasil akhirnya akan menampilkan `Hello World, dan Hi Nama Kamu`.

## Membuat Komponen
Pertama kita akan membuat komponen `<HelloWorld />` yang akan ditampilkan di halaman web kita.

### Struktur Komponen

Kita akan membuat folder sendiri dimana component kita akan disimpan. Buat folder baru dengan nama `components` di dalam folder `src`. Jadi kita akan menyimpan component kita disitu, setiap kali kita akan membuat component kita akan membuat folder component itu sendiri. Struktur folder nya akan seperti ini:

```
├── src/
  ├── components/
    ├── HelloWorld/    
      ├── HelloWorld.jsx
      ├── index.js
      ├── style.css
```

Kenapa kita memisah component menjadi banyak File dan Folder? karena dengan membedakan file-file tersebut kita akan dipermudah dengan path pemanggilan dan secara best practice ini adalah salah satunya untuk mengelolah project Preact.

  - `HelloWorld/`: Folder dengan nama component harus **CamelCase**.
  - `HelloWorld.jsx`: kode Component UI
  - `index.js`: Re-exporter kode component UI untuk mempermudah pemanggilan dan menghindari *repeating name* dalam penulisan path.
  - `style.css`: Tempat dimana kode style/css untuk Component tersebut.

::: warning Catatan
Kode component yang melibatkan JSX didalamnya dan tidak pure memiliki syntax Javascript pakailah format `.jsx` untuk mempermudah kita mengenali isi file tersebut tanpa harus membuka filenya.
:::

### Kode Komponen
Kita mulai dengan membuat kerangka UI kita dengan mengedit file `HelloWorld.jsx` kita. Sesuikan file kalian dengan kode snippet dibawah ini:

```jsx
import { Component } from 'preact'
import style from './style.css'

export default class HelloWorld extends Component {
  componentDidMount () {
    console.log(`component Hello World berhasil dimuat`);
  }
  
  render ({ name }) {
    return (
      <h1 class={style.heading}>Hello World, dan Hai {name}</h1>
    )
  }
}
```

Kode diatas menggunakan `Classes Component` jadi komponen dibuat dengan menggunakan Javascript Class.

Selanjutnya kita ke file `style.css`

```css
@import url('https://fonts.googleapis.com/css?family=Merriweather&display=swap');

.heading {
  font-family: 'Merriweather', serif;
  color: #dfa612;
  border: 2px solid #ffe297;
  border-radius: 8px;
  display: inline-block;
  padding: 8px 16px;
  font-weight: normal;
}
```

::: warning Catatan
Secara default `preact-cli` akan mengcompile semua file style dalam folder `components/` menjadi `CSS Module`.
:::

Terakhir kita lanjut ke file `index.js` sebagai re-exporter komponen kita.

```js
export { default } from './HelloWorld.jsx'
```

Akhirnya, pada titik ini kalian sudah berhasil membuat Component `<HelloWorld />`. Kita lanjut menampilkannya pada file `index.js`.

## Root Komponen
Seperti yang sudah saya mention sebelumnya, semua file yang menggunakan `JSX` harus menggunakan type format `.jsx`. Jadi kita akan merubah format terlebih dahulu file `index.js` yang ada pada `src/index.js` menjadi `src/index.jsx`

```{3}
├── src/
  ├── components/
  ├── index.jsx
```

Setelah rename file menjadi `index.jsx` nya kita akan menambahkan komponent `<HelloWorld />` yang sudah kita buat tadi. Sesuaikan perubahan sesuai dengan kode snippet dibawah ini:

```jsx{2,6}
import './style';
import HelloWorld from './components/HelloWorld';

const App = () => (
  <div class="container">
    <HelloWorld name="Ryan Aunur" />
  </div>
);

export default App;
```

Kode snippet diatas mungkin akan terlihat berbeda dari apa yang ada sebelumnya dari file `index.jsx` kamu. Ya, disini penulis merubah component `App` menjadi *Functional Component* karena menurut `ESLint` yang sudah terpasang di template `preact-cli` yang sudah kita setup sebelumnya mengharuskan kita untuk merubahnya menjadi *Functional Component* karena hanya menampilkan tampilan sederhana dan tidak membutuhkan fitur *life cycle* yang ada pada *Classes Component*.

dan terakhir kita perlu menambahkan style untuk class `.container` pada file `src/style.css` kita dengan code snippet dibawah ini:

```css
.container {
	text-align: center;
}
```

## Konfigurasi ESLint
Konfigurasi ini mungkin menjadi langkah optional karena secara sederhannya `ESLint` bertujuan untuk membuat koding kita lebih baik dan mudah dibaca dengan mengikuti standart aturan penulisan dari konfigurasi ESLint yang terpasang. Jika ada aturan yang dilanggar maka akan ada warning atau error yang muncul di text editor kalian seperti VS Code.

Untuk meng-*custom* konfigurasi ESLint yang sudah ada, kita perlu membuat file `.eslintrc` di-root folder project kita. Dan dibawah ini adalah contoh konfigurasi `ESLint` penulis untuk project Hello World kita ini:

```json
{
  "extends": "eslint-config-synacor",
  "rules": {
    "no-console": 0,
    "indent": ["error", 2]
  }
}
```

Selanjutnya kita perlu menghapus konfigurasi default ESLint yang ada pada file `package.json`.

```git
- "eslintConfig": {
-   "extends": "eslint-config-developit"
- },
```

## Menjalankan Project
Akhirnya kita bisa mencoba menjalankan Project kita dengan cara menjalankan perintah:

```shell
$ yarn start
```

Tunggu sampai prosess build selesai sampai muncul pesan pada Terminal,

```
You can view the application in browser.

Local:            http://0.0.0.0:8080
On Your Network:  http://192.168.100.xx:8080
```

Dan kamu bisa membuka alamat tersebut di browser kalian, misalnya `http://localhost:8080`.

### Preview Hasil
Maka hasil akhirnya akan seperti berikut:

![Preview Hasil Preact Hello World](/images/posts/screenshot-preact-hello-world.png)
*Tampilan hasil project Preact Hello World*

## Github Repository
:::: preview https://github.com/nyancodeid/preact-helloworld

::: preview-content GitHub - nyancodeid/preact-helloworld: Preact Hello World [#3]
Preact Hello World [#3]. Contribute to nyancodeid/preact-helloworld development by creating an account on GitHub.

github.com
:::
::: preview-thumbnail https://avatars1.githubusercontent.com/u/24630806?s=400&v=4
:::
::::

## Kesimpulan
Pada series kali ini kita bertujuan membuat Project **Hello World** sederhana yang mengenalkan pada kita cara membuat *Functional Component, Classes Component, Component Life Cycle, Props, dan Best Practise* dalam mengorganisir Component kita. Dari series ini juga kita bisa membuat project Preact untuk pertama kita dengan `Preact-CLI`.

Penjelasan untuk Component, Props, dan Component Life Cycle akan dibahas terpisah pada series selanjutnya.

<Disqus />
