import './assets/styles/general.scss'

import { createApp } from 'vue';
// Importa Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'
// Importa Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle'

import { router } from './router';

import App from './App.vue';

// gestisce il click fuori dal componente
import clickOutside from './clickOutside.js';

createApp(App).directive('click-outside', clickOutside).use(router).mount('#app')