import { createApp } from "vue";
import ElementPlus from "element-plus";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "./http";
import "element-plus/dist/index.css";

const app = createApp(App);

// 全局 axios
app.config.globalProperties.$axios = axios;

app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount("#app");
