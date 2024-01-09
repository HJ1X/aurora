import { Platform } from "../services/game-service";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Stack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface PlatformIconsListProps {
  type?: "horizontal" | "vertical";
  platforms: Array<Platform>;
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  nintendo: SiNintendo,
  ios: MdPhoneIphone,
  web: BsGlobe,
};

const PlatformIconsList = ({
  type = "horizontal",
  platforms,
}: PlatformIconsListProps) => {
  return type === "horizontal" ? (
    <HStack mt={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  ) : (
    <Stack mt={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </Stack>
  );
};

export default PlatformIconsList;
