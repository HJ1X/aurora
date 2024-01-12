import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { useEffect } from "react";

const skeletons = [1, 2, 3, 4, 5, 6];

interface GameGridProps {
  gameQuery: GameQuery;
  onChangeAvailableGameCount: (count?: number) => void;
}

const GameGrid = ({ gameQuery, onChangeAvailableGameCount }: GameGridProps) => {
  const { error, count, isLoading, games } = useGames(gameQuery);

  useEffect(() => {
    onChangeAvailableGameCount(count);
  });

  if (error)
    return (
      <Text fontSize="5xl">Some error occured. Please try again later</Text>
    );

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
      {!isLoading
        ? games.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))
        : skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
    </SimpleGrid>
  );
};

export default GameGrid;
