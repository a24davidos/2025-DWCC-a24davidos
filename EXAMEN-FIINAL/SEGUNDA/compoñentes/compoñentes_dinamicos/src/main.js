import { createApp } from 'vue';

import App from './App.vue';
import Contador from './components/Contador.vue';
import Texto from './components/Texto.vue';

const app = createApp(App);
app.component("Contador", Contador)
app.component("Texto", Texto)
app.mount('#app');