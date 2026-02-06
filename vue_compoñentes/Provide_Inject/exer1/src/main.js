import { createApp } from 'vue';
import App from './App.vue';
import Tarxeta from './components/Tarxeta.vue';
import Formulario from './components/Formulario.vue';
import ListaTarxetas from './components/ListaTarxetas.vue';

const app = createApp(App);
app.component('Formulario', Formulario)
app.component('Tarxeta', Tarxeta);
app.component('ListaTarxetas', ListaTarxetas)
app.mount('#app');
