import { useQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";

const QUERY_KEY_TRAILERS = "trailers";

const useTrailers = (gameId: number) => {
  return useQuery({
    queryKey: [...QUERY_KEY_TRAILERS, gameId],
    queryFn: () => gameService.getGameTrailers(gameId),
  });
};

export default useTrailers;
