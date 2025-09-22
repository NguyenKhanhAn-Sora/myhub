import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import React from "react";
import Navbar from "./components/Navbar";

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
        Main Items
      </GridItem>
    </Grid>
  );
};

export default App;
