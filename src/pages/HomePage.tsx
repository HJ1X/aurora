import { Grid, Show, GridItem, Stack, ResponsiveValue } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

enum gridAreas {
  sidebar = "sidebar",
  mainarea = "mainarea",
}

const templateAreas: ResponsiveValue<string> = {
  base: `
    "${gridAreas.mainarea}"
  `,
  lg: `
    "${gridAreas.sidebar} ${gridAreas.mainarea}"
`,
};

const gridTemplateColumns = {
  base: "1fr",
  lg: "18em 1fr",
};

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={templateAreas}
        gridTemplateColumns={gridTemplateColumns}
        gap={1}
      >
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
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
