import { AxiosResponse } from "axios";
import apiClient from "./api-client";

const GAMES_ENDPOINT = "/games";
const GENRES_ENDPOINT = "/genres";

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
  private getData<T>(endpoint: string) {
    const controller = new AbortController();

    return {
      request: apiClient.get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
      }),
      cancel: () => {
        controller.abort();
      },
    };
  }

  public getGamesList() {
    return this.getData<Game>(GAMES_ENDPOINT);
  }

  public getGenresList() {
    return this.getData<Genre>(GENRES_ENDPOINT);
  }
}

export default new HTTPService();
