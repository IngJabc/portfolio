<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project: Portfolio Web (Fullstack Developer Dashboard)

**Stack**: Next.js 16.2.9 App Router + TypeScript + Tailwind CSS v4 (CLI) + Framer Motion + React Three Fiber + next-intl v4
**Concept**: "Engineering Command Center" dashboard with dark glassmorphism, AI chatbot, 3D scenes, bilingual ES/EN.

### Critical Gotchas
- **Turbopack + Windows**: `next dev` crashes ("Jest worker"). Use `next build && next start` for dev.
- **next-intl v4**: Use `(await requestLocale) ?? routing.defaultLocale` pattern in `request.ts`.
- **Tailwind v4**: Uses `@tailwindcss/cli` (not PostCSS). Run `npm run tw` to regenerate `public/tailwind.css`.
- **Middleware**: Next.js 16 renamed `middleware.ts` to `proxy.ts`.

### Theme System
- Dark/light via `[data-theme]` attr + CSS custom properties in `globals.css`
- All components use `var(--text-primary)`, `var(--bg-primary)`, `var(--accent)`, etc.
- `ThemeProvider.tsx` persists to localStorage, toggles via Navbar button
- Accent opacity vars: `--accent-10`, `--accent-20`, `--accent-30` (CSS `color-mix`)

### Build & Run
```sh
npm run tw      # Generate tailwind.css
npm run build   # tw + next build
npm start       # Production server (port 3000)
```

### Current Status (2026-06-15)
- ✅ All components converted to CSS variables (theme-ready)
- ✅ Skills section created (`/skills`) with SkillsGrid component
- ✅ Navbar + NavigationActions updated with Skills link
- ✅ **Client-side i18n**: Removed next-intl dependency for translations. Custom `LocaleProvider` + `dictionary.ts` with instant locale switching (no page reload)
- ✅ **Full translation coverage**: All pages, subtitles, buttons, labels, AI responses, boot messages, metrics, and navigation descriptions are bilingual EN/ES
- ✅ Build passes with zero errors
- Pending: Deploy to Vercel/Netlify
