import { createApp } from 'vue';
import App from './App.vue';
import Contact from './components/Contact.vue';
import Formulario from './components/Formulario.vue';

const app = createApp(App);
app.component('Contact', Contact);
app.component('Formulario', Formulario)
app.mount('#app');