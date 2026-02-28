// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Faith Kovi",
  tagline: "Documentation Engineer & Technical Writer",
  favicon: "/static/img/favicon.svg",

  url: "https://faithkovi.xyz",
  baseUrl: "/",

  organizationName: "FaithKovi",
  projectName: "portfolio",

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-card.jpg",
      navbar: {
        title: "Faith Kovi",
        logo: {
          alt: "Faith Kovi",
          src: "img/logo.png",
          srcDark: "img/logo.png",
        },
        items: [
          { to: "/blog/", label: "Blog", position: "left" },
          {
            href: "https://github.com/FaithKovi",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://linkedin.com/in/faith-kovi",
            label: "LinkedIn",
            position: "right",
          },
        ],
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      footer: {
        copyright: `${new Date().getFullYear()} Faith Kovi. Built with Docusaurus.`,
      },
      prism: {
        theme: require("prism-react-renderer").themes.github,
        darkTheme: require("prism-react-renderer").themes.dracula,
      },
    }),
};

module.exports = config;
