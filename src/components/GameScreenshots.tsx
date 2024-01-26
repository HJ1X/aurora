import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface GameScreenshotsProps {
  gameId?: number;
}

const GameScreenshots = ({ gameId }: GameScreenshotsProps) => {
  if (!gameId) return null;

  const { data: screenshots, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <>
      <SimpleGrid spacing={2} columns={{ base: 1, md: 2 }}>
        {screenshots?.results.map((screenshot) => (
          <Image key={screenshot.id} src={screenshot.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
