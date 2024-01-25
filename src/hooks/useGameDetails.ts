import { useQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";

const QUERY_KEY_GAME_DETAILS = "game-details";

const useGameDetails = (gameSlug: string) => {
  return useQuery({
    queryKey: [...QUERY_KEY_GAME_DETAILS, gameSlug],
    queryFn: () => gameService.getGameDetails(gameSlug),
  });
};

export default useGameDetails;
