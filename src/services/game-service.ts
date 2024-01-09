import apiClient from "./api-client";

const GAMES_ENDPOINT = "/games";

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
}

interface FetchGamesResponse {
  count: number;
  results: Array<Game>;
}

class GameService {
  public getGamesList() {
    const controller = new AbortController();

    return {
      request: apiClient.get<FetchGamesResponse>(GAMES_ENDPOINT, {
        signal: controller.signal,
      }),
      cancel: () => {
        controller.abort();
      },
    };
  }
}

export default new GameService();
