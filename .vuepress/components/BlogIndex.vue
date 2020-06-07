<template>
  <div class="post-items">
    <!-- Loop through all posts. -->
    <div class="post-item" v-for="post in posts">
      <div>
        <h2 class="post-item--title">
          <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
        </h2>
        <!-- Display the post's frontmatter description. -->
        <p class="post-item--description">{{ post.frontmatter.description || "" }}</p>
        <p class="post-item--author no-margin">{{ post.frontmatter.author || "Ryan Aunur Rassyid" }}</p>
        <p class="post-item--meta no-margin">{{ formateDate(post.frontmatter.published) }} · {{ post.readingTime.text }}</p>
      </div>
      <!-- Create a link to the post's url. This can also be removed if you don't plan to have any images. -->
      <div>
        <router-link :to="post.path">
          <!-- If a post has the frontmatter "coverImage" then display that image. -->
          <div v-if="typeof post.frontmatter.image !== 'undefined'">
            <img class="post-item--thumbnail no-zoom" :alt="post.title" v-lazysizes :data-src="post.thumbnail" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import vueLazysizes from 'vue-lazysizes';

export default {
  name: "BlogIndex",
  props: [
    // This will limit the amount of blog posts shown
    "limit", "category", "subcategory", "order"
  ],
  directives: {
    lazysizes: vueLazysizes
  },
  methods: {
    // Control how our data is formatted. You can change to format accoring to JS date format.
    formateDate(date, format = "MMM D, YY") {
      var fDate = new Date(date);
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

      return `${months[fDate.getMonth()]} ${fDate.getDate()}, ${fDate.getFullYear()}`
    },
    formatImageResize(url, width = 256) {
      if (process.env.NODE_ENV !== "production") return url

      return 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy'
        + '?container=focus'
        + '&resize_w=' + width
        + '&refresh=604800'
        + '&rewriteMime=image/*'
        + `&url=https://cdn.statically.io/gh/nyancodeid/blog/gh-pages${url}`;
    }
  },
  computed: {
    // Build a list of all our posts ready to be displayed.
    posts() {
      const descSort = (a, b) =>
        new Date(b.frontmatter.published) -
        new Date(a.frontmatter.published)
      const ascSort = (a, b) =>
        new Date(a.frontmatter.published) -
        new Date(b.frontmatter.published)

      const orderHandler = (this.order && this.order == "ASC") ? ascSort : descSort 

      let posts = this.$site.pages
        .filter(post => post.frontmatter.type !== "pages")
        .filter(post => !post.frontmatter.draft)
        .filter(post => post.frontmatter.title)
        .filter(post => {
          if (this.category) {
            if (this.subcategory) {
              return (post.frontmatter.category === this.category && post.frontmatter.subcategory === this.subcategory)
            }
            return (post.frontmatter.category === this.category && !post.frontmatter.subcategory)
          }
          return true
        })
        .filter(post => !post.path.startsWith("/archived/"))
        .sort(orderHandler);
      if (this.limit > 0) {
        posts = posts.slice(0, this.limit);
      }
      posts = posts.map(post => ({ 
        ...post,
        tags: (post.frontmatter.tags && post.frontmatter.tags.split(',')) || [],
        thumbnail: this.formatImageResize(post.frontmatter.image, 256)
      }))

      return posts;
    }
  }
};
</script>
<style>
.post-items {
  display: flex;
  flex-wrap: wrap;
  font-family: Medium;
}
.post-item {
  display: flex;
  position: relative;
  width: calc(50% - 18px);
  padding: 1em 1em 16px 0;
}
.post-item > div:nth-child(1) > a > div {
  width: 200px;
  height: 200px;
  background-color: #f2f2f2;
}
.post-item > div:nth-child(1) {
  width: 75%;
}
.post-item > div:nth-child(2) {
  width: 25%;
} 
.post-item--thumbnail {
  border-radius: 100%;
  object-fit: cover;
  background: #eee;
}
.home .post-item--thumbnail {
  height: 110px;
  width: 110px;
}
.post-item > div:nth-child(2) > a {
  text-align: right;
}
.page .post-item--thumbnail {
  height: 72px;
  width: 72px;
}
.post-item--description {
  font-size: 15px;
  color: rgba(0,0,0,.54);
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 40px;
  line-height: 20px;
  margin: 0;
}
.post-item--title {
  margin-top: 0;
  margin-bottom: 0;
  max-width: 400px;
  border-bottom: unset;
  font-size: 24px;
}
.post-item--title > a {
  font-weight: 700;
  color: rgba(0,0,0,.84);
}
.post-item--author, .post-item--meta {
  font-size: 16px;
}
.post-item--author {
  margin-top: 1.5em;
  font-weight: bold;
  color: #292929;
  font-family: CustomSansSerif,'Lucida Grande',Arial,sans-serif;
}
@media (max-width: 768px) {
  .post-item {
    margin-bottom: 2em;
    width: 100%;
    padding: 0;
  }
  .post-item > div:nth-child(1) > a > div {
    width: 100%;
    height: auto;
    background-color: unset;
  }
  .home .post-item--thumbnail,
  .page .post-item--thumbnail {
    height: 72px;
    width: 72px;
  }
  .post-item > div:nth-child(2) {
    text-align: right;
  }
}
</style>