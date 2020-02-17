<template>
  <p class="featured-image">
    <img :alt="$page.title" :title="`${$page.title} | NyanDev Blog`" :data-src="src" loading="lazy" class="no-zoom lazy" :src="src">
  </p>  
</template>
<script>
export default {
  name: "FeaturedImage",
  props: [
    "src"
  ]
}
</script>
<style lang="stylus">
.featured-image
  margin 0

  > img
    width calc(100vw - 8px) !important
    max-width calc(100vw - 8px) !important
    position relative
    left 50%
    right 50%
    margin-left -50vw
    margin-right -50vw

</style>