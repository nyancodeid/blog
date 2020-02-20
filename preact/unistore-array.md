---
title: "Unistore: Manage State with Arrays"
lang: id-ID
description: Ketika kita akan menambahkan sebuah item kedalam state dengan tipe data `Array` maka kita perlu tau tau perbedaan dari metode penambahan Array yang kita ketahui. 
image: /images/covers/unistore-array-state.jpg
published: 2/10/2020, 04:53:21 PM
category: preact
tags: preact,unistore,state,management,react
meta:
  - name: keywords
    content: preact,unistore,state,management,react
feed:
  enable: true
---

# Unistore: Manage State with Arrays

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage 
  src="/images/covers/unistore-array-state.jpg"
  source="tokeet.com"
  sourceLink="https://tokeet.com" />

Belajar memanipulasi state dengan tipe data `Array` pada Unistore atau dalam Preact State.

> Never mutate this.state directly, as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable.

## Push Item
Ketika kita akan menambahkan sebuah item kedalam state dengan tipe data `Array` maka kita perlu tau tau perbedaan dari metode penambahan Array yang kita ketahui. Kita biasa menggunakan kedua metode ini untuk menambahkan sebuah item pada Array yaitu `Array.push`, `Array.unshif`, `Array.concat` dan `Spread syntax` ([array spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)) untuk cara modern dan `looping` untuk cara tradisional. Namun ketika berada dalam state, kita akan menemukan perbedaan ketika kita mencoba menggunakan metode tersebut.

```js
const actions = {
  pushPlaylists ({ playlists }, playlist) {
    let _playlists = playlists
        _playlists.push(playlist)

    return { playlists: _playlists }
  }
}
```

Jika sekilas memang tidak ada yang salah dan state akan berubah sesuai dengan apa yang kita inginkan. state `playlists` bertambah satu item yaitu `playlist`. Tapi, state dalam Component tidak akan **terupdate**. Untuk metode `Array.push` dan `Array.unshift` kamu akan mengalami Component tidak dirender ulang bahkan setState sudah dilakukkan, namun ketika state lain diubah Component akan di-render ulang dengan nilai yang ingin kita lihat sebelumnya. 

Cara yang tepat dalam menamambahkan item kedalam Array adalah dengan menggunakan methode `Array.concat`, `Array Spread Operator` dan `Looping`. 

```js
const actions = {
  // contoh penggunaan spread operator
  pushPlaylists ({ playlists }, playlist) {
    return { 
      playlists: [ ...playlists, playlist ]
    }
  },
  // contoh penggunaan Array concat
  pushConcatPlaylists ({ playlists }, playlist) {
    return { 
      playlists: playlists.concat([ playlist ])
    }
  }
}
```

## Delete Item
```js
const actions = {
  pushPlaylists ({ playlists }, playlist) {
    let _playlists = playlists.filter(item => (item._id !== playlist._id))

    return { playlists: _playlists }
  }
}
```

## Edit Item
```js
const actions = {
  pushPlaylists ({ playlists }, playlist) {
    let _playlists = playlists.map(item => {
      if ((item._id !== playlist._id)) return item

      return {
        ...item,
        title: playlist.title
      }
    })

    return { playlists: _playlists }
  }
}
```

<Disqus />
