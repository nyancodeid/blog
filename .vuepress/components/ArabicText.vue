<template>
  <p class="arabic-text">{{ value }}</p>
</template>

<script>
export default {
  name: "ArabicText",
  props: [
    "value",
  ],
}
</script>

<style>
.arabic-text {
  font-family: 'Lateef', cursive;
  text-align: right;
  font-size: 2rem;
}
</style>