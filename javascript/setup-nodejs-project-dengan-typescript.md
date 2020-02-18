---
title: "Cara Setup Project Node.js + Typescript"
lang: id-ID
description: Mempelajari bagaimana cara setup project nodejs dan typescript untuk meningkatkan penulisan javascript.
image: /images/covers/cara-setup-nodejs-project-dengan-typescript.jpg
published: 2/18/2020, 07:55:23 AM
category: javascript
author: Ryan Aunur Rassyid
draft: false
tags: javascript,typescript,setup,node,belajar
meta:
  - name: keywords
    content: javascript,typescript,setup,node,belajar
---
# Cara Setup Project Node.js + Typescript

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage 
  src="/images/covers/cara-setup-nodejs-project-dengan-typescript.jpg"
  author="Safar Safarov"
  source="unsplash.com"
  sourceLink="https://unsplash.com/photos/LKsHwgzyk7c" />

## Introduction

Node adalah runtime environment yang memungkinkan untuk menulis Javascript pada sisi server yang ditemukan pada tahun 2011 oleh **Ryan Dahl**. Hingga saat ini node mengalami perkembangan sangat pesat. Menulis Javascript pada server-side menjadi sebuah tantangan karena sifat bahasa Javascript yang *dynamic* dan *weak typed*.

Ini menjadi keluhan para developer server-side sebelumnya yang ingin menggunakan javascript sebagai bahasa project mereka selanjutnya dengan alasan kurangnya *strong static typeing*. Disinilah Typescript datang untuk menutupi kekurangan tersebut.

Typescript adalah super-set javascript yang ditulis (optional) yang dapat membantu para developer untuk membangun dan mengelola proyek Javascript skala besar. Ini dapat dianggap sebagai javascript dengan fitur tambahan seperti *string static typing*, *compilation*, dan *object oriented programming* (OOP).

::: warning Catatan
Typescript secara teknis adalah kumpulan super-set Javascript, yang berarti bahwa semua kode Javascript adalah kode Typescript yang valid.
:::

Berikut ini beberapa manfaat menggunakan TypeScript:
1. Optional static typing.
2. Type inference.
3. Kemampuan untuk menggunakan interface.

Artikel kali kita akan membahas pengaturan dan konfigurasi yang diperlukan untuk memungkinkan, komputer kita menjalankan aplikasi Node menggunakan Typescript dan mengubahnya menjadi kode Javascript yang rapih dan andal.

## Prasyarat
Karena kita akan menggunakan Node.js maka pastikan kamu sudah memiliki Node dengan versi minimal `6` atau gunakan NodeJS versi LTS terbaru untuk mengantisipasi error akibat tidak adanya fitur yang diperlukan untuk menjalankan Typescript.

### Node
Untuk memastikan bahwa prasyarat sudah dipenuhi adalah dengan memastikan versi node dan npm milik kalian dengan mengetik perintah dibawah ini di terminal atau command line kalian.

```shell
node -v
npm -v
```
Saat artikel ini dibuat penulis menggunakan Node versi `v12.16.0` dan npm versi `v6.13.4`

### Menginisialisasi project dengan NPM
Sekarang setelah Node dan Npm sudah ada, selanjutnya buat folder baru dan inisialisasi sebagai project npm:

```shell
mkdir nama_project
cd nama_project
npm init
```

::: tip Catatan
Jika kami ingin npm menebak nilai default dari proses inisialisasi project maka kamu cukup menggunakan `npm init -y`
:::

### Menginisialisasi Direktori
Selanjutnya kita akan memisahkan folder dimana kita bekerja dan folder dimana file `.js` atau hasil transplasi diletakkan. 

```shell
mkdir src
mkdir dist
```
- `src`: adalah folder dimana file typescript kita berada.
- `dist`: adalah folder dimana hasil build typescript kita berada.

### Menginstal Dependensi
Sejauh ini Anda telah menginstal Node dan menginisialisasi project anda. Langkah selanjutnya adalah menginstall dependensi yang diperlukan untuk menjalankan script. Kita akan menginstall dependensi untuk *dev* dependensi dan *project* dependensi.

```shell
npm install -D typescript
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
- `typescript` : core typescript library.
- `eslint` : core ESLint linting library.
- `@typescript-eslint/parser` : Parser yang memungkinkan ESLint untuk melinting code Typescript.
- `@typescript-eslint/eslint-plugin` : Plugin yang menyimpan rules untuk ESLint spesifik untuk Typescript.

selanjutnya kita akan install package express.js yang akan digunakan untuk melakukkan pengujian konfigurasi Typescript kita.  

```shell
npm install express 
npm install -D @types/express
```
Perintah kedua diatas menginstal types Express untuk dukungan Typescript. Paket ini dibutuhkan karena Typescript dan Express adalah paket independen. Tanpa paket `@types/express`, tidak ada cara bagi Typescript untuk mengetahui jenis-jenis class dalam Express.

::: tip Catatan
Types dalam TypeScript adalah file, biasanya dengan ekstensi `.d.ts`. File-file tersebut digunakan untuk memberikan informasi types tentang API, dalam hal ini framework Express.
:::

## Mengkonfigurasi TypeScript
Di bagian ini, kita akan mengatur TypeScript dan mengkonfigurasi linting untuk TypeScript. TypeScript menggunakan file yang dipanggil `tsconfig.json` untuk mengkonfigurasi opsi kompiler untuk proyek. Buat `tsconfig.json` file di root direktori project dan copy paste contoh kode berikut:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}
```

Mari kita membahas beberapa kunci dalam cuplikan JSON di atas dan lihat apa yang mereka lakukan:

