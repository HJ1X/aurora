import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

interface SearchInputProps {
  gameCount?: number;
}

const SearchInput = ({ gameCount }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((state) => state.setSearchText);

  const handleSearch = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (inputRef.current) {
      setSearchText(inputRef.current.value);
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
