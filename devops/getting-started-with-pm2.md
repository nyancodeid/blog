---
title: Getting Started with PM2
lang: id-ID
description: Berkenalan dengan PM2, nodejs process manager untuk aplikasi nodejs kalian.
image: /images/covers/getting-started-with-pm2.jpeg
published: 7/6/2020, 10:55:23 AM
category: devops
author: Ryan Aunur Rassyid
tags: nodejs,pm2,deployment,production,server
meta:
  - name: keywords
    content: nodejs,pm2,deployment,production,server
feed:
  enable: true
---
# Getting Started with PM2

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage 
  src="/images/covers/getting-started-with-pm2.jpeg"
  author="Jase Bloor"
  source="unsplash.com"
  sourceLink="https://unsplash.com/photos/By1VMCg3K4I" />

## Introduction
Ketika kita bekerja dengan NodeJS kita bisa dengan mudah menjalankan aplikasi yang sudah kita buat sebelumnya. Hanya dengan mengetik perintah `node index.js` maka aplikasi kita akan berjalan dengan baik. Webserver Express kita berjalan dengan baik dan sesuai dengan ekspektasi kita. Satu atau dua error muncul secara tiba tiba ketika kita memanggil API dengan melibatkan proses yang tidak menentu suksesnya, dan ya kita tinggal menjalankan ulang aplikasinya dan sekarang web server kita kembali online. But wait, gimana kalau aplikasi nodejs ini sudah di deploy di server? apakah kita juga perlu mengecek 24 jam apakah aplikasi kita error dan perlu dijalankan ulang? *Arghhh, that's was terrible idea*.

Ketika aplikasi sudah di deploy ke server, kita mau semua nya berjalan secara autopilot. Kita hanya memantau hasil log sebelumnya atau critical error yang dikirim lewat email atau bot telegram kita. Jadi kita tidak perlu menatap Laptop atau PC sepanjang hari hanya untuk melihat apakah aplikasi kita perlu di-*restart* atau tidak. Kita perlu aplikasi lain untuk memanage aplikasi-aplikasi node kita. 

Salah satu dari sekian aplikasi process manager di nodejs ada yang paling mudah digunakan tapi juga powerfull. Ya, namanya `PM2`. **PM2** adalah daemon process manager yang membantu kita mengelola dan menjaga aplikasi kita agar tetap online. PM2 dioperasikan lewat command line atau berbasis CLI (Command Line Interface) yang sederhana dan intuitif, yang tentu saja di-install lewat NPM juga. *Wow, that's really cool*. 

Dalam artikel ini kita akan deep drive untuk berkenalan dengan PM2. *Here we go*.

## Table of Contents
[[toc]]

## Why PM2?
Beberapa dari kalian mungkin bertanya, kenapa harus PM2? kenapa tidak PM-GAN?. Kita tau bahwa kita bisa pakai app atau tool lain kalau ingin aplikasi kita dimuat ulang jika mengalami error. Contohnya saja `supervisor` atau `nodemon`, kedua aplikasi tersebut memang bisa terbukti mengatasi masalah kita. Namun kedua aplikasi tersebut terlalu featur yang lightweight, dan hanya cocok dipakai untuk keperluan selama prosess development saja. 

