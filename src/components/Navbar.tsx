import { Box, Flex, IconButton, Text, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useWindowScroll } from "react-use";

import { useConfig } from "~/util/ConfigProvider";

export function Navbar() {
  const { hero } = useConfig();

  const { colorMode, toggleColorMode } = useColorMode();
  const { y: scroll } = useWindowScroll();

  return (
    <Flex
      as={"nav"}
      align={"center"}
      justify={"center"}
      position={"fixed"}
      top={0}
      left={0}
      zIndex={9}
      w={"full"}
      color={
        scroll === 0
          ? hero.style[colorMode]?.color || hero.style.light.color
          : colorMode === "light"
          ? "black"
          : "white"
      }
      bg={scroll === 0 ? "transparent" : colorMode === "light" ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)"}
      backdropFilter={"blur(5px)"}
      boxShadow={scroll === 0 ? "none" : "md"}
      transition={"color .2s ease, background .2s ease, backdrop-filter .2s ease, box-shadow .2s ease"}
    >
      <Flex
        align={"center"}
        justify={"space-between"}
        w={"6xl"}
        px={8}
        py={scroll === 0 ? 2 : 3}
        transition={"padding .2s ease"}
      >
        {hero.logo.text && (
          <Text fontWeight={"bold"} fontSize={"lg"}>
            {hero.logo.text}
          </Text>
        )}
        <IconButton
          aria-label={"toggle color mode"}
          bg={"transparent !important"}
          icon={<Box w={5}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Box>}
          onClick={toggleColorMode}
        />
      </Flex>
    </Flex>
  );
}
