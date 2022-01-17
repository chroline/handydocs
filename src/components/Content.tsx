import React from "react";

import { Box, Heading, VStack } from "@chakra-ui/react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import dynamic from "next/dynamic";

const styles = {
  "& > *": { w: "full", overflow: "hidden" },
  // anchors/links
  a: {
    textDecoration: "underline",
    opacity: 0.8,
    "&:hover": {
      opacity: 1,
    },
  },
  // image
  img: { display: "inline-block" },
  // lists
  "ul,ol": {
    w: "full",
    pl: 8,
    "*": {
      mt: 2,
    },
    "ul,ol": {
      pl: 5,
    },
  },
  li: {
    w: "full",
    pl: 2,
  },
  // code
};

const components: Record<string, React.FC | React.ComponentType> = {
  // lists
  ul: props => <VStack as={"ul"} align={"start"} spacing={4} {...props} />,
  ol: props => <VStack as={"ol"} align={"start"} spacing={4} {...props} />,
  // headings
  h1: props => <Heading as={"h1"} size={"xl"} pt={8} {...props} />,
  h2: props => <Heading as={"h2"} size={"lg"} pt={6} {...props} />,
  h3: props => <Heading as={"h3"} size={"md"} pt={4} {...props} />,
  // links
  a: props => <a target={"_blank"} {...props} />,
  // code
  pre: props => <Box as={"pre"} overflow={"scroll"} {...props} />,
  // chakra-ui components
  Alert: dynamic(() => import("@chakra-ui/react").then(v => v.Alert)),
  AlertIcon: dynamic(() => import("@chakra-ui/react").then(v => v.AlertIcon)),
};

export function Content({ children }: { children: MDXRemoteSerializeResult }) {
  return (
    <VStack id={"content"} align={"start"} spacing={4} sx={styles}>
      <MDXRemote {...children} components={components} />
    </VStack>
  );
}
