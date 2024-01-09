import { Badge } from "@chakra-ui/react";

interface CriticScore {
  score: number;
}

const CriticScore = ({ score }: CriticScore) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge colorScheme={color} borderRadius={4} mr={1}>
      {score}
    </Badge>
  );
};

export default CriticScore;
