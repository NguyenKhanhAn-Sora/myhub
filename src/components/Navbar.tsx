import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/bonglua.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justify={"space-between"} width={"100%"} p={4}>
      <HStack>
        <Image src={logo} alt="logo" boxSize={"60px"} objectFit={"contain"} />
        <Text>Navigation Bar</Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
