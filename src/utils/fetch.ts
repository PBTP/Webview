import axios, { AxiosInstance, AxiosResponse } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

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
