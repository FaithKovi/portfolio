/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "intro",
    {
      type: "category",
      label: "Tutorials",
      collapsed: false,
      items: ["tutorials/getting-started"],
    },
    {
      type: "category",
      label: "How-to guides",
      collapsed: false,
      items: [
        "how-to/automate-with-github-actions",
        "how-to/switch-to-claude-provider",
        "how-to/prepend-to-existing-changelog",
      ],
    },
    {
      type: "category",
      label: "Reference",
      collapsed: false,
      items: ["reference/cli-reference"],
    },
    {
      type: "category",
      label: "Explanation",
      collapsed: false,
      items: ["explanation/how-it-works"],
    },
  ],
};

module.exports = sidebars;
