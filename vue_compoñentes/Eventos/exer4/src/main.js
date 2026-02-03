import { createApp } from 'vue';
import App from './App.vue';

import MostrarInfo from './components/MostrarInfo.vue';
import Formulario from './components/Formulario.vue';

const app = createApp(App);
app.component('MostrarInfo', MostrarInfo);
app.component('Formulario', Formulario);
app.mount('#app');
