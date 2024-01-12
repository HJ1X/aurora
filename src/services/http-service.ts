import { AxiosRequestConfig, AxiosResponse } from "axios";
import apiClient from "./api-client";

const GAMES_ENDPOINT = "/games";
const GENRES_ENDPOINT = "/genres";
const PLATFORMS_ENDPOINT = "/platforms/lists/parents";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: Array<{ platform: Platform }>;
  metacritic: number;
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchResponse<T> {
  count: number;
  results: Array<T>;
}

export interface DataResponse<T> {
  request: Promise<AxiosResponse<FetchResponse<T>>>;
  cancel: () => void;
}

class HTTPService {
  private getData<T>(endpoint: string, requestConfig?: AxiosRequestConfig) {
    const controller = new AbortController();

    return {
      request: apiClient.get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      }),
      cancel: () => {
        controller.abort();
      },
    };
  }

  public getGamesList(requestConfig?: AxiosRequestConfig) {
    return this.getData<Game>(GAMES_ENDPOINT, requestConfig);
  }

  public getGenresList(requestConfig?: AxiosRequestConfig) {
    return this.getData<Genre>(GENRES_ENDPOINT, requestConfig);
  }

  public getPlatformsList(requestConfig?: AxiosRequestConfig) {
    return this.getData<Platform>(PLATFORMS_ENDPOINT, requestConfig);
  }
}

export default new HTTPService();
