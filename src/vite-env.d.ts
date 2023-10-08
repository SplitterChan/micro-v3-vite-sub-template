// / <reference types="vite/client" />
// / <reference types="vite-plugin-pages/client" />

declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const componentOptions: ComponentOptions;
  export default componentOptions;
}

declare module 'vue/types/vue' {
  interface Vue {
    $cache: any;
  }
}

declare interface Window {
  // 是否存在无界
  __POWERED_BY_WUJIE__?: boolean;
  // 子应用mount函数
  __WUJIE_MOUNT: () => void;
  // 子应用unmount函数
  __WUJIE_UNMOUNT: () => void;
  // 子应用无界实例
  __WUJIE: { mount: () => void };
  $wujie?: any;
}

declare module 'virtual:generated-layouts' {
  export const setupLayouts: any;
}

declare module 'virtual:generated-pages' {}
