<template>
  <p class="featured-image">
    <img :alt="$page.title" :title="`${$page.title} | NyanDev Blog`" :data-src="src" loading="lazy" class="no-zoom lazy" :src="src">
  </p>  
</template>
<script>
export default {
  props: [
    "src"
  ]
}
</script>
<style lang="stylus">
.featured-image
  margin auto -1.5rem
  img
    width 100%
</style>