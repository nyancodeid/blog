---
title: "Belajar Preact: Hello World"
lang: id-ID
description: Program Hello world adalah gerbang pertama dari runtutan series belajar Preact kita selanjutnya
image: /thumbnail/belajar-preact-hello-world.jpg
published: 1/27/2020, 07:55:23 PM
category: preact
subcategory: belajar-preact
tags: preact,preactjs,javascript,react
prev: /preact/belajar-preact/setup-preact-app.html
meta:
  - name: keywords
    content: preact,preactjs,react,javascript
---
# Belajar Preact: Hello World

<Author name="Ryan Aunur Rassyid" />
<FeaturedImage src="/images/covers/belajar-preact-hello-world.jpg" />

<CodeSwitcher :languages="{js:'JavaScript',ts:'TypeScript'}">
<template v-slot:js>

```js
module.exports = function (str) {
    return typeof str === 'string' && str.trim() === str
}
```

</template>
<template v-slot:ts>

```ts
export default function isString (str: string) : str is string {
    return typeof str === 'string' && str.trim() === str
}
```

</template>
</CodeSwitcher>
