import "./App.css";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  ResponsiveValue,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre, Platform } from "./services/http-service";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

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
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={gridAreas.sidebar} px={3}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area={gridAreas.mainarea} px={3}>
          <HStack spacing={3} mb={7}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
