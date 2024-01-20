import { AxiosRequestConfig } from "axios";
import apiClient from "./api-client";

interface FetchResponse<T> {
  count: number;
  results: Array<T>;
}

class HTTPService {
  public getData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) =>
    apiClient.get<FetchResponse<T>>(endpoint, requestConfig);
}

export default new HTTPService();
