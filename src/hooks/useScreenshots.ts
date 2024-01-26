import { useQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";

const QUERY_KEY_SCREENSHOT = ["screenshot"];

const useScreenshots = (gameId: number) => {
  return useQuery({
    queryKey: [...QUERY_KEY_SCREENSHOT, gameId],
    queryFn: () => gameService.getGameScreenshots(gameId),
  });
};

export default useScreenshots;
