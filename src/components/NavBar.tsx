import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";

const NAVBAR_HEIGHT = "3em";

const navbar = () => {
  return (
    <HStack height={NAVBAR_HEIGHT}>
      <Image borderRadius={"0.2em"} src={logo} boxSize={NAVBAR_HEIGHT} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default navbar;
