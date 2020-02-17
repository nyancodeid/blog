---
title: "Unistore: State Management Mudah untuk Preact App"
lang: id-ID
description: Mari berkenal dengan Unistore, state container yang mensentralkan state dengan memanfaatkan component binding.
image: /images/covers/preact-unistore--nyandev-blog.png
published: 1/17/2020, 10:06:21 AM
category: preact
tags: preact,unistore,state,management,react
meta:
  - name: keywords
    content: preact,unistore,state,management,react
---
# Unistore: State Management Mudah untuk Preact App

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage src="/images/covers/preact-unistore--nyandev-blog.png" />

> A tiny 350b centralized state container with component bindings for [Preact](https://github.com/developit/preact) & [React](https://github.com/facebook/react).

[[toc]]

## State Management

Dalam membangun sebuah web app kita akan dihadapkan dengan beberapa permasalah dalam mengatur ***state***. Ya state, mungkin untuk 2-5 komponen yang kita buat tidak akan menimbulkan masalah saat proses development. Namun, permasalah ini akan muncul ketika kamu sudah memiliki banyak komponen yang saling membutuhkan state satu sama lain.

Kita tau bahwa management state yang dilakukkan sebelumnya yaitu melempar ***state*** ke ***props*** akan mudah di pahami dalam pengenalan konsep state. Siapa yang tidak tau dengan cara pengenalan state yang disajikan dengan membuat aplikasi increment sederhana. Namun kita harus tau bahwa ini adalah cara sederhana menjelaskan konsep state dan project yang akan kita bangun tidak akan sesederhana itu.

Menurut [deganda.com](https://degananda.com/react-state-props-lifecycle/) di pembahasan tentang apa itu state, props dan lifecycle di jelaskan. ***State*** dan ***props*** merupakan dua jenis data yang dapat digunakan oleh komponen. ***Props*** merupakan data yang fix (karena diambil dari parent atau di set oleh parent dari komponen tersebut). Sedangkan state digunakan untuk data yang berubah. State akan di inisiasi pada constructor(*dynamic*) sedangkan props menjadi parameter pada construtor sehingga tidak dapat berubah (*fixed*).

## Unistore
Dalam penerapan state management, Preact bisa dipadukan dengan library state management contohnya Redux, RxJS atau Statty. Namun ada module atau libarary yang ditulis oleh pembuat Preact sendiri dengan lebih simple dan berukuran kecil namun tidak mengurangi fungsi state management itu sendiri.

Alih-alih menggunakan Redux ([*preact-redux*](https://github.com/developit/preact-redux)) yang sebenernya bisa tapi karena dukungan untuk Preact X belum ada jadi unistore jadi pilihan nya.

::: warning Compatibility Note:
If you're using Preact X (preact@10+), please use the official react-redux library.
:::

Jadi sederhanya Unistore merupakan sebuah state management yg mana tugasnya sebagai **centralized store** untuk semua component dalam aplikasi preact/react.

## Konsep
Karena unistore adalah module sederhana yang dibuat dengan prinsip yang sama dengan Redux, jadi konsep dasar State Management nya hampir sama dengan Redux.

![Global State - itnext.io](https://telegra.ph/file/d5858dde9444919de5f41.png)
*Global State pada Redux - itnext.io*

Jika digambarkan secara sederhana maka unistore adalah database sederhana untuk front-end. Layaknya database kita bisa melakukkan operasi CRUD (Create-Read-Update-Delete) pada unistore ini. Kita juga bisa memprosess atau memanipulasi nilai yang akan di-*return* (dikembalikan) oleh action. Konsep ini sangatlah sederhana jika kalian sudah mengetahui atau mereasakan kekurangan dari *state* itu sendiri.

**State management** ini sendiri dibuat atas permasalahn ketika kita sudah memiliki banyak child component yang saling membutuhkan nilai state pada parent component atau bahkan diatasnya. Coba bayangkan kalau component product yang jauh dibawah membutuhkan nilai state nama user yang ada jauh diatasnya. Cara yang biasa kita lakukkan adalah mempasing nilai state tersebut melalui `props` kan.

![Perbedaan Menggunakan State Management](https://telegra.ph/file/884e19a28c553b005023b.png)
*Perbedaan Menggunakan State Management - css-tricks.com*

Cara ini memang tidak ada masalah, semua bekerja dengan baik. Tapi jika child component sudah mengakar panjang kebawah? ini lah kenapa konsep State Management oleh Redux diperkenalkan. Konsep state management sendiri banyak caranya, namun yang paling dikenal adalah Redux itu sendiri.

Dalam unistore terdapat 2 komponen penting, yaitu

1. Store
2. Actions

### Store
Store bertugas sebagai menyimpan keseluruhan *state* yang di-inisialiasi pada awal pembuatannya menggunakan method `createStore`. 

> An observable state container, returned from `createStore`

#### Membuat Store
```js
import createStore from 'unistore'

let store = createStore({ todos: [], nama: "NyanDev Indonesia" // inisialiasi state awal })
```

### Action
Action bertugas sebagai penghubung ketika kamu ingin merubah atau memanipulasi state dalam store. Jika kamu mengenal Action dan Reducer didalam Redux, maka didalam unistore ini Functional action hanyalah *reducer*. Jadi kamu tidak perlu lagi menggunakan `dispact` untuk memanggil *actions*. Karena nantinya *actions* akan dihubungkan dalam component melalui *props*. 

> **Functional** actions are just reducers

> Create a bound copy of the given action function. The bound returned function invokes `action()` and persists the result back to the store. If the return value of action is a Promise, the resolved value will be used as state.

Jika pemanggilan function dalam *actions* menghasilkan value langsung, maka value tersebut akan digunakan sebagai *state*. Namun, jika action me-*return* sebuah **Promise**, maka *resolved value*-lah yang akan digunakan sebagai state.

#### Membuat Actions
Action biasa yang mengembalikan nilai state yang diubah.

```js
const actions = {
  // Actions can just return a state update:
  increment(state) {
    // The returned object will be merged into the current state
    return { count: state.count+1 }
  }
}
```

Mendefinisikan action yang mengembalikan nilai *Promise* yang secara otomatis *resolved* value akan digunakan pada *state*.

```js
const asyncAction = (store) => {
  // Async actions can be pure async/promise functions:
  async incrementToServer(state) {
    const res = await fetch('/update')
    return { count: await res.json() }
  }
}
```

- Bagaimana menghubungkan antara *store* dan *actions*?
- Bagaimana memanggil *action*-nya?
- Bagaimana mendapatkan nilai *state* pada *store*?
- Bagaimana passing nilai pada *function action*?

Mungkin kamu sudah memikirkan pertanyaan diatas ketika sudah pada tahap ini, itulah pertanyaan yang sama saya sendiri juga bertanya ketika mempelajari Redux yang tidak pernah masuk dalam otak saya. Oke kita lanjut semoga pertanyaannya akan terjawab seiring anda membaca artikel ini.

## Install
Untuk menambahkan unistore kedalam project Preact kalian. Langkah awal yang perlu dilakukkan adalah meng-*install* module unistore menggunakan `npm` atau `yarn`.

```shell
npm install --save unistore
```

Untuk *import* module unistore kedalam project, kita tinggal menambahkan

```js
// The store:
import createStore from 'unistore'

// Preact integration
import { Provider, connect } from 'unistore/preact'
```

## Penggunaan

### Mendefinisikan Store
Sebagai contoh penggunaan unistore kedalam project kita akan membuat project kecil sebagai contoh kasus dalam tutorial selanjutnya. Pada file `index.js` kita akan mendefinisikan Store dan menjadikan `Provider` sebagai root component. Jadi Provider disini sebagai **Root Component**, yang nantinya sebagai tempat menyimpan state yang dapat di pakai di seluruh component.

```jsx
// src/index.js
import createStore from 'unistore'

let store = createStore({ todos: [], nama: "NyanDev Indonesia" })

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        ...
      </Provider>
    )
  }
}
```

Dari source code diatas, untuk membuat store kita hanya perlu 3 langkah.
1. meng-*import* module `createStore` dari `unistore` 
2. mendefinisikan variable `store` dan di-inisialisasi dengan memanggil method/function `createStore`. method ini membutuhkan 1 argument berupa inisialisasi state, atau nilai awal state kita. misalnya kita meng-inisialisasikannya dengan `{ todos: [] }`, object berisi properti `todos` dengan inisialisasi nilai awal berupa Array kosong.
3. menambahkan `<Provider store={store}></Provider>` sebagai root component. ==root component yang dimaksud adalah component pertama atau terluar yang dirender sebagai component==.

### Menghubungkan Store
Untuk menghubungkan antara component dengan store tidaklah secara otomatis, namun kamu harus menggunakan `connect` sebagai jembatan atau akses antara component kamu dengan store. 

```js
import { connect } from 'unistore/preact'
```

Syntax method `connect` adalah sebagai berikut:

```js
connect( mapStateToProps, actions )( component )
```

#### mapStateToProps (Function|Array|String)
Daftar state store yang diperlukkan pada Component tersebut. Penulisan state yang dibutuhkan bisa dalam bentuk Array, String, atau Function. Contohnya:
- `connect("name")`
- `connect("name,todos")`
- `connect(["name", "todos"])`

#### actions (Function|Object)?
Parameter ini bersifat optional jadi bisa kamu isi atau tidak tergantung apa component yang bersangkutan membutuhkan actions dari unistore atau tidak. Action yang dimaksud adalah object yang berisi function  yang sudah saya contohkan pembuatannya diatas.

selanjutnya kita mempassing `Component` kita di parameter pemanggilan function selanjutnya. Untuk cara penulisan pada tiap jenis component akan seperti berikut.

#### Functional Component
```jsx
// Standart
function Hello ({ nama }) {
  return <h1>{`Hi, ${nama}`}</h1>
}

export default connect('nama')(Hello)
```
```jsx
// Shorthand
export default connect('nama')(({ nama }) => (
  <h1>{`Hi, ${nama}`}</h1>
))
```

::: tip
Untuk yang belum familiar dengan javascript shorthand atau arrow function sebaiknya kamu menggunakan cara mendefinisikan yang biasa.
:::

#### Classes Component
```jsx
class Hello extends Component {
  render ({ nama }) {
    return <h1>{`Hi, ${nama}`}</h1>
  }
}

export default connect('nama')(Hello)
```

### Pemanggilan Action
Dalam pemanggilan action kita perlu tau bagaimana memperlakukan state yang dari Store dalam Component kita. Istilah untuk Component yang terhubung dengan Store adalah `ConnectedComponent`. State yang dari Store akan dilempar ke Component melalui `props` jadi state dan action kita akan masuk kedalam `props`. Jadi untuk memanggil state dan action nya kita cukup menggunakan `this.props.?(state|action)`. contoh:

```jsx
import { connect } from "unistore/preact"

const actions = {
  increment (state, incrementBy) {
    return { count: state.count + incrementBy }
  }
}
const HiComponent = ({ nama }) => (
  <div>
    <h1>Hi, {nama}</h1>
    <button onClick={() => this.props.increment(1)}>increment</button>
  </div>
)

export default connect("nama", actions)(HiComponent)
```

::: warning Note
Karena preact langsung mem-*passing* *props* dan *state* ke dalam **Functional Component** jadi kamu bisa langsung menggunakannya. `props` untuk parameter pertama dan `state` untuk parameter kedua.
:::


## Contoh
Berikut adalah contoh sederhana penerapan Unistore dalam project Preact oleh Developernya langsung.

:::: preview https://codesandbox.io/s/l7y7w5qkz9

::: preview-content Unistore Demo - CodeSandbox
Unistore Demo by developit using preact, unistore

codesandbox.io
:::
::: preview-thumbnail https://telegra.ph/file/5feccb61e3b04cf8c0f3c.png
:::
::::

## Kesimpulan
**Unistore** menyebut dirinya sebagai *state container* dengan *component binding* untuk Preact dan React. Dengan modern API dan konsep yang sama dengan library redux dengan penyederhanaan cara kerja dalam mengatur *state* membuat kamu lebih mudah memahami bagaimana peranan module ini dalam mempermudah pekerjaanmu. Dengan ukuran nya yang sangat kecil (~350b) sehingga tidak banyak mempengaruhi size project kamu.

Tapi, dalam memulai project Preact kamu tidak perlu langsung menggunakan Unistore dalam mengatur state kamu. Justru kita harus belajar dasar penggunaan state dalam komponen. Unistore atau module state management yang lain sangatlah di perlukan untuk project yang berskala besar.

Kapan kita menggunakan unistore atau state management yang lain?. ketika Child Component semakin banyak dan pertukaran state semakin sering terjadi antar component maka pada saat itulah kamu memerlukan bantuan dari State Management. Unistore adalah salah satu contohnya dari sekian banyak state management lainnya.

## Referensi

:::: preview https://github.com/developit/unistore

::: preview-content GitHub - developit/unistore: 🌶 350b / 650b state container with component actions for Preact & React
🌶 350b / 650b state container with component actions for Preact & React - developit/unistore

github.com
:::
::: preview-thumbnail https://avatars1.githubusercontent.com/u/105127?s=400&v=4
:::
::::

:::: preview https://css-tricks.com/learning-react-redux/

::: preview-content Leveling Up with React: Redux | CSS-Tricks
This tutorial is the final of a three-part series by Brad Westfall. We'll learn how to manage state across an entire application efficiently and in a way

css-tricks.com
:::
::: preview-thumbnail https://i2.wp.com/css-tricks.com/wp-content/uploads/2014/03/css-tricks-star.png?fit=512%2C512&ssl=1
:::
::::

<Disqus />
