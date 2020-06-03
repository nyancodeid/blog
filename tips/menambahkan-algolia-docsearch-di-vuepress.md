---
title: "Tips: Menambahkan Algolia DocSearch di Vuepress"
description: Algolia DocSearch adalah bisa dibilang adalah layanan open-source untuk web dokumentasi yang disediakan oleh Algolia...
image: /images/covers/tips-menambahkan-algolia-docsearch-di-vuepress.png
lang: id-ID
published: 3/29/2020, 06:01:21 PM
category: tips
author: Ryan Aunur Rassyid
tags: algolia,docsearch,vuepress,search
meta:
  - name: keywords
    content: algolia,docsearch,vuepress,search
feed:
  enable: true
---
# Tips: Menambahkan Algolia DocSearch di Vuepress

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage 
  src="/images/covers/tips-menambahkan-algolia-docsearch-di-vuepress.png"
  source="docsearch.algolia.com"
  sourceLink="https://docsearch.algolia.com" />

## Introduction
Search (*Pencarian*) adalah sebuah fitur vital dalam penyimpanan. Tak hayal Google dikenal dengan mesin pencarinya yang andal. Berjuta-juta dokumen yang ada di internet dikenalinya supaya memudahkan orang untuk mencari dokumen yang ingin dicarinya. Pada artikel kali ini kita akan bahas **Algolia DocSearch** dan cara implementasinya di **Vuepress**.

Vuepress menyebut dirinya static-site generator yang fungsi nya menghasilkan website statis menggunakan Framework **Vue**. Vuepress sendiri banyak dipakai untuk membuat sebuah website dokumentasi pada project atau library. Bahkan saat artikel ini ditulis, website **https://blog.nyandev.id** ini bangun diatas Vuepress.

Vuepress sendiri menyediakan fitur search built-in yang hanya meng-*index* judul tiap halaman. Jadi, ketika pengunjung ingin mencari kata yang ada dalam artikel (content) maka tidak akan ada sugesti yang muncul. Untuk mengatasi permasalahan ini kita bisa menggunakan fitur search *Algolia DocSearch* yang sudah tersedia plugin (build-in functionality) pada Vuepress untuk mempermudah kita meng-implementasikannya.

## Table of Contents
[[toc]]

## Persiapan
Adapun hal-hal yang perlu kita persiapkan terlebih dahulu yaitu:

- Alogila Active Account.
- Docker `v19.03.8` atau `latest`.
- Vuepress

## Algolia DocSearch Sraper
Untuk melakukkan menambahkan object pada index, kita bisa melakukkan sraping menggunakan module yang tersedia dari Algolia DocSearch. Alogila secara secara gratis telah menyediakan layanan indexing yang bernama DocSearch. Namun layanan ini diperuntunkan untuk website resmi dokumentasi suatu program atau layanan yang *open-source*. Layanan tersebut melakukkan indexing pada halaman keseluruhan website tiap 24 jam. 

Untuk website pribadi atau bukan dokumentasi kamu tetap bisa menggunakan layanan tersebut namun dengan catatan dijalankan sendiri (Run your own). Terima kasih kepada Docker yang membuat semuanya mudah tanpa memperdulikan kesalahan env dan version conflict suatu dependency. 

:::: preview https://github.com/algolia/docsearch-scraper

::: preview-content GitHub - algolia/docsearch-scraper: DocSearch - Scraper
DocSearch - Scraper. Contribute to algolia/docsearch-scraper development by creating an account on GitHub.

github.com
:::
::: preview-thumbnail https://avatars3.githubusercontent.com/u/2034458?s=400&v=4
:::
::::

Kita bisa menjalankan nya dari code-base (dengan setup project python dan install beberapa dependency) atau menggunakan docker. Pada artikel kali ini kita akan menggunakan docker, kenapa docker? karena docker membuat aplikasi tersebut berjalan didalam container terisolasi yang tujuan utamanya menghindari bentrok pada versi library atau package yang dibutuhkan. Alasan lainnya kita hanya melakukkan satu perintah maka docker yang akan mengurus sisanya sehingga aplikasi dapat berjalan dengan baik (otomatis) tanpa melakukkan konfigurasi apapun.

