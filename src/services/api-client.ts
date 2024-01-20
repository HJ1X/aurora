import axios, { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: Array<T>;
  next: string | null;
}

const RAWG_API_KEY = "824eede8fe32431595a0b6b76b62855d";
const BASE_URL = "https://api.rawg.io/api";

const axiosInstance = axios.create({
  params: {
    key: RAWG_API_KEY,
  },
  baseURL: BASE_URL,
});

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getData = (requestConfig?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, requestConfig)
      .then((res) => res.data);
}

export default APIClient;
