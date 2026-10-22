# Portfolio & Blog

Personal portfolio and technical blog for **Faith Wachukwu**, Documentation Engineer & Technical Writer.

**Live site →** [faithwachukwu.com](https://faithwachukwu.com)

## What's here

This site serves as both a professional portfolio and a writing platform. It showcases documentation work, published articles, and blog posts on topics like docs-as-code workflows, API documentation strategy, and writing for AI retrieval systems.

### Site structure

```
src/pages/
  index.tsx     → Homepage: hero, proof cards, how-I-work, testimonial, CTA
  work.tsx      → Projects, open source, experience (+ featured case study)
  writing.tsx   → External articles + blog front door
  resume.tsx    → HTML resume (print stylesheet → PDF)
  about.tsx     → The DevOps→docs arc, how I work, testimonials
  contact.tsx   → Contact form (Formspree), scope, timezone
  case-studies/ → Measured impact case studies

blog/           → Technical blog posts (Markdown)
docs/           → Working Diátaxis documentation sample (real CLI tool)
static/         → Images, logos, llms.txt, resume PDF
```

## Tech stack

- **Framework:** [Docusaurus 3](https://docusaurus.io/) (React + MDX)
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
- **Light-first, warm neutral palette:** Sora + Manrope type, soft cards, single green accent, with a dark variant available.
- **Prose linted in CI:** Vale (proselint + write-good) runs on every docs/blog PR — the site holds its own content to the standard it advocates.
- **Content-forward layout:** Minimal design that prioritizes readability and lets the writing speak for itself.

## License

MIT
