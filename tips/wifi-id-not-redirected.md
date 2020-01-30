---
title: "Tips: Login Page WiFi.id di OS Linux"
description: Cara mengatasi wifi id yang tidak redirect ke halaman login di sistem operasi linux
lang: id-ID
tags: wifi.id,linux,refirected,login,dns,tips
published: 1/17/2020, 10:06:21 AM
category: tips
image: /thumbnail/tips-login-wifiid-linux--nyandev-blog.png
author: Ryan Aunur Rassyid
meta:
  - name: keywords
    content: wifi.id,linux,redirected,login
---
# Tips: Login Page WiFi.id di OS Linux

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage src="/images/tips-login-wifiid-linux--nyandev-blog-cover.png" />

Berawal dari kesulitan penulis untuk berinternet di Wifi.id Corner maka penulis akan membeberkan cara mengkoneksikan Laptop bersistem operasi Linux ke jaringan wifi di Wifi.id Corner.

## Permasalahan
Dengan kebiasaan menggunakan OS Windows yang serba simple dan mudah, maka untuk sistem operasi linux akan sedikit berbeda ketika anda akan berhubungan dengan internet. Karena linux dibuat advance jadi anda di berikan kebebasan untuk mengkonfigurasi semua file sistem. Didalam keseharian penulis, penulis menggunakan NextDNS sebagai DNS Service yang mengamankan proses resolve dari domain yang anda kunjungi. Anda bisa mengkontrol Domain apa saya yang di block, diubah, dan disaring bahkan list domain iklan tersedia jadi anda tidak perlu mengetik satu persatu domain yang ingin anda block.

