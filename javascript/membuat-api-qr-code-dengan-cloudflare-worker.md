---
title: Membuat API Generate QR-Code dengan Cloudflare Worker
lang: id-ID
description: Bereksperimen dengan Cloudflare Worker dengan studi kasus membuat API Generate QR-Code
image: /images/covers/membuat-api-qr-code-dengan-cloudflare-worker.jpg
published: 3/4/2020, 10:55:23 AM
category: javascript
author: Ryan Aunur Rassyid
tags: 
  - javascript
  - worker
  - cloudflare
  - wrangler
meta:
  - name: keywords
    content: javascript,worker,cloudflare,wrangler
feed:
  enable: true
---
# Membuat API Generate QR-Code menggunakan Cloudflare Worker

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage 
  src="/images/covers/membuat-api-qr-code-dengan-cloudflare-worker.jpg"
  author="Guilherme Cunha"
  source="unsplash.com"
  sourceLink="https://unsplash.com/photos/4zwozQxDbD4" />

## Introduction
Berawal dari konsep **Serverless**, kita tau bahwa nodejs sudah hadir diberbagai Cloud Provider yang menyediakan produk serverless nya. Contoh saja **AWS** dengan **AWS Lambda** nya dan **Google Firebase** dengan **Firebase Function** nya. Kita tidak ada masalah tentunya, toh dengan *serverless* kita nggak lagi peduli dengan server, kita hanya berharap aplikasi kita berjalan dengan baik.

Jadi kenapa kita bahas *serverless* kalau tidak ada masalah? ya ini cukup menarik. Kita tau bahwa *serverless* punya kelemahan yaitu *boot time*. Jadi selama app kita di-*serverless* nggak ada yang akses selama waktu tenggang (idle) yang sudah ditentukan provider maka app kita akan dibekukan. Jadi, setiap kali ada yang akses maka akan dicairkan kembali atau dalam istilahnya adalah *cold start*. Ini memakan waktu beberapa ms atau detik sih (berterima kasih ke fitur snapshot nya `V8`) karena untuk nodejs kita perlu install dependency sebelum kita bisa menjalankan program seutuhnya.

:::: preview https://dashbird.io/blog/can-we-solve-serverless-cold-starts

::: preview-content Can We Solve Serverless Cold Starts?
What are cold starts and practical ways to solve them

dashbird.io
:::
::: preview-thumbnail https://dashbird.io/images/blog/2019-03-20/cold-ice-optimized-square.jpg
:::
::::

Nah NodeJS pada versi baru-baru ini merilis fitur yang sudah lama dinanti yaitu **Worker**. Worker ini memungkinkan kita menjalankan sebuah pekerjaan di thread lain yang tidak membebankan main thread. Fitur inilah yang dipakai oleh **Cloudflare Worker**. Fitur ini menyelesaikan masalah *cold start* dari serverless sebelumnya karena server hanya menjalankan script worker kita saja dan server selalu standby (tidak mati). Cold start yang diperlukan hanya lah **4ms**, ini berbeda jauh bahkan 50x lebih cepat.

