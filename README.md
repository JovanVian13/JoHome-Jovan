# JoHome

JoHome is a home finding website that helps you discover your dream home effortlessly. With quick search and easy browsing features, JoHome makes it simple for you to find your ideal property in seconds.

Built with React 19, TypeScript, Vite and Tailwind CSS 4.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 24.x (pinned in `package.json` `engines`; also used by Vercel)
- npm (comes with Node.js)

### Setup

```bash
git clone https://github.com/JovanVian13/JoHome-Jovan.git
cd JoHome-Jovan
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Scripts

| Command                | Description                                    |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Start the dev server with hot reload           |
| `npm run build`        | Type-check and build for production to `dist/` |
| `npm run preview`      | Serve the production build locally             |
| `npm run typecheck`    | Run the TypeScript compiler without building   |
| `npm run lint`         | Lint with ESLint                               |
| `npm run format`       | Format all files with Prettier                 |
| `npm run format:check` | Check formatting without writing changes       |

## Project structure

```
src/
  sections/     Page sections (Navbar, Hero, About, Reasons, Listings, Reviews, Footer)
  components/   Reusable UI (Button, cards, ScrollLink)
  data/         Site content: houses, reasons, reviews, stats, nav links, contact info
  assets/img/   Images
  types.ts      Shared TypeScript types
  index.css     Tailwind import and theme colors/fonts
```

Most content changes, such as adding a house or a review, only need an edit in `src/data/`. Theme colors and the font are defined in the `@theme` block in `src/index.css`.
