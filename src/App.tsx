import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import React from "react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"} bg={"#"}>
        <Navbar />
      </GridItem>
      <Show when={"lg"}>
        <GridItem
          area={"aside"}
          bg={"#"}
          display={{ base: "none", lg: "block" }}
        >
          Left Side Bar
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"#"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
