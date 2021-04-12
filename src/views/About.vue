<template>
  <div class="about">
    <h1 class="bg-sea">This is an {{ namePage }}</h1>
    <ul v-for="post in posts" :key="post.id">
      <li>{{ post.title }} :: author {{ post.author }}</li>
    </ul>
  </div>
</template>

<script>
const axios = require("axios").default;
export default {
  name: "About",
  data() {
    return {
      namePage: "About Page",
      posts: [],
    };
  },
  methods: {
    async getPosts() {
      await axios.get("http://localhost:5000/posts").then((respone) => {
        console.log(
          "🚀 ~ file: About.vue ~ line 19 ~ getPosts ~ data",
          respone
        );
        this.posts = respone.data;
      });
    },
  },
  created() {
    this.getPosts();
  },
};
</script>