![Perbedaan Apps yang berjalan dengan dan tanpa PM2](https://telegra.ph/file/535d76a5718c989e90e1a.png)
*Running PM2 & Node.js in Production Environments - hackernoon.com*

Sedangkan PM2 memiliki feature yang lebih luas dari sekedar file watcher atau reload app saja. Dari beberapa fitur PM2, yang paling berguna saat production adalah:

- `Restarting after crashes`: PM2 memungkinkan kita untuk menjaga agar aplikasi kita tetap berfungsi walaupun app mengalami error atau crash.

- `Monitoring and managing processes remotely`: kita tidak melulu memonitoring pm2 lewat CLI saja, kita juga bisa memonitoring nya lewat menggunakan [KeyMetrics](https://pm2.keymetrics.io/) contohnya.

- `It doesn’t just run Node apps`: PM2 tidak terbatas hanya untuk NodeJS saja, kamu bisa menjalankan PHP Worker, atau aplikasi yang membutuhkan PM2 sebagai process manager.

- `Restart-Persistance`: PM2 bisa menyimpan dan mengingat aplikasi mana saja yang berjalan padanya dan memulai kembali dengan segera, ketika server mengalami restart atau kembali hidup.

Dan masih banyak lagi, seperti Logs, PM2 API, Cluster, Fork, Environment dan lain sebagainya.

## Instalasi
PM2 bisa di-install menggunakan NPM atau Yarn secara global maupun local project (PM2 API).

```shell
$ npm install pm2@latest -g
# or
$ yarn global add pm2
```

## Basic Commands
Kita mulai perkenalan pm2 dengan basic command yang sering dipakai untuk memulai, mengulang, memberhentikan, dan menampilkan logs aplikasi. Untuk berinteriaksi dengan PM2 kamu bisa menggunakan perintah CLI atau menggunakan configuration file seperti JSON, Javascript, dan YAML. Untuk kali ini karena kita mau berkenalan dengan PM2 kita bahas yang CLI dulu supaya paham bagaimana alur kerja dan sekaligus mebiasakan diri dengan PM2.

### Start
Untuk menjalankan aplikasi nodejs anda tinggal memanggil perintah berikut. Perlu dicatat kalau kita perlu menambahkan param `--name` untuk memudahkan kita untuk mengidentifikasi aplikasi kita.

```shell
$ pm2 start index.js --name app_name
```

```shell
[PM2] Starting /path/to/project/src/index.js in fork_mode (1 instance)
[PM2] Done.
┌──────────┬────┬─────────┬──────┬──────┬────────┬─────────┬────────┬─────┬───────────┬───────────┬──────────┐
│ App name │ id │ version │ mode │ pid  │ status │ restart │ uptime │ cpu │ mem       │ user      │ watching │
├──────────┼────┼─────────┼──────┼──────┼────────┼─────────┼────────┼─────┼───────────┼───────────┼──────────┤
│ app_name │ 0  │ 1.0.0   │ fork │ 1145 │ online │ 0       │ 0s     │ 0%  │ 32.3 MB   │ ryanaunur │ disabled │
└──────────┴────┴─────────┴──────┴──────┴────────┴─────────┴────────┴─────┴───────────┴───────────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
```

### List Managed Apps
Untuk melihat aplikasi apa yang sedang berjalan pada PM2 kita bisa panggil perintah berikut. Ada 3 opsi silahkan pilih tergantung enaknya. bisa pakai `list`, `ls`, atau `status` semua nya sama.

```shell
$ pm2 <list|ls|status>
```

```shell
┌──────────┬────┬─────────┬──────┬──────┬────────┬─────────┬────────┬──────┬───────────┬───────────┬──────────┐
│ App name │ id │ version │ mode │ pid  │ status │ restart │ uptime │ cpu  │ mem       │ user      │ watching │
├──────────┼────┼─────────┼──────┼──────┼────────┼─────────┼────────┼──────┼───────────┼───────────┼──────────┤
│ app_name │ 0  │ 1.0.0   │ fork │ 1145 │ online │ 0       │ 2m     │ 0.2% │ 44.5 MB   │ ryanaunur │ disabled │
└──────────┴────┴─────────┴──────┴──────┴────────┴─────────┴────────┴──────┴───────────┴───────────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
```

### Restart
Karena aplikasi kita tidak akan berefek ketika ada perubahan script sebelum aplikasi di-restart maka kita harus melakukkan restart pada PM2 dengan perintah dibawah ini. Namun jika anda menambahkan param `--watch`, maka PM2 akan melihat setiap perubahan app dan langsung secara otomatis akan memuat ulang aplikasi kita dengan script terbaru yang diubah tadi.

```shell
$ pm2 restart <app_name|id|all>
```

```shell
[PM2] Applying action restartProcessId on app [app_name](ids: [ 0 ])
[PM2] [app_name](0) ✓
┌──────────┬────┬─────────┬──────┬──────┬────────┬─────────┬────────┬─────┬───────────┬───────────┬──────────┐
│ App name │ id │ version │ mode │ pid  │ status │ restart │ uptime │ cpu │ mem       │ user      │ watching │
├──────────┼────┼─────────┼──────┼──────┼────────┼─────────┼────────┼─────┼───────────┼───────────┼──────────┤
│ app_name │ 0  │ 1.0.0   │ fork │ 1919 │ online │ 1       │ 0s     │ 0%  │ 18.5 MB   │ ryanaunur │ disabled │
└──────────┴────┴─────────┴──────┴──────┴────────┴─────────┴────────┴─────┴───────────┴───────────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
```

### Stop
Untuk menghentikan aplikasi kamu tinggal menggunakan perintah `stop`.

```shell
$ pm2 stop <app_name|id|all>
```

```shell
[PM2] Applying action stopProcessId on app [app_name](ids: [ 0 ])
[PM2] [app_name](0) ✓
┌──────────┬────┬─────────┬──────┬─────┬─────────┬─────────┬────────┬─────┬────────┬───────────┬──────────┐
│ App name │ id │ version │ mode │ pid │ status  │ restart │ uptime │ cpu │ mem    │ user      │ watching │
├──────────┼────┼─────────┼──────┼─────┼─────────┼─────────┼────────┼─────┼────────┼───────────┼──────────┤
│ app_name │ 0  │ 1.0.0   │ fork │ 0   │ stopped │ 1       │ 0      │ 0%  │ 0 B    │ ryanaunur │ disabled │
└──────────┴────┴─────────┴──────┴─────┴─────────┴─────────┴────────┴─────┴────────┴───────────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
```

### Logs
Untuk melihat logs yang dihasilkan dari aplikasi yang berjalan pada PM2 kamu bisa menggunakan perintah `logs`. 

![Log Management](https://telegra.ph/file/a17894336bb460b3a466c.png)
*Running PM2 & Node.js in Production Environments - hackernoon.com*

```shell
# display spesific app logs
$ pm2 logs app_name
# display 100 lines of standart and error output logs
$ pm2 logs app_name --lines 100
# display standart output logs only
$ pm2 logs app_name --out
# display error output logs only
$ pm2 logs app_name --err
# Flush app logs
$ pm2 flush <app_name>
# or all
$ pm2 logs all
```

```shell
[TAILING] Tailing last 15 lines for [app_name] process (change the value with --lines option)
/$HOME/.pm2/logs/app-name-error.log last 15 lines:
/$HOME/.pm2/logs/app-name-out.log last 15 lines:
0|app_name | Listening on new task!
0|app_name | Listening on new task!
0|app_name | Listening on new task!
```

### Monitoring
Memonitoring penggunaan resouce tiap apps, dan log dari aplikasi secara bersamaan kamu bisa menggunakan perintah `monit`.

```shell
$ pm2 monit
```

![PM2 Monit](/images/posts/pm2-monit-ss.png)
*PM2 Monitoring Result*

### Delete
Terakhir untuk menghapus aplikasi mu dari daftar PM2 maka kamu tinggal jalankan perintah `delete`.

```shell
$ pm2 delete <app_name|id|all>
```

```shell
[PM2] Applying action deleteProcessId on app [app_name](ids: [ 0 ])
[PM2] [app_name](0) ✓
┌──────────┬────┬─────────┬──────┬─────┬────────┬─────────┬────────┬─────┬─────┬──────┬──────────┐
│ App name │ id │ version │ mode │ pid │ status │ restart │ uptime │ cpu │ mem │ user │ watching │
└──────────┴────┴─────────┴──────┴─────┴────────┴─────────┴────────┴─────┴─────┴──────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
```


## Watch Mode
Untuk memungkinkan PM2 menanggapi setiap perubahan file yang ada pada aplikasi anda dan melakukkan restart otomatis atas perubahan tersebut maka kamu perlu menambahkan param `--watch`. Sedangkan untuk mengabaikan perubahan yang ada pada folder tertentu kamu tinggal menambahkan param `--ignore-watch="folder,folder"`.

```shell
$ pm2 start index.js --name app_name --watch
# exclude node_modules from watched file
$ pm2 start index.js --name app_name --watch --ignore-watch="node_modules"
```

## Menyimpan Konfigurasi 
Secara default PM2 tidak akan menyimpan daftar aplikasi yang berjalan padanya sebelum anda menyimpannya. Kita perlu menyimpan daftar aplikasi jika kamu tidak ingin ketika server kamu restart dan daftar pm2 hilang dan kamu perlu menjalankan nya kembali satu persatu. 

```shell
$ pm2 save
```

Nah daftar aplikasi kita sudah disimpan oleh PM2. Sekarang jika kamu ingin PM2 menjalankan aplikasi yang sudah disimpan tadi tepat ketika server menyala maka kamu perlu membuat nya berjalan ketika *startup*. Dengan menjalankan perintah `startup` berikut.

```shell
$ pm2 startup
# manually chose startup script
$ pm2 startup [ubuntu | ubuntu14 | ubuntu12 | centos | centos6 | arch | oracle | amazon | macos | darwin | freebsd | systemd | systemv | upstart | launchd | rcd | openrc]
```

Secara otomatis pm2 akan menjalankan daemon (service) sesuai dengan Operating System yang kita pakai. Karena setiap OS dan versi nya memiliki konfigurasi sendiri terutama windows, bagi kalian pengguna window mungkin perlu menggunakan tool tambahan karena miliki cara sendiri dalam mengkonfigurasi startup.

::: warning Windows User
There are some external libraries to generate a Windows compatible startup script, please checkout [pm2-windows-service](https://www.npmjs.com/package/pm2-windows-service) or [pm2-windows-startup](https://www.npmjs.com/package/pm2-windows-startup).
:::

## Kesimpulan
Dengan adanya aplikasi atau tools untuk memanage aplikasi kita akan sangat memudahkan pekerjakan kita dalam memonitoring aplikasi kita diserver. Karena server akan terus berjalan maka kita juga perlu menjaga agar aplikasi kita berjalan terus tanpa kendala serius.

PM2 membantu kita dalam mewujudkan bagaimana cara memperlakukkan aplikasi kita dengan berbeda ketika dalam lingkungan production yang mewajibkan kita untuk **Zero Down Time** dan memonitoring aplikasi dengan cara yang mudah. Diartikel selanjutnya kita akan belajar bagimana cara berinteraksi dengan PM2 dengan menggunakan konfigurasi file seperti JSON, Javascript, dan YAML. *See you next time*.

## Referensi

:::: preview https://www.digitalocean.com/community/tutorials/nodejs-pm2

::: preview-content Getting Started with PM2, the Node.js Process Manager | DigitalOcean
Learn the very basics of the PM2 production process manager. See what it can do for you and how to get started with using it.

www.digitalocean.com
:::
::: preview-thumbnail https://www.digitalocean.com/assets/community/illustrations/DigitalOcean_Community-e00e73a18df20667c3117725e727f3ade330204dff619ad8153050ded7341627.jpg
:::
::::

:::: preview https://pm2.keymetrics.io/docs/usage/quick-start/

::: preview-content PM2 - Quick Start
Advanced process manager for production Node.js applications. Load balancer, logs facility, startup script, micro service management, at a glance.

pm2.keymetrics.io
:::
::: preview-thumbnail https://raw.githubusercontent.com/unitech/pm2/master/pres/pm2.20d3ef.png
:::
::::

:::: preview https://hackernoon.com/running-pm2-node-js-in-production-environments-13e703fc108a

::: preview-content Running PM2 & Node.js in Production Environments | Hacker Noon
PM2 is a battle tested, production ready runtime and process manager for Node.js applications. 

hackernoon.com
:::
::: preview-thumbnail https://hackernoon.com/Devimg/story-image-default.png
:::
::::

<Disqus />
