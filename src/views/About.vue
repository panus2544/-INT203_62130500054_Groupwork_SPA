<template>
  <!-- component -->
  <div class="container">
    <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid text-blue-50">
      <!-- <timeline />
      <timeline />
      <timeline />
      <timeline /> -->

      <ul>
        <li v-for="post in posts" :key="post.id" class="my-6">
          <p
            class="p-2 text-black bg-red-500"
            contenteditable="true"
            @blur.self="updateTask($event, post)"
          >
            {{ post.title }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>
<script>
// import Timeline from "../components/Timeline.vue";
const axios = require("axios").default;
export default {
  name: "About",
  components: {
    // Timeline,
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
    async updateTask(e, post) {
      e.preventDefault();

      post.title = e.target.innerText;
      await axios
        .put("http://localhost:5000/posts/" + post.id, post)
        .then((respone) => {
          console.log(
            "🚀 ~ file: About.vue ~ line 19 ~ getPosts ~ data",
            respone
          );
        });
      // e.target.blur();
    },
  },
  created() {
    this.getPosts();
  },
};
</script>
