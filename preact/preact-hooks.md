---
title: "Preact Hooks: untuk Functional Component"
lang: id-ID
description: Penggunaan state dan lifecycle lewat Function Components yang lebih ringkas.
image: /thumbnail/preact-hooks--nyandev-blog.jpg
published: 1/24/2020, 02:49:21 PM
category: preact
tags: preact,cli,preactjs,javascript,react
meta:
  - name: keywords
    content: preact,cli,preact.js,react
---
# Preact Hooks: untuk Functional Component

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage src="/images/covers/preact-hooks--nyandev-blog.jpg" />

> Hooks is a new concept that allows you to compose state and side effects. They allow you to reuse stateful logic between components.

Ketika kita membuat component kita akan berfikir apakah component ini akan menggunakan Function atau Class. Kedua nya memang berbeda dan memiliki keuntungan dan kekurangan masing masing. Misalnya, kita ingin membuat sebuah component yang sederhana dan hanya menampilkan nilai dari props saja. Tapi ditengah jalan kita merasa bahwa component ini membutuhkan lifecycle methods atau state yang akhirnya kita melakukkan refactor component tersebut menjadi class component.

Permasalahan ini ada bahkan untuk pengguna React sekalipun. Kabar baiknya untuk React versi `16.8` mulai diperkenalkan fitur `React Hooks`. Tentu saja Preact juga mengadaptasi fitur luar biasa ini, bagaimana tidak. Fitur ini memungkinkan kita untuk berinteraksi dengan Lifecycle dan State dalam Functional Component. Kali ini kita akan berkenalan lebih dekat dengan fitur yang diusung oleh Developer React yang ada pada Preact.

## Table of Contents
[[toc]]

## Introduction
`Hook` adalah sebuah konsep baru yang memungkinkan kita untuk mengubah state dan side effects. Hook juga memungkinkan kita untuk menggunakan kembali (*reuse*) stateful logic antar component. 

Cara paling mudah untuk memahami Hook adalah membandingkan antara component berbasis Class. Dibawah ini adalah contoh component penghitung sederhana yang dibuat menggunakan Classes Component.

```jsx
class Counter extends Component {
  state = {
    value: 0
  };

  increment = () => {
    this.setState(prev => ({ value: prev.value +1 })
  });

  render(props, state) {
    return (
      <div>
        Counter: {state.value}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

Dan dibawah ini adalah component dengan fungsi yang sama namun ditulis menggunakan Functional Component.

```jsx
function Counter() {
  const [value, setValue] = useState(0);
  const increment = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  return (
    <div>
      Counter: {value}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

Pada point ini mungkin ada kesamaan antara kedua nya namun kenyataanya Hook membuat component lebih rapi dan simpel.

::: warning 
Mungkin ini terlihat aneh, tenang kamu tidak sendiri. Penulis awalnya juga berfikiran begitu. Butuh pembiasaan dan study case untuk bisa menerima dan memahami konsep Hook yang luar biasa.
:::

Kata kunci yang paling penting dalam memahami Hook menurut penulis adalah, `Array Destructuring`, `Syntax`, dan `Side Effect`. 

## Import hooks features
Untuk menggunakan API Hooks dalam project Preact, kamu harus import module tersebut terlebih dahulu. Cara nya adalah sebagai berikut.

```js
import { useState } from 'preact/hooks';
```

## Stateful hooks

### useState
Pada contoh diatas, kita menggunakan `useState`. useState adalah sebuah Hook, dan akan mengembalikan nilai dari state (pada contoh diatas: value) dan fungsi yang bisa kita gunakan untuk mengubah nilai tersebut (setValue). Fungsi setValue disini mirip dengan cara kerja `this.setState` jadi bayangkan bahwa kalau state ditampung pada object state nah kita disini membuatnya lebih kecil dengan membuat state yang lebih kecil dengan methode setState nya sendiri. 

useState memiliki parameter yang harus diisi, yaitu init value atau value awal. Contohnya disini parameter kita adalah `0`, jadi nilai awal dari state `value` adalah `0`.

```js
const [ stateName, setStateName ] = useState(INITIAL_VALUE)

const increment = () => setStateName(stateName + 1);
// You can also pass a callback to the setter
const decrement = () => setStateName((currentCount) => currentCount - 1);
```

Walaupun kamu bebas menggunakan variabel apa untuk mendefinsikan state kamu. Pastikan untuk mengikuti aturan atau best practice nya untuk memudahkan Team membaca kodingan kamu. Untuk `stateName` pastikan menggunakan nama yang mempresentasikan nama value tersebut, misalnya `value`, `name`, `isLoading`. Dan untuk `setStateName` gunakan format yang sama dengan `stateName` namun dengan menambahkan `set` didepannya, misalnya `setValue`, `setName`, `setIsLoading`. Dan pastikan bahwa kamu menggunakan Camel Case pada setiap pemberian nama variable untuk menunjukkan konsistensi kamu.

### useReducer
Hook useReducer memiliki kemiripan dengan redux. Dibandingkan dengan `useState` lebih mudah digunakan ketika kamu memiliki complex state logic yang dimana state selanjutnya bergantung pada state sebelumnya.


```js
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
    default: throw new Error('Unexpected action');
  }
};

function Counter() {
  // Returns the current state and a dispatch function to
  // trigger an action
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {count}
      <button onClick={() => dispatch('increment')}>+1</button>
      <button onClick={() => dispatch('decrement')}>-1</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  );
}
```

## Memorization
Untuk menyimpan secara sementara (cache) perubahan pada state kita dibantu oleh beberapa hook berikut untuk meringankan kerja UI untuk nilai dependency yang tidak mengalami perubahan maka function tidak dikerjakan.  

### useMemo
```js
const memoized = useMemo(
  () => expensive(a, b),
  // Only re-run the expensive function when any of these
  // dependencies change
  [a, b]
);
```

### useCallback
Hook **useCallback** dapat digunakan untuk memastikan bahwa fungsi yang dikembalikan akan tetap sama secara referensi selama tidak ada dependensi yang berubah. Ini dapat digunakan untuk mengoptimalkan pembaruan child component ketika mereka bergantung pada referensi yang sama untuk melewati pembaruan (misalnya. **ShouldComponentUpdate**).

```js
const onClick = useCallback(() => console.log(valueA, valueB), [valueA, valueB]);
```

useCallback memiliki 2 argument, yaitu **Function** dan **Dependency**. Untuk bisa mengakses `valueA` dan `valueB` maka kedua variable tersebut dipassing pada argument ke-2 method `useCallback` yang dibungkus kedalam Array.


## Referensi
:::: preview https://medium.com/codelabs-unikom/mengenal-react-hooks-63aafde79da0

::: preview-content Mengenal React Hooks - UNIKOM Codelabs - Medium
Ketika membuat component di React, kita akan mempertimbangkan apakah harus menggunakan class atau function? karena ketika membuat function component maka kita tidak akan bisa menggunakan state atau…

medium.com
:::
::: preview-thumbnail https://miro.medium.com/max/1200/1*yPmUyz7rwQTcI1FLkoZBQQ.png
:::
::::
