// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Faith Wachukwu",
  tagline: "Documentation Engineer & Technical Writer",
  favicon: "/static/img/favicon.svg",

  url: "https://faithkovi.xyz",
  baseUrl: "/",

  organizationName: "FaithKovi",
  projectName: "portfolio",

  trailingSlash: true, 

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
        title: "Faith Wachukwu",
        logo: {
          alt: "Faith Wachukwu",
          src: "img/logo.png",
          srcDark: "img/logo.png",
        },
        items: [
          { to: "/about", label: "About", position: "left" },
          { to: "/work", label: "Work", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/contact", label: "Contact", position: "left" },
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
        style: "light",
        links: [
          {
            title: "Pages",
            items: [
              { label: "About", to: "/about" },
              { label: "Work", to: "/work" },
              { label: "Blog", to: "/blog" },
              { label: "Contact", to: "/contact" },
            ],
          },
          {
            title: "Connect",
            items: [
              // TODO: Replace with your URLs
              { label: "GitHub", href: "https://github.com/FaithKovi" },
              { label: "LinkedIn", href: "https://linkedin.com/in/faith-kovi" },
              { label: "Email", href: "mailto:faithkovi@gmail.com" },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} Faith Wachukwu. Built with Docusaurus.`,
      },
      prism: {
        theme: require("prism-react-renderer").themes.github,
        darkTheme: require("prism-react-renderer").themes.dracula,
      },
    }),
};

module.exports = config;
