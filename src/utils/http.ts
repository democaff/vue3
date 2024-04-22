import axios, { type AxiosRequestConfig } from "axios";
import { get } from "node_modules/axios/index.cjs";

axios.defaults.baseURL = "http://localhost:3000";

axios.interceptors.request.use((config: AxiosRequestConfig | any) => {
  return config;
});

axios.interceptors.response.use((res) => {
  return res;
}),
  (err) => {
    return Promise.reject(err);
  };

interface IHttp {
  get(url: string, params?: object): Promise<any>;
  post(url: string, params?: object): Promise<any>;
  put(url: string, params?: object): Promise<any>;
  delete(url: string, params?: object): Promise<any>;
}
const http: IHttp = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default http;
