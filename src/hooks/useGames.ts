import { GameQuery } from "../App";
import httpService, { Game } from "../services/http-service";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) => {
  const { data, count, error, isLoading } = useData<Game>({
    dataFetcher: httpService.getGamesList.bind(httpService),
    requestConfig: {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    dependencies: [gameQuery],
  });
  return { games: data, count, error, isLoading };
};

export default useGames;
