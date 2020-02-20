---
title: "Belajar Preact: Hello World [#3]"
lang: id-ID
description: Program Hello world adalah gerbang pertama dari runtutan series belajar Preact kita selanjutnya
image: /images/covers/belajar-preact-hello-world.jpg
published: 1/27/2020, 07:55:23 PM
category: preact
subcategory: belajar-preact
tags: preact,preactjs,javascript,react
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
  render ({ name }) {
    componentDidMount () {
      console.log(`component Hello World berhasil dimuat`);
    }

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

