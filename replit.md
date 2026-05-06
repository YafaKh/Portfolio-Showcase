# Yafa Khateeb — Portfolio

A single-page personal portfolio website for Yafa Khateeb (Financial Data Analyst & Product Engineer) showcasing experience, projects (live web apps, Replit projects, GitHub repos, Power BI dashboards), skills, and contact info.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/portfolio/` — the portfolio React + Vite app (the main deliverable)
  - `src/pages/home.tsx` — assembles all portfolio sections
  - `src/components/portfolio/*` — Hero, About, Experience, Projects, Skills, Education, Contact, Navbar, Footer
  - `src/index.css` — color theme (HSL tokens, light + dark)
- `artifacts/api-server/`, `lib/db/`, `lib/api-spec/` — scaffolded but unused (no backend in this build)

## Architecture decisions

- Frontend-only: no backend, DB, or API hooks. Content is hardcoded in components.
- Theme defined in `src/index.css` HSL variables; dark mode supported via `.dark` class.
- Animations use framer-motion with respect for `prefers-reduced-motion`.
- Power BI deck preview is wired with empty src + TODO comments — drop in a PDF/PPTX and a URL to enable.
- LinkedIn URL and Masar/ClinicFlow live URLs are placeholders with TODO comments — Yafa fills these in.

## Product

Single-page portfolio with: hero, about, experience timeline (Proficien, Palestine Islamic Bank, Auxilium, Zakey Tech volunteer), projects grid (Masar, ClinicFlow, Power BI deck, 7 GitHub repos), skills grouped by category, education & certifications, contact (email, phone, LinkedIn, GitHub), sticky nav, footer.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
