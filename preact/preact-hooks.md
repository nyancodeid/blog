---
title: "Preact Hooks: untuk Functional Component"
lang: id-ID
description: Penggunaan state dan lifecycle lewat Function Components yang lebih ringkas.
image: /images/covers/preact-hooks--nyandev-blog.jpg
published: 1/24/2020, 02:49:21 PM
category: preact
tags: preact,cli,preactjs,javascript,react
meta:
  - name: keywords
    content: preact,cli,preact.js,react
feed:
  enable: true
---
# Preact Hooks: untuk Functional Component

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage 
  src="/images/covers/preact-hooks--nyandev-blog.jpg"
  source="unsplash.com"
  sourceLink="https://unsplash.com" />

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
Pada contoh diatas, kita menggunakan `useState`. useState adalah sebuah Hook, dan akan mengembalikan nilai dari state (pada contoh diatas: value) dan fungsi yang bisa kita gunakan untuk mengubah nilai tersebut (setValue). Fungsi setValue disini mirip dengan `this.setState` jadi bayangkan kalau state ditampung dalam object state nah disini kita membuatnya lebih kecil dengan membuat state yang lebih kecil dengan metode setState nya sendiri. 

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
const onClick = useCallback(() => console.log(a, b), [a, b]);
```

useCallback memiliki 2 argument, yaitu **Function** dan **Dependency**. Untuk bisa mengakses `a` dan `b` maka kedua variable tersebut dipassing pada argument ke-2 method `useCallback` yang dibungkus kedalam Array.

## useRef
Untuk mendapatkan referensi pada DOM node kedalam functional component kita bisa memanfaatkan hook **useRef**. Cara kerjanya mirip dengan method [createRef](https://preactjs.com/guide/v10/refs#createrefs).

```jsx
function Foo() {
  // Initialize useRef dengan nilai awal `null`
  const input = useRef(null);
  const onClick = () => input.current && input.current.focus();

  return (
    <>
      <input ref={input} />
      <button onClick={onClick}>Focus input</button>
    </>
  );
}
```

::: warning
Hati hati untuk tidak membuat bingung `useRef` dengan `createRef`.
:::

## useContext
Untuk mengakses konteks dalam komponen fungsional kita dapat menggunakan hook **useContext**, tanpa ada higher-order component atau wrapper component. Menurut website [aligator.io](https://alligator.io/) di artikelnya tentang `useContext` disebutkan bahwa `Context API` adalah alternatif yang sederhana dan mudah dipahami untuk “prop-drilling” ke atas dan ke bawah dari struktur komponen Anda. Alih-alih meneruskan data lokal di sekitar dan melalui beberapa lapisan komponen (passing data antar komponen), dibutuhkan langkah mundur untuk menciptakan state global, yang sangat berguna untuk data yang perlu dibagi di seluruh komponen (data seperti tema, otentikasi, bahasa pilihan, dll.)

```jsx
const Theme = createContext('light');

function DisplayTheme() {
  const theme = useContext(Theme);
  return <p>Active theme: {theme}</p>;
}

// ...later
function App() {
  return (
    <Theme.Provider value="light">
      <OtherComponent>
        <DisplayTheme />
      </OtherComponent>
    </Theme.Provider>
  )
}
```

## Side-Effects
Side Effects adalah jantung dari modern app saat ini. Ketika value pada dependency argument berubah effect yang akan ditimbulkan dari perubahan tersebut akan memicu function yang ditetapkan sebagai callback nantinya. 

### useEffect
useEffect akan mentrigger function ketika sebuah nilai berubah atau memiliki dampak dari perubahan itu.

```js
useEffect(() => {
  // Trigger your effect
  return () => {
    // Optional: Any cleanup code
  };
}, [] // <-- Dependency Array
);
```

Lihat contoh sederhannya dari penerapan useEffect dalam merubah judul document HTML setiap kali value dari `props.title` benar benar berubah untuk menghindari pemanggilan function secara terus menerus ketika props di-*refresh* namun valuenya tetap. Itulah kenapa kita meletakkan `props.title` pada dependency array.

```js
function PageTitle(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return <h1>{props.title}</h1>;
}
```

Contoh lain dalam penerapan `useEffect` yang tidak menggunakan dependency array.

```js
// Component that will always display the current window width
function WindowWidth(props) {
  const [width, setWidth] = useState(0);

  function onResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return <div>Window width: {width}</div>;
}
```

::: tip
The cleanup function is optional. If you don't need to run any cleanup code, you don't need to return anything in the callback that's passed to `useEffect`.
:::

### useErrorBoundary
Ketika component UI mengembalikan `Error` maka kita bisa handle menggunakan Hook **useErrorBoundary** untuk memberikan UI yang berbeda ketika component mengalami error saat menjalankan kode atau saat pemanggilan API berlangsung.

```js
const [error, resetError] = useErrorBoundary();
```

Kamu juga bisa melakukkan hal lain misalnya mengirim error tersebut ke server untuk *error reporting* dengan cara berikut.

```js
const [error, resetError] = useErrorBoundary(error => reportSomeError(error.message));
```

Contoh lengkapnya lihat kode berikut.

```jsx
const App = props => {
  const [error, resetError] = useErrorBoundary(
    error => reportSomeError(error.message)
  );

  // Display a nice error message
  if (error) {
    return (
      <div>
        <p>{error.message}</p>
        <button onClick={resetError}>Try again</button>
      </div>
    );
  } else {
    return <div>{props.children}</div>
  }
};
```

## Referensi
:::: preview https://preactjs.com/guide/v10/hooks/

::: preview-content Hooks – Preact
Preact is a fast 3kB alternative to React with the same modern API.

preactjs.com
:::
::: preview-thumbnail https://preactjs.com/assets/app-icon.png
:::
::::

:::: preview https://medium.com/codelabs-unikom/mengenal-react-hooks-63aafde79da0

::: preview-content Mengenal React Hooks - UNIKOM Codelabs - Medium
Ketika membuat component di React, kita akan mempertimbangkan apakah harus menggunakan class atau function? karena ketika membuat function component maka kita tidak akan bisa menggunakan state atau…

medium.com
:::
::: preview-thumbnail https://miro.medium.com/max/1200/1*yPmUyz7rwQTcI1FLkoZBQQ.png
:::
::::

:::: preview https://alligator.io/react/usecontext/

::: preview-content The React useContext Hook in a Nutshell ← Alligator.io
An introductory guide to React's useContext Hook to gain access to a global state via the Context API.

alligator.io
:::
::: preview-thumbnail https://telegra.ph/file/9d0d66d03c52febd50913.png
:::
::::

<Disqus />
