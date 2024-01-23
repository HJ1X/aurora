import {
  Box,
  HStack,
  Image,
  useBreakpoint,
  useColorMode,
} from "@chakra-ui/react";
import LogoForDarkMode from "../assets/aurora-dark.svg";
import LogoForLightMode from "../assets/aurora-light.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
  gameCount?: number;
}

const NAVBAR_HEIGHT = "5em";

const navbar = ({ gameCount }: NavBarProps) => {
  const { colorMode } = useColorMode();
  const screenSize = useBreakpoint();

  const isSmallDevice = screenSize === "sm" || screenSize === "base";

  return (
    <Box p={3}>
      <HStack justify="space-between">
        <Image
          borderRadius={"0.2em"}
          src={colorMode === "dark" ? LogoForDarkMode : LogoForLightMode}
          boxSize={NAVBAR_HEIGHT}
          px={3}
        />
        {!isSmallDevice && (
          <Box style={{ width: "100%" }} mr={2}>
            <SearchInput gameCount={gameCount} />
          </Box>
        )}
        <ColorModeSwitch />
      </HStack>
      {isSmallDevice && (
        <Box style={{ width: "100%" }}>
          <SearchInput gameCount={gameCount} />
        </Box>
      )}
    </Box>
  );
};

export default navbar;
