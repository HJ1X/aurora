import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatformId from "../hooks/usePlatformId";
import usePlatforms from "../hooks/usePlatforms";
import { useGameQueryStore } from "../store";

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();

  const setSelectedPlatformId = useGameQueryStore(
    (state) => state.setPlatformId
  );

  const selectedPlatformId = useGameQueryStore(
    (state) => state.gameQuery.platformId
  );
  const selectedPlatform = usePlatformId(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            onClick={() => {
              setSelectedPlatformId(platform.id);
            }}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