### Instalasi DocSearch
Untuk memasang atau menjalankan docsearch kita perlu terlebih dahulu mengunduh docker image nya supaya dapat berjalanan sebagai docker container nantinya.

Kita tinggal jalankan perintah docker pull, seperti di bawah ini:

```shell
$ docker pull algolia/docsearch-scraper
```

:::warning Catatan
Perlu diketahui bahwa prosess mengunduh docker image tersebut memakan disk dan penggunaan data internet yang lumayan banyak. Jika kamu menggunakan hotspot atau data selular (modem), pastikan kuota anda terpenuhi dan cukup untuk melakukkan pengunduhan image. 
:::

### Konfigurasi Scraper
Kita membutuhkan 2 file konfigurasi yaitu `config.json` dan `.env`. File `config.json` berisi konfigurasi url dan element apa saja yang akan si scrape, sedangkan file `.env` berisi informasi sensitif berupa ID Aplikasi dan API Key.

#### File config.json
<Gist id="d5c7d2b9da18bb58d48b7f3dc0c9acce" file="config.json" />

### File .env
<Gist id="d5c7d2b9da18bb58d48b7f3dc0c9acce" file=".env" />

### Menjalankan Scraper
Sebelum menjalankan kita install terlebih dahulu `jq` (JSON Command-line processor). 

```shell
$ sudo apt install jq
```

Untuk Sistem operasi Mac dan Windows bisa kunjungi langkah install nya di web wiki dokumentasi resmi jq.

:::: preview https://github.com/stedolan/jq/wiki/Installation

::: preview-content Installation · stedolan/jq Wiki · GitHub
Command-line JSON processor. Contribute to stedolan/jq development by creating an account on GitHub.

github.com
:::
::: preview-thumbnail https://avatars3.githubusercontent.com/u/79765?s=400&v=4
:::
::::

Selanjutnya kita bisa menjalankan DocSearch untuk melakukkan prosess indexing pada website kita. Untuk me-running DocSearch kita tinggal mengetikkan perintah dibawah ini.

```shell
$ docker run -it --env-file=.env -e "CONFIG=$(cat /path/to/your/config.json | jq -r tostring)" algolia/docsearch-scraper
```

Setelah prosess indexing berjalan kita tinggal cek apakah indexing sudah dibuat di Algolia, caranya buka Dashboard Aloglia kalian.

## Integrasi Vuepress
Selanjutnya kita konfigurasi vuepress agar ter-integrasi dengan algolia yang nantinya default search kita adalah Alogila tersebut. Sebelumnya kita perlu mempersiapkan API Key khusus untuk search saja. API Key yang dibuat untuk scraping jangan digunakan pada tahap ini, karena privilege di API tersebut bukan untuk pencarian. 

1. Buka halaman dashboard Alogila.
2. Pilih Menu **API Keys**.
3. Pilih tab **All API Keys**.
4. Kita buat API Key baru dengan klik **New API Key**.

![Algolia API Key Search](/images/posts/algolia-keys-search.png)

5. Selanjutnya isi *Description* dengan "Search API" atau deskripsi API kalian.
6. *Indices* dengan nama Index.
7. *ACL* pilih **search**.
8. Lalu Update.

Simpan API Key yang dihasilkan yang nantinya akan kita gunakan. Selanjutnya kita setting vuepress kita, buka file config vuepress kalian. Lalu sesuaikan dengan konfigurasi berikut.

```js
module.exports = {
  themeConfig: {
    algolia: {
      appId: 'YOUR_APPLICATION_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME'
    }
  }
}
```

Lalu coba jalankan `npm run dev` atau `vuepress dev`. 

## Referensi
:::: preview https://docsearch.algolia.com/docs/how-do-we-build-an-index

::: preview-content How do we build a DocSearch index? | DocSearch
import useBaseUrl from '@docusaurus/useBaseUrl';

docsearch.algolia.com
:::
::: preview-thumbnail https://docsearch.netlify.com/img/og_image.png
:::
::::

<Disqus />
