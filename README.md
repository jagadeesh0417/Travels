# BDL Travels — Premium Travel Experience

## Overview

A luxury, cinematic travel website built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. Features a premium 3D transport showcase, smooth animations, glassmorphism UI, and a full-featured admin panel.

## Tech Stack

- **Framework:** Next.js 16 (Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-based config)
- **Animation:** Framer Motion, GSAP, Lenis (smooth scroll)
- **3D:** Three.js, React Three Fiber, Drei
- **Backend:** Supabase (Auth, Storage, Realtime)
- **Charts:** Chart.js + react-chartjs-2

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

## Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_SITE_URL=https://bdl-travels.vercel.app
```

## Admin Panel

- **URL:** `/login`
- **Demo Credentials:** `admin@bdl-travels.com` / `admin@123`

### Features
- Dashboard with stats and recent bookings
- Bookings management with CRUD
- User management with role control
- Package management
- Gallery management
- Messages inbox
- Reviews with approval
- Analytics with Chart.js (bookings & revenue charts)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (metadata, fonts)
│   ├── client-layout.tsx   # Lenis smooth scroll provider
│   ├── page.tsx            # Home page
│   ├── globals.css         # Tailwind v4 + luxury theme
│   ├── login/page.tsx      # Admin login
│   └── admin/
│       ├── layout.tsx      # Admin panel layout
│       ├── dashboard/page.tsx
│       ├── bookings/page.tsx
│       ├── users/page.tsx
│       ├── packages/page.tsx
│       ├── gallery/page.tsx
│       ├── messages/page.tsx
│       ├── reviews/page.tsx
│       └── analytics/page.tsx
├── components/
│   ├── ui/                 # Reusable UI (Cursor, Loader, Navbar, Footer, GlassCard, etc.)
│   ├── home/               # Section components (Hero, Services, Destinations, etc.)
│   ├── three/              # 3D (VehicleScene, RouteMap)
│   └── admin/              # Admin components (Sidebar, Login, Dashboard, Template)
├── hooks/                  # Custom hooks (useMousePosition, useScrollReveal, useCountUp)
├── lib/                    # Utils (supabase, animations, data, helpers)
└── styles/                 # Additional styles
```

## Features

### Frontend
- Cinematic full-screen loader with logo reveal
- 3D vehicle showcase (Bus, SUV, Sedan, Mini Traveller)
- Glassmorphism cards with 3D tilt and glow effects
- Smooth scroll with Lenis
- Floating destination chips
- Animated counters
- Masonry gallery with lightbox
- Infinite testimonials carousel
- WhatsApp booking integration
- Google Maps embed
- Custom cursor

### Admin
- Authentication (local storage)
- Dashboard with stats
- CRUD tables with search, filter, export
- Chart.js analytics
- Role-based user management
- Mobile responsive sidebar

## Color System

- Primary: `#FFFFFF`
- Secondary: `#F8FAFC`
- Accent: `#D97706`
- Text: `#111827`
- Light Gray: `#E5E7EB`

## Performance

- Lazy loading for 3D scenes
- Image optimization via Next.js
- Code splitting with dynamic imports
- 90+ Lighthouse target

## Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push to GitHub
2. Import to Vercel
3. Set environment variables
4. Deploy

## License

Private — BDL Travels
