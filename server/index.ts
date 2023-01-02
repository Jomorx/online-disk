import axios from "axios";
import nProgress from "nprogress";
import { baseURL, timeout } from "./config";

const request = axios.create({
  baseURL,
  timeout,
});
request.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
    "Content-Type": "multipart/form-data",
  };
  nProgress.start();
  return config;
});
request.interceptors.response.use(res => {
  nProgress.done();
  return res.data;
});

export default request;
