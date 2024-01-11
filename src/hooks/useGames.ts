import httpService, { Game } from "../services/http-service";
import useData from "./useData";

const useGames = () => {
  const { data, error, isLoading } = useData<Game>({
    dataFetcher: httpService.getGamesList.bind(httpService),
  });
  return { games: data, error, isLoading };
};

export default useGames;
