<template>
  <div class="flex items-center justify-center">
    <div class="container">
      <div class="flex flex-col mb-4">
        <h1 class="my-5 text-xl">Add Category</h1>
        <div class="relative">
          <div
            class="absolute top-0 left-0 flex w-10 h-full border border-transparent"
          >
            <div
              class="z-10 flex items-center justify-center w-full h-full text-lg text-gray-600 bg-gray-100 rounded-tl rounded-bl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          <input
            id="name"
            v-model="name"
            type="text"
            placeholder="Name"
            class="relative w-full py-2 pl-12 pr-2 text-sm placeholder-gray-400 border rounded sm:text-base focus:border-indigo-400 focus:outline-none"
          />
        </div>
      </div>
      <div class="flex justify-start">
        <button
          @click="save()"
          class="flex items-start mx-auto text-white space-x-1.5 px-4 py-1.5 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-green-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="text-sm font-semibold uppercase">Save</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;
export default {
  props: {
    editId: Number,
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    async save() {
      if (this.editId) {
        let data = {};
        const user = JSON.parse(localStorage.getItem("user"));
        data.name = this.name;
        data.userId = user.id;
        await axios
          .put("http://localhost:5000/categories/" + this.editId, data)
          .then(() => {
            this.$emit("reloadWhenEdit","card")
          });
      } else {
        let data = {};
        const user = JSON.parse(localStorage.getItem("user"));
        data.name = this.name;
        data.userId = user.id;
        await axios.post("http://localhost:5000/categories/", data).then(() => {
          this.$emit("reloadWhenSave","card")
        });
      }
    },
  },
  async created() {
    if (this.editId) {
      await axios
        .get("http://localhost:5000/categories/" + this.editId)
        .then((res) => {
          this.name = res.data.name;
        });
    }
  },
};
</script>

<style>
</style>