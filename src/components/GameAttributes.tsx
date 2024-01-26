import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import { GameDetails } from "../types";

interface GameAttributesProps {
  gameDetails?: GameDetails;
}

const GameAttributes = ({ gameDetails }: GameAttributesProps) => {
  if (!gameDetails) return null;

  return (
    <SimpleGrid columns={2} spacing={5} as="dl">
      <DefinitionItem term="Genres">
        {gameDetails.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {gameDetails.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Platforms">
        {gameDetails.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={gameDetails.metacritic} />
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
