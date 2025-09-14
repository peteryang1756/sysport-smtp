Forum UI (shadcn/ui + Next.js)

Redesigned forum using Next.js App Router, Tailwind CSS, and shadcn/ui patterns.

Development

```
npm install
npm run dev
```

Build

```
npm run build
npm start
```

Deploy to Vercel

1. Push this project to GitHub/GitLab.
2. Create a new Vercel project and import the repo.
3. Framework preset: Next.js (auto-detected)
4. Build command: `next build`
5. Output: `.next`
6. Optional: set `NODE_VERSION` and `NEXT_TELEMETRY_DISABLED=1`.

Notes
- Dark mode via `next-themes` (class strategy)
- Tailwind tokens follow shadcn/ui conventions
- Example pages: 首頁、看板、最新、文章詳情、發文、基本用戶頁

