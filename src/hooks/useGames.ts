import { useInfiniteQuery } from "@tanstack/react-query";
import gameService from "../services/game-service";
import { GameQuery } from "../types";

const QUERY_KEY_GAME = ["games"];

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery({
    queryKey: [...QUERY_KEY_GAME, gameQuery],
    queryFn: ({ pageParam }) =>
      gameService.getGames({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1_000, // 24h
  });
};

export default useGames;
