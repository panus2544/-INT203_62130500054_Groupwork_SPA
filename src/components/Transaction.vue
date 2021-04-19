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
              @blur.self="updateEvent($event, transaction)"
              :contenteditable="stateUpdate"
              id="details"
            >
              {{ transaction.details }}
            </td>
            <td
              class="p-3 truncate border border-grey-light hover:bg-gray-100"
              @blur.self="updateEvent($event, transaction)"
              :contenteditable="stateUpdate"
              id="amount"
            >
              {{ transaction.amount }}
            </td>
            <td class="p-3 truncate border border-grey-light hover:bg-gray-100">
              {{ transaction.date }}
            </td>
            <td
              class="p-3 text-red-400 border cursor-pointer border-grey-light hover:bg-gray-100 hover:text-red-600 hover:font-medium"
            >
              <button @click="deleted(transaction)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h1 v-else class="my-16 text-5xl">No Data</h1>
      <div class="flex justify-start" v-show="stateUpdate">
        <button
          @click="updateAll"
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
          <span class="text-sm font-semibold uppercase">UpdateAll</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;
export default {
  data() {
    return {
      datatransaction: this.transactions,
      stateUpdate: false,
      Itemdelete: [],
    };
  },
  props: {
    transactions: [],
  },
  computed: {},
  mounted() {
    console.log(this.datatransaction);
  },
  methods: {
    async updateAll() {
      this.datatransaction.forEach(async (element) => {
        if (element.stateDb == "add") {
          let dataAdd = {
            details: element.details,
            amount: element.amount,
            date: element.date,
            categoryId: element.categoryId,
          };
          await axios
            .post("http://localhost:5000/transactions", dataAdd)
            .then((respone) => {
              console.log(
                "🚀 ~ file: About.vue ~ line 19 ~ getPosts ~ data",
                respone
              );
            });
        }

        if (element.stateDb == "edit") {
          let dataEdit = {
            id: element.id,
            details: element.details,
            amount: element.amount,
            date: element.date,
            categoryId: element.categoryId,
          };
          await axios
            .put("http://localhost:5000/transactions/" + element.id, dataEdit)
            .then((respone) => {
              console.log(
                "🚀 ~ file: About.vue ~ line 19 ~ getPosts ~ data",
                respone
              );
            });
          console.log("edit successs");
        }
        this.stateUpdate = false;
        this.$emit("reloadwhensave", "categories");
      });
    },
    async updateEvent(e, transaction) {
      e.preventDefault();

      if (e.target.id == "details") {
        transaction.details = e.target.innerText;
      }

      if (e.target.id == "amount") {
        transaction.amount = parseInt(e.target.innerText);
      }
      this.datatransaction.forEach((dt) => {
        if (!dt.stateDb) {
          dt.stateDb = "edit";
        }
      });
      console.log(
        "🚀 ~ file: Transaction.vue ~ line 188 ~ add ~ dataUpdate Before",
        this.datatransaction
      );
    },
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
    async deleted(transaction) {
      this.datatransaction.splice(this.datatransaction.indexOf(transaction), 1);
      await axios
        .delete("http://localhost:5000/transactions/" + transaction.id)
        .then(() => {
          console.log("deleted");
        });
      this.$emit("whendelete", "categories");
    },

    async add() {
      let scoped = this;
      let categoryres = await axios.get(
        "http://localhost:5000/categories/" + scoped.datatransaction.categoryId
      );

      this.stateUpdate = true;
      var d = "" + new Date();
      if (scoped.datatransaction.length == 0) {
        scoped.datatransaction.push({
          id: 1,
          details: "",
          amount: 0,
          date: this.convertDate(d),
          category: {
            name: categoryres.data.name,
          },
          categoryId: categoryres.data.id,
          stateDb: "add",
        });
      } else {
        scoped.datatransaction.push({
          id:
            Math.max.apply(
              Math,
              scoped.datatransaction.map(function (o) {
                return o.id;
              })
            ) + 1,
          details: "",
          amount: 0,
          date: this.convertDate(d),
          category: {
            name: categoryres.data.name,
          },
          categoryId: categoryres.data.id,
          stateDb: "add",
        });
      }
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
