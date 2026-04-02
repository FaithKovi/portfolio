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

  headTags: [
    {
      tagName: "meta",
      attributes: {
        property: "og:title",
        content: "Faith Wachukwu — Documentation Engineer & Technical Writer",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:description",
        content:
          "Documentation Engineer with 3+ years of experience creating developer-focused docs, API references, and technical tutorials. Available for freelance and full-time roles.",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:type",
        content: "website",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:url",
        content: "https://faithkovi.xyz",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:image",
        content: "https://faithkovi.xyz/img/profile.jpg",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "twitter:card",
        content: "summary_large_image",
      },
    },
  ],

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
          blogTitle: "Blog — Faith Wachukwu",
          blogDescription:
            "Technical writing, documentation strategy, and docs-as-code insights from Faith Wachukwu.",
          feedOptions: {
            type: "all",
            title: "Faith Wachukwu — Blog",
            description:
              "Technical writing, documentation strategy, and docs-as-code insights.",
            copyright: `Copyright © ${new Date().getFullYear()} Faith Wachukwu`,
          },
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
      image: "img/profile.jpg",
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
              { label: "GitHub", href: "https://github.com/FaithKovi" },
              { label: "LinkedIn", href: "https://linkedin.com/in/faith-kovi" },
              { label: "Email", href: "mailto:faithkovi@gmail.com" },
              // { label: "RSS Feed", href: "/blog/rss.xml" },
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
