import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/game-service";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="x-large">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
