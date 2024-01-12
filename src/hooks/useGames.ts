import httpService, { Game, Genre, Platform } from "../services/http-service";
import useData from "./useData";

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  const { data, error, isLoading } = useData<Game>({
    dataFetcher: httpService.getGamesList.bind(httpService),
    requestConfig: {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    dependencies: [selectedGenre?.id, selectedPlatform?.id],
  });
  return { games: data, error, isLoading };
};

export default useGames;
