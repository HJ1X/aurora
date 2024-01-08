import "./App.css";
import { Grid, GridItem, ResponsiveValue, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
  return (
    <>
      <Grid templateAreas={templateAreas} gap={1}>
        <GridItem area={gridAreas.navbar}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={gridAreas.sidebar}>sidebar</GridItem>
        </Show>
        <GridItem area={gridAreas.mainarea}>mainarea</GridItem>
      </Grid>
    </>
  );
}

export default App;
