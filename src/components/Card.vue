<template>
  <div
    class="flex flex-col items-center col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1"
  >
    <div class="mt-5 bg-white rounded-lg">
      <img
        @click="renderTransactions()"
        src="https://source.unsplash.com/MNtag_eXMKw/1600x900"
        class="h-40 rounded-md"
        alt=""
      />
    </div>
    <div class="w-64 -mt-4 bg-white rounded-lg shadow-lg">
      <div class="px-5 py-5">
        <span class="text-lg font-bold text-gray-800">{{ card.name }}</span>
        <div class="flex items-center justify-between">
          <!-- <div class="text-sm font-light text-gray-600">Size : Regular</div> -->
          <div class="text-2xl font-bold text-red-600">
            $ {{ amountFormat }}
          </div>

          <div class="text-2xl font-bold">
            <button
              @click="edited"
              class="text-sm font-semibold text-yellow-500 uppercase"
            >
              Edit
            </button>
          </div>
          <div class="text-2xl font-bold">
            <button
              @click="deleted()"
              class="text-sm font-semibold text-red-600 uppercase"
            >
              Delete
            </button>
          </div>
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
  data() {
    return {};
  },
  methods: {
    renderTransactions() {
      this.$emit("whenRender", this.card.id);
    },
    deleted() {
      this.$emit("deleteCard", this.card.id);
    },
    edited() {
      this.$emit("editCard", this.card.id);
    },
  },
  computed: {
    amountFormat() {
      const result = this.card.transactions.reduce((sum, transaction) => {
        return sum + transaction.amount;
      }, 0);
      return result;
    },
  },
};
</script>

<style></style>
