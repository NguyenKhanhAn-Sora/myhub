import React from "react";
import type { Platform } from "./hooks/useGame";
import { HStack, Icon, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaLaptopCode, FaPlaystation, FaXbox } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaLaptopCode,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
  };

  return (
    <HStack>
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        return Icon && <Icon key={platform.id} />;
      })}
    </HStack>
  );
};

export default PlatformIconList;
