---
title: "Tips: Enable Intellisense on Relative Path Module Import"
description: Sekarang lagi zamannya Lazy Programmer with Smart Text Editor. Dengan hadir nya VS Code, Text editor powerfull nan gratis + open source...
image: /images/covers/enable-intellisense-on-relative-path-module.jpeg
lang: id-ID
published: 6/3/2020, 03:01:21 PM
category: tips
author: Ryan Aunur Rassyid
tags: algolia,docsearch,vuepress,search
meta:
  - name: keywords
    content: algolia,docsearch,vuepress,search
feed:
  enable: true
---
# Tips: Enable Intellisense on Relative Path Module Import

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage 
  src="/images/covers/enable-intellisense-on-relative-path-module.jpeg"
  author="Merve Selcuk Simsek"
  source="unsplash.com"
  sourceLink="https://unsplash.com/photos/iADofJwUuXE" />

## Introduction
Sekarang lagi zamannya Lazy Programmer with Smart Text Editor. Dengan hadir nya VS Code, Text editor powerfull nan gratis + open source. Para programmer pada berbondong bondong pindah untuk mencicipi fitur yang sangat dinantikan oleh para pengguna Notepad++ atau bahkan Sublime Text yaitu **Better Intellisense**. 

Tenang anda tidak sendiri, saya juga merasakan keuntungan dari fitur tersebut. Kita sangat terbantu bukan?. Tapi disini kita tidak sedang membicarakan tentang fitur tersebut, tapi kita akan membahas cara mengaktifkan fitur intellisense agar bekerja dengan alias relative path.

## Apa itu Relative Path dan Absolute Path
Jika kita membicarakan path kita kita pasti sudah tau absolute path dong, tapi ada  juga yang namanya relative path. Kita bisa baca artikel tentang ke-dua istilah ini dari beberapa artikel yang sudah saya baca sebelumnya.

![Apa itu Relative Path dan Absolute Path](https://telegra.ph/file/d09fdd92c21fdc755bd67.png)
*Apa itu Relative Path dan Absolute Path*

Singkatnya **Absolute Path** adalah path file/directory yang lengkap atau dimulai dari root directory. Pada contoh diatas `C:\` dan `A:\` adalah root directory. Sedangkan **Relative Path** adalah path file/directory yang tidak lengkap bisa dimulai dengan sebuah directory atau file langsung.Penggunaan Relative path biasanya menggunakan Working Directory atau folder yang aktif dipakai sebagai acuan dari Root Directory yang nantinya digabung menjadi sebuah Absolute Path.

## Relative Path di Webpack
Karena pada kasus ini kita menggunakan Laravel Mix maka secara default kita menggunakan webpack dan mengaturnya pada file webpack.mix.js kita. Fungsi dari relative path sendiri untuk mempersingkat pemanggilan file kita atau memudahkan kita membaca path file kita. Dalam webpack istilah ini disebut **Alias**. Yaitu membuat sebuah alias untuk path tertentu. 

Contoh penulisan Relative Path:

![Relative Path](https://telegra.ph/file/eeed5d22c74705f83811c.png)

Contoh penulisan Relative Path dengan Aliases:

![Relative Path dengan Aliases](https://telegra.ph/file/beb99bdae2971c55b6359.png)

Lebih mudah dibaca yang menggunakan alias bukan? Dengan alias kita bisa memdefiniskan alias folder `components/` yang mengarah pada folder `../../../../path/to/file` dengan fungsi import yang sama. Dan secara otomatis webpack yang akan menghandle sisanya.

Untuk mendefinsikan alias kita bisa menambahkan beberapa kode ke file `webpack.mix.js` kita.

![Weback Config file webpack.mix.js](https://telegra.ph/file/616abe5b7772915c24914.png)
*Weback Config file webpack.mix.js*

## Intellisense tidak bekerja?
Secara default ts-server yang bertugas mengenali code dan membuat Intellisense pada VS Code bekerja tidak akan mengenali path tersebut. Kita perlu memperkenalkan konfigurasi kita pada **Intellisense**. Yaitu dengan membuat file `jsconfig.json` jika project anda menggunakan *Javascript* atau `tsconfig.js` jika pada project anda menggunakan *Typescript*. Buat file tersebut di root folder anda.

Konfigurasi untuk tsconfig.json juga sama, jika sudah ada file tsconfig.json sebelumnya tinggal tambahkan `"baseUrl"` dan `"paths"` saja pada `compilerOptions`. 

![jsconfig.json](https://telegra.ph/file/4b3222499208cf07fcbe9.png)
*jsconfig.json*

Kenapa perlu menambahkan `"/*"` pada akhir definisi alias dan path? menurut issues github yang sudah solved memang di-anjurkan ditambahkan karena jika tidak ditambahkan VS Code tetap tidak mengenali alias path kita. *I don't know why*.

Sekarang Text Editor kamu tampak seksi dengan munculnya Intellisense pada Aliases Path kamu. Agar text editor mengenali konfigurasi barunya maka tutup dulu text editor nya lalu buka kembali agar vs code kembali meng-index module module dan file.

Lalu hasil nya akan seperti ini

![Import Info](https://telegra.ph/file/e60bbad8dcc19a66f65f5.png)
*Import Info*

![Code Intellisense](https://telegra.ph/file/3aeff0533f5e7af3a2ae7.png)
*Code Intellisense*

Sekian dari saya, maaf jika ada salah dalam pengartian atau pemberian istilah. Terima kasih.

<Disqus />
