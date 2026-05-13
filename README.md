## Portfolio 2026

Personal portfolio built with the Next.js App Router, Tailwind CSS v4, and a small Three.js accent scene.

## Getting Started

- **Install**

```bash
npm install
```

- **Run locally**

```bash
npm run dev
```

Open `http://localhost:3000`.

## Content editing

- **Profile / projects data**: `src/lib/portfolio.ts`
- **Home page**: `src/app/page.tsx`
- **Project case study page**: `src/app/projects/[slug]/page.tsx`
- **Theme**: `src/app/providers.tsx` + `src/app/globals.css`

## Build / production

```bash
npm run lint
npm run build
npm run start
```

## SEO / deployment notes

- **Sitemap + robots**: `src/app/sitemap.ts` and `src/app/robots.ts`
- **Canonical base URL**: set `NEXT_PUBLIC_SITE_URL` in your deployment environment (example: `https://your-domain.com`)

## Optional hardening

`next.config.ts` already sets a few security headers (nosniff, frame deny, etc.). If you add images or external embeds later, you may want to add a Content Security Policy as well.

# Ngeno