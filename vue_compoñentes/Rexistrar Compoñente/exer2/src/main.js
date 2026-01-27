import { createApp } from "vue";
import App from "./App.vue";
import BotonContador from "./components/BotonContador.vue";

const app = createApp(App);
app.component("BotonContador", BotonContador);
app.mount("#app");
