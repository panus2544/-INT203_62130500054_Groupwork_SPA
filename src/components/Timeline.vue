<template>
    <div class="flex flex-row-reverse md:contents">
      <div
        class="col-start-1 col-end-5 p-4 my-4 ml-auto bg-blue-500 shadow-md rounded-xl"
      >
        <h3 class="mb-1 text-lg font-semibold">Lorem ipsum</h3>
        <p class="leading-tight text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          quaerat?
        </p>
      </div>
      <div class="relative col-start-5 col-end-6 mr-10 md:mx-auto">
        <div class="flex items-center justify-center w-6 h-full">
          <div class="w-1 h-full bg-blue-800 pointer-events-none"></div>
        </div>
        <div
          class="absolute w-6 h-6 -mt-3 bg-blue-500 rounded-full shadow top-1/2"
        ></div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Timeline",
  props: {
    posts: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>