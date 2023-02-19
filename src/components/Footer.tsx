import React from "react";

import { Box, ButtonGroup, IconButton, Stack, Text, useColorMode } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa";

import { useConfig } from "~/util/ConfigProvider";

export function Footer() {
  const { hero, footer } = useConfig();

  const { colorMode } = useColorMode();

  if (!hero || !footer) return <></>;

  return (
    <Box
      as={"footer"}
      py={"12"}
      px={{ base: "4", md: "8" }}
      bg={footer.style[colorMode]?.bg || footer.style.light.bg}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      color={footer.style[colorMode]?.color || footer.style.light.color}
      transition={"background .2s ease, color .2s ease"}
    >
      <Stack mx={"auto"} maxW={"5xl"} w={"full"}>
        <Stack direction={"row"} spacing={"4"} align={"center"} justify={"space-between"}>
          {hero.logo.text && (
            <Text fontWeight={"bold"} fontSize={"lg"}>
              {hero.logo.text}
            </Text>
          )}
          <ButtonGroup variant={"ghost"} color={"inherit"}>
            {Object.entries(footer.socials).map(([type, link]) => {
              switch (type) {
                case "github":
                  return (
                    <IconButton
                      key={link}
                      as={"a"}
                      href={link}
                      aria-label={"Github"}
                      icon={<FaGithub fontSize={"20px"} />}
                    />
                  );
                case "twitter":
                  return (
                    <IconButton
                      key={link}
                      as={"a"}
                      href={link}
                      aria-label={"Twitter"}
                      icon={<FaTwitter fontSize={"20px"} />}
                    />
                  );
                case "email":
                  return (
                    <IconButton
                      key={link}
                      as={"a"}
                      href={link}
                      aria-label={"Email"}
                      icon={<FaEnvelope fontSize={"20px"} />}
                    />
                  );
              }
            })}
          </ButtonGroup>
        </Stack>
        <Text fontSize={"sm"} alignSelf={{ base: "center", sm: "start" }}>
          &copy; {new Date().getFullYear()} {footer.copyright}
        </Text>
      </Stack>
    </Box>
  );
}
