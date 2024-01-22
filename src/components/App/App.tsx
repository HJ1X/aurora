import "./App.css";
import {
  Grid,
  GridItem,
  HStack,
  ResponsiveValue,
  Show,
} from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import GameGrid from "../../components/GameGrid";
import GenreList from "../../components/GenreList";
import { useState } from "react";
import PlatformSelector from "../../components/PlatformSelector";
import SortSelector from "../../components/SortSelector";
import GameHeading from "../../components/GameHeading";
import { GameQuery } from "../../types";

enum gridAreas {
  navbar = "navbar",
  sidebar = "sidebar",
  mainarea = "mainarea",
}

const templateAreas: ResponsiveValue<string> = {
  base: `
    "${gridAreas.navbar}"
    "${gridAreas.mainarea}"
  `,
  lg: `
    "${gridAreas.navbar} ${gridAreas.navbar}" 
    "${gridAreas.sidebar} ${gridAreas.mainarea}"
`,
};

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [availableGameCount, setAvailableGameCount] = useState<number>();

  return (
    <>
      <Grid
        templateAreas={templateAreas}
        gridTemplateColumns={{
          base: "1fr",
          lg: "18em 1fr",
        }}
        gap={1}
      >
        <GridItem area={gridAreas.navbar}>
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
            gameCount={availableGameCount}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={gridAreas.sidebar} pl={6} pr={3} pt={7}>
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelectGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
            />
          </GridItem>
        </Show>
        <GridItem area={gridAreas.mainarea} px={6}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={3} mb={7}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            />
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid
            gameQuery={gameQuery}
            onChangeAvailableGameCount={(count) => setAvailableGameCount(count)}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
