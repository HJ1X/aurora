import { Genre } from "../types";
import APIClient from "./api-client";

const GENRES_ENDPOINT = "/genres";

const apiClient = new APIClient<Genre>(GENRES_ENDPOINT);

class GenreService {
  public getGenres = () => apiClient.getData();
}

export default new GenreService();
