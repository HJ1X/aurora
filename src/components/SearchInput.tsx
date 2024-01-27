import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useAvailableGamesCountStore, useGameQueryStore } from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [searchTextValue, setSearchTextValue] = useState("");
  const setSearchText = useGameQueryStore((state) => state.setSearchText);
  const gameCount = useAvailableGamesCountStore((state) => state.count);
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (searchTextValue) {
      setSearchText(searchTextValue);
      navigate("/");
    }
  };

  const handleReset = () => {
    if (searchTextValue) {
      setSearchText("");
      setSearchTextValue("");
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder={`Search ${
            gameCount ? `${gameCount.toLocaleString()} ` : ""
          }games`}
          variant="filled"
          value={searchTextValue}
          onChange={(e) => setSearchTextValue(e.target.value)}
        />
        <InputRightElement width={0} mr={1}>
          {searchTextValue && (
            <Button onClick={handleReset} borderRadius={20} size="sm" mr={1}>
              Reset
            </Button>
          )}
          <Button onClick={handleSearch} borderRadius={20} size="sm">
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
