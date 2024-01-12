import { Box, HStack, Image, useColorMode } from "@chakra-ui/react";
import LogoForDarkMode from "../assets/aurora-dark.svg";
import LogoForLightMode from "../assets/aurora-light.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
  gameCount?: number;
  onSearch: (searchText: string) => void;
}

const NAVBAR_HEIGHT = "5em";

const navbar = ({ gameCount, onSearch }: NavBarProps) => {
  const { colorMode } = useColorMode();

  return (
    <HStack p={3}>
      <Image
        borderRadius={"0.2em"}
        src={colorMode === "dark" ? LogoForDarkMode : LogoForLightMode}
        boxSize={NAVBAR_HEIGHT}
        px={3}
      />
      <Box style={{ width: "100%" }} mr={2}>
        <SearchInput onSearch={onSearch} gameCount={gameCount} />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default navbar;
