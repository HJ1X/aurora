import axios, { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: Array<T>;
  next: string | null;
}

interface APIClientArguments {
  pathParams?: string[];
  requestConfig?: AxiosRequestConfig;
}

const RAWG_API_KEY = "824eede8fe32431595a0b6b76b62855d";
const BASE_URL = "https://api.rawg.io/api";
const PATH_SEPARATOR = "/";

const axiosInstance = axios.create({
  params: {
    key: RAWG_API_KEY,
  },
  baseURL: BASE_URL,
});

const joinPaths = (baseURL: string, pathParams?: string[]) => {
  const joinedPathParams = pathParams ? pathParams.join(PATH_SEPARATOR) : "";
  return baseURL + PATH_SEPARATOR + joinedPathParams;
};

class APIClient<TGetAll, TGet = TGetAll> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = <T = TGetAll>(apiClientArgs?: APIClientArguments) => {
    const endpoint = joinPaths(this.endpoint, apiClientArgs?.pathParams);
    return axiosInstance
      .get<FetchResponse<T>>(endpoint, apiClientArgs?.requestConfig)
      .then((res) => res.data);
  };

  get = <T = TGet>(apiClientArgs?: APIClientArguments) => {
    const endpoint = joinPaths(this.endpoint, apiClientArgs?.pathParams);
    return axiosInstance
      .get<T>(endpoint, apiClientArgs?.requestConfig)
      .then((res) => res.data);
  };
}

export default APIClient;
