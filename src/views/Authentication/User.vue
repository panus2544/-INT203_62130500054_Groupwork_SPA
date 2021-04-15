<template>
  <div class="flex items-center justify-center w-screen h-screen bg-green-900">
    <div class="container">
      <div class="flex flex-col">
        <div class="flex flex-col justify-center w-full h-32">
          <div class="block w-full text-3xl text-center text-gray-200">
            UserName
          </div>
          <div
            class="block w-full pt-2 text-sm text-center text-gray-400 font-base"
          >
            Please enter the UserName for access MONEY SAVE
          </div>
        </div>
        <div
          class="flex items-center justify-center flex-1 w-full h-screen text-white"
        >
          <div class="px-8 py-1 text-center">
            <div class="w-full max-w-sm">
              <div
                class="flex items-center py-2 mt-1 border-b-2 border-yellow-500"
              >
                <input
                  class="w-full px-2 py-1 mr-3 text-3xl leading-tight text-center text-white bg-transparent border-none appearance-none focus:outline-none"
                  type="text"
                  placeholder="Enter User Name"
                />
              </div>
              <button
                class="px-6 py-3 mt-6 text-black bg-gray-200 rounded-full"
                @click="test"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  methods: {
    test() {
      this.$emit("whenClick");
    },
  },
};
</script>

<style>
</style>