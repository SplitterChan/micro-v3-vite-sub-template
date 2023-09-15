import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'uno.css';
import { createPinia } from 'pinia';
import Cache from './utils/cache';
// import { name } from '~/package.json';

// const basename = import.meta.env.PROD ? `/${name}/` : '';

const pinia = createPinia();

const cacheInstance = new Cache();

if (window.__POWERED_BY_WUJIE__) {
  const instance = createApp(App).use(pinia).use(cacheInstance);
  window.__WUJIE_MOUNT = () => {
    instance.mount('#app');
  };
  window.__WUJIE_UNMOUNT = () => {
    instance.unmount();
  };
  window.__WUJIE.mount();
} else {
  createApp(App).use(pinia).use(cacheInstance).mount('#app');
}
