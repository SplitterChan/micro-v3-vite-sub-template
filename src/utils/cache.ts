import { App } from 'vue';
import jsCookie from 'js-cookie';

export enum CacheType {
  Session = 'sessionStorage',
  Storage = 'localStorage',
  Cookie = 'cookie'
}

export enum HandlerType {
  Set = 'set',
  Get = 'get',
  Remove = 'remove'
}

export default class Cache {
  uuid: string | undefined = undefined;

  constructor() {
    if (import.meta.env.PROD) {
      const sessionUuid = sessionStorage.getItem('CacheUuid');
      this.uuid = sessionUuid ?? new Date().getTime().toString();
      this.uuid && sessionStorage.setItem('CacheUuid', this.uuid);
    }
  }

  install = (app: App): void => {
    app.config.globalProperties.$cache = this;
  };

  getCacheInstance = (type: CacheType) => {
    switch (type) {
      case CacheType.Session:
        return window.sessionStorage;
      case CacheType.Storage:
        return window.localStorage;
      case CacheType.Cookie:
        return jsCookie;
    }
  };

  getHandlerMethod = (type: CacheType, handler: HandlerType) => {
    switch (type) {
      case CacheType.Session:
        return handler === HandlerType.Get
          ? window.sessionStorage.getItem
          : handler === HandlerType.Set
          ? window.sessionStorage.setItem
          : window.sessionStorage.removeItem;
      case CacheType.Storage:
        return handler === HandlerType.Get
          ? window.localStorage.getItem
          : handler === HandlerType.Set
          ? window.localStorage.setItem
          : window.localStorage.removeItem;
      case CacheType.Cookie:
        return handler === HandlerType.Get
          ? jsCookie.get
          : handler === HandlerType.Set
          ? jsCookie.set
          : jsCookie.remove;
    }
  };

  combineUniqueKey = (key: string) => {
    return this.uuid ? `${key}-${this.uuid}` : key;
  };

  cacheHanlderTarget = (
    handlerType: HandlerType,
    type: CacheType = CacheType.Session
  ) => {
    const instance = this.getCacheInstance(type);
    const handler = this.getHandlerMethod(type, handlerType);
    return {
      instance,
      handler
    };
  };

  cacheHandlerBase = (
    key,
    handlerType: HandlerType,
    type: CacheType = CacheType.Session,
    ...rest: any[]
  ) => {
    const { instance, handler } = this.cacheHanlderTarget(handlerType, type);
    const uniqueKey = this.combineUniqueKey(key);
    return (handler as any).call(instance, uniqueKey, ...rest);
  };

  cachePublicHandlerBase = (
    key,
    handlerType: HandlerType,
    type: CacheType = CacheType.Session,
    ...rest: any[]
  ) => {
    const { instance, handler } = this.cacheHanlderTarget(handlerType, type);
    return (handler as any).call(instance, key, ...rest);
  };

  publicSet = (
    key: string,
    value: any,
    type: CacheType = CacheType.Session,
    expires: number = 7
  ) => {
    return this.cachePublicHandlerBase(key, HandlerType.Set, type, value, {
      expires
    });
  };

  publicGet = (key: string, type: CacheType = CacheType.Session) => {
    return this.cachePublicHandlerBase(key, HandlerType.Get, type);
  };

  publicRemove = (key: string, type: CacheType = CacheType.Session) => {
    return this.cachePublicHandlerBase(key, HandlerType.Remove, type);
  };

  set = (
    key: string,
    value: any,
    type: CacheType = CacheType.Session,
    expires: number = 7
  ) => {
    this.cacheHandlerBase(key, HandlerType.Set, type, value, { expires });
  };

  get = (key: string, type: CacheType = CacheType.Session) => {
    return this.cacheHandlerBase(key, HandlerType.Get, type);
  };

  remove = (key: string, type: CacheType = CacheType.Session) => {
    this.cacheHandlerBase(key, HandlerType.Remove, type);
  };
}
