import { Heading } from "@chakra-ui/react";
import useGenreId from "../hooks/useGenreId";
import usePlatformId from "../hooks/usePlatformId";
import { GameQuery } from "../types";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const selectedPlatform = usePlatformId(gameQuery.platformId);
  const selectedGenre = useGenreId(gameQuery.genreId);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <Heading fontSize="6xl" as="h1" mb={6}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
