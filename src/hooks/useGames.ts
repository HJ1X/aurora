import { useQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";
import { GameQuery } from "../types";

const QUERY_KEY_GAME = ["games"];

const useGames = (gameQuery: GameQuery) => {
  return useQuery({
    queryKey: [...QUERY_KEY_GAME, gameQuery],
    queryFn: () =>
      gameService.getGames({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });
};

export default useGames;
