# Meno Pixels — Web & E-commerce Studio

Premium agency website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (parallax, scroll animations, mouse glow)
- **Lucide React** (icons)

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click **Deploy** — Vercel auto-detects Next.js, no config needed

## Connect Your Domain (menopixels.studio)

1. In Vercel Dashboard → your project → **Settings** → **Domains**
2. Add `menopixels.studio` and `www.menopixels.studio`
3. In your domain registrar DNS settings, add:
   - **A record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`
4. Wait 5–10 minutes for DNS propagation

## Customise

- **WhatsApp number**: Replace all `947XXXXXXXX` with your real number (e.g. `94771234567`)
- **Email**: Replace `hello@menopixels.studio` in `Footer.tsx`
- **Portfolio**: Edit `Work.tsx` to add/remove projects
- **Packages**: Edit `Packages.tsx` pricing features

## File Structure

```
app/
  layout.tsx          → SEO metadata, fonts
  globals.css         → Design tokens, animations, utilities
  page.tsx            → Assembles all sections
components/
  Navbar.tsx          → Sticky glassmorphism nav
  MouseGlow.tsx       → Cursor glow effect
  sections/
    Hero.tsx          → Parallax hero with floating cards
    Problem.tsx       → Problem statement cards
    Services.tsx      → Main service cards
    Work.tsx          → Portfolio with Web/Video tabs
    Packages.tsx      → Pricing packages
    Process.tsx       → 5-step process timeline
    WhyUs.tsx         → Value proposition grid
    CTA.tsx           → Final call to action
    Footer.tsx        → Footer with links
```
