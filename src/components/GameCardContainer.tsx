import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      {children}
    </Card>
  );
};

export default GameCardContainer;
