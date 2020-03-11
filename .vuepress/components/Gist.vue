<template>
  <div id="gist-area">
    <p v-html="content"></p>
  </div>
</template>

<script>
  export default {
    name: 'Gist',
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        content: "Loading"
      }
    },
    created () {
      this.fetchGistData(this.id)
    },
    methods: {
      fetchGistData (id) {
        const FETCH_URL = `https://cors-anywhere.herokuapp.com/https://gist.github.com/${id}.json`
        
        fetch(FETCH_URL, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => res.json()).then((data) => {
          this.content = data.div

          let style = document.getElementById('gist-stylesheet')
          if (!style) {
            let css = document.createElement("link")
            css.id = "gist-stylesheet"
            css.href = data.stylesheet,
            css.rel = "stylesheet"

            document.getElementsByTagName("head")[0].appendChild(css)
          }
        });
      }
    }
  }
</script>
