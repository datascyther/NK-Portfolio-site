# Portfolio content sources

Reviewed November 14, 2026. The latest user-supplied profile screenshots and direct clarification take precedence over the original portfolio for biography, role titles, dates, education, and audience figures. No new adoption, latency, revenue, or performance numbers have been invented.

## Professional story and identity

The user supplied updated Experience, Education, About, and profile screenshots on November 14, 2026, then clarified current responsibilities directly.

- Public name: **NK** throughout the website, including navigation, introduction, footer, title, and description. Full name appears only in the About section.
- AI-Native Founder’s Office Intern, Stealth AI Startup, October 2026–present, on-site in Gurugram, Haryana, India. The user leads marketing strategy for online presence and social media, and contributes to core product strategy involving LLMs, model choices, product engineering, and strategic operations. The portfolio preserves the official internship title and describes responsibilities without inferring confidential product details or technical deployments.
- YouTuber (AI & Tech), YouTube, September 2022–present, Greater Delhi Area. Public handle: `@madewithnk`. The user confirmed **170K+ YouTube subscribers** as the audience figure to use. The older monthly-impressions figure is removed.
- Independent Developer, Jouspace, September 2025–present, Greater Delhi Area. This title replaces the previous founder title throughout the displayed case study and experience.
- PM Intern, Pranayuv Technologies, March–August 2026, Vijayawada, Andhra Pradesh, India. The title follows the screenshot without expanding the ambiguous abbreviation. Prior supplied project-operations work is retained; the role is no longer marked current.
- AI Intern, 1M1B, December 2025–January 2026, Greater Delhi Area. Prior supplied IBM SkillsBuild program details are retained.
- Bachelor of Technology, Computer Science and Engineering (Data Science), Dr. A.P.J. Abdul Kalam Technical University, August 2023–March 2027. The end month follows the latest screenshot.
- The supplied About text informs the narrative about treating content like a product: retention analysis, format experiments, and iteration. The channel is described as ongoing alongside engineering.

No private profile analytics from the supplied screenshots are used on the website.

## Jouspace

- Name confirmed by the user: **Jouspace**.
- Website provided by the user: https://jouspace-org.web.app/
- Repository: https://github.com/datascyther/Jouspace
- Package manifest: https://github.com/datascyther/Jouspace/blob/main/package.json — React, TypeScript, Capacitor, Firebase; version 1.1.1 at review time. README/overview version labels lag the manifest, so the portfolio avoids a version badge.
- Product positioning and AI endpoints: https://github.com/datascyther/Jouspace/blob/main/README.md
- Documented architecture, shipped work, and roadmap boundaries: https://github.com/datascyther/Jouspace/blob/main/PROJECT_OVERVIEW.md — this is a dated project overview, not proof of current test counts or current adoption.
- Storage and sync: https://github.com/datascyther/Jouspace/blob/main/src/store/cloudSync.ts — local source of truth, optional Firestore mirror, timestamp-based merges, tombstones.
- Worker capability pipeline: https://github.com/datascyther/Jouspace/blob/main/worker/src/handler.ts — imports shared context, prompt, and schema modules.
- Provider abstraction: https://github.com/datascyther/Jouspace/blob/main/server/gateway/ModelGateway.ts — typed streaming interface, cancellation, provider separation.
- Context: https://github.com/datascyther/Jouspace/blob/main/server/context/ContextAssembler.ts — accepts client entries/profile and also has seed context for development. The portfolio does not claim every request is grounded exclusively in user-selected entries.
- Prompt and stream module paths verified in the public repository tree: `server/prompt/PromptAssembler.ts`, `server/stream/StreamController.ts`, `server/schemas.ts`.

The old portfolio described a different stack (React Native, Expo, Pinecone, Supabase). The visible case study now reflects the supplied public Jouspace repository. Broader skills from the original portfolio are retained in the data file; they are not attributed to Jouspace.

## Boundaries

The portfolio distinguishes writing on-device from optional remote AI processing and sync. It does not claim client-side encryption, additional implemented model providers, or service-worker-based offline web installation. AI and cloud sync require connectivity. Product screenshots are supplied showcase imagery, not an embedded functioning app. The “Open web app” action opens the real product.

## Assets

Product images and the portrait were supplied directly by the user. Optimized copies are stored in `public/images/`; originals in Downloads are unchanged. Four views (Home, Memory, AI, Journal) are used to demonstrate the product rather than every supplied image.

## Upstream

Portfolio repository provided by the user: https://github.com/datascyther/NK-Portfolio-site. The local source folder is connected to this repository for version control. Production publishing uses the existing Firebase Hosting sites configured in `firebase.json`.
