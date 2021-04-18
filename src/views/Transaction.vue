<template>
  <div class="flex items-center justify-center">
    <div class="container">
      <table
      v-if="transactions.length != 0"
        class="flex flex-row flex-no-wrap w-full my-5 overflow-hidden rounded-lg sm:bg-white sm:shadow-lg"
      >
        <thead class="text-black">
          <tr
            v-for="transaction in transactions"
            :key="transaction.id"
            class="flex flex-col mb-2 bg-teal-400 rounded-l-lg flex-no wrap sm:table-row sm:rounded-none sm:mb-0"
          >
            <th class="p-3 text-left" width="110px">Category</th>
            <th class="p-3 text-left">Details</th>
            <th class="p-3 text-left">Amount</th>
            <th class="p-3 text-left" width="110px">Date</th>
            <th class="p-3 text-left" width="110px">Option</th>
          </tr>
        </thead>
        <tbody class="flex-1 sm:flex-none">
          <tr
            v-for="transaction in transactions"
            :key="transaction.id"
            class="flex flex-col mb-2 flex-no wrap sm:table-row sm:mb-0"
          >
            <td class="p-3 border border-grey-light hover:bg-gray-100">
              {{ transaction.category.name }}
            </td>
            <td class="p-3 truncate border border-grey-light hover:bg-gray-100">
              {{ transaction.details }}
            </td>
            <td class="p-3 truncate border border-grey-light hover:bg-gray-100">
              {{ transaction.amount }}
            </td>
            <td class="p-3 truncate border border-grey-light hover:bg-gray-100">
              {{ transaction.date }}
            </td>
            <td
              class="p-3 text-red-400 border cursor-pointer border-grey-light hover:bg-gray-100 hover:text-red-600 hover:font-medium"
            >
              Delete
            </td>
          </tr>
        </tbody>
      </table>
      <h1 v-else class="my-16 text-5xl">No Data</h1>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    transactions: [],
  },
  computed: {},
};
</script>
  
  <style scoped>
html,
body {
  height: 100%;
}

@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}

td:not(:last-child) {
  border-bottom: 0;
}

th:not(:last-child) {
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}
</style>