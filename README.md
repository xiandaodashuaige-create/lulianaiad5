# 鹿联 AI 广告 · Landing Page

A high-conversion Chinese-language landing page for 鹿联 AI 广告服务 (Lulian AI Ads), optimized for Google Ads campaigns. Built with React 19 + Vite + Tailwind CSS v4 + framer-motion.

WhatsApp 联系：+60 10-651 9843 → https://wa.me/60106519843

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4 (`@tailwindcss/vite`)
- shadcn/ui components (in `src/components/ui`)
- framer-motion (scroll animations)
- wouter (router)
- lucide-react (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
```

Output is in `dist/`. Deploy this folder to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, Nginx, etc.).

## Deploy to Vercel (recommended)

1. Push this repo to GitHub.
2. Go to https://vercel.com → Import Project → pick this repo.
3. Vercel auto-detects Vite. Click Deploy.
4. Bind your custom domain `lulianai.com` in Vercel → Settings → Domains.

## Deploy to Netlify

1. Push to GitHub, import the repo on Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`

## Deploy to Cloudflare Pages

1. Push to GitHub, connect the repo on Cloudflare Pages.
2. Build command: `npm run build`
3. Build output directory: `dist`

## Customization

- **WhatsApp number**: search/replace `60106519843` in `src/pages/home.tsx`
- **Brand color palette**: edit CSS variables in `src/index.css`
- **Page copy**: edit `src/pages/home.tsx`
- **SEO meta tags**: edit `index.html`
- **Images**: replace files in `public/images/` and `public/opengraph.jpg`

## License

Proprietary — © 鹿联 AI 广告
