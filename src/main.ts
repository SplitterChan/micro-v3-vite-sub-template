import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'uno.css';
import { createPinia } from 'pinia';
import Cache from './utils/cache';
import { createRouter, createWebHashHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';

const pinia = createPinia();

const cacheInstance = new Cache();

const router = createRouter({
  history: createWebHashHistory(),
  routes: setupLayouts(generatedRoutes)
});

router.beforeEach((to, from, next) => {
  to.meta.title && (document.title = to.meta.title as string);
  next();
});

const instance = createApp(App).use(router).use(pinia).use(cacheInstance);

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
