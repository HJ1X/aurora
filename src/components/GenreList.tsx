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
import { Genre } from "../services/http-service";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const skeletons = [1, 2, 3, 4, 5, 6];

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { colorMode } = useColorMode();
  const { genres, error, isLoading } = useGenres();

  if (error) return null;

  return (
    <>
      <Heading fontSize="3xl" mb={2}>
        Genres
      </Heading>
      <List spacing={2}>
        {!isLoading
          ? genres.map((genre) => (
              <ListItem
                _hover={{
                  backgroundColor:
                    colorMode === "dark"
                      ? theme.colors.gray[700]
                      : theme.colors.gray[100],
                }}
                backgroundColor={
                  genre.id === selectedGenre?.id
                    ? colorMode === "dark"
                      ? theme.colors.gray[600]
                      : theme.colors.gray[200]
                    : ""
                }
                borderRadius={"0.6em"}
                key={genre.id}
                onClick={() => onSelectGenre(genre)}
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