<template>
  <div>
    <KeepAlive>
      <Component :is="activeForm" @whenClick="next()" />
    </KeepAlive>
    <!-- <Step1 v-show="step === 1" @whenClick="next()" />
    <Step2 v-show="step === 2" /> -->
  </div>
</template>

<script>
import Step1 from "@/views/Authentication/User.vue";
import Step2 from "@/views/Authentication/PassCode.vue";
export default {
  name: "Login",
  components: {
    Step1,
    Step2,
  },
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    next() {
      this.step = 2;
    },
  },
  computed: {
    activeForm() {
      return `Step${this.step}`;
    },
  },
};
</script>

<style>
</style>