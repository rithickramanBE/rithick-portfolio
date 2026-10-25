# Rithick Raman — Portfolio

Personal portfolio built with React, TypeScript, and Vite. Project cards describe selected work without exposing private source repositories or demo links.

Portfolio copy and editable profile details live in [`src/data/portfolio.ts`](./src/data/portfolio.ts). Replace each `TODO` placeholder before publishing, and confirm the canonical URL if the deployed domain differs from the GitHub Pages default.

## Local development

```sh
npm ci
npm run dev
```

## Checks

```sh
npm run typecheck
npm run lint
npm run build
```

## GitHub Pages

The `Deploy to GitHub Pages` workflow builds and publishes the site on pushes to `main`. The production build statically pre-renders the page content into `dist/index.html` for sharing and no-JavaScript access. GitHub Pages builds use the `/rithick-portfolio/` base path; local builds keep the root path.
