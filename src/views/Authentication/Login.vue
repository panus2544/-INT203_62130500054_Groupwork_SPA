<template>
  <div>
    <KeepAlive>
      <Component
        :is="activeForm"
        @whenNext="next"
        @whenBack="back"
        @whenFinish="login"
      />
    </KeepAlive>
    <!-- <Step1 v-show="step === 1" @whenClick="next()" />
    <Step2 v-show="step === 2" /> -->
  </div>
</template>

<script>
const axios = require("axios").default;
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
      username: "",
      password: "",
    };
  },
  methods: {
    next(username) {
      this.username = username;
      this.step = 2;
    },
    back() {
      this.step = 1;
    },
    async login(password) {
      let scope = this;
      scope.password = password;
      await axios
        .get("http://localhost:5000/users")
        .then(function (res) {
          console.log(
            "🚀 ~ file: Login.vue ~ line 42 ~ login ~ password",
            password
          );
          let rs = res.data;
          let user = rs.find((element) => {
            return (
              element.username === scope.username &&
              element.password === scope.password
            );
          });
          if (user) {
            const parsed = JSON.stringify(user);
            localStorage.setItem("user", parsed);
            scope.$router.push({ name: "Dashboard" });
            console.log("🚀 ~ file: Login.vue ~ line 55 ~ user ~ user", user);
          } else {
            console.log("🚀 Not found user");
          }
        })
        .catch(function () {
          console.log("🚀");
        });
    },
  },
  computed: {
    activeForm() {
      return `Step${this.step}`;
    },
  },
};
</script>

<style></style>
