import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Logo from "./components/Logo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  chat: {
    link: "https://discord.lacrypta.ar",
  },
  docsRepositoryBase: "https://github.com/lacrypta/wallet-docs",
  footer: {
    text: "La Crypta Docs",
  },
};

export default config;
