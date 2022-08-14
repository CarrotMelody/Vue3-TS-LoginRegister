import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ElLoading } from "element-plus";

// loading
let loading: any;
interface Options {
  lock: boolean;
  text: string;
  background: string;
}

const options: Options = {
  lock: true,
  text: "loading...",
  background: "rgba(0, 0, 0, 0.7)",
};

const startLoading = () => {
  loading = ElLoading.service(options);
};

const endLoading = () => {
  loading = loading.close();
};

// 請求攔截
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  startLoading();

  return config;
});

// 響應攔截
axios.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    endLoading();

    return response;
  },
  (error) => {
    endLoading();
    // 錯誤提示
    return Promise.reject(error);
  }
);

export default axios;
