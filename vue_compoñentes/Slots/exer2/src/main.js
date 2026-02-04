import { createApp } from "vue";
import App from "./App.vue";
import Modal from "./components/Modal.vue";

const app = createApp(App);
app.component('Modal', Modal)
app.mount("#app");
