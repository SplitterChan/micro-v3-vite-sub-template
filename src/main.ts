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

export const router = createRouter({
  history: createWebHashHistory(),
  routes: setupLayouts(generatedRoutes)
});

router.beforeEach((to, _, next) => {
  to.meta.title && (document.title = to.meta.title as string);
  next();
});

const appInit = () => createApp(App).use(router).use(pinia).use(Cache);

if (window.__POWERED_BY_WUJIE__) {
  let instance;
  window.__WUJIE_MOUNT = () => {
    instance = appInit();
    instance.mount('#app');
  };
  window.__WUJIE_UNMOUNT = () => {
    instance.unmount();
  };
  window.__WUJIE.mount();
} else {
  appInit().mount('#app');
}