![NextDNS](https://telegra.ph/file/c69954f713c9dabf6487f.png)
*Halaman depan [nextdns.io](https://nextdns.io/)*

Karena NextDNS ini harus berjalan lokal (karena Telkon memblokir koneksi DNS keluar) jadi aplikasi berjalan dibelakang sebagai Services. Balik lagi ke permasalahan, karena koneksi wifi.id tidak mengizinkan internet sebelum anda login maka NextDNS ini tidak akan bekerja. Yang mana menyebabkan semua DNS Query yang mengarah ke service NextDNS tidak dapat di kerjakan. 

## Troubleshoot
Secara default ketika kita tersambung terhadap layanan WiFI.id maka secara otomatis kita akan di arahkan ke halaman login. Namun itu berlaku untuk pengguna Windows dan Android saja, untuk pengguna Linux khususnya **Linux Mint** seperti penulis punya tidak sekalipun Halaman login terbuka sendiri di browser tanpa ada pancingan url yang di akses yang nantinya diharapkan akan di-*redirect* ke halaman login secara otomatis.
Maka kita akan mencari apa penyebab dari masalah ini. Berikut adalah tahapan-tahapan troubleshooting:

### PING
Pertama kita cek terlebih dahulu konektifitas internet kita. Apakah kita dapat bertukar paket **ICMP** pada alamat IP `1.1.1.1` alamat router WiFi.id (bukan default Gateway). Jika **ICMP** mendapatkan replay dari IP tersebut maka anda sudah terhubung ke jaringan WiFi.id (belum Internet), namun jika mendapatkan replay lain atau *error*. Maka dapat dipastikan bahwa anda memiliki masalah pada settingan IP pada `Networking Interface`, cek terlebih dahulu IP yang di dapat.

```shell
ping 1.1.1.1
```

Contoh response bahwa alamat IP yang kita maksud bisa berkomunikasi dengan protocol `ICMP` dengan kita.

```shell
PING 1.1.1.1 (1.1.1.1) 56(84) bytes of data.
64 bytes from 1.1.1.1: icmp_seq=1 ttl=55 time=29.4 ms
64 bytes from 1.1.1.1: icmp_seq=2 ttl=55 time=29.0 ms
64 bytes from 1.1.1.1: icmp_seq=3 ttl=55 time=28.3 ms
64 bytes from 1.1.1.1: icmp_seq=4 ttl=55 time=28.4 ms
^C
--- 1.1.1.1 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 28.381/28.854/29.484/0.456 ms
```

### DIG
Setelah test menggunakan aplikasi `PING`, maka selanjutnya kita akan akan cek DNS Server kita, apakah bisa mereplay dengan alamat IP atau tidak. Cara ini dilakukkan untuk menguji DNS Query dan Konektifitas perangkat anda dan DNS Server. Cara nya dengan menggunakan aplikasi bernama `DIG`. Aplikasi ini bekerja dengan mengirim DNS Query ke server DNS dan menampilkan informasi seputar Domain yang di kehendaki.

```shell
dig welcome2.wifi.id
```

Contoh response bahwa DNS Server bekerja dengan menampilkan informasi dari domain yang kita maksud

```shell
; <<>> DiG 9.11.3-1ubuntu1.11-Ubuntu <<>> welcome2.wifi.id
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 3779
;; flags: qr rd; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1
;; WARNING: recursion requested but not available

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;welcome2.wifi.id.		IN	A

;; ANSWER SECTION:
welcome2.wifi.id.	82334	IN	A	10.233.16.13
welcome2.wifi.id.	82334	IN	A	10.233.16.32

;; Query time: 4 msec
;; SERVER: 118.98.44.10#53(118.98.44.10)
;; WHEN: Fri Jan 24 19:12:38 WIB 2020
;; MSG SIZE  rcvd: 77
```


## Bagaimana DNS Bekerja?
Untuk mengetahui penyebab masalah ini kita harus paham bahwa prosess troubleshooting dilakukkan secara bertahap seperti langkah-langkah diatas yang sudah kita lakukkan.

![Bagaimana DNS Bekerja - NyanDev Blog](https://telegra.ph/file/f9e6efa08eb30cb424fcb.png)
*How DNS Works - [wpbeginner.com](https://www.wpbeginner.com/wp-tutorials/how-to-clear-your-dns-cache-mac-windows-chrome/)*

1. "**Saya butuh alamat untuk domain `http://www.wpbeginner.com`**", User menanyakan kepada DNS Server alamat IP dan Konfigurasi DNS untuk alamat domain tersebut.
2. "**Domain dengan alamat `www.wpbeginner.com` tidak ada di database maupun cache. DNS Server akan mencoba menanyakan ke DNS Server lainnya**", Ya DNS Server saling bertanya pada DNS Server lainnya tiap alamat domain yang ditanyakan tidak tersedia pada dirinya jika `Alternative DNS Server` atau `Secondary DNS Server` di set oleh user.
3. "**Domain itu ada pada cache saya, itu mengarah pada alamat IP berikut `70.42.251.42`**"
4. "**Great! alamat IP nya saya simpan di Cache untuk berjaga jika ada yang meminta domain yang sama nantinya**", alamat IP nya di simpan dan informasi tersebut di kirim kembali ke user.
5. "**Terima kasih atas arahnya, Sekarang saya bisa mencari informasi yang bagus disana**", dengan cara dan tahap yang super ribet akhirnya user dapat berselancar ke domain yang di maksud.

## Solusi
Dalam kasus penulis, dengan mengembalikan DNS ke local dengan merubah settingan `nameserver` pada file `/etc/resolve.conf` tetap tidak dapat berkerja. Setelah coba browsing cara mengatasi ini sampai penulis menemukan bahwa ada cara untuk mengatasi hal ini. Yaitu dengan cara menambahkan IP DNS yang diberikan oleh perangkat WiFi (dalam kasus ini WiFi.id) pada file `/etc/resolve.conf`.

Contoh DNS Server yang didapat oleh Network Interface yang tidak dapat bekerja tanpa dimasukkan kedalam file `resolve.conf` ini. 
```shell
# file /etc/resolve.conf
nameserver 118.98.44.10
nameserver 118.98.44.100
```
::: warning Sudo
Jangan lupa untuk menambahkan `sudo` ketika hendak mengedit file tersebut. Contohnya `sudo nano /etc/resolve.conf`
:::

Selesai, selanjutnya kita akan test apakah DNS Server bekerja sekarang. Buka browser dan kunjungi alamat berikut `http://1.1.1.1`. Ini adalah alamat IP yang di kenali oleh router sebagai DNS Server internal jadi kita berharap prosess redirect ke halaman login bisa terjadi dengan cepat. Atau kamu bisa menggunakan alamat lain seperti

- [http://www.gstatic.com/generate_204](http://www.gstatic.com/generate_204)
- [http://connectivitycheck.gstatic.com/generate_204](http://connectivitycheck.gstatic.com/generate_204)

Alamat ini di design untuk mengecek apakah koneksi kamu ada atau tidak. Jadi kalau ada perintah redirect yang di dapat dari router maka akan langsung di redirect ke halaman login jika ada. Ini juga bisa dipakai pada WiFi lainnya yang menggunakan sistem login sebagai cara untuk mengakses internet jika halaman login yang di maksud tidak muncul.

Dan seharusnya kamu sekarang sudah mendapati halaman login WiFi.id yang sudah terpampang di layar laptop mu. Tinggal memasukkan username dan password voucher kamu bisa berselancar ria di internet.

## Kesimpulan
DNS Server memiliki peranan vital dalam internet karenanya semua pemetaan IP dan Domain ada padanya. Karenanya, diharapkan pembaca jadi lebih paham bagaimana DNS bekerja lewat studi kasus permasalahan simple ini. Dan bagaimana troubleshooting permasalahan secara bertahap.   