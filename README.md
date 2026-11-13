# Gautam Agrawal — Backend Engineer Portfolio

A responsive Next.js App Router portfolio built with TypeScript, Tailwind CSS, and Framer Motion. The design uses a white and blue theme with a dark mode toggle.

## Requirements

- Node.js 20.9 or newer
- npm
- A [Resend](https://resend.com/) account and a verified sending domain to enable the contact form

## Run locally

```bash
npm install
cp .env.example .env.local
```

Set the values in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=re_your_api_key
CONTACT_FROM_EMAIL=Portfolio <portfolio@your-verified-domain.com>
```

`CONTACT_FROM_EMAIL` must use a domain verified in Resend. The contact endpoint sends messages to `gautamagrawal542@gmail.com`. Without the Resend settings, the rest of the portfolio runs normally and the contact form displays a clear email fallback.

Then start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks and production build

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

## Project structure

```text
app/                      Pages and routes (Next.js requires this folder name)
  layout.tsx              Root layout: fonts, metadata, global styles
  page.tsx                Home page — lists the sections in order
  api/contact/route.ts    Contact form endpoint
  resume/route.ts         Downloadable plain-text resume
  robots.ts, sitemap.ts   SEO files
components/
  common/                 Reusable building blocks (Button, Card, Section, Tag, ...)
  layout/                 Navbar, mobile menu, Footer
  sections/               One folder per page section (hero, about, experience, ...)
data/                     All text and content — edit here, not in components
hooks/                    Reusable behaviour (theme, typewriter, count-up, active section, ...)
styles/
  theme.css               Every colour and shadow, for the light and dark themes
  animations.css          Keyframes and animation classes
  globals.css             Tailwind import and a few base styles
  fonts.ts                Font loading
utils/                    Small helpers (class names, validation, resume builder, email)
public/                   Static assets (social sharing image)
```

### How to change things

- **Content** — edit the matching file in `data/` (`hero.ts`, `about.ts`, `experience.ts`, `projects.ts`, `skills.ts`, `education.ts`, `contact.ts`). Name, email and profile links live in `data/site.ts`; page title and description in `data/seo.ts`.
- **Colours** — edit `styles/theme.css`. The first block is the light theme and the `[data-theme="dark"]` block overrides the same tokens for dark mode. Each token becomes a Tailwind class (`--color-primary` → `bg-primary`, `text-primary`). Tailwind's default palette is turned off, so components can only use theme colours. The two image files (`app/icon.svg`, `public/og-image.svg`) carry their own copies of the colours.
- **Add a section** — create a folder in `components/sections/`, add its content to `data/`, wrap it in the `Section` component, and add it to `app/page.tsx`.
- **Getting contacted** — the "What I can build" cards are in `data/services.ts`; the banner and the floating Email/LinkedIn shortcut are in `data/cta.ts`; the contact section text is in `data/contact.ts`.
- **Theme toggle** — the visitor's choice is saved in the browser; first-time visitors get their system preference. The logic lives in `utils/theme.ts` and `hooks/useTheme.ts`.
- **Animations** — CSS keyframes are in `styles/animations.css`; scroll and hover effects use Framer Motion inside small components (`Reveal`, `ScrollProgress`, `Timeline`). All of them switch off for visitors who prefer reduced motion.
- **Responsive rules** — styles are mobile-first: unprefixed classes target phones, `sm:` (640px) and `md:` (768px) tablets, `lg:` (1024px) desktops.

The downloadable resume at `/resume` is generated from the data folder and can be replaced with a designed PDF when one is available.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. In [Vercel](https://vercel.com/), choose **Add New → Project** and import the repository.
3. Keep the detected Next.js framework preset and default build settings.
4. In **Project → Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL` — the production URL, such as `https://your-domain.com` (optional if Vercel's `VERCEL_URL` is available)
   - `RESEND_API_KEY` — your Resend API key
   - `CONTACT_FROM_EMAIL` — a sender address on your verified Resend domain
5. Add or configure your custom domain in **Project → Settings → Domains**, and use the same URL for `NEXT_PUBLIC_SITE_URL`.
6. Deploy. Vercel will build on each push to the production branch; verify the contact form and `/sitemap.xml` on the deployed site.

The application uses Next.js route handlers for the contact form and resume download, so it does not require a separate server or database.
