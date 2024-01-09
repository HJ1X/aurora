import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/game-service";
import PlatformIconsList from "./PlatformIconsLIst";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="x-large">{game.name}</Heading>
        <PlatformIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
