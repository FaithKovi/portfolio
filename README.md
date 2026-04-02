# Portfolio & Blog

Personal portfolio and technical blog for **Faith Wachukwu**, Documentation Engineer & Technical Writer.

**Live site →** [faithkovi.xyz](https://faithkovi.xyz)

## What's here

This site serves as both a professional portfolio and a writing platform. It showcases documentation work, published articles, and blog posts on topics like docs-as-code workflows, API documentation strategy, and writing for AI retrieval systems.

### Site structure

```
src/pages/
  index.tsx     → Homepage with services overview and CTA
  about.tsx     → Bio, skills, education, certifications
  work.tsx      → Projects, published articles, and work experience
  contact.tsx   → Contact form (Formspree) and direct links

blog/           → Technical blog posts (Markdown)
docs/           → Reserved for future documentation samples
static/img/     → Images, blog covers, and logos
```

## Tech stack

- **Framework:** [Docusaurus 2](https://docusaurus.io/) (React + MDX)
- **Hosting:** GitHub Pages with custom domain
- **CI/CD:** GitHub Actions (auto-deploy on push to `main`)
- **Contact form:** [Formspree](https://formspree.io/)
- **Typography:** DM Sans
- **Theme:** Custom blue-accent design with light/dark mode support

## Local development

```bash
# Install dependencies
yarn install

# Start dev server (http://localhost:3000)
yarn start

# Production build
yarn build
```

## Design decisions

- **Docs-as-code workflow:** The site itself is version-controlled, peer-reviewable, and auto-deployed — the same workflow I advocate for in client documentation projects.
- **Dark mode first:** Default theme is dark, matching developer tool conventions, with a light toggle available.
- **Content-forward layout:** Minimal design that prioritizes readability and lets the writing speak for itself.

## License

MIT
