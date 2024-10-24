import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/index.css";
import App from "./App.vue";

// LIBARY CSS
import 'simplebar-vue/dist/simplebar.min.css';

// ROUTER
import router from "./router";

const app = createApp(App);

app.use(createPinia());
// app.use(VueApexCharts);
app.use(router);
// app.use(notivue);

app.mount("#app");
