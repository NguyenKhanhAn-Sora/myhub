import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/bonglua.png";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} alt="logo" boxSize={"60px"} objectFit={"contain"} />
      <Text>Navigation Bar</Text>
    </HStack>
  );
};

export default Navbar;
