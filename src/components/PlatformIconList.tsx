import React from "react";
import type { Platform } from "./hooks/useGame";
import { HStack, Icon, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import {
  FaAndroid,
  FaApple,
  FaLaptopCode,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { MdPhone } from "react-icons/md";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhone,
    web: BsGlobe,
    android: FaAndroid,
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
