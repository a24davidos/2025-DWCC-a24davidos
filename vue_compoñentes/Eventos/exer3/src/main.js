import { createApp } from 'vue';
import App from './App.vue';
import Contact from './components/Contact.vue';
import NovoContacto from './components/NovoContacto.vue';

const app = createApp(App);
app.component('Contact', Contact);
app.component('NovoContacto', NovoContacto);
app.mount('#app');
