import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
  hoverEffect?: boolean;
}

const GameCardContainer = ({
  children,
  hoverEffect = true,
}: GameCardContainerProps) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={
        hoverEffect
          ? {
              transform: "scale(1.03)",
              transition: "transform .15s ease-in",
              cursor: "pointer",
            }
          : {}
      }
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
