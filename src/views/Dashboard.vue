<template>
  <div class="flex w-screen h-screen overflow-x-hidden bg-gray-200">
    <div class="flex flex-col flex-1">
      <Nav @whenlogout="logout"/>
      <div class="w-full pb-24 mt-16 overflow-y-auto">
        <div
          class="flex flex-col justify-between w-full p-3 space-y-5 bg-white lg:space-y-0 lg:flex-row lg:items-center"
        >
          <div>
            <div
              class="flex flex-col px-2 space-y-1 md:space-x-5 md:space-y-0 md:flex-row"
            >
              <span class="inline-flex items-center space-x-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z"
                  />
                </svg>
                <span>Date on January 9, 2020</span>
              </span>
            </div>
          </div>
          <div class="flex space-x-3">
            <button
              @click="view()"
              class="md:flex hidden items-center text-gray-500 space-x-2 border border-gray-400 px-4 py-1.5 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"
                />
              </svg>
              <span class="text-sm font-semibold uppercase">All</span>
            </button>
            <button
              @click="stateRenderComponent = 'addCategory'"
              class="flex items-center text-white space-x-1.5 px-4 py-1.5 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-600"
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
              <span class="text-sm font-semibold uppercase">Add Category</span>
            </button>
            <div class="relative">
              <button
                @click="stateButtonMore = !stateButtonMore"
                class="flex md:hidden items-center text-gray-500 space-x-2 border border-gray-400 px-4 py-1.5 rounded-lg hover:bg-gray-100 focus:outline-none"
              >
                <span class="text-sm font-semibold uppercase">More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
                  />
                </svg>
              </button>
              <div
                v-show="stateButtonMore"
                class="absolute right-0 overflow-hidden bg-white rounded-lg shadow-xl w-36 top-full"
              >
                <a
                  @click="view()"
                  class="flex items-center px-4 py-2 space-x-2 text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"
                    />
                  </svg>
                  <span class="text-sm font-semibold uppercase">All</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="stateRenderComponent == 'card'"
          class="grid grid-cols-4 gap-4 px-10"
        >
          <Card
            v-for="category in categories"
            :key="category.id"
            :card="category"
            @whenRender="renderTransactions"
            @deleteCard="deleteCategory"
            @editCard="editCategory"
          />
        </div>
        <Transaction
          v-if="stateRenderComponent == 'transaction'"
          :transactions="transactions"
        />
        <Category
          v-if="stateRenderComponent == 'addCategory'"
          @reloadWhenSave="reloadwhenSave"
        />
        <Category
          v-if="stateRenderComponent == 'editCategory'"
          :editId="editId"
          @reloadWhenEdit="reloadwhenSave"
        />
        <Transaction
          :transactions="transactions"
          v-if="stateRenderComponent == 'categories'"
        />
      </div>
    </div>

    <NavBottom @whenLogout="logout" />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import NavBottom from "@/components/NavBottom.vue";
import Card from "@/components/Card.vue";
import Transaction from "@/views/Transaction.vue";
import Category from "@/views/Category.vue";
const axios = require("axios").default;
export default {
  components: {
    Nav,
    NavBottom,
    Card,
    Transaction,
    Category,
  },
  data() {
    return {
      categories: [],
      transactions: [],
      stateButtonMore: false,
      stateRenderComponent: "card",
      editId: 0,
    };
  },
  methods: {
    reloadwhenSave() {
      this.stateRenderComponent = "card";
      this.getCategory();
    },
    async view() {
      if (this.stateRenderComponent == "card") {
        this.stateRenderComponent = "transaction";
        await this.getTransaction();
      } else {
        this.stateRenderComponent = "card";
      }
    },
    async renderTransactions(id) {
      await this.getTransaction();
      this.stateRenderComponent = "categories";
      this.transactions = this.transactions.filter((dt) => {
        return dt.categoryId == id;
      });
    },
    logout() {
      localStorage.removeItem("user");
      this.$router.push({ name: "Login" });
    },
    async getCategory() {
      await axios
        .get("http://localhost:5000/categories?_embed=transactions")
        .then((respone) => {
          this.categories = respone.data;
        });
    },
    async getTransaction() {
      await axios
        .get("http://localhost:5000/transactions?_expand=category")
        .then((respone) => {
          this.transactions = respone.data;
        });
    },
    async deleteCategory(id) {
      await axios
        .delete("http://localhost:5000/categories/" + id)
        .then((respone) => {
          this.transactions = respone.data;
          this.getCategory();
        });
    },
    editCategory(id) {
      this.editId = id;
      this.stateRenderComponent = "editCategory";
    },
  },
  computed: {},
  created() {
    this.getCategory();
  },
};
</script>

<style></style>
