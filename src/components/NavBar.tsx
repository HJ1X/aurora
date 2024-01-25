import { Box, HStack, Hide, Image, Show, useColorMode } from "@chakra-ui/react";
import LogoForDarkMode from "../assets/aurora-dark.svg";
import LogoForLightMode from "../assets/aurora-light.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";

export const NAVBAR_HEIGHT = "5em";

const navbar = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <Box p={3}>
      <HStack justify="space-between">
        <Image
          borderRadius={"0.2em"}
          src={colorMode === "dark" ? LogoForDarkMode : LogoForLightMode}
          boxSize={NAVBAR_HEIGHT}
          px={3}
          onClick={() => navigate("/")}
          _hover={{
            cursor: "pointer",
          }}
        />
        <Show above="md">
          <Box style={{ width: "100%" }} mr={2}>
            <SearchInput />
          </Box>
        </Show>
        <ColorModeSwitch />
      </HStack>
      <Hide above="md">
        <Box style={{ width: "100%" }}>
          <SearchInput />
        </Box>
      </Hide>
    </Box>
  );
};

export default navbar;
