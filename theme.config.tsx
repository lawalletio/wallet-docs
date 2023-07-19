import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>La Crypta Wallet</span>,
  chat: {
    link: "https://discord.lacrypta.ar",
  },
  docsRepositoryBase: "https://github.com/lacrypta/wallet-docs",
  footer: {
    text: "La Crypta Docs",
  },
};

export default config;