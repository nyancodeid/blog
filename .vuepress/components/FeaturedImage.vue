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
  img
    width 100%
@media (max-width: 768px)
  .featured-image
    margin auto -1.5rem

</style>