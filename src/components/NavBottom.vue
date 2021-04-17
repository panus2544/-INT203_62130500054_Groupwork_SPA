<template>
  <nav
    class="fixed bottom-0 flex w-full h-16 overflow-x-auto bg-white shadow-lg lg:hidden"
  >
    <!-- Bottom Icon Navigation Menu -->

    <a
      href="."
      class="flex flex-col items-center justify-center flex-grow overflow-hidden text-sm whitespace-no-wrap transition-colors duration-100 ease-in-out hover:bg-gray-200 focus:text-orange-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
        <path
          d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
					2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
        ></path>
      </svg>

      <span class="text-sm capitalize ">Add Category</span>
    </a>

    <a
      class="flex flex-col items-center justify-center flex-grow overflow-hidden text-sm text-orange-500 whitespace-no-wrap transition-colors duration-100 ease-in-out hover:bg-gray-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-github"
      >
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0
					0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
					5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7
					0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0
					0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        ></path>
      </svg>

      <span class="text-sm capitalize">github</span>
    </a>

    <a
      href="."
      class="flex flex-col items-center justify-center flex-grow overflow-hidden text-sm whitespace-no-wrap transition-colors duration-100 ease-in-out hover:bg-gray-200 focus:text-orange-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-bookmark"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
      </svg>

      <span class="text-sm capitalize ">bookmark</span>
    </a>

    <a
      class="flex flex-col items-center justify-center flex-grow overflow-hidden text-sm whitespace-no-wrap transition-colors duration-100 ease-in-out hover:bg-gray-200 focus:text-orange-500"
      @click="logout"
    >
      <svg
        class="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
      </svg>

      <span class="text-sm capitalize ">Logut</span>
    </a>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$emit("whenLogout");
    },
  },
};
</script>

<style>
</style>