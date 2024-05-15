import axios, { AxiosResponse } from 'axios';
import { showMessage } from './status'; // 引入状态码文件
import { Message } from '@arco-design/web-vue';
import cache, { CacheType } from './cache';
import { logout } from './common';

export enum AxiosHandlerType {
  POST = 'POST',
  GET = 'GET',
  DELETE = 'DELETE',
  PUT = 'PUT'
}

export type BDResponse = {
  code: string;
  message: string;
  errorMessage?: string;
  data: any;
  responseType: any;
};

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_DOMAIN,
  timeout: 10000,
  headers: {}
});

// http request 拦截器
instance.interceptors.request.use(
  config => {
    // 配置请求头
    const token = cache.publicGet('token', CacheType.Storage);
    if (token) {
      config.headers = {
        ...config.headers,
        ...{
          Authorization: cache.publicGet('token', CacheType.Storage) // 这里自定义配置，这里传的是token
        }
      };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// http response 拦截器
instance.interceptors.response.use(
  response => {
    const { code } = response.data as BDResponse;
    if (code === '200') {
      return response.data;
    } else if (!code) {
      return response;
    } else {
      Message.error(response?.data?.errorMsg || response?.data?.message);
      return Promise.reject(response.data);
    }
  },
  error => {
    const { response } = error;
    if (response) {
      const errMsg = showMessage(response.status); // 传入响应码，匹配响应码对应信息
      Message.error(
        response?.data?.errorMsg || response?.data?.message || errMsg
      );
      if (response.status === 401) {
        logout();
      }
    } else {
      Message.error({
        content: '网络连接异常,请稍后再试!'
      });
    }
    return Promise.reject(error);
  }
);

// 封装 GET POST 请求并导出
export function request(
  url = '',
  type = AxiosHandlerType.POST,
  { params, data }: { params?; data? } = {},
  headers = {}
) {
  const config = {
    method: type,
    url,
    ...(params ? { params } : data ? { data } : {}),
    headers,
    responseType: (headers as any).responseType
  };
  return new Promise((resolve, reject) => {
    instance
      .request(config as any)
      .then((res: AxiosResponse<BDResponse>) => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}
