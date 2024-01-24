import { Grid, GridItem, ResponsiveValue, Show, Stack } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "../../components/GameGrid";
import GameHeading from "../../components/GameHeading";
import GenreList from "../../components/GenreList";
import NavBar from "../../components/NavBar";
import PlatformSelector from "../../components/PlatformSelector";
import SortSelector from "../../components/SortSelector";
import "./App.css";

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
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
          <NavBar gameCount={availableGameCount} />
        </GridItem>
        <Show above="lg">
          <GridItem area={gridAreas.sidebar} pl={6} pr={3} pt={7}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={gridAreas.mainarea} px={6}>
          <GameHeading />
          <Stack direction={{ base: "column", sm: "row" }} spacing={3} mb={7}>
            <PlatformSelector />
            <SortSelector />
          </Stack>
          <GameGrid
            onChangeAvailableGameCount={(count) => setAvailableGameCount(count)}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
