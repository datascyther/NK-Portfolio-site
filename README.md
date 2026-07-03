# NK Portfolio

A personal portfolio website for **Nishant (NK) Kumar** — AI Product Engineer building production-ready AI products from concept to deployment. Built with React, TypeScript, Vite, and Tailwind CSS v4.

## Tech Stack

| Category | Tools |
|----------|-------|
| Framework | React 19 |
| Language | TypeScript 5.9 |
| Bundler | Vite 7.3 |
| Styling | Tailwind CSS 4.1 (via `@tailwindcss/vite`) |
| Animations | Framer Motion |
| Smooth Scroll | Lenis |
| Utilities | `clsx` + `tailwind-merge` |

## Project Structure

```
index.html
package.json
tsconfig.json
vite.config.ts
public/
  images/
    portrait.png
src/
  App.tsx              # Root layout, sections composition, Lenis + ambient scroll layer
  main.tsx             # Entry point — mounts App with StrictMode
  index.css            # Global styles + Tailwind v4 directives
  data/
    portfolio.ts       # All content: profile, projects, experience, skills, education
  hooks/
    useTheme.ts        # Theme hook (dark/light) with localStorage persistence
  utils/
    cn.ts              # clsx + tailwind-merge helper
  components/
    Nav.tsx             # Fixed header, scroll progress bar, mobile menu, theme toggle
    Hero.tsx            # Editorial headline, typewriter, parallax, portrait frame
    Marquee.tsx         # Infinite horizontal scrolling tech stack
    About.tsx           # Bio and stats
    ExperienceSection.tsx # Timeline of roles and internships
    ProjectsSection.tsx  # Featured and additional projects with tilt cards
    SkillsSection.tsx    # Skill groups (AI, Full-Stack, Data, Product)
    Contact.tsx          # CTA section + footer with social links
    TiltCard.tsx         # 3D perspective tilt on project cards
    Reveal.tsx           # Scroll-triggered reveal animation wrapper
    Cursor.tsx           # Custom cursor (desktop only)
```

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- **Smooth scrolling** powered by Lenis with lerp-based animated ambient scroll layer
- **Scroll-triggered animations** via Framer Motion (`useScroll`, `useTransform`, `whileInView`)
- **Dark / Light theme** toggle with fade transition and localStorage persistence
- **Custom cursor** on desktop with pointer and hover states
- **Fixed navigation** with scroll progress bar, active-section highlights, and responsive mobile menu
- **Hero section** with masked-line reveal, typewriter keyword rotator, parallax portrait, and scroll cue
- **Infinite marquee** of tech stack keywords
- **Projects section** with 3D tilt-card interactions
- **Reveal animations** on all major sections via a shared `<Reveal>` wrapper
- **Content-driven** — all bio, experience, and project data lives in a single `portfolio.ts` file for easy updates
- **Tailwind CSS v4** with `@tailwindcss/vite` plugin for zero-config styling
- **TypeScript path aliases** (`@/*` → `src/*`) via Vite `resolve.alias`

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge).

## License

MIT
