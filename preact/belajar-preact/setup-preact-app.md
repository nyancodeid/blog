---
title: "Belajar Preact: Setup Preact App"
lang: id-ID
description: Belajar memulai project dengan preact menggunakan bundler tool.
image: /images/covers/belajar-preact-bundler.jpg
published: 1/26/2020, 07:55:23 AM
category: preact
subcategory: belajar-preact
tags: javascript,module,bundler,belajar,project
next: /preact/belajar-preact/preact-hello-world.html
prev: /preact/belajar-preact/apa-itu-preact-js.html
meta:
  - name: keywords
    content: javascript,module,bundler,belajar,project
---
# Belajar Preact: Setup Preact App

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage src="/images/covers/belajar-preact-bundler.jpg" />

> Featured image by <u>Nielsen Ramon</u> on [unsplash.com](https://unsplash.com/photos/okvqMfl78YE)

## Table of Content
[[toc]]

Sebelum kita akan membuat project Preact App, kita akan belajar bagaimana cara setup project kita menggunakan tool CLI bernama `preact-cli`. Konsepnya mirip dengan `create-react-app` yang memudahkan kita membuat setup dan mengelolah project kita. 

Jika kalian belum tau atau belum paham familiar dengan modern web development, dalam artikel blog ini dengan judul "**Javascript: Module and Bundler**" membahas sedikit tentang konsep modern web development yang sedikit berbeda dengan proses development web yang kita ketahui simple dan hanya membutuhkan Text Editor dan Browser.

::: tip Informasi
Kalau teman teman sudah mengetahui atau sudah terbiasa dengan workflow project menggunakan React, kamu bisa skip dan lanjut ke series selanjutnya.
:::

:::: preview https://blog.nyandev.id/javascript/modules-and-bundler.html

::: preview-content Javascript: Module and Bundler | NyanDev Blog
Lebih mengenal apa itu Module dan Bundler dan alasan mereka ada.

blog.nyandev.id
:::
::: preview-thumbnail https://blog.nyandev.id/thumbnail/javascript-modules-bundler-nyandev-blog.jpg
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

```shell
preact create simple preact_hello_world
```

**Output**
```shell
⠋ Creating project
✔ Done!

To get started, cd into the new directory:
  cd preact_hello_world

To start a development live-reload server:
  npm run start

To create a production build (in ./build):
  npm run build

To start a production HTTP/2 server:
  npm run serve
```

Kamu akan menemui folder yang dibuat secara otomatis oleh Preact-CLI. Kurang lebih isi folder project kita akan seperti berikut.

![Folder Project Preact](https://telegra.ph/file/db4724796b6f118f8c070.png)

## Breakdown
Preact-CLI memiliki beberapa command dan optional yang lumayan banyak. Daftar lengkap command dan fungsi nya akan kita bahas di lain artikel. Kita akan breakdown apa saja folder ini dan bagaimana kita memulai project kita dengan Preact. Kamu bisa kepo-in di Github Repository nya langsung.

:::: preview https://github.com/preactjs/preact-cli

::: preview-content GitHub - preactjs/preact-cli
😺 Your next Preact PWA starts in 30 seconds. Contribute to preactjs/preact-cli development by creating an account on GitHub.

github.com
:::
::: preview-thumbnail https://avatars0.githubusercontent.com/u/26872990?s=400&v=4
:::
::::

### manifest.json
Adalah file dimana konfigurasi atau informasi website kita dalam bentuk file JSON sederhana. Kamu bisa mengontrol bagaimana aplikasi terlihat oleh pengguna misalnya mengarahkan halaman apa yang bisa diluncurkan pengguna, dan menentukan tampilannya pada saat peluncuran. Bahkan splashscreen ketika web app dibuka. 

### src/
Pada folder inilah kita akan bekerja, dimana semua komponen, style, dan busnis logic di letakkan. `src` sendiri adalah singkatan dari **source** yang artinya sumber atau semua bermula disini.

### assets/
File file image, ico, dan asset lainnya diletakkan disini. Secara ajaib webpack akan membuatnya bisa diakses secara public pada saat proses development.

### dist/
Folder ini tidak ada sebelum kita memerintahkan Preact-CLI untuk mem-*build* project kita menjadi versi release. Ini adalah folder dimana project preact kita sudah dalam bentuk dimana Browser bisa mem-*proses* nya dan menampilkannya. Karena ketika kita masih dalam development kita akan bekerja menggunakan JSX, SCSS, ataupun Typescript yang dimana Browser tidak mengenal mereka. Sudah menjadi tugas bundler yang akan men-*transpile* dan meng-*compile* file-file tersebut menjadi file yang browser kenali yaitu HTML, Javascript dan CSS.

```shell
npm run build
```

Dengan menjalankan perintah diatas, kamu sudah memerintahkan preact-cli untuk menjalankan perintah `build` ke versi produksi (*release*). `dist` sendiri merupakan singkatan dari **distribution**.

::: warning For Your Information 
**src/** stands for source, and is the **raw code** before minification or concatenation or some other compilation - used to read/edit the code.

**dist/** stands for distribution, and is the **minified/concatenated** version - actually used on production sites.
:::

## NPM Script
Ketika kita menjalankan perintah `npm run dev` sebenarnya ini adalah perintah untuk `npm` agar menjalankan script `dev` yang bisa kamu lihat di file packages.json. Pada propertis scripts disitu secara default akan ada `dev`, `build`, dan `server`. Disitulah isi perintah yang sebenarnya dijalankan oleh npm.

### Start Development Server
Setiap kali kita ingin mengerjakan project kita. Kita harus menyalakan Development Server kita terlebih dulu dengan mengetik perintah `npm run dev`. Perintah tersebut menjalankan server development supaya kita bisa mengakses nya pada browser dengan alamat `http://localhost:8080` (secara default) dan mendapatkan perubahan langsung secara real-time setiap kali kamu melakukkan perubahan dan menyimpannya.

### Build Project
Untuk menghasilkan versi release dari Project, kita bisa menjalankan perintah `npm run build`. Dan hasilnya kita bisa lihat di folder `dist/`.

## Kesimpulkan
Preact-CLI memudahkan kita untuk membuat project Preact secara cepat dengan pre-set yang sudah dibuat oleh Team Preact. Dengan menggunakan Command Line kita semakin dipermudah dalam pengoprasiannya.

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
