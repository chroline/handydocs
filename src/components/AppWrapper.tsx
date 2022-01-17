import React from "react";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import config from "../../handydocs.config.yaml";
import { ConfigProvider } from "~/util/ConfigProvider";
import { ConfigSchema } from "~/util/schema";
import theme from "~/util/theme";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider config={ConfigSchema.parse(config)}>
      <ChakraProvider resetCSS theme={extendTheme(theme)}>
        {children}
      </ChakraProvider>
    </ConfigProvider>
  );
}
