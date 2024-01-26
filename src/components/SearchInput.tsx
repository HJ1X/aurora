import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useAvailableGamesCountStore, useGameQueryStore } from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((state) => state.setSearchText);
  const gameCount = useAvailableGamesCountStore((state) => state.count);
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (inputRef.current) {
      setSearchText(inputRef.current.value);
      navigate("/");
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
          ref={inputRef}
        />
        <InputRightElement width={20}>
          <Button onClick={handleSearch} borderRadius={20} size="sm">
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
