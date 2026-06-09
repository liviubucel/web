# Launch UI — Astro Port

This is an Astro + React + Tailwind CSS 4 port of the uploaded Launch UI Next.js template.

## What was converted

- `app/page.tsx` → `src/pages/index.astro`
- `app/layout.tsx` → `src/layouts/BaseLayout.astro`
- React components copied into `src/components`
- `next/link` converted to normal `<a>` tags
- `next/image` converted to normal `<img>` tags
- `next-themes` replaced with a small localStorage-based theme toggle
- Global CSS moved to `src/styles/globals.css`
- Public assets copied to `public/`

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Cloudflare

This project includes `@astrojs/cloudflare` and uses `output: 'server'` in `astro.config.mjs`, so it is ready to be adapted for Cloudflare Workers/Pages.

## Notes

This is a code port, not a full redesign. The content still says Launch UI. Replace `src/config/site.ts` and the section content to turn it into ZebraByte.

For Sanity later, keep this Astro project as the frontend and connect Sanity as the CMS source for pages, services, pricing, blog, and legal content.
