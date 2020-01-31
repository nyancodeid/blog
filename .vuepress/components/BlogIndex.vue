<template>
  <div class="post-items">
    <!-- Loop through all posts. -->
    <div class="post-item" v-for="post in posts">
      <!-- Create a link to the post's url. This can also be removed if you don't plan to have any images. -->
      <div>
        <router-link :to="post.path">
          <!-- If a post has the frontmatter "coverImage" then display that image. -->
          <div v-if="typeof post.frontmatter.image !== 'undefined'">
            <img class="post-item--thumbnail no-zoom lazyload" :data-src="post.thumbnail" :alt="post.title" />
          </div>
        </router-link>
      </div>
      <div>
        <h2 class="post-item--title">
          <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
        </h2>
        <!-- Display the post's frontmatter description. -->
        <p class="post-item--description">{{ post.frontmatter.description || "" }}</p>
        <div class="post-item--tags">
          <span v-for="tag in post.tags">{{tag}}</span>
        </div>
        <!-- Display the post's frontmatter date. -->
        <span class="post-item--date">{{ formateDate(post.frontmatter.published) }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogIndex",
  props: [
    // This will limit the amount of blog posts shown
    "limit", "category", "subcategory", "order"
  ],
  methods: {
    // Control how our data is formatted. You can change to format accoring to JS date format.
    formateDate(date, format = "MMM D, YY") {
      var fDate = new Date(date);
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

      return `${months[fDate.getMonth()]} ${fDate.getDate()}, ${fDate.getFullYear()} ${fDate.getHours()}:${(fDate.getMinutes() > 10) ? fDate.getMinutes() : `0${fDate.getMinutes()}`}`
    },
    formatImageResize(url, width = 200) {
      return url

      // return 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy'
      //   + '?container=focus'
      //   + '&resize_w=' + width
      //   + '&resize_h=' + width
      //   + '&refresh=604800'
      //   + '&url=' + url;
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
        tags: post.frontmatter.tags.split(','),
        thumbnail: this.formatImageResize(post.frontmatter.image, 300)
      }))

      return posts;
    }
  }
};
</script>
<style>
.post-item {
  display: flex;
  position: relative;
  margin-bottom: 1em;
}
.post-item > div:nth-child(1) > a > div {
  width: 200px;
  height: 200px;
  background-color: #f2f2f2;
}
.post-item > div:nth-child(2) {
  padding-left: 16px;
} 
.post-item--thumbnail {
  height: 200px;
  width: 200px;
}
.post-item--description {
  font-size: 14px;
}
.post-item--title {
  margin-top: 0;
  margin-bottom: 0;
  max-width: 400px;
  border-bottom: unset;
}
.post-item--title > a {
  font-weight: 700;
}
.post-item--tags {
  display: flex;
  flex-flow: row wrap;
  margin: -4px;
}
.post-item--tags > span {
  font-family: CustomSansSerif,'Lucida Grande',Arial,sans-serif;
  font-weight: 700;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #F2F2F2;
  margin: 4px;
  text-transform: uppercase;
}
.post-item--date {
  position: absolute;
  right: 8px;
  top: 0;

  border-radius: 0 0 4px 4px;
  background: rgba(255, 255, 255, 0.3);
  padding: 4px 8px;
  font-size: 13px;
}
@media (max-width: 768px) {
  .post-item {
    flex-direction: column;
    margin-bottom: 2em;
  }
  .post-item > div:nth-child(1) > a > div {
    width: 100%;
    height: auto;
  }
  .post-item--thumbnail {
    width: 100%;
    height: auto;
  }
  .post-item > div:nth-child(2) {
    padding-left: 0;
  }
}
</style>