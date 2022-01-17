import { useState } from "react";

import constate from "constate";

import { Config } from "~/util/schema";

const [ConfigProvider, useConfig] = constate(
  ({ config }: { config: Config }) => useState(config),
  ([config]) => config
);

export { ConfigProvider, useConfig };
