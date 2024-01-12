import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading fontSize="6xl" as="h1" mb={6}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
