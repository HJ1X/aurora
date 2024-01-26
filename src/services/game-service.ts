import { AxiosRequestConfig } from "axios";
import { Game, GameDetails, Trailer } from "../types";
import APIClient from "./api-client";

const GAMES_ENDPOINT = "/games";
const MOVIES_PATH_PARAM = "movies";

const apiClient = new APIClient<Game, GameDetails>(GAMES_ENDPOINT);

class GameService {
  public getGames = (requestConfig: AxiosRequestConfig) =>
    apiClient.getAll({ requestConfig });

  public getGameDetails = (gameSlug: string) =>
    apiClient.get({ pathParams: [gameSlug] });

  public getGameTrailers = (gameId: number) =>
    apiClient.getAll<Trailer>({
      pathParams: [gameId.toString(), MOVIES_PATH_PARAM],
    });
}

export default new GameService();
