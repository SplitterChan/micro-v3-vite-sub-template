import { AsyncComponentLoader, createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'uno.css';
import { createPinia } from 'pinia';
import Cache from './utils/cache';
import { createRouter, createWebHashHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import permission from '@/directives/permission';
import lazyLoadRouteComponent from '@/utils/routeComponent';
const pinia = createPinia();

const routeAsync = generatedRoutes.map(route => ({
  ...route,
  component: lazyLoadRouteComponent(route.component as AsyncComponentLoader)
}));

const initRouter = () => {
  const router = createRouter({
    history: createWebHashHistory(),
    routes: setupLayouts([...(routeAsync as any)])
  });
  router.beforeEach((to, _, next) => {
    to.meta.title && (document.title = to.meta.title as string);
    next();
  });
  return router;
};

const appInit = () => {
  const router = initRouter();
  return createApp(App)
    .use(router)
    .use(pinia)
    .use(Cache)
    .directive('permission', permission);
};

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
