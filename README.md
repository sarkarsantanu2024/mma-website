# Mind Mantra Abacus - Next.js Website

A modern, responsive website for Mind Mantra Abacus built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ⚡ Next.js 15 with App Router
- 🎨 Tailwind CSS for styling
- 🌓 Dark mode support (default: dark)
- 📱 Fully responsive design
- ♿ Accessible components with Radix UI
- 🎯 SEO optimized with metadata
- 🔤 Inter font family
- 🎭 Smooth animations and transitions
- 📦 shadcn/ui components

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React
- **Theme:** next-themes
- **Animations:** GSAP
- **Forms:** React Hook Form + Zod
- **State Management:** TanStack Query

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd nextjs-mma-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
nextjs-mma-website/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── centres/           # Centres page
│   ├── contact/           # Contact page
│   ├── courses/           # Courses page
│   ├── events/            # Events page
│   ├── franchise/         # Franchise page
│   ├── gallery/           # Gallery page
│   ├── why-abacus/        # Why Abacus page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── not-found.tsx      # 404 page
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   ├── ui/              # UI components
│   └── theme-provider.tsx
├── data/                 # Data files
├── hooks/                # Custom hooks
├── lib/                  # Utility functions
└── public/               # Static assets

```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Pages

- **Home** (`/`) - Main landing page with all sections
- **About** (`/about`) - Company information and values
- **Courses** (`/courses`) - Available courses and programs
- **Why Abacus** (`/why-abacus`) - Benefits of abacus training
- **Our Centres** (`/centres`) - Learning center locations
- **Events** (`/events`) - Upcoming events and competitions
- **Gallery** (`/gallery`) - Photo gallery
- **Franchise** (`/franchise`) - Franchise opportunities
- **Contact** (`/contact`) - Contact form and information

## Key Features

### Dark Theme Default
The website loads with dark theme by default, providing a modern and eye-friendly experience.

### SEO Optimized
Each page includes comprehensive metadata:
- Title and description
- Open Graph tags
- Keywords
- Structured data ready

### Responsive Design
Mobile-first approach with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Accessibility
- ARIA labels
- Keyboard navigation
- Screen reader support
- Focus indicators

## Customization

### Colors
Edit theme colors in `app/globals.css`:
- Primary: Orange (#FF6B35)
- Secondary: Teal (#2A9D8F)
- Accent: Purple (#9B5DE5)

### Fonts
The project uses Inter font family exclusively. Configure in `app/layout.tsx`.

### Content
Update content in the `/data` directory:
- `about.ts` - About page content
- `courses.ts` - Course information
- `centres.ts` - Center locations
- `events.ts` - Events and competitions
- `gallery.ts` - Gallery images
- `navigation.ts` - Navigation links
- And more...

## Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## License

All rights reserved © 2024 Mind Mantra Abacus

## Support

For support, email info@mindmantraabacus.com or visit our website.
