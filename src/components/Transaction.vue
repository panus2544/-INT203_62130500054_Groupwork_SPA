<template>
  <div class="flex items-center justify-center">
    <div class="container">
      <div class="flex justify-start mt-3">
        <button
          @click="add"
          v-show="datatransaction.self"
          class="flex items-start text-white space-x-1.5 px-4 py-1.5 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-green-600"
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
          <span class="text-sm font-semibold uppercase">Add</span>
        </button>
      </div>
      <table
        v-if="datatransaction.length != 0"
        class="flex flex-row flex-no-wrap w-full my-5 overflow-hidden rounded-lg sm:bg-white sm:shadow-lg"
      >
        <thead class="text-black">
          <tr
            v-for="transaction in datatransaction"
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
            v-for="transaction in datatransaction"
            :key="transaction.id"
            class="flex flex-col mb-2 flex-no wrap sm:table-row sm:mb-0"
          >
            <td class="p-3 border border-grey-light hover:bg-gray-100">
              {{ transaction.category.name }}
            </td>
            <td
              class="p-3 truncate border border-grey-light hover:bg-gray-100"
              contenteditable="true"
            >
              {{ transaction.details }}
            </td>
            <td
              class="p-3 truncate border border-grey-light hover:bg-gray-100"
              contenteditable="true"
            >
              {{ transaction.amount }}
            </td>
            <td
              class="p-3 truncate border border-grey-light hover:bg-gray-100"
              contenteditable="true"
            >
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
  data() {
    return {
      datatransaction: this.transactions,
      categoryName: this.transactions[0].category.name,
    };
  },
  props: {
    transactions: [],
  },
  computed: {},
  methods: {
    convertDate(d) {
      var parts = d.split(" ");
      var months = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12",
      };
      return (
        parts[3] + "-" + months[parts[1]] + "-" + parts[2] + " " + parts[4]
      );
    },

    add() {
      var d = "" + new Date();
      let scoped = this;
      scoped.datatransaction.push({
        id: 4,
        details: "",
        amount: 0,
        date: this.convertDate(d),
        category: {
          name: scoped.categoryName,
        },
      });
    },
  },
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