import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Average rating" },
  { value: "-rating", label: "Popularity" },
];

const SortSelector = () => {
  const selectedSortOrder = useGameQueryStore(
    (state) => state.gameQuery.sortOrder
  );
  const setSelectedSortOrder = useGameQueryStore((state) => state.setSortOrder);

  const currentSortOrder = sortOrders.find(
    (sortOrder) => sortOrder.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => {
              setSelectedSortOrder(sortOrder.value);
            }}
            key={sortOrder.value}
            value={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
