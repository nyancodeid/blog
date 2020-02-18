---
title: "Belajar Preact: Hello World"
lang: id-ID
description: Program Hello world adalah gerbang pertama dari runtutan series belajar Preact kita selanjutnya
image: /images/covers/belajar-preact-hello-world.jpg
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
<FeaturedImage 
  src="/images/covers/belajar-preact-hello-world.jpg"
  author="Julian Santa Ana"
  source="unsplash.com"
  sourceLink="https://unsplash.com/photos/FKqH1QhUqaw" />

<CodeSwitcher :languages="{js:'index.js',html:'index.html',json:'package.json'}">
<template v-slot:js>

```js
import { render, h } from "preact";

const App = () => {
  return <h1>Hello World</h1>;
};

render(<App />, document.getElementById("app"));
```

</template>
<template v-slot:html>

```html
<!DOCTYPE html>
<html>

<head>
	<title>Parcel Sandbox</title>
	<meta charset="UTF-8" />
</head>

<body>
	<div id="app"></div>

	<script src="src/index.js">
	</script>
</body>

</html>
```

</template>
<template v-slot:json>

```json
{
  "name": "preact-hello-world",
  "version": "1.0.0",
  "description": "",
  "main": "index.html",
  "scripts": {
    "start": "parcel index.html --open",
    "build": "parcel build index.html"
  },
  "dependencies": {
    "preact": "10.2.1"
  },
  "devDependencies": {
    "@babel/core": "7.2.0",
    "parcel-bundler": "^1.6.1"
  },
  "keywords": []
}
```

</template>
</CodeSwitcher>
