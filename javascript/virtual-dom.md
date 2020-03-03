---
title: "Javascript: Virtual DOM"
lang: id-ID
description: Lebih mengenal apa itu Virtual DOM dan alasan keberadaan mereka dalam kemajuan Javascript.
image: /images/covers/javascript-virtual-dom-nyandev-blog.jpg
published: 2/9/2020, 10:13:23 PM
category: javascript
author: Ryan Aunur Rassyid
tags: javascript,virtual,dom,tree,belajar
meta:
  - name: keywords
    content: javascript,virtual,dom,tree,belajar
---
# Berkenalan dengan Virtual DOM

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage 
  src="/images/covers/javascript-virtual-dom-nyandev-blog.jpg"
  author="Leo Foureaux"
  source="unsplash.com"
  sourceLink="https://unsplash.com/photos/inQCuuA1MMo" />

## Apa itu DOM?
Sebelum kita membahas tentang Virtual-DOM, tidak etis kalau kita tidak kenal dengan DOM terlebih dahulu.

**DOM** adalah singkatan dari *Document Object Model*. Ini adalah cara untuk merepresentasikan dokumen terstruktur melalui sebuah Object. DOM juga merupakan konvensi untuk lintas platform dan bahasa independen untuk berinteraksi dengan data dalam HTML, XML dan lain lain. Web Browser lah yang menangani implementasi detail DOM yang memungkinkan berinteraksi dengan Javascript dan CSS. Kita dapat mencari `node` dan mengubah detailnya, menghapusnya dan menambahkan node baru.

Sampai hari ini DOM API sudah hampir cross-platform dan cross-browser. Lalu apa masalahnya?

### DOM Problem?
Masalah utama dari DOM adalah tidak pernah dioptimalkan untuk membuat Dynamic UI (Tampilan yang dinamis).

