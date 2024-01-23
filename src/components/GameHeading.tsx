import { Flex, Heading, theme } from "@chakra-ui/react";
import useGenreId from "../hooks/useGenreId";
import usePlatformId from "../hooks/usePlatformId";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const selectedGenre = useGenreId(genreId);

  const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
  const selectedPlatform = usePlatformId(platformId);

  const searchText = useGameQueryStore((state) => state.gameQuery.searchText);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      alignItems="baseline"
      mb={6}
    >
      <Heading fontSize="6xl" as="h1" mr={4}>
        {heading}
      </Heading>
      {searchText && (
        <Heading fontSize="2xl" color={theme.colors.gray[400]} as="i">
          Showing results for "{searchText}"
        </Heading>
      )}
    </Flex>
  );
};

export default GameHeading;
