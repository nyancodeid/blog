<template>
  <div class="codebox-wrapper">
    <iframe
     :src="buildUrl()"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     :title="title"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>
  </div>
</template>
<script>
export default {
  name: "CodeBox",
  props: [
    "title", "id"
  ],
  methods: {
    buildUrl() {
      return `https://codesandbox.io/embed/${this.id}?fontsize=14&hidenavigation=1&theme=dark`
    }
  }
}
</script>
<style lang="stylus">
  .codebox-wrapper iframe
    border-right 1px solid #000 !important
</style>