# NK Portfolio

NK’s portfolio, designed for hiring managers in AI and product engineering. An editorial introduction leads into Jouspace: a product gallery, implementation decisions, and an interactive AI request pipeline. Experience, a concise closing biography, education, and contact follow. The small portrait appears in the hero.

Upstream repository: [datascyther/NK-Portfolio-site](https://github.com/datascyther/NK-Portfolio-site).

## Local development

```bash
npm ci
npm run dev -- --host 127.0.0.1 --port 5173
```

Open http://127.0.0.1:5173/. Vite reloads changes automatically.

```bash
npm run build
npx tsc --noEmit
npm run preview
```

The production bundle goes to `dist/`. Firebase hosting configuration remains in `firebase.json`; deployment is separate from local development.

## Typography

Neue Montreal is used throughout, with upright headings, a single font family, and larger body and metadata text. The variable WOFF2 file is served locally from `public/fonts/`; see its README for asset provenance.

## Stack

React 19, TypeScript 5.9, Vite 7, Tailwind CSS 4, and Framer Motion for short entry transitions. The current design uses native scrolling and the system cursor. It supports persistent light/dark themes and reduced motion preferences. `vite-plugin-singlefile` inlines the production JavaScript and CSS; images remain external.

## Editing map

| File                                   | Purpose                                                                                                 |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `src/App.tsx`                          | Section order and application layout                                                                    |
| `src/data/portfolio.ts`                | Profile, experience, projects, education, Jouspace assets, engineering decisions, pipeline descriptions |
| `src/index.css`                        | Theme tokens, typography, layout, responsive rules                                                      |
| `src/components/Nav.tsx`               | Desktop navigation, mobile disclosure menu, theme control                                               |
| `src/components/Hero.tsx`              | Introductory headline and positioning                                                                   |
| `src/components/ProjectsSection.tsx`   | Jouspace case study, gallery and native image dialog, pipeline, other projects                          |
| `src/components/ExperienceSection.tsx` | Experience list using date ranges                                                                       |
| `src/components/About.tsx`             | Closing biography, full name, education                                                                    |
| `src/components/Contact.tsx`           | Hiring-focused contact, email copy control, social links                                                |
| `src/components/Editorial.tsx`         | Shared section intro, arrow, reduced-motion-aware reveal                                                |
| `src/hooks/useTheme.ts`                | Theme state, persistence, browser theme color                                                           |
| `public/images/jouspace/`              | Optimized copies of user-supplied product visuals                                                       |
| `public/images/about-portrait.png`     | Optimized user-supplied About portrait                                                                  |

The earlier cursor, marquee, tilt, reveal, and media-query helpers are retained in the source folder but are not mounted by the current layout.

## Content evidence

The Jouspace case study is grounded in the public repository and source modules, reviewed on November 14, 2026. See `docs/CONTENT_SOURCES.md` for the source map and scope notes. Other experience, education, and audience figures come from the supplied portfolio and have not been independently verified.

## Surface finish

A faint static paper-grain SVG sits behind the content, with separate opacity values for light and dark modes. It does not intercept interaction or animate, and is disabled for print and forced-color displays. The asset is `public/textures/paper-grain.svg`.

### Graphite and cobalt finish

Cool white and graphite surfaces use a subtle static grain. Cobalt marks the primary hero action, selected controls, and section details. Jouspace has a full-width desktop product presentation with a two-column introduction, a lavender image stage, and numbered captions; mobile uses a stacked layout and square imagery. Browser chrome follows the theme.
