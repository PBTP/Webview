import { useAuthStore } from '@/stores/useAuthStore';
import qs from 'qs';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => {
    return qs.stringify(params);
  },
});

const authStore = useAuthStore.getState();

axiosInstance.interceptors.request.use(
  (config) => {
    const token = authStore.accessToken;

    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const handleResponse = (response: AxiosResponse) => {
  // if (response.status === 400) {
  //   return null;
  // }
  return response;
};

export const requestAPI = () => {
  const request = (method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH') => {
    return (
      url: string,
      bodyJson?: Record<string, unknown>,
      contentType?: string
    ) => {
      return axiosInstance({
        url,
        method: method,
        params: method === 'GET' && bodyJson,
        data: bodyJson,
        headers: {
          'Content-Type': contentType ?? 'application/json',
        },
        validateStatus: (status: number) => {
          return status < 400;
        },
      })
        .then(handleResponse)
        .catch((err) => {
          console.log(err.response);
          return Promise.reject(err);
          // 무한 루프 방지 eject
          //   axiosInstance.interceptors.response.eject(0);
          //   return axiosInstance
        });
    };
  };

  return {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE'),
    patch: request('PATCH'),
  };
};
