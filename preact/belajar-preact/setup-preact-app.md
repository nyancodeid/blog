---
title: "Belajar Preact: Setup Preact App [#2]"
lang: id-ID
description: Belajar memulai project dengan preact menggunakan bundler tool.
image: /images/covers/belajar-preact-bundler.jpg
published: 1/26/2020, 07:55:23 AM
category: preact
subcategory: belajar-preact
tags: 
  - javascript
  - module
  - bundler
  - belajar
  - project
next: /preact/belajar-preact/preact-hello-world.html
prev: /preact/belajar-preact/apa-itu-preact-js.html
meta:
  - name: keywords
    content: javascript,module,bundler,belajar,project
feed:
  enable: true
---
# Belajar Preact: Setup Preact App

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage 
  src="/images/covers/belajar-preact-bundler.jpg"
  author="Nielsen Ramon"
  source="unsplash.com"
  sourceLink="https://unsplash.com/photos/okvqMfl78YE" />

## Table of Content
[[toc]]

Sebelum kita akan membuat project Preact App, kita akan belajar bagaimana cara setup project kita menggunakan tool CLI bernama `preact-cli`. Konsepnya mirip dengan `create-react-app` yang memudahkan kita membuat setup dan mengelolah project kita. 

Jika kalian belum tau atau belum paham familiar dengan modern web development, dalam artikel blog ini dengan judul "**Javascript: Module and Bundler**" membahas sedikit tentang konsep modern web development yang sedikit berbeda dengan proses development web yang kita ketahui simple dan hanya membutuhkan Text Editor dan Browser.

::: tip Informasi
Kalau teman teman sudah mengetahui atau sudah terbiasa dengan workflow project menggunakan React, kamu bisa skip dan lanjut ke series selanjutnya.
:::

:::: preview https://blog.nyan.my.id/javascript/modules-and-bundler.html

::: preview-content Javascript: Module and Bundler | NyanDev Blog
Lebih mengenal apa itu Module dan Bundler dan alasan mereka ada.

blog.nyan.my.id
:::
::: preview-thumbnail https://blog.nyan.my.id/thumbnail/javascript-modules-bundler-nyandev-blog.jpg
:::
::::

## Introduction
Dalam membangun website menggunakan Preact kamu tidak harus menggunakan tool bundler seperti yang akan kita lakukkan sekarang. Kenapa? karena Preact sendiri adalah sebuah library yang sebenarnya bisa berjalan di browser langsung. Namun, dikarenakan kita ingin website kita berjalan secara optimal dan kompatibel diberbagai browser atau istilahnya `Cross Browser Compatibility` kita perlu yang namanya Bundler supaya kita tidak dipusingkan dengan script ini berjalan dibrowser kita tapi tidak dibrowser mantan. Kan report.

::: tip Basic 
Ilmu basic yang harus anda pahami selama tutorial series ini adalah:
- Basic Command Prompt
- Basic NodeJS dan NPM
:::

## Setup Project
::: warning
Important: Node.js > V6.x is a minimum requirement.
:::

### Install Preact-CLI
Pertama kita akan install `preact-cli` secara global menggunakan NPM. Supaya kita bisa menggunakannya berulang kali dan memudahkan dalam pembuatan dan memanage project Preact kalian.

```shell
npm install -g preact-cli
```
jika kalian menggunakan yarn, kalian bisa install preact-cli dengan cara berikut
```shell
yarn global add preact-cli
```

### Membuat Project Web
Setelah preact-cli di install kita akan lanjut membuat project Preact kita. Sekarang preact-cli memiliki sejumlah template untuk memudahkan kita setup project secara cepat.

Kita akan menggunakan template `simple` untuk memulai project kecil kita. Jika lebih memilih untuk menggunakan **yarn** pada project kalian, kalian bisa menambahkan argument `--yarn` pada akhir perintah dibawah ini. 

::: warning Catatan
Karena `yarn` memiliki kelebihan cepat dalam melakukkan instalasi dependensi jadi selama tutorial series ini saya akan menggunakan `yarn` dari pada `npm`. Namun penulis tidak memaksakan bahwa kamu harus menggunakan `yarn` dari pada `npm`, karena pada dasarnya mereka sama.
:::

```shell
preact create simple preact_hello_world --yarn
```

**Output**
```shell
⠋ Creating project
✔ Done!

To get started, cd into the new directory:
  cd preact_hello_world

To start a development live-reload server:
  yarn start

To create a production build (in ./build):
  yarn build

To start a production HTTP/2 server:
  yarn serve
```

Kamu akan menemui folder yang dibuat secara otomatis oleh Preact-CLI. Kurang lebih isi folder project kita akan seperti berikut.

```
├── node_modules/
├── assets/
├── src/
  ├── index.js
├── .gitignore
├── yarn.lock
├── package.json
├── manifest.json
```

## NPM Script
Ketika kita menjalankan perintah `yarn dev` sebenarnya ini adalah perintah untuk `yarn` agar menjalankan script `dev` yang bisa kamu lihat di file packages.json. Pada propertis scripts disitu secara default akan ada `dev`, `build`, dan `server`. Disitulah isi perintah yang sebenarnya dijalankan oleh yarn.

### Start Development Server
Setiap kali kita ingin mengerjakan project kita. Kita harus menyalakan Development Server kita terlebih dulu dengan mengetik perintah `yarn dev`. Perintah tersebut menjalankan server development supaya kita bisa mengakses nya pada browser dengan alamat `http://localhost:8080` (secara default) dan mendapatkan perubahan langsung secara real-time setiap kali kamu melakukkan perubahan dan menyimpannya.

### Build Project
Untuk menghasilkan versi release dari Project, kita bisa menjalankan perintah `yarn build`. Dan hasilnya kita bisa lihat di folder `dist/`.

## Kesimpulan
Pada pembahasan kita kali ini, kamu belajar tentang bagaimana cara setup sebuah project Preact menggunakan bantuan Preact-CLI. Dengan adanya tool Preact-CLI mengelola dan menkonfigurasi Preact menjadi lebih mudah dan kamu tidak lagi repot untuk mengkonfigurasi production ready ataupun konfigurasi webpack yang diperlukan.

Finally, kamu bisa mempersiapkan Project Preact kamu dengan lancar dan siap digunakan untuk Tutorial selanjutnya.

## Referensi

:::: preview https://stackoverflow.com/questions/23730882/what-is-the-role-of-src-and-dist-folders

::: preview-content javascript - What is the role of src and dist folders? - Stack Overflow
I'm looking at a git repo for a jquery plugin. I want to make a few changes for use in my own project, but when I opened up the repo it had a structure I've never seen before. I'm not sure which fi...

stackoverflow.com
:::
::: preview-thumbnail https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png?v=73d79a89bded
:::
::::

<Disqus />
