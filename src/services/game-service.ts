import { AxiosRequestConfig } from "axios";
import { Game, GameDetails } from "../types";
import APIClient from "./api-client";

const GAMES_ENDPOINT = "/games";

const apiClient = new APIClient<Game, GameDetails>(GAMES_ENDPOINT);

class GameService {
  public getGames = (requestConfig: AxiosRequestConfig) =>
    apiClient.getAll(requestConfig);

  public getGameDetails = (gameSlug: string) =>
    apiClient.get(gameSlug.toString());
}

export default new GameService();
