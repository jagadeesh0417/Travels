<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Production build (uses Turbopack by default)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Notes
- Next.js 16.2.9 - params/searchParams are always Promises (must `await`)
- No dark mode - light theme only
- Tailwind CSS v4 - CSS-based configuration (no tailwind.config.ts)
- Turbopack is default for both dev and build
