# Portfolio & blog

Personal portfolio and technical blog for **Faith Wachukwu**, Documentation Engineer & Technical Writer.

**Live site →** [faithkovi.xyz](https://faithkovi.xyz)

[![docs](https://github.com/FaithKovi/portfolio/actions/workflows/docs.yml/badge.svg)](https://github.com/FaithKovi/portfolio/actions/workflows/docs.yml)
[![link-rot](https://github.com/FaithKovi/portfolio/actions/workflows/link-rot.yml/badge.svg)](https://github.com/FaithKovi/portfolio/actions/workflows/link-rot.yml)
[![prose: Microsoft + Vale](https://img.shields.io/badge/prose-Microsoft%20%2B%20Vale-088a6a)](styles/README.md)

A Docusaurus portfolio + blog that's linted like production documentation. The CI pipeline is itself part of the portfolio. You should see [styles/README.md](/styles/README.md) for how to check prose.

## Tech stack

- **Framework:** [Docusaurus 3.10.1](https://docusaurus.io/) (React + MDX)
- **Hosting:** GitHub Pages with custom domain
- **CI/CD:** GitHub Actions (auto deploy on push to `main`)
- **Contact form:** [Formspree](https://formspree.io/)

## Structure

```text
.github/workflows/   CI: prose gate, weekly link-rot check, deploy
blog/                articles (co-located assets, authors.yml, tags.yml)
docs/                writing samples, organized by Diátaxis
src/                 React pages (work.tsx), components, swizzled theme, css
static/              images, CV PDF, social cards
styles/              Vale StylesPath — custom style + vocab + pipeline docs
*.config.ts          Docusaurus / lint / lychee config at root
```

## Quickstart

```bash
npm install
npm run start            # local dev server
```

```bash
# docs quality (this mirrors CI)
vale sync                # download the Microsoft package into styles/
vale docs/ blog/         # prose lint
npx markdownlint-cli2    # structure lint
pre-commit install       # run both on every commit
```

## Design decisions

- **Docs-as-code workflow:** The site itself is version-controlled, peer-reviewable, and auto deployed. We advocate this workflow for client documentation projects.
- **Dark mode first:** The default theme is dark, matching developer tool conventions, with a light toggle available.
- **Content-forward layout:** Created with minimal design that prioritizes readability and lets the writing speak for itself.

## Deploy

Builds on push to `main`. `onBrokenLinks: 'throw'` in `docusaurus.config.ts` checks internal links at build time while `link-rot.yml` checks external links weekly, which opens an issue rather than failing a build.

## License

Massachusetts Institute of Technology (MIT) License