![parsing HTML and building a DOM tree - developers.google.com](https://telegra.ph/file/55d8cb709a4728caa8d17.png)
*parsing HTML and building a DOM tree - [developers.google.com](https://developers.google.com/web/updates/2018/09/inside-browser-part3)*

Kita bisa menggunakan Javascript atau library seperti jQuery. Tapi jQuery hanya membantu sedikit mengurangi masalah tersebut. Tapi bayangkan untuk kedepannya misalnya kita memiliki 1000 div element pada website kita yang pastinya akan menyebabkan performa issue kan, kita tidak ingin pengguna website kita merasa terganggu dengan adanya masalah ini. 

Untuk sekarang W3C Group sedang mengerjakan standart baru **Shadow DOM**.

Shadow DOM masih dalam draft untuk standart baru DOM dari W3C. Spesifikasi ini menjelaskan metode menggabungkan beberapa DOM Tree ke dalam satu hierarki dan bagaimana DOM Trees ini berinteraksi satu sama lain dalam dokumen, sehingga memungkinkan komposisi DOM yang lebih baik.

Opsi yang lain adalah Virtual-DOM. Virtual DOM masih menggunakan Standard DOM tapi menggunakan seminim mungkin dan sangat efisien.

## Virtual DOM
Ketika kita ingin berinteraksi dengan DOM maka kita harus bersentuhan langsung dengan node tersebut, namun dari pada bersentuhan langsung, kita bisa membuat abstraknya yang artinya kita membuat salinan DOM yang lebih ringan. Jadi kita bisa berinteraksi dengan salinan DOM ini dengan sangat cepat dan efisien sehingga kita bisa membandingkan node mana saja yang memiliki perubahan antara DOM Tree asli dan juga Virtual DOM kita yang akhirnya alih alih me-render semua node kita hanya merender node mana yang berubah.

Cara ini dinilai lebih cepat dan efisien dari pada bekerja langsung dengan DOM. Namun cara ini akan tepat jika bekerja dengannya dengan cara yang benar. Ada dua masalah yang harus dipecahkan: Ketika merender ulang DOM dan Cara melakukannya secara efisien.

### Apa yang membuat Virtual-DOM sangat cepat?
Ada beberapa faktor yang mempengaruhi kenerja Virtual-DOM, antara lain:

- Efficient diff algorithms.
- Batching DOM read/write operations.
- Efficient update of sub-tree only.

Seperti yang kita tau bahwa faktor diatas tidaklah mudah untuk diterapkan, atau malah bukan solusi yang anda dapat. Ada beberapa library yang membantu kamu untuk menerapkan penggunaan Virtual-DOM dan yang paling terkenal adalah **ReactJS** oleh Facebook.

## ReactJS
React JS - adalah javascript library untuk membangun user interfaces yang dikembangkan oleh Facebook. Yang mempopulerkan konsep Virtual-DOM adalah React JS sendiri. React menciptakan lightweight tree dari javascript object yang meniru DOM Tree yang asli. React adalah *library* dan bukan *framework*, jadi tidak bisa dibandingkan dengan Angular atau Ember. 


Contoh library atau framework lainnya adalah:
- [**virtual-dom**](https://github.com/Matt-Esch/virtual-dom) - A JavaScript Virtual DOM and diffing algorithm.
- [**Mithril**](http://lhorie.github.io/mithril/) - A Javascript Framework for Building Brilliant Applications.
- [**Bobril**](https://github.com/Bobris/Bobril) - Component oriented framework inspired by Mithril and ReactJs.
- [**cito.js**](https://github.com/joelrich/citojs) - JavaScript framework for building fast, scalable and modularized web applications.

## Jadi seperti apa DOM dan Virtual-DOM itu?
Kita ambil contoh kode HTML dibawah ini, bagaimana kedua nya memperlakukkan code HTML:

```html
<!DOCTYPE html>
<html lang="en">
 <head></head>
 <body>
    <ul class="list">
      <li class="list__item">List item</li>
    </ul>
  </body>
</html>
```

Dokumen di atas bisa direpresentasikan sebagai DOM Tree sebagai berikut:

![DOM Tree](/images/posts/dom-element.png)

Sedangkan untuk Virtual-DOM akan terlihat kurang lebih seperti ini:

```js
const vdom = {
  tagName: "html",
  children: [{
      tagName: "head"
    },
    {
      tagName: "body",
      children: [{
          tagName: "ul",
          attributes: {
            "class": "list"
          },
          children: [{
              tagName: "li",
              attributes: {
                "class": "list__item"
              },
              textContent: "List item"
            } // end li
          ]
        } // end ul
      ]
    } // end body
  ]
}
```

## Bagaimana Virtual-DOM kedepannya?
Ini menarik karena untuk tahun ini ada petarung baru dalam dunia Javascript yang muncul dengan konsep baru, yaitu **Svelte**. Bertolak belakang dengan React, Svelte tidak mengusung konsep Virtual-DOM karena mereka percaya bahwa memang Virtual DOM cepat, namun ada cara lain untuk mengelolah DOM sendiri menjadi lebih cepat.  

> "Unlike traditional UI frameworks, Svelte is a compiler that knows at build time how things could change in your app, rather than waiting to do the work at run time." - svelte.dev

Untuk lebih lanjut membahas Virtual DOM menurut developer Svelte, mereka menyediakan page kusus untuk membahas masalah ini:

:::: preview https://svelte.dev/blog/virtual-dom-is-pure-overhead

::: preview-content Virtual DOM is pure overhead
Let's retire the 'virtual DOM is fast' myth once and for all

svelte.dev
:::
::: preview-thumbnail https://svelte.dev/images/twitter-card.png
:::
::::

Sebuah teknik akan cocok diterapkan dengan cara dan penggunaan yang tepat, mungkin Virtual DOM cocok di library ReactJS sedangkan dari Svelte mungkin tidak karena konsep mereka berbeda dengan ReactJS dalam menangani DOM dan pandangan mereka tentang optimasi untuk Front End.

## Kesimpulan
Virtual-DOM adalah sebuah teknik dan sebuah set algoritma yang memungkinkan kita untuk meningkatkan performa front-end dengan cara menghindari bekerja langsung dengan DOM dan hanya bekerja dengan Javascript Object ringan yang meniru DOM Tree asli. Walaupun ini bukan teknik lama tapi ide dari virtual dom sudah lama namun dikarenakan implementasinya yang sulit menjadikannya kurang populer sebelum adanya library React yang membuat semuanya menjadi mudah.

## Referensi
:::: preview https://medium.com/@tony_freed/what-is-virtual-dom-c0ec6d6a925c

::: preview-content What is Virtual Dom - Tony Freed - Medium
Before we start to discover the virtual DOM technology let’s talk a little bit about the basic thing — the original DOM. DOM stands for Document Object Model. It’s a way of representing a structured…

medium.com
:::
::: preview-thumbnail https://miro.medium.com/max/1200/1*JUXkrOzYP45oEHXumdf0YA.jpeg
:::
::::

:::: preview https://bitsofco.de/understanding-the-virtual-dom/

::: preview-content Understanding the Virtual DOM
I’ve recently been writing about what exactly the DOM and the shadow DOM are and how they differ. To recap, the Document Object Model is an object-based representation of an HTML document and an interface to manipulating that object. The shadow DOM can be thought of as a “lite”

bitsofco.de
:::
::: preview-thumbnail https://bitsofco.de//assets/icons/icon_128.png?v=c7b75d6807
:::
::::

<Disqus />
