import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'uno.css';
import { createPinia } from 'pinia';
import Cache from './utils/cache';

const pinia = createPinia();

const cacheInstance = new Cache();

const instance = createApp(App).use(pinia).use(cacheInstance);

if (window.__POWERED_BY_WUJIE__) {
  window.__WUJIE_MOUNT = () => {
    instance.mount('#app');
  };
  window.__WUJIE_UNMOUNT = () => {
    instance.unmount();
  };
  window.__WUJIE.mount();
} else {
  instance.mount('#app');
}
