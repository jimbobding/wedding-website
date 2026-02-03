## Repo snapshot for AI coding agents

This is a small Next.js (app router) + TypeScript site used as a wedding website. Keep suggestions minimal, focused, and safe for a static content site.

- Framework: Next.js 16 (app directory), React 19, TypeScript. See `package.json` for exact versions.
- Entry points: `app/layout.tsx` (global layout & fonts) and `app/page.tsx` (composes pages from `src/components`).
- Components live under `src/components/`. Styles are CSS Modules in `src/styles/` and global styles in `app/globals.css`.

Key patterns and conventions
- App router usage: use the `app/` directory for routes and `app/layout.tsx` for global wrappers, fonts and metadata.
- Server vs client components: files with interactive hooks use `"use client"` (example: `src/components/Navbar.tsx`). Default components under `src/components` are server components unless they opt into the client runtime.
- Styling: CSS Modules (e.g. `src/styles/Navbar.module.css`, `src/styles/Hero.module.css`) plus Tailwind is configured via PostCSS. Keep class names in the module files and reference via `import styles from '../styles/Name.module.css'`.
- Images: static assets live in `public/images/` and are consumed via `next/image` (see `src/components/Hero.tsx`). Always include width/height props.
- Path aliases: `tsconfig.json` maps `@/*` -> `./*`. You will see both absolute imports like `@/src/components/ExpectPage` and relative imports. Respect existing import style.

Build & developer workflows
- Local dev: `npm run dev` (starts Next dev server on :3000)
- Build: `npm run build` then `npm start` for production preview.
- Lint: `npm run lint` (project uses ESLint with `eslint-config-next`).
- Tests: no test harness present in the repo; do not add heavy test infra without asking.

Project-specific gotchas & examples
- `app/page.tsx` composes the entire site by importing components from `src/components/` (Navbar, Hero, ExpectPage, FoodPage, TravelPage, DressPage, InfoPafe, RSVPPage). When adding or renaming components, update `app/page.tsx`.
- Minor filename oddities exist (example: `InfoPafe.tsx` — keep existing export names when making changes to avoid breaking imports in `app/page.tsx`).
- Anchor navigation: Navbar links use fragment anchors (for example the link targets the section id `expect`). Components should expose those IDs on their sections to preserve in-page navigation.
- Fonts: `next/font/google` is used in `app/layout.tsx` to create CSS variables (e.g. `--font-geist-sans`). Prefer using the same pattern when adding fonts.

When editing files
- Preserve TypeScript strictness (tsconfig has `strict: true`, `noEmit: true`) and the `jsx: react-jsx` setting.
- Keep edits minimal and incremental. For content changes, prefer editing component files in `src/components` and `app/page.tsx` for composition.
- For interactive behavior, mark the component with `"use client"` at the top and keep client-only code local to that component.

Integration & deployment notes
- Tailwind v4 and `@tailwindcss/postcss` are present in devDependencies — follow existing PostCSS/Tailwind usage in `app/globals.css`.
- The project is Vercel-friendly (standard Next.js); deployments typically use Vercel. Use `npm run build` to validate production build locally.

If anything is unclear or you want the agent to follow stricter rules (naming conventions, testing, or CI), tell me which areas to expand and I will iterate.
