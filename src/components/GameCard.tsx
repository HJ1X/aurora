import { Box, Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsLIst";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Game } from "../types";
import { useEffect, useRef, useState } from "react";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardImageHeight, setCardImageHeight] = useState(0);

  useEffect(() => {
    if (cardRef?.current)
      setCardImageHeight((cardRef.current.clientWidth * 2) / 3);
  });

  return (
    <Card ref={cardRef}>
      <Image
        fallback={<Box height={cardImageHeight} />}
        src={getCroppedImageUrl(game.background_image)}
      />
      <CardBody>
        <HStack justifyContent="space-between" mb={3}>
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="x-large">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
