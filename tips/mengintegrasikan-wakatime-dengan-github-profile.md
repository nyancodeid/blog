---
title: Membuat Github Profile lebih menarik dengan Wakatime 
lang: id-ID
description: Membuat github profile mu lebih menarik dengan github status dan wakatime.
image: /images/covers/mengintegrasikan-wakatime-dengan-github-profile.jpg
published: 10/20/2020, 10:55:23 AM
category: devops
author: Ryan Aunur Rassyid
tags:
  - github
  - profile
  - readme
  - wakatime
meta:
  - name: keywords
    content: github,profile,readme,wakatime
feed:
  enable: true
---
# Membuat Github Profile lebih menarik dengan Wakatime 
<Author name="Ryan Aunur Rassyid" />
<FeaturedImage 
  src="/images/covers/mengintegrasikan-wakatime-dengan-github-profile.jpg"
  author="Markus Winkler"
  source="unsplash.com"
  sourceLink="https://unsplash.com/photos/ZDwh_sxsX2g" />

## Introduction

Github baru-baru ini merilis fitur yang memungkinkan para penggunanya membuat README sebagai profile yang nantinya ditampilkan secara mencolok di halaman utama profile kita. Tujuan dibuat nya fitur ini memungkinkan pemilik akun tersebut menjelaskan dan menampilkan apa yang tidak bisa kita tampilkan di diskripsi singkat github profile (bio). 

Fitur Github profile-level README memungkinakan kita menuliskan biografi kita dengan lebih informatif dan kreatif. Karenanya dengan fitur ini kita dimungkinkan untuk menjelaskan biografi khususnya yang berhubungan dengan github profile atau profesionalisme dengan format **Markdown** yang tidak hanya 1 atau 2 baris saja tapi satu file penuh. Tentu ini membuka banyak peluang untuk kita menjabarkan skill yang mereka miliki, harapan kita kedepannya atau bahkan menjelaskan highligh repository yang ditampilkan pada halaman profile kita juga.

Pada artikel berikut kita akan membuat tampilan Github Readme yang menarik dengan ditambahkannya statistik dari Wakatime yang meliputi Bahasa Pemrogramman yang dipakai di github kita, Bahasa dan Waktu yang telah dipakai selama satu minggu ini, dan jumlah visitor github profile kita.

Menarik bukan, let's do this!

## Table of Content
[[toc]]

## Prerequisites
Pertama mari kita asumsikan bahwa kalian sudah punya akun Wakatime dan memasang plugin nya di editor kalian. Bagi yang belum silahkan membuat akun dan mengintegrasikkannya ke text editor favorit kalian terlebih dahulu. Setelah itu kita juga akan membutuhkan beberapa hal berikut:

- Github Personal Access Token (repo, user, dan workflow)
- Wakatime API Key

API Key diatas jangan sampai hilang atau diketahui orang lain, karena API key adalah informasi yang private. Jadi jangan sampai ketahuan orang lainnya ya. 

