<template>
  <div class="author d-flex">
    <div class="author-main d-flex">
      <div class="author-avatar">
        <img v-if="(!avatar && name.indexOf('Ryan') != -1)" src="/images/profiles/avatar.jpg" :alt="name" width="48" height="48">
        <img v-if="(avatar && name.indexOf('Ryan') == -1)" :src="avatar" :alt="name" width="48" height="48">
      </div>
      <div class="author-detail">
        <div>
          <span>{{name}}</span>
          <div v-if="(!avatar && name.indexOf('Ryan') != -1)" class="author-detail--follow">
            <button v-on:click="openFollow">Follow</button>
          </div>
        </div>
        <span>{{dateFormat($page.frontmatter.published)}} · {{$page.readingTime.text}}</span>
      </div>
    </div>
    <div class="author-social d-flex" v-if="(name.indexOf('Ryan') != -1)">
      <div class="author-social-wrapper d-flex">
        <div>
          <a href="https://twitter.com/AunurRyan" target="_blank">
            <svg width="29" height="29" class="q"><path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"></path></svg>
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/ryan.hac" target="_blank">
            <svg width="29" height="29" class="q"><path d="M23.2 5H5.8a.8.8 0 0 0-.8.8V23.2c0 .44.35.8.8.8h9.3v-7.13h-2.38V13.9h2.38v-2.38c0-2.45 1.55-3.66 3.74-3.66 1.05 0 1.95.08 2.2.11v2.57h-1.5c-1.2 0-1.48.57-1.48 1.4v1.96h2.97l-.6 2.97h-2.37l.05 7.12h5.1a.8.8 0 0 0 .79-.8V5.8a.8.8 0 0 0-.8-.79"></path></svg>
          </a>
        </div>
        <div>
          <a href="https://medium.com/@ryandevstudio" target="_blank">
            <svg enable-background="new 0 0 24 24" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.996 21.324c0 .695-.521.982-1.098.695l-6.228-3.113c-.188-.089-.346-.238-.475-.447s-.195-.417-.195-.622v-15.227c0-.568.341-.825 1.112-.441l6.844 3.42c.099.099.026-.581.04 15.735zm.857-14.32 7.152 11.568-7.152-3.553zm15.147.241v14.079c0 .223-.062.403-.188.541-.125.138-.295.207-.509.207s-.424-.058-.629-.174l-5.906-2.939zm-.04-1.603c0 .027-1.145 1.895-3.435 5.603s-3.632 5.88-4.025 6.512l-5.223-8.469 4.339-7.039c.236-.388.72-.456 1.045-.294l7.246 3.607c.035.017.053.044.053.08z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Author",
  props: [
    "name", "avatar"
  ],
  methods: {
    dateFormat (date) {
      var fDate = new Date(date);
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

      return `${months[fDate.getMonth()]} ${fDate.getDate()}, ${fDate.getFullYear()}`
    },
    openFollow () {
      window.open('https://github.com/nyancodeid','_blank');
    }
  }
}
</script>
<style>
.d-flex {
  display: flex;
}
.author {
  margin: 32px 0;
  justify-content: space-between;
  font-family: Medium;
}
.author .author-main {
  align-items: center;
}
.author .author-main .author-avatar img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  vertical-align: middle;
}
.author .author-main .author-detail {
  margin-left: 12px;
}
.author .author-main .author-detail > div {
  display: flex;
}
.author .author-main .author-detail .author-detail--follow {
  margin-left: 8px;
  flex: 0 0 auto;
}
.author .author-main .author-detail .author-detail--follow > button {
  border-color: rgba(0, 146, 227, 1);
  color: rgba(0, 125, 188, 1);
  font-family: Medium;
  background: 0;
  padding: 0px 8px;
  font-size: 15px;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
}
.author .author-main .author-detail > div {
  font-family: CustomSansSerif,'Lucida Grande',Arial,sans-serif;
  font-weight: 700;
}
.author .author-social {
  align-items: flex-end;
}
.author .author-social .author-social-wrapper {
  align-items: center;
}
.author .author-social .author-social-wrapper > div {
  padding-right: 8px;
  flex: 0 0 auto;
}
.author .author-social .author-social-wrapper > div a {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
@media (min-width: 320px) and (max-width: 768px) {
  .author {
    flex-direction: column;
  }
}
</style>