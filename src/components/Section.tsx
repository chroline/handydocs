import React from "react";

import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const { colorMode } = useColorMode();

  return (
    <AccordionItem border={"none"}>
      {({ isExpanded }) => (
        <>
          <AccordionButton
            px={8}
            bg={isExpanded ? "transparent" : "blackAlpha.50"}
            borderBottom={"1px solid"}
            borderColor={
              colorMode === "light" ? `blackAlpha.${isExpanded ? 100 : 200}` : `whiteAlpha.${isExpanded ? 50 : 200}`
            }
            _focus={{ boxShadow: "none" }}
            _hover={{ bg: "blackAlpha.100" }}
          >
            <Flex justify={"center"} w={"full"} py={8}>
              <HStack w={{ base: "lg", sm: "xl", md: "xl", lg: "3xl", xl: "4xl" }}>
                <Heading size={"md"} fontWeight={"medium"} textAlign={"left"} w={"full"}>
                  {title}
                </Heading>
                <Box w={6} transform={`rotate(${isExpanded ? 180 : 0}deg)`} transition={"transform .2s ease"}>
                  <ChevronDownIcon />
                </Box>
              </HStack>
            </Flex>
          </AccordionButton>
          <AccordionPanel
            px={8}
            py={10}
            borderBottom={"1px solid"}
            borderColor={colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.300"}
          >
            <Flex justify={"center"} w={"full"}>
              <Box maxW={{ base: "lg", sm: "xl", md: "xl", lg: "3xl", xl: "4xl" }} w={"full"}>
                {children}
              </Box>
            </Flex>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}
