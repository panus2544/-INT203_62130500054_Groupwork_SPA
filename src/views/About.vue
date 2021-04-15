<template>
  <!-- component -->
  <div class="container">
    <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid text-blue-50">
      <timeline />
      <timeline />
      <timeline />
      <timeline />
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import Timeline from "../components/Timeline.vue";
const axios = require("axios").default;
export default {
  name: "About",
  components: {
    Timeline,
  },
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