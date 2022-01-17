import React from "react";

import { Box, Flex, Heading, HStack, useColorMode, VStack } from "@chakra-ui/react";

import { InfoBox } from "~/components/InfoBox";
import { useConfig } from "~/util/ConfigProvider";

export function Hero() {
  const { hero } = useConfig();

  const { colorMode } = useColorMode();

  return (
    <Box
      id={"hero"}
      boxShadow={"lg"}
      bg={hero.style[colorMode]?.bg || hero.style.light.bg}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      color={hero.style[colorMode]?.color || hero.style.light.color}
      transition={"background .2s ease, color .2s ease"}
    >
      <Flex justify={"center"} w={"full"}>
        <VStack
          maxW={"4xl"}
          align={"start"}
          spacing={4}
          pt={{ base: 32, sm: 36, md: 40, lg: 40 }}
          pb={{ base: 12, sm: 20, md: 20, lg: 24 }}
          px={8}
        >
          {hero.logo.text && (
            <Heading as={"h1"} size={"3xl"}>
              {hero.logo.text}
            </Heading>
          )}
          {hero.subheading && (
            <Heading as={"p"} size={"lg"} fontWeight={"400"} opacity={0.7}>
              {hero.subheading}
            </Heading>
          )}
        </VStack>
      </Flex>
      <Flex align={"center"} justify={"center"}>
        <HStack
          w={"full"}
          align={"stretch"}
          wrap={"wrap"}
          divider={<Box as={"hr"} height={"unset"} bg={"currentColor"} opacity={0.2} m={"0 !important"} />}
        >
          {hero.info_boxes.map(InfoBox)}
        </HStack>
      </Flex>
    </Box>
  );
}
