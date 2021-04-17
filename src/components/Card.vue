<template>
  <div
    class="flex flex-col items-center col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1"
  >
    <div class="mt-5 bg-white rounded-lg">
      <img
        src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
        class="h-40 rounded-md"
        alt=""
      />
    </div>
    <div class="w-64 -mt-4 bg-white rounded-lg shadow-lg">
      <div class="px-5 py-5">
        <span class="text-lg font-bold text-gray-800">{{ card.name }}</span>
        <div class="flex items-center justify-between">
          <div class="text-sm font-light text-gray-600">Size : Regular</div>
          <div class="text-2xl font-bold text-red-600">$ {{ card.amount }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
  },
};
</script>

<style></style>
