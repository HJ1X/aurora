import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { useEffect } from "react";
import { GameQuery } from "../types";
import React from "react";

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
    isFetchingNextPage,
  } = useGames(gameQuery);

  useEffect(() => {
    if (games) onChangeAvailableGameCount(games.pages[0].count);
  });

  if (error)
    return (
      <Text fontSize="5xl">Some error occured. Please try again later</Text>
    );

  return (
    <>
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
      {hasNextPage && (
        <Button
          mb={5}
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
};

export default GameGrid;
