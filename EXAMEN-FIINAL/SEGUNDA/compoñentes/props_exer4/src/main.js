import { createApp } from 'vue';
import App from './App.vue';
import Info from './components/Info.vue';
import Formulario from './components/Formulario.vue'

const app = createApp(App);
app.component('Info', Info);
app.component('Formulario', Formulario)
app.mount('#app');