import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/Logo";
import LaCryptaLogo from "./components/LaCryptaLogo";

const config: DocsThemeConfig = {
  head: (
    <head>
      <meta property="og:title" content="LaWallet Documentation" />
      <meta
        property="og:description"
        content="The official documentation for LaWallet."
      />
      <meta property="og:image" content="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </head>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s – LaWallet Docs",
    };
  },
  logo: <Logo />,
  chat: {
    link: "https://discord.lacrypta.ar",
  },
  docsRepositoryBase: "https://github.com/lacrypta/wallet-docs",
  footer: {
    text: (
      <div style={{ textAlign: "center", margin: "auto" }}>
        <div>powered by </div>
        <div style={{ marginTop: "8px" }}>
          <a target="_blank" href="https://lacrypta.ar">
            <LaCryptaLogo />
          </a>
        </div>
      </div>
    ),
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 0,
    titleComponent({title}) {
      const re = /^(?<method>.+) (?<name>.+$)/;
      const match = re.exec(title);
      if (match) {
        const method = match.groups.method.toUpperCase();
        const route = match.groups.name;
          switch (method) {
            case 'GET':
            case 'PUT':
            case 'POST':
            case 'PATCH':
            case 'DELETE':
            case 'OPTIONS':
              return <> <span className={`httpLabel ${method.toLowerCase()}`}>{method}</span>{route} </>
          }
      }
      return <> {title} </>
    }
  },
};

export default config;
