---
title: "Preact-CLI: Command Line Bikin Semua Jadi Mudah"
lang: id-ID
description: Dalam pembuatan aplikasi Preact kita di mudahkan dengan adanya Preact-CLI, kanalan yuk.
image: /images/covers/preact-cli--nyandev-blog.jpg
published: 1/24/2020, 02:49:21 PM
category: preact
tags: preact,cli,preactjs,javascript,react
meta:
  - name: keywords
    content: preact,cli,preact.js,react
---
# Preact-CLI: Command Line Bikin Semua Jadi Mudah

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage src="/images/covers/preact-cli--nyandev-blog.jpg" 
  author="Antenna"
  source="unsplash.com"
  sourceLink="https://unsplash.com/photos/FDV1BaKNKEo" />

> Preact CLI helps you get started building a blazing-fast Preact PWA in just a few seconds.

Untuk membuat project baru dengan teknologi dan struktur folder dan component yang sama memang sedikit menyusahkan. Bagaimana mana tidak?, kita membuat struktur folder dari awal, *set-up* semua dependency dan mengatur bundle tool agar bekerja dengan baik. Ditambah lagi kita harus mengatur dan mempersiapkan coding kita agar memiliki kriteria *production-ready* yang diharapkan ketika aplikasi di deploy dapat diakses dengan cepat, efisien, dan optimal.

Dengan dihadirkannya fitur **PWA** (*Progressive Web App*) di Google Chrome membuat para developer ingin agar web app miliknya juga support penuh dengan fitur ini. Namun konfigurasi nya terkadang begitu menyebalkan, kita harus menorganisir semua asset dan berurusan dengan *versioning* untuk setiap assets.

## Table of Content
[[toc]]

## Introduction

Preact CLI adalah aplikasi berbasis Command Line yang mengatur dan menghandle setup dan coding kamu secara instant dan *painless*. Yang menarik adalah project kita sudah *production-ready* sekaligus PWA Support.

