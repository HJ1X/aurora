import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const skeletons = [1, 2, 3, 4, 5, 6];

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3}>
        {!isLoading
          ? games.map((game) => <GameCard key={game.id} game={game} />)
          : skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
