import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DefinitionItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ children, term }: DefinitionItemProps) => {
  if (!children || children.toString() === "") return null;

  console.log(children.toString());

  return (
    <Box>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