Preact CLI ini sendiri adalah salah satu project dari Preact Team yang open-source di [github.com](https://github.com/preactjs/preact-cli) yang bisa kamu intip coding nya, mungkin untuk kamu yang ingin tau apa saya yang dilakukkan open aplikasi ini selama mengatur project kamu.

## Fitur
Berikut adalah fitur fitur yang ada pada Preact CLI sekaligus keunggulannya.

- **100/100 Lighthouse score**, right out of the box ([proof](https://googlechrome.github.io/lighthouse/viewer/?gist=142af6838482417af741d966e7804346))
- Fully **automatic code splitting** for routes
- Transparently code-split any component with an [`async!`] prefix
- Auto-generated [Service Workers] for offline caching powered by [sw-precache]
- [PRPL] pattern support for efficient loading
- Zero-configuration pre-rendering / server-side rendering hydration
- Support for CSS Modules, LESS, Sass, Stylus; with Autoprefixer
- Monitor your bundle/chunk sizes with built-in tracking
- Automatic app mounting, debug helpers & Hot Module Replacement
- In just **4.5kb** you get a productive environment:
  - [preact]
  - [preact-router]
  - 1.5kb of conditionally-loaded polyfills for [fetch] & [Promise]

Semua yang dibutuhkan untuk membuat project kamu cepat ada pada Preact CLI. Fitur yang penulis sangat terbantu adalah *code-split* dan *auto-generated SW*. Fitur tersebut memungkinkan kita memisah code javascript yang dibutuhkan dan tidak dibutuhkan oleh halaman yang diakses. Misalnya kita navigate ke halaman login di `"/login"`, maka website akan memuat file javascript yang berhubungan atau yang dibutuhkan pada halaman tersebut. Jadi file javascript lain tidak akan dimuat.

## Instalasi
> Important: Node.js > V6.x is a minimum requirement.

```shell
$ npm install -g preact-cli
# or
$ yarn global add preact-cli
```

## Penggunaan 
Setelah preact-cli di install secara global, seharusnya kamu sudah bisa menuliskan perintah `preact` di terminal atau command-line kamu.

Untuk memulai project preact kamu menggunakan Preact CLI kamu bisa menggunakan perintah `create` dengan syntax dibawah ini.

```shell
$ preact create <template-name> <project-name>
```

Contohnya

```shell
$ preact create default my-project
```

### Official Templates
Preact team menyediakan sejumlah template official yang bisa kamu gunakan untuk memulai sebuah project sesuai dengan kebutuhkan fitur-nya.

Template project yang tersedia yaitu:
- **default** - Default template dengan semua fitur yang ada pada preact-cli seperti yang disebutkan di atas.
- **material** - Material template yang sudah tersedua `preact-material-components`.
- **simple** - Template paling simple untuk yang ingin coba atau start dengan template yang minimalis.
- **netlify** - Template untuk CMS Netlify.
- **typescript** - Default template dengan implementasi typescript.
- **widget** - Template untuk widget yang akan dipasang/diembed pada website lain.

## CLI Options

### preact create
Untuk memulai membuat project preact kamu bisa menggunakan perintah ini, dibandingkan dengan membuat folder dan setup semua dari awal. Perintah `create` memiliki opsi opsi yang harusnya tidak kamu lewatkan, misalnya opsi `--name` dan `--yarn`. Opsi tersebut memang optional dan diberikan langsung default nilainya, contohnya `--name` akan mengikuti nama folder yang diberikan dan `--yarn` secara default akan menggunakan `npm` sebagai default package manager.  

```
$ preact create <template-name> <project-name>

  --name        The application name.
  --cwd         A directory to use instead of $PWD.
  --force       Force option to create the directory for the new app  [boolean] [default: false]
  --yarn        Installs dependencies with yarn.                      [boolean] [default: false]
  --git         Initialize version control using git.                 [boolean] [default: false]
  --install     Installs dependencies.                                [boolean] [default: true]
```

Catatan: Jika kamu tidak memberikan data yang spesifik untuk perintah `preact create`, akan muncul pertanyaan ketika kamu menjalankan-nya.

### preact build
Membuat versi production untuk project kamu.

Ada beberapa opsi yang akan diberikan nilai default `true`. Opsi tersebut adalah adanya service worker, ESM, dan inline-css. Maka untuk memberikan nilai `false` terhadap opsi tersebut maka kamu perlu menambahkan prefix ketika menjalankan perintah `preact build` yaitu `--no-<opsi>`, contohnya

```shell
preact build --no-sw --no-esm --no-inline-css
```

Daftar opsi perintah `preact build`.

```
$ preact build

    --src              Specify source directory  (default src)
    --dest             Specify output directory  (default build)
    --cwd              A directory to use instead of $PWD  (default .)
    --sw               Generate and attach a Service Worker  (default true)
    --json             Generate build stats for bundle analysis
    --template         Path to custom HTML template
    --preload          Adds preload tags to the document its assets  (default false)
    --analyze          Launch interactive Analyzer to inspect production bundle(s)
    --prerenderUrls    Path to pre-rendered routes config  (default prerender-urls.json)
    -c, --config       Path to custom CLI config  (default preact.config.js)
    --esm              Builds ES-2015 bundles for your code.  (default true)
    --brotli           Adds brotli redirects to the service worker.  (default false)
    --inline-css       Adds critical css to the prerendered markup.  (default true)
    -v, --verbose      Verbose output
    -h, --help         Displays this message
```

### preact watch

Menjalankan development server dengan fitur `hot-module-replacement` dan `module-watcher` sehingga ketika ada perubahan terjadi maka preact-cli akan secara otomatis meng-compile code kita. Mungkin akan terasa lama saat menjalankan perintah `preact watch` namun ketika ada perubahan terdeteksi maka prosess compile akan jauh lebih cepat.

```
$ preact watch

    --src           Specify source directory  (default src)
    --cwd           A directory to use instead of $PWD  (default .)
    --esm           Builds ES-2015 bundles for your code.  (default true)
    --sw            Generate and attach a Service Worker  (default false)
    --rhl           Enable react hot loader  (default false)
    --json          Generate build stats for bundle analysis
    --https         Run server with HTTPS protocol
    --key           Path to PEM key for custom SSL certificate
    --cert          Path to custom SSL certificate
    --cacert        Path to optional CA certificate override
    --prerender     Pre-render static content on first run
    --template      Path to custom HTML template
    -c, --config    Path to custom CLI config  (default preact.config.js)
    -H, --host      Set server hostname  (default 0.0.0.0)
    -p, --port      Set server port  (default 8080)
    -h, --help      Displays this message
```

Catatan:

1. kamu dapat menjalankan development server dengan protocol `HTTPS` dengan cara menambahkan env variable `HTTPS=true` saat menjalankan `preact watch`. contoh `HTTPS=true preact watch`.
2. Dan kamu juga bisa custom `PORT` melalui env variable dengan cara `PORT=8091 preact watch`.

### preact list

Menampilkan daftar template official dari preact js team untuk preact-cli.

```sh
$ preact list
```

## Referensi
:::: preview https://github.com/preactjs/preact-cli

::: preview-content GitHub - preactjs/preact-cli: 😺 Your next Preact PWA starts in 30 seconds.
😺 Your next Preact PWA starts in 30 seconds. Contribute to preactjs/preact-cli development by creating an account on GitHub.

github.com
:::
::: preview-thumbnail https://avatars0.githubusercontent.com/u/26872990?s=400&v=4
:::
::::

:::: preview https://preactjs.com/cli/

::: preview-content Introduction – Preact CLI
Preact is a fast 3kB alternative to React with the same modern API.

preactjs.com
:::
::: preview-thumbnail https://preactjs.com/assets/app-icon.png
:::
::::

<Disqus />
