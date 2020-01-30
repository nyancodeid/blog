---
title: " Tips: Cara Extract Meta Data Web"
description: Cara dapetin data meta di web untuk digunakan di NyanDev Blog
image: /thumbnail/extract-meta-data--nyandev-blog.jpg
lang: id-ID
published: 1/17/2020, 10:06:21 AM
category: tips
author: Ryan Aunur Rassyid
tags: meta,api,runkit,nodejs,markdown
meta:
  - name: keywords
    content: meta,api,runkit,nodejs,markdown
---
# Tips: Cara Extract Meta Data pada Halaman Website

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage src="/images/covers/extract-meta-data--nyandev-blog.jpg" />

Kalau kamu sering banget baca artikel di medium.com mungkin kalian tidak asing dengan tampilan priview berikut ini. Link preview ini mengambil data meta di web dan di tampilkan dalam bentuk card menarik.

## Vuepress Plugin
Untuk membuat custom element markdown ini kita perlu plugin bernama `vuepress-plugin-container` . Plugin ini memungkinkan kita bikin custom render element di markdown kita. Plugin ini memakai module bernama `markdown-it`.

## Getting Started

### Instalasi Plugin
Install plugin di folder project vuepress kamu dengan mengetikkan perintah
```shell
npm install vuepress-plugin-container
```
jika kamu menggunakan yarn, install plugin dengan perintah berikut
```shell
yarn add vuepress-plugin-container
```

### Mendifinisikan Component
Sebelum kita membuat component kita harus mendefiniskan terlebih dahulu format pemanggilan dan apa yang akan di render. Dengan menambahkannya di file `./vuepress/config.js` di bagian plugins.

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-container',
      {
        type: 'preview',
        before: link => `<a href="${link}" target="_blank" class="link-preview">`,
        after: '</a>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'preview-content',
        before: title => `<div class="link-preview--content"><p class="title">${title}</p>`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'preview-thumbnail',
        before: (link) => {
          console.log(arguments)
          return `<div class="link-preview--thumbnail" style="background-image: url(${link});">`
        },
        after: '</div>',
      },
    ],
  ]
}
```

### Menambahkan Style (CSS)
Karena vuepress menggunakan `stylus` maka syntax akan sedikit berbeda dengan css yang kita ketahui tapi format nya tetap lah sama.

```styl
.link-preview
  text-decoration: none
  margin 1rem 0
  box-shadow 0 1px 4px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1)
  display flex
  flex 0 0 auto
  &:hover
    text-decoration none !important

  .link-preview--content
    padding 10px 12px 10px;
    flex 1 1 auto
    flex-direction column
    justify-content center
    display flex
    width calc(100% - 180px)
    p
      margin-top 0
    p:last-child
      margin-bottom 0
    p:not(.title)
      font-size 14px
      color rgba(0, 0, 0, 0.54)
      font-weight 400
      word-break break-word
      text-overflow ellipsis
      overflow hidden
    p.title
      font-weight bold
      color #212121
      margin-bottom 4px
      font-size 18px

  .link-preview--thumbnail
    width 180px
    height 167px
    background-size cover
    background-repeat no-repeat
    background-position 50% 50%
    box-shadow inset 0 0 0 1px rgba(0, 0, 0, 0.1)
```

### Penggunaan
Contoh penggunaan dalam file markdown `.md` 

```md
:::: preview https://medium.com/@MFaridZia/belajar-state-management-pada-vue-js-dengan-vuex-ef6d0571bc0e

::: preview-content Belajar State Management pada Vue.js...
Hallo semuanya, malem ini saya ada kesempatan nulis

medium.com
:::
::: preview-thumbnail https://miro.medium.com/max/800/1*X5Oziwil9_Wsslbwku_FSQ.jpeg
:::
::::
```

#### Example
:::: preview https://medium.com/@MFaridZia/belajar-state-management-pada-vue-js-dengan-vuex-ef6d0571bc0e

::: preview-content Belajar State Management pada Vue.js...
Hallo semuanya, malem ini saya ada kesempatan nulis artikel lagi nih mumpung di luar lagi hujan hehe, di tulisan kali ini saya akan nulis tentang…

medium.com
:::
::: preview-thumbnail https://miro.medium.com/max/800/1*X5Oziwil9_Wsslbwku_FSQ.jpeg
:::
::::

## Command Prompt
Untuk memudahkan dalam extrak meta maka dibuatlah suatu API yang berjalan di runkit.io

### Script
```js
var express = require("@runkit/runkit/express-endpoint/1.0.0");
var extract = require("meta-extractor")
var app = express(exports);

app.get("/fetch", async (req, res) => {
    const result = await extract({ uri: req.query.url });
    
    res.setHeader('Content-Type', 'text/plain')
    res.send(renderResult({
        ...result,
        link: req.query.url,
        thumbnail: result.ogImage || 'no-image',
        description: result.description || result.twitterDescription
    }))
})

function renderResult (data) {
    return `:::: preview ${data.link}\n\n::: preview-content ${data.title}\n${data.description}\n\n${data.host}\n:::\n::: preview-thumbnail ${data.thumbnail}\n:::\n::::`
}
```

### Pemanggilan API
Pemanggilan bisa di lakukkan dengan cara mengunjungi alamat endpoint yang sudah di buat di runkit.io sebelumnya. Dengan format parameter `url` untuk alamat yang akan di ambil informasi meta tag nya.

```shell
http https://untitled-okej29pce04f.runkit.sh/fetch?url=URL_WEB

# or using curl
curl https://untitled-okej29pce04f.runkit.sh/fetch?url=URL_WEB
```

Hasil nya akan nampak seperti berikut

![Hasil Pemanggilan API di Terminal](https://telegra.ph/file/fa5790f00cb63af08f6b3.png "Hasil Pemanggilan API di Terminal")
*Hasil Pemanggilan API di Terminal*

