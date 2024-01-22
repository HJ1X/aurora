import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import { GameQuery } from "../types";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const skeletons = [1, 2, 3, 4, 5, 6];

interface GameGridProps {
  gameQuery: GameQuery;
  onChangeAvailableGameCount: (count?: number) => void;
}

const GameGrid = ({ gameQuery, onChangeAvailableGameCount }: GameGridProps) => {
  const {
    error,
    isLoading,
    data: games,
    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery);

  useEffect(() => {
    if (games) onChangeAvailableGameCount(games.pages[0].count);
  });

  if (error)
    return (
      <Text fontSize="5xl">Some error occured. Please try again later</Text>
    );

  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

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
};

export default GameGrid;
