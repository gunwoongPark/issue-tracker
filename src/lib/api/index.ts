import axios, { AxiosRequestConfig } from "axios";
import { config as basedConfig } from "../config";

export const axiosInstance = axios.create({
  baseURL: basedConfig.apiBaseUri,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${basedConfig.apiToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const apiBase = {
  get: async (url: string, config?: AxiosRequestConfig<any>) => {
    const res = await axiosInstance.get(url, config);
    return res.data;
  },
};

export default apiBase;
