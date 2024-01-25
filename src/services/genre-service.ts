import { Genre } from "../types";
import APIClient from "./api-client";

const GENRES_ENDPOINT = "/genres";

const apiClient = new APIClient<Genre>(GENRES_ENDPOINT);

class GenreService {
  public getGenres = () => apiClient.getAll();
}

export default new GenreService();
