import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const NAVBAR_HEIGHT = "3em";

const navbar = () => {
  return (
    <HStack p={3} justifyContent={"space-between"}>
      <HStack className="left-content">
        <Image borderRadius={"0.2em"} src={logo} boxSize={NAVBAR_HEIGHT} />
        <Text>NavBar</Text>
      </HStack>
      <HStack className="right-content">
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default navbar;
