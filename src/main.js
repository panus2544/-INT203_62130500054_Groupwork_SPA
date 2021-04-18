import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

import Home from "@/components/Home.vue";

const app = createApp(App).use(store).use(router);

app.component("home",Home)

router.isReady().then(() => {
  app.mount("#app");
});
