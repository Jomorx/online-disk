import { baseURL, timeout } from "./config";
import nprogress from "nprogress";
class MoRequest {
  private baseURL: string;
  private timeout: number;
  constructor({ baseURL, timeout }: { baseURL: string; timeout: number }) {
    this.baseURL = baseURL;
    this.timeout = timeout;
  }
  get(url: string, config?: RequestInit) {
    return fetch(this.baseURL + url, config).then((res) => res.json());
  }
  post(url: string, config?: RequestInit) {
    return fetch(this.baseURL + url, { method: "post", ...config }).then(
      (res) => res.json()
    );
  }
}
fetch;
export const request = new MoRequest({ baseURL, timeout });