- `module`: Menentukan metode pembuatan kode modul. Node menggunakan `commonjs`.
- `target`: Menentukan level bahasa output berdasarkan **EcmaScripts**.
- `outDir`: Ini adalah lokasi dimana hasil transpilasi. kita menyimpannya pada folder `dist/`

Untuk membuat file `tsconfig.json` kita juga bisa membuat nya dengan menjalankan perintah `npx tsc --init` di terminal, atau tambahkan script perintah pada file `package.json` dengan `tsc --init`.

Mungkin ada yang mengalami pesan error ketika kita membuat file `tsconfig.json` yaitu ada error berikut.
```shell
ERROR: No inputs were found in config file 'tsconfig.json'.
```
mengatasinya cukup mudah, kalian tinggal membuat file `app.ts` dalam folder `src/` yang sudah kita buat tadi.

### Mengkonfigurasi ESLint
Sekarang kita bisa mulai mengkonfigurasi ESLint pada project Typescript kita. Cara nya adalah kita buat terlebih dahulu file `.eslintrc.js` di root folder kita. Copy paste code snippet berikut pada file `.eslintrc.js` yang sudah kita buat.

```js
module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
 parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
  rules:  {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
```

::: warning Note
Kenapa kita menggunakan file `.eslintrc.js` dibandingkan dengan `.eslintrc`? karena dengan kita membuatnya menjadi file javascript akan memperbolehkan kita untuk menulis komentar supaya file konfigurasi kita bisa dengan mudah dibaca.
:::

## Struktur Folder
Berikut adalah struktur code awal project sederhana untuk menjalankan Typescript.

```
├── node_modules/
├── dist/
├── src/
  ├── app.ts
├── package-lock.json
├── package.json
├── tsconfig.json
├── .eslintrc.js
```

## Memperbarui file package.json
Sampai sini kamu sudah bisa menjalankan project Typescript kita. Untuk membuatnya mudah dijalankan kita akan membuat `npm script`. Pada langkah ini kita akan membuat script `start` yang akan mengkompilasi dan mentranspilasikan kode TypeScript, dan kemudian menjalankan aplikasi .js yang dihasilkan.

Buka file `package.json` dan perbarui itu sesuai dengan snippet dibawah ini:
```json
{
  "name": "node-typescript",
  "version": "1.0.0",
  "description": "",
  "main": "dist/app.js",
  "scripts": {
    "start": "tsc && node dist/app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "^4.17.2",
    "@typescript-eslint/eslint-plugin": "^2.20.0",
    "@typescript-eslint/parser": "^2.20.0",
    "eslint": "^6.8.0",
    "typescript": "^3.7.5"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
```
update `main` path dan tambahkan perintah `start` pada `scripts`  


## Membuat dan Menjalankan Express Server Sederhana
Now that TypeScript and its linter are configured, it is time to build a Node Express Server. Open up the app.ts file and paste in the following code snippet:

Sekarang Typescript dan ESLint sudah terkonfigurasi, dan sekarang waktunya untuk mebuat basic Expres Server untuk menguji apakah konfigurasi kita sudah benar.

```ts
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hai, dari Typescript!');
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
```

koding diatas membuat Node Server yang berjalan pada port `3000` yang menampilkan response sederhana. Sekarang kita bisa menjalankan node server kita dengan perintah:

```shell
npm start
```

Jika semua berjalan lancar maka pada terminal akan menampilkan pesan `server is listening on 3000` dan sekarang kamu bisa mengunjungi `http://localhost:3000` pada browser mu. Seharusnya akan tampil text berikut:

```
Hai, dari Typescript!
```

Nah sekarang kita tau bahwa Typescript akan merubah file `app.ts` kita menjadi file javascript di `dist/app.js` sesuai dengan konfigurasi Typescript yang sudah kita buat tadi. Nah file typescript yang sudah kita tulis tadi akan menjadi javascript seperti berikut:

```js
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hai, dari Typescript!');
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map
```
Pada titik ini kamu sudah berhasil setup project Node.js kamu menggunakan Typescript. Sekarang kamu bisa menggunakan Typescript untuk menulis source code aplikasi kamu.

::: tip Tips
Kamu bisa menggunakan module `tsnode` untuk menjalankan script `.ts` kamu secara langsung dari pada menjalankan `tsc` untuk mengtranspile kode typescript menjadi javascript lalu menjalankan hasil transpile tersebut dengan `node`. `tsnode` secara otomatis akan melakukkan prosess transpile dan lansung menjalankan nya, ini menjadi lebih praktis.
:::

## Kesimpulan
Pada tutorial ini, kamu belajar tentang bagaimana Typescript sangat membantumu menulis kode Javascript secara benar dan andal. Kamu juga belajar tentang keuntungan bekerja dengan Typescript.

Akhirnya, kamu bisa menyiapkan project Node sederhana menggunakan framework Express, tapi menulis menggunakan Typescript.

## Referensi

:::: preview https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript

::: preview-content How To Set Up a Node Project With Typescript | DigitalOcean
Writing server-side JavaScript can be challenging as a codebase grows. TypeScript is a typed (optional) super-set of JavaScript that can help with building and managing large-scale JavaScript projects. It can be thought of as JavaScript with additiona

www.digitalocean.com
:::
::: preview-thumbnail https://telegra.ph/file/16a59f51b52e26d80ce1f.png
:::
::::

:::: preview https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb

::: preview-content Using ESLint and Prettier in a TypeScript Project - DEV Community 👩‍💻👨‍💻
ESLint's large set of linting rules and the increased commitment to use ESLint by the TypeScript team makes ESLint a great tool for linting TypeScript projects. Tagged with typescript, javascript, developertools.

dev.to
:::
::: preview-thumbnail https://telegra.ph/file/c3717d0a25064f909b50e.png
:::
::::

<Disqus />
