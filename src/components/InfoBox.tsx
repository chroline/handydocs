import React from "react";

import { Box, Flex, LinkBox, LinkOverlay, Text, VStack } from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { z } from "zod";

import { InfoBoxSchema } from "~/util/schema";

export function InfoBox(infoBox: z.infer<typeof InfoBoxSchema>) {
  return (
    <Box flex={"1"} mt={"-1px"}>
      <Box as={"hr"} w={"full"} bg={"currentColor"} opacity={0.2} m={"0 !important"} />
      <Flex py={{ base: 10, md: 12 }} align={"center"} justify={"center"}>
        <LinkBox
          as={VStack}
          align={"center"}
          justify={"center"}
          minW={"48"}
          _hover={{ ".link": { opacity: 1 }, ".linkName": { mr: 1.5 } }}
        >
          <Box
            bgColor={"currentColor"}
            sx={{ mask: `url(${infoBox.icon}) no-repeat center`, maskSize: "cover" }}
            w={12}
            h={12}
          />
          <LinkOverlay href={infoBox.url} isExternal>
            <Flex opacity={0.7} align={"center"} transition={"opacity .2s ease"} className={"link"}>
              <Text
                fontSize={"lg"}
                fontWeight={"medium"}
                mr={0.5}
                transition={"margin .2s ease"}
                className={"linkName"}
              >
                {infoBox.title}
              </Text>
              <Box w={5}>
                <ChevronRightIcon />
              </Box>
            </Flex>
          </LinkOverlay>
        </LinkBox>
      </Flex>
    </Box>
  );
}
