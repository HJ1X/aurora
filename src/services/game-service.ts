import { AxiosRequestConfig } from "axios";
import { Game } from "../types";
import APIClient from "./api-client";

const GAMES_ENDPOINT = "/games";

const apiClient = new APIClient<Game>(GAMES_ENDPOINT);

class GameService {
  public getGames = (requestConfig: AxiosRequestConfig) =>
    apiClient.getData(requestConfig);
}

export default new GameService();
