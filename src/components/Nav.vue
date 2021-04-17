<template>
  <nav
    class="fixed top-0 flex justify-between w-full h-16 px-4 bg-white shadow-lg"
  >
    <!-- top bar -->

    <ul class="flex items-center lg:hidden">
      <!-- top bar left -->
      <li class="w-6 h-6">
        <img
          class="w-full h-full mx-auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
          alt="svelte logo"
        />
      </li>
    </ul>

    <ul class="flex items-center justify-between w-full">
      <!-- top bar center -->
      <li>
        <h1 class="pl-10 text-gray-700 lg:pl-0">App</h1>
      </li>
    </ul>

    <ul class="flex items-center">
      <!-- to bar right  -->

      <li class="pr-4">
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
          class="feather feather-bell"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      </li>

      <li class="w-8 h-8 pr-20">
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
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
