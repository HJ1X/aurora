import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import { useAvailableGamesCountStore } from "../store";

const errorString = "Some error occured. Please try again later";
const skeletons = [1, 2, 3, 4, 5, 6];

const GameGrid = () => {
  const {
    error,
    isLoading,
    data: games,
    hasNextPage,
    fetchNextPage,
  } = useGames();

  const setAvailableGamesCount = useAvailableGamesCountStore(
    (state) => state.setCount
  );

  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  useEffect(() => {
    if (games) setAvailableGamesCount(games.pages[0].count);
  });

  // #region - JSX
  if (error) <Text fontSize="5xl">{errorString}</Text>;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={hasNextPage}
      next={fetchNextPage}
      loader={<Spinner mb={5} />}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} mb={5}>
        {!isLoading
          ? games?.pages.map((page, pageIndex) => (
              <React.Fragment key={pageIndex}>
                {page?.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}
              </React.Fragment>
            ))
          : skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
  // #endregion
};

export default GameGrid;
