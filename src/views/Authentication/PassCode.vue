<template>
  <div>
    <div
      class="flex items-center justify-center w-screen h-screen bg-green-900"
    >
      <div class="container h-screen max-w-full overflow-hidden shadow-lg">
        <div class="flex flex-col">
          <div class="flex flex-col justify-center w-full h-24">
            <div class="block w-full text-3xl text-center text-gray-200">
              Pass Code
            </div>
            <div
              class="block w-full pt-2 text-sm text-center text-gray-400 font-base"
            >
              Please enter the pass code for access MONEY SAVE
            </div>
          </div>
          <div
            class="flex items-center justify-center flex-1 w-full h-screen text-white"
          >
            <div class="h-full px-8 py-1 text-center">
              <div class="w-full max-w-sm">
                <div
                  class="flex items-center py-2 mt-1 border-b-2 border-yellow-500"
                >
                  <input
                    class="w-full px-2 py-1 mr-3 text-3xl leading-tight text-center text-white bg-transparent border-none appearance-none focus:outline-none"
                    type="number"
                    placeholder="Enter Pass Code"
                    v-model="passcode"
                  />
                </div>
                <NumPad @when-touch="showNumber" />
                <button
                  class="px-6 py-3 mt-4 text-black bg-gray-200 rounded-full"
                  @click="back"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NumPad from "@/components/NumPad.vue";
export default {
  name: "PassCode",
  components: {
    NumPad,
  },
  data() {
    return {
      passcode: null,
    };
  },
  methods: {
    back() {
      this.$emit("whenBack");
    },
    showNumber(number) {
      if (this.passcode == null || Number.isNaN(this.passcode)) {
        this.passcode = number;
      } else {
        var numberAsString = this.passcode + "";
        if (number == 11) {
          this.passcode = numberAsString.substring(
            0,
            numberAsString.length - 1
          );
        } else if (number == 12) {
          console.log("พอเหอะ หยอก หยอก");
          this.$emit("whenFinish", parseInt(this.passcode));
        } else {
          this.passcode = numberAsString + number;
        }
      }
    },
  },
};
</script>
<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
