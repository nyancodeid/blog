<template>
  <p class="featured-image">
    <img :alt="$page.title" :title="`${$page.title} | NyanDev Blog`" :data-src="src" loading="lazy" class="no-zoom lazy" :src="src" />
    <span class="featured-image--subtitle" v-html="generateSubtitle()"></span>
  </p>  
</template>
<script>
export default {
  name: "FeaturedImage",
  props: [
    "src",
    "author",
    "source",
    "sourceLink"
  ],
  methods: {
    generateSubtitle () {
      if (this.source && this.sourceLink && !this.author) {
        return `(source <u><a href="${this.sourceLink}" target="_blank">${this.source}</a></u>)`
      } else if (this.source && this.sourceLink && this.author) {
        return `(featured image by <u>${this.author}</u> on <u><a href="${this.sourceLink}" target="_blank">${this.source}</a></u>)`
      }
    }
  }
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
  > .featured-image--subtitle
    font-size: 14px;
    margin-top: 1em;
    display: block;
    text-align: center;
    color: #9E9E9E;
    a, u
      color: #616161;

</style>