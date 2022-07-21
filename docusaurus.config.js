// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Vampiro Idade das trevas",
  tagline: "Livro base para o RPG",
  url: "https://vampiro-livro.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Allzon",
  projectName: "VampiroLivro",
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Vampiro",
        hideOnScroll: true,
        logo: {
          alt: "Vampiro Idade das Trevas",
          src: "img/logo.svg",
          srcDark: "img/logoDark.svg",
        },
        items: [
          {
            to: "/",
            label: "Livro",
            position: "left",
          },
          {
            to: "tables",
            label: "Tabelas",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        /*links: [
          {
            label: "Guias",
            to: "/",
          },
          {
            label: "Discord",
            href: "#",
          },
        ],*/
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
