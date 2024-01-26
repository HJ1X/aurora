import { useState } from "react";
import { Button, Text, TextProps } from "@chakra-ui/react";

interface ExpandableTextProps extends TextProps {
  children?: string;
  limit?: number;
}

const ExpandableText = ({
  children,
  limit = 300,
  ...textProps
}: ExpandableTextProps) => {
  if (!children) return null;

  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= limit) {
    return <Text {...textProps}>{children}</Text>;
  }

  const summary = isExpanded ? children : children.substring(0, limit) + "...";

  return (
    <>
      <Text {...textProps}>
        {summary}
        <Button
          ml={2}
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
