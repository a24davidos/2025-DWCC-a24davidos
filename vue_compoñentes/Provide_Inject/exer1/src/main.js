import { createApp } from 'vue';
import App from './App.vue';
import Tarxeta from './components/Tarxeta.vue';

const app = createApp(App);
app.component('Tarxeta', Tarxeta);
app.mount('#app');
