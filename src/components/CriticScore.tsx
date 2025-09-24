import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 90 ? "green" : score > 80 ? "yellow" : "purple";
  return <Badge 
  variant={"surface"}
  size={"md"}
  px={3}
  borderRadius={"10px"}
  colorPalette={color}
  >{score}</Badge>;
};

export default CriticScore;