Untuk membuat Github API Key pertama kita buka terlebih dahulu alamat berikut, [https://github.com/settings/tokens](https://github.com/settings/tokens). Lalu klik tombol "Generate new token".

![Github Personal Access Token](https://telegra.ph/file/e72d4259b16be01142287.png)
*Github Personal Access Token*

Nanti kita akan di-*redirect* untuk memasukkan password akun github kita, ini wajar karena kita akan membuat token yang mana merupakan informasi sensitif dan private. Setelah memasukkan password maka kita akan di-*redirect* ke halaman buat personal akses token. Dibagian field **Note** kita isi dengan `GithubProfileToken` atau terserah teman-teman. Nah untuk field scope kita centang bagian **read, workflow, dan user** dan yang lain biarkan kosong.

![](https://telegra.ph/file/f5dfcc5cae9e4db505deb.png)
*Membuat Github Personal Access Token*

Kalau sudah kita bisa klik tombol submit "Generate token". Lalu simpan kode token yang ditampilkan dinotepad atau dicatatan karena kode access token tersebut tidak akan ditampilkan kembali oleh Github. Selanjutnya kita akan membuat Wakatime API Token. Buka halaman dashboard Wakatime lalu pilih setting, atau bisa kunjungi link berikut [https://wakatime.com/settings/account](https://wakatime.com/settings/account). Selanjutnya kita tinggal klik field **Secret API Key** dan API Key akan muncul. Lalu simpan key nya di notepad atau catatan seperti tadi.

![Wakatime Secret API Key](https://telegra.ph/file/c67351a45af8422a83dfd.png)

## Create Github Profile
Untuk membuat gihub profile sebenernya cukuplah mudah namun kali ini karena kita akan mengintegrasikan dengan statistik dan matriks dari Wakatime jadi mungkin akan sedikit ribet. But, worth it untuk dicoba dan diterapkan.

### Create Repository
Setelah kita mempersiapkan API Key yang dibutuhkan. Selanjutnya kita bisa membuat repository yang nantinya akan kita pakai sebagai readme profile kita. Repository yang dibuat tidak bisa sembarang nama, karena repository yang diperuntunkan untuk github profile memiliki nama khusus yaitu username github profile kalian. Misalnya nama github profile nya adalah **nyancodeid** maka kita harus membuat repository dengan nama yang sama dengan username kita yaitu **nyancodeid**. Jadi nantinya alamat url repository adalah [https://github.com/nyancodeid/nyancodeid](https://github.com/nyancodeid/nyancodeid). Cara membuatnya sama seperti membuat repository github pada umumnya.

![Repository Profile](https://telegra.ph/file/db20928830b1178fe4795.png)

### Create Github Readme Profile
Next, kita membuat file dengan nama `README.md`. Kalian tidak diharuskan cloning dan melakukkannya di local kalian, kalian bisa membuat file dan meng-editnya langsung di website githubnya. Dan kalian bisa mencontoh github profile milik user **nyancodeid** dibawah ini dan menyesuaikan dengan profile atau skill kalian.

::: warning Perhatian!
Pastikan kalian merubah setiap kata "nyancodeid" dengan username github kalian.
:::

```md
## Hi there, I'm Ryan - aka NyanDev 👋

[![Nyancodeid's github stats](https://github-readme-stats.vercel.app/api?username=nyancodeid)](https://github.com/nyancodeid/nyancodeid)

### I'm a Single Fighter Developer!
- 🔭 I’m currently working on a ton of side project!
- 🌱 I’m currently learning about DevOps specially Docker and K8s
- 👯 I’m looking to collaborate with other developer
- 🥅 2020 Goals: Contribute more to Open Source projects
- ⚡ Fun fact: I love cooking, finding bug and create unfinished side project 

### 📊 Weekly development breakdown

<!--START_SECTION:waka-->
<!--END_SECTION:waka-->

### 📫 Contact Me
- Facebook - [Ryan Aunur Rassyid](https://facebook.com/ryan.hac)
- Twitter - [@ryanaunur](https://twitter.com/ryanaunur)
- Blog - [https://blog.nyandev.id](https://blog.nyandev.id)
```

Lalu `commit` file yang dibuat tadi untuk menyimpan file. 

### Add Github Repository Secret
Selanjutnya kita perlu mempersiapkan variable environment atau kalau di github dipanggil dengan Github Secret. Masih dihalaman repository, kita klik menu **Settings**. Setelahnya kita akan diredirect ke halaman repository setting, lalu kita pilih sub-menu **Secrets**. Disini kita akan menyimpan 2 API Key yang kita buat tadi.  

![](https://telegra.ph/file/32c26975d7d3a1a17db4b.png)

Lalu kita akan klik `New repository secret`. 

![](https://telegra.ph/file/f275177e58018bdeba82b.png)
![](https://telegra.ph/file/8ba7eeca876633261b15a.png)

Buat 2 repository secret yang mana masing masing nama nya adalah:

| Name             | Value                          |
| ---------------- | ------------------------------ |
| GH_TOKEN         | (Github Personal Access Token) |
| WAKATIME_API_KEY | (Wakatime API Key)             |

Setelah repository secret berhasil dibuat semua, kita lanjut menkonfigurasi github action-nya.

### Github Action Configuration
Untuk memungkinkan kita membuat konten yang semi-dinamis kita perlu adanya github action yang mana tugasnya adalah mengenerate konten yang kita perlukan dan menampilkannya di file github profile kita. Jadi Github Action akan melakukkan pekerjaannya tiap tengah malam untuk mengenerate statistik yang kita perlukan untuk ditampilkan di github profile kita.

Selanjutnya kita perlu membuat file konfigurasi untuk github action terlebih dahulu pada repository kita dengan nama `.github/workflows/waka.yml` pastikan kalian menulis path folder nya juga ya, supaya file tersebut dibuat sesuai dengan foldernya. Isi file konfigurasi nya seperti ini:

```yml
name: Waka Readme

on:
  workflow_dispatch:
  schedule:
    - cron: '0 0 * * *'

jobs:
  update-readme:
    name: Update this repo's README
    runs-on: ubuntu-latest
    steps:
      - uses: anmol098/waka-readme-stats@master
        with:
          WAKATIME_API_KEY: ${{ secrets.WAKATIME_API_KEY }}
          GH_TOKEN: ${{ secrets.GH_TOKEN }}
          SHOW_COMMIT: "False"
          SHOW_DAYS_OF_WEEK: "False"
          SHOW_LANGUAGE: "True"
          SHOW_OS: "True"
          SHOW_PROJECTS: "False"
          SHOW_TIMEZONE: "True"
          SHOW_EDITORS: "True"
          SHOW_SHORT_INFO: "False"
          SHOW_LOC_CHART: "False"
```

Untuk menambahkan atau menghilangkan statistik dan metrik yang kita perlukan kamu bisa melihat opsi lengkapnya pada repository berikut:

:::: preview https://github.com/anmol098/waka-readme-stats

::: preview-content GitHub - anmol098/waka-readme-stats: This GitHub action helps to add cool dev metrics to your github profile Readme
This GitHub action helps to add cool dev metrics to your github profile Readme - anmol098/waka-readme-stats

github.com
:::
::: preview-thumbnail https://avatars2.githubusercontent.com/u/15426564?s=400&v=4
:::
::::

Jangan lupa untuk `commit` file nya untuk menyimpan. Karena pada konfigurasi diatas kita mengatur Github Action untuk berjalan pada tiap tengah malam saja maka untuk pertama kali kita akan menjalankan Actionnya secara manual. Buka menu `Actions` di menu atas repository. Maka kita akan melihat action `Waka Readme`pada sidebar daftar **Workflows**. Klik lalu akan muncul tombol `Run Workflow` dan jalankan dengan klik tombol hijau `Run Workflow`.

![](https://telegra.ph/file/16ee4357a35dfb4c754a6.png)

## Result
Terakhir kita tinggal melihat hasilnya dengan mengunjungi halaman profile kalian di github pada link `https://github.com/username`. Seharusnya hasilnya tidak akan jauh beda seperti ini:

![Github Profile Result](https://telegra.ph/file/b7b6067959cd5e5544a4d.png)
![Github Profile Result](https://telegra.ph/file/30894eb38cb27cfd899e5.png)

## Conclution
Dengan adanya Github Profile kalian akan semakin kenal dengan developer-developer yang aktif di Github atau maintener project OSS favorit kalian di-github. Dan berpeluang kalian mudah dikenali oleh developer lain yang mengunjungi profile kalian. Sapaan singkat, daftar skill, insight kedepan serta tujuan kalian akan meningkatkan peluang kalian bertemu dengan orang yang memiliki visi serta tujuan yang sama, diharapkan peluang kerja sama lewat github akan semakin tinggi.

Dengan penjelas atas portofolio yang terpampang di github profile kalian serta skill yang dimiliki akan semakin memberikan peluang bagi kalian mendapatkan client dan pekerjaan. Jadi buat github profile versi kalian yang lebih menarik dan lebih kreatif lagi dan lagi.

Terima kasih sudah membaca!

<Disqus />
