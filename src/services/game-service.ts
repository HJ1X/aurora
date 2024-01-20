import { AxiosRequestConfig } from "axios";
import httpService from "./http-service";
import { Game } from "../types";

const GAMES_ENDPOINT = "/games";

class GameService {
  public getGames = (requestConfig: AxiosRequestConfig) =>
    httpService
      .getData<Game>(GAMES_ENDPOINT, requestConfig)
      .then((res) => res.data);
}

export default new GameService();
