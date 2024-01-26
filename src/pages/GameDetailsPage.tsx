import { AbsoluteCenter, Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { NAVBAR_HEIGHT } from "../components/NavBar";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailsPage = () => {
  const { gameSlug } = useParams();
  const { data: gameDetails, isLoading, error } = useGameDetails(gameSlug!); // using nullish coaelicing because if gameSlug is not present in path param then, application will hit error page

  const viewportHeight = `calc(90vh - ${NAVBAR_HEIGHT})`;
  if (isLoading) {
    return (
      <Box p={5} pos={"relative"} height={viewportHeight}>
        <AbsoluteCenter>
          <Spinner size="xl" />
        </AbsoluteCenter>
      </Box>
    );
  }

  if (error) throw error;

  return (
    <Box p={5}>
      <Heading>{gameDetails?.name}</Heading>
      <ExpandableText mb={5}>{gameDetails?.description_raw}</ExpandableText>
      <GameAttributes gameDetails={gameDetails} />
      <GameTrailer gameId={gameDetails?.id} />
      <GameScreenshots gameId={gameDetails?.id} />
    </Box>
  );
};

export default GameDetailsPage;
