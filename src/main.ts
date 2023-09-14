import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'uno.css';
import { createPinia } from 'pinia';
import Cache from './utils/cache';

const pinia = createPinia();

const cacheInstance = new Cache();

createApp(App).use(pinia).use(cacheInstance).mount('#app');
