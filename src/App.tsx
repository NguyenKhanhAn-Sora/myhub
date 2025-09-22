import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import React from "react";

const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"} bg={"coral"}>
        Navigation Bar
      </GridItem>
      <Show when={"lg"}>
        <GridItem
          area={"aside"}
          bg={"gold"}
          display={{ base: "none", lg: "block" }}
        >
          Left Side Bar
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"cyan"}>
        Main Items
      </GridItem>
    </Grid>
  );
};

export default App;
