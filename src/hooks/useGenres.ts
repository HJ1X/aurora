import { useQuery } from "@tanstack/react-query";
import genreService from "../services/genre-service";
import genres from "../data/genres";

const QUERY_KEY_GENRE = ["genre"];

const useGenres = () => {
  return useQuery({
    queryKey: QUERY_KEY_GENRE,
    queryFn: () => genreService.getGenres(),
    staleTime: 24 * 60 * 60 * 1_000, // 24h
    initialData: genres,
  });
};

export default useGenres;
