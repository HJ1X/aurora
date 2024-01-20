import { Genre } from "../types";
import httpService from "./http-service";

const GENRES_ENDPOINT = "/genres";

class GenreService {
  public getGenres = () =>
    httpService.getData<Genre>(GENRES_ENDPOINT).then((res) => res.data);
}

export default new GenreService();
