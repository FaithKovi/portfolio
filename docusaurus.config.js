// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Faith Wachukwu",
  tagline: "Documentation Engineer & Technical Writer",
  favicon: "/img/favicon.ico",

  url: "https://faithwachukwu.com",
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

  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Manrope:wght@400;500;600;700&display=swap",
    "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Sora:wght@400;600;700&family=Manrope:wght@400;500;600;700&display=swap",
  ],

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
          "Documentation Engineer building docs-as-code systems, API references, and developer guides that measurably reduce support load. KCNA-certified, DevOps background, open-source contributor to Helm.",
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
        content: "https://faithwachukwu.com",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:image",
        content: "https://faithwachukwu.com/img/profile.jpg",
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
          blogSidebarCount: 'ALL',
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
          src: "img/fw-mark.svg",
          srcDark: "img/fw-mark.svg",
        },
        items: [
          { to: "/work", label: "Work", position: "left" },
          { to: "/writing", label: "Writing", position: "left" },
          { to: "/docs/intro", label: "Docs Sample", position: "left" },
          { to: "/about", label: "About", position: "left" },
          { to: "/contact", label: "Contact", position: "right", className: "navbar-cta" },
          {
            href: "https://github.com/FaithKovi",
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub',
          },
          {
            href: "https://linkedin.com/in/faith-wachukwu",
            position: 'right',
            className: 'header-linkedin-link',
            'aria-label': 'LinkedIn',
          },
        ],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Pages",
            items: [
              { label: "Work", to: "/work" },
              { label: "Writing", to: "/writing" },
              { label: "Blog", to: "/blog" },
              { label: "Docs Sample", to: "/docs/intro" },
              { label: "Resume", to: "/resume" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
            ],
          },
          {
            title: "Connect",
            items: [
              { label: "GitHub", href: "https://github.com/FaithKovi" },
              { label: "LinkedIn", href: "https://linkedin.com/in/faith-wachukwu" },
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
