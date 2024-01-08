import apiClient from "./api-client";

const GAMES_ENDPOINT = "/games";

export interface Game {
  id: number;
  name: string;
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
