import "./assets/main.css";
import "./index.css";

import router from "./routes";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import ErrorDialog from "./components/dialogs/ErrorDialog.vue";

const pinia = createPinia();
const app = createApp(App);

app.component("error-dialog", ErrorDialog);

app.use(router);
app.use(pinia);
app.mount("#app");
