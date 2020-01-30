---
title: "Unistore: State Management Mudah untuk Preact App"
lang: id-ID
description: Mari berkenal dengan Unistore, state container yang mensentralkan state dengan memanfaatkan component binding.
image: /thumbnail/preact-unistore--nyandev-blog.jpg
published: 1/17/2020, 10:06:21 AM
category: preact
tags: preact,unistore,state,management,react
meta:
  - name: keywords
    content: preact,unistore,state,management,react
---
# Unistore: State Management Mudah untuk Preact App

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage src="/images/covers/preact-unistore--nyandev-blog.jpg" />

> A tiny 350b centralized state container with component bindings for [Preact](https://github.com/developit/preact) & [React](https://github.com/facebook/react).

## State Management

Dalam membangun sebuah web app kita akan dihadapkan dengan beberapa permasalah dalam mengatur ***state***. Ya state, mungkin untuk 2-5 komponen yang kita buat tidak akan meninmbulkan masalah saat proses development. Namun, permasalah ini akan muncul ketika kamu sudah memiliki banyak komponen yang saling membutuhkan state satu sama lain.

Kita tau bahwa management state yang dilakukkan sebelumnya yaitu melempar ***state*** ke ***props*** akan mudah di pahami dalam pengenalan konsep state. Siapa yang tidak tau dengan cara pengenalan state yang disajikan dengan membuat aplikasi increment sederhana. Namun kita harus tau bahwa ini adalah cara sederhana menjelaskan konsep state dan project yang akan kita bangun tidak akan sesederhana itu.

Menurut [deganda.com](https://degananda.com/react-state-props-lifecycle/) di pembahasan tentang apa itu state, props dan lifecycle di jelaskan. ***State*** dan ***props*** merupakan dua jenis data yang dapat digunakan oleh komponen. ***Props*** merupakan data yang fix (karena diambil dari parent atau di set oleh parent dari komponen tersebut). Sedangkan state digunakan untuk data yang berubah. State akan di inisiasi pada constructor(*dynamic*) sedangkan props menjadi parameter pada construtor sehingga tidak dapat berubah (*fixed*).

## Unistore
Dalam penerapan state management, Preact bisa dipadukan dengan library state management contohnya Redux, RxJS atau Statty. Namun ada module atau libarary yang ditulis oleh pembuat Preact sendiri dengan lebih simple dan berukuran kecil namun tidak mengurangi fungsi state management itu sendiri.

Alih-alih menggunakan Redux ([*preact-redux*](https://github.com/developit/preact-redux)) yang sebenernya bisa tapi karena dukungan untuk Preact X belum ada jadi unistore jadi pilihan nya.

::: warning Compatibility Note:
If you're using Preact X (preact@10+), please use the official react-redux library.
:::

Jadi sederhanya Unistore merupakan sebuah state management yg mana tugasnya sebagai centralized store untuk semua component dalam aplikasi preact/react.

:::: preview https://github.com/developit/preact-redux

::: preview-content developit/preact-redux
:loop: Preact integration for Redux (no shim needed!) - developit/preact-redux

github.com
:::
::: preview-thumbnail https://avatars1.githubusercontent.com/u/105127?s=400&v=4
:::
::::
