import {
  HStack,
  Image,
  List,
  ListItem,
  theme,
  Text,
  Skeleton,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { useGameQueryStore } from "../store";

const skeletons = [1, 2, 3, 4, 5, 6];

const GenreList = () => {
  const { colorMode } = useColorMode();
  const { data: genres, error, isLoading } = useGenres();

  const selectedGenreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((state) => state.setGenreId);

  if (error) return null;

  return (
    <>
      <Heading fontSize="3xl" mb={2}>
        Genres
      </Heading>
      <List spacing={2}>
        {!isLoading
          ? genres?.results.map((genre) => (
              <ListItem
                _hover={{
                  cursor: "pointer",
                  backgroundColor:
                    colorMode === "dark"
                      ? theme.colors.gray[700]
                      : theme.colors.gray[100],
                }}
                backgroundColor={
                  genre.id === selectedGenreId
                    ? colorMode === "dark"
                      ? theme.colors.gray[600]
                      : theme.colors.gray[200]
                    : ""
                }
                borderRadius={"0.6em"}
                key={genre.id}
                onClick={() => setSelectedGenreId(genre.id)}
              >
                <HStack p={1}>
                  <Image
                    boxSize={"2.5em"}
                    borderRadius={"0.6em"}
                    src={getCroppedImageUrl(genre.image_background)}
                    objectFit="cover"
                  />
                  <Text>{genre.name}</Text>
                </HStack>
              </ListItem>
            ))
          : skeletons.map((skeleton) => (
              <ListItem key={skeleton}>
                <Skeleton height={"2.5em"} borderRadius={"0.6em"} />
              </ListItem>
            ))}
      </List>
    </>
  );
};

export default GenreList;