![NodeJS Workers](https://telegra.ph/file/9a8ce65436f84d53c5a18.png)
*NodeJS Thread - source [nodesource.com](https://nodesource.com/blog/worker-threads-nodejs)*

::: tip Gaol
Goal dari tutorial kali ini adalah Membuat API yang bisa generate QR-Code berupa gambar dari text yang kita inputkan.
:::

## Persiapan
Sebelum kita masuk tutorial kita perlu mempersiapkan tools yang akan kita gunakan, yaitu:

- Node.js (`^v12.16`)
- Wrangler (`^v1.6.0`)

Yang belum install node.js silahkan install terlebih dahulu sesuai dengan platform yang digunakan masing-masing. Ingat bahwa gunakan versi `12` keatas atau LTS terbaru ya.

Selanjutnya kita install tool bernama `wrangler`, tool (CLI) ini disediakan secara official oleh Cloudflare Worker sendiri untuk memudahkan kita membuat project di Cloudflare Worker. Cara installnya adalah:

```shell
$ npm install -g @cloudflare/wrangler
# atau untuk pengguna `yarn`
$ yarn global add @cloudflare/wrangler
```

Jika sudah tinggal kita test menampilkan versi dengan menuliskan perintah dibawah ini:

```shell
$ node -v
# v12.16.0
$ wrangler -V
# wrangler v1.6.0
```

Selanjutnya kita akan configurasi wrangler supaya bisa deploy ke akun **Cloudflare Worker** kita dengan cara ketik perintah:

```shell
$ wrangler config
```

Untuk API Key nya kita buat dulu di:
[https://dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)

Lalu klik "**Create Token**", Selanjutnya isi permission nya sesuai dengan gambar dibawah ini. Sesuaikan inputan yang lain lalu klik "**Continue to summary**" dan copy tokennya.

![Cloudflare Token](https://telegra.ph/file/e80da438e093dff6c22cb.png)
*Create Token Cloudflare Worker Permissions*

::: warning Penting
Karena token tidak bisa dilihat kembali harap simpan baik baik kode token yang sudah diberikan. Seperti halnya password pastikan kamu menyimpannya dengan aman.
:::

## Setup Project
Karena semua tool yang dibutuhkan sudah siap, selanjutnya kita akan setup project kita menggunakan *wrangler*. Buka command line dan arahkan ke *directory* kerja kita. Untuk setup project dengan menggunakan *wrangler* kita bisa menjalankan perintah:

```shell
$ wrangler generate qr-code
# open `qr-code` directory
$ cd qr-code
```

Kita disini akan coding dari awal tanpa menggunakan template. Disini wrangler akan membuat folder sesuai dengan nama project kita yaitu `qr-code`. Selanjutnya kita buka directory nya dan kita cek terlebih dahulu file `wrangler.toml` yang digunakan untuk config project wrangler kita. Konfigurasikan file `wrangler.toml` seperti berikut ini:

```git
name = "qr-api"
-type = "javascript"
+type = "webpack"
-account_id = ""
+account_id = "YOUR_ACCOUNT_ID"
workers_dev = true
route = ""
zone_id = ""
```

::: warning Catatan
Jika field `account_id` sudah ada, kamu tidak perlu menggantinya.
:::

Disini `type` diubah dari javascript ke webpack karena kita akan menggunakan *bundler* **webpack** untuk meng-*compile* npm package kita supaya menjadi satu file `.js`. Kita tidak perlu melakukkan konfigurasi webpack karena wrangler sudah melakukkannya untuk kita.

## Coding
Untuk proses koding sendiri kita akan bekerja pada file `index.js`. Pada Cloudflare Worker kita akan mendefinisikan function `handleRequest` yang menangani request atau yang bertugas sebagai gateway dari request kita. Karena Cloudflare menggunakan `fetch` maka kita harus tau terlebih dahulu apa itu `Request` dan `Response`.

:::: preview https://developer.mozilla.org/id/docs/Web/API/Fetch_API

::: preview-content Fetch API - Referensi API Web | MDN
XMLHttpRequest

developer.mozilla.org
:::
::: preview-thumbnail https://developer.mozilla.org/static/img/opengraph-logo.72382e605ce3.png
:::
::::

Oke kita koding saja supaya tau penerapan nya.

```js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
```

Request kita akan dihandle oleh Listener tersebut jadi fungsi ini wajib ada pada script kalian. Bahasa mudahnya adalah `"Jika ada request maka jalankan fungsi ini"`. Nah selanjutnya adalah kita buat `handleRequest` untuk mempermudah kita menangani request dan melakukkan *decision* atau routing.

```js
async function handleRequest(request) {
  if (request.method === 'GET') {
    try {
      const url = new URL(request.url)
      const text = url.searchParams.get('text')

      return generateQrCode({ text })
    } catch (err) {
      return new Response('Internal Server Error', {
        status: 500
      })
    }
  } else {
    return new Response('Method Not Allowed', {
      status: 405
    })
  }
}
```

Rencannya kita melempar `text` kedalam url query yang memudahkan kita memanggil Worker kita bahkan didalam element `<img />` sekalipun. Karena merunut penulis, jika kita mengirim request dengan method POST maka itu hanya bisa terjadi jika kita menggunakan `fetch` atau `ajax` (XHR). Jadi akan lebih jadi merepotkan. Kita akan memperlakukkan API kita sama halnya dengan file image yang langsung di panggil saja tanpa perlu melakukkan ajax dan lain sebagainya. URL pemanggilan nya akan kita buat seperti ini:

```shell
https://domain.com?text=TEXT_QR_CODE_KITA
```

Selanjutnya kita akan membuat function `generateQrCode`, tapi sebelum itu kita harus install package yang memungkinkan kita generate gambar kode qr dengan mudah yaitu `qr-image`. Kita install menggunakan perintah:

```shell
$ yarn add qr-image
```

Lalu kita bisa import package nya, dan pastikan letakkan di atas sendiri. Karena kita hanya perlu method `imageSync` maka kita import method `imageSync` saja. Dengan cara seperti berikut:

```js
import { imageSync } from 'qr-image'
```

Sekarang kita bisa buat function `generateQrCode` yang fungsi nya merubah text yang diminta menjadi gambar QR Code. Kita juga akan memasang `Cache-Control` pada header response kita supaya tidak melakukkan request berulang untuk text yang sama, kita bisa menghemat request dengan ini.

```js
function generateQrCode({
  text
}) {
  const image = imageSync(text || 'https://blog.nyandev.id')

  return new Response(image, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000'
    }
  })
}
```

Untuk opsi lain seperti merubah lebar margin, *error correction level*, dan type image (`png`, `svg`, `eps`, dan `pdf`) kamu bisa lihat di halaman NPM nya untuk melihat opsi lain yang ada pada package `qr-image`.

![qr-image](https://telegra.ph/file/e49a121b2d1d5452618bc.png)
*Konfigurasi lain yang ada pada package `qr-image`*

Oke semua script sudah ada dan yang dibutuhkan sudah siap. Selanjutnya kita akan melakukkan test.

## Preview
Wrangler menyediakan fitur `preview` untuk melakukkan uji coba atau test terhadap script worker yang akan kita publish. Caranya dengan menjalankan perintah berikut:

```shell
$ wrangler preview
```

Maka browser akan membuka website yang memungkinkan kita melakukkan test, dan melihat console dari program javascript kita. Domain yang disediakan memang `example.com` tapi jangan khawatir ini hanya untuk test saja dan memang seperti itu adanya. 

![Wrangler Preview](https://telegra.ph/file/85d4c27668a1862a86fe8.png)
*Preview Script sebelum kita Deploy*

## Build
Pada tahap ini script kita sudah berjalan sesuai dengan keinginan kita. Selanjutnya adalah prosess deploy, tapi judul tahap ini `build`?. Ya, wrangler menyediakan perintah build karena hasil build script kita yang ada pada `worker/script.js` juga bisa kita manfaatkan untuk Web Worker kita sendiri.

Untuk build script, kita bisa menjalankan perintah seperti berikut:

```shell
$ wrangler build
```

Prosess build script:

```shell
⬇️ Installing wranglerjs...
⬇️ Installing wasm-pack...
 Built successfully, built project size is 44 KiB.
```

## Deploy
Akhirnya kita bisa melakukkan deploy script kita ke Cloudflare Worker. Untuk melakukkan deploy kita perlu tau bahwa perintah ini tidak memerlukkan perintah sebelumnya (`build`) karena secara otomatis perintah ini akan build sekaligus mempublish script kita.

```shell
$ sudo wrangler publish
```

::: warning Catatan
Karena `wrangler publish` memerlukkan informasi API KEY yang disimpan kedalam folder dengan akses Administrasi/root maka kita perlu menambahkan `sudo` bagi pengguna Linux.
:::

Setelah prosess deploy berhasil kita juga bisa tau alamat worker kita.

```shell
Successfully published your script to https://qr-api.nyandev.workers.dev
```

Contoh response worker yang berjalan dengan sangat baik:

```shell
$ http https://qr-api.nyandev.workers.dev?text=nyandev
# Result
HTTP/1.1 200 OK
CF-RAY: 570693510c77e811-LAX
Cache-Control: public, max-age=31536000
Connection: keep-alive
Content-Length: 336
Content-Type: image/png
Date: Sat, 07 Mar 2020 19:03:15 GMT
Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
Server: cloudflare
Vary: Accept-Encoding
```

## Hasil Akhir
Berikut adalah script penuh dari hasil akhir kita dalam membuat generator qr-code:

<Gist id="nyancodeid/03a24d32cb4e25f018e446a2cf9443e2" />

Kamu bisa melihat hasil akhir dan script sepenuhnya di Repository yang sudah saya buat dibawah ini:

:::: preview https://github.com/nyancodeid/qr-code-api

::: preview-content GitHub - nyancodeid/qr-code-api: Cloudflare Worker Generate QR Code
Cloudflare Worker Generate QR Code. Contribute to nyancodeid/qr-code-api development by creating an account on GitHub.

github.com
:::
::: preview-thumbnail https://avatars1.githubusercontent.com/u/24630806?s=400&v=4
:::
::::

## Referensi
:::: preview https://developers.cloudflare.com/workers/tutorials/build-a-serverless-function

::: preview-content Build a Serverless Function | Cloudflare Workers
Use Cloudflare’s APIs and edge network to build secure, ultra-fast applications.

developers.cloudflare.com
:::
::: preview-thumbnail https://telegra.ph/file/73935aea4865c151c4c70.png
:::
::::

<Disqus />
