# Project Context: AL Bechir Marketing Website

Use this file as the reusable context anchor for future Codex sessions on this project.

## Continuation Prompt

Paste this into a new Codex session:

```md
You are working in `C:\Users\Mazin\Desktop\Projects\ag`.

Read `PROJECT_CONTEXT.md` and `AGENTS.md` before editing. This project uses Next.js 16.2.6, and `AGENTS.md` says this is not the Next.js you know: before Next-specific changes, read the relevant local docs under `node_modules/next/dist/docs/`.

This is the AL Bechir marketing website, a polished conversion-focused one-page Next.js site for website development, landing pages, e-commerce, and Meta Ads services. The site should drive users to the consultation/contact form and WhatsApp, show credible selected work previews, and feel premium on desktop, tablet, and mobile.

The user cares about exact visual outcomes. Browser-comment annotations are actionable acceptance criteria. Avoid close-but-wrong claims: verify visible UI changes in the browser when possible.

Current tech stack:
- Next.js `16.2.6` App Router
- React `19.2.4`
- TypeScript
- Tailwind CSS v4 through `src/app/globals.css`
- Framer Motion for entrance animations and modal transitions
- Lucide React icons
- React Hook Form + Zod for contact form validation
- Resend `^6.12.3` for sending contact form emails

Architecture overview:
- Entry page: `src/app/page.tsx`
- Global shell/metadata: `src/app/layout.tsx`
- Global styles/theme/animations: `src/app/globals.css`
- API route: `src/app/api/contact/route.ts`
- Layout:
  - `src/components/layout/navbar.tsx`
  - `src/components/sections/footer.tsx`
- Sections:
  - `src/components/sections/hero-section.tsx`
  - `src/components/sections/services-section.tsx`
  - `src/components/sections/why-choose-section.tsx`
  - `src/components/sections/process-section.tsx`
  - `src/components/sections/portfolio-section.tsx`
  - `src/components/sections/cta-section.tsx`
- Data:
  - `src/data/navigation.ts`
  - `src/data/services.ts`
  - `src/data/features.ts`
  - `src/data/process.ts`
  - `src/data/portfolio.ts`
  - `src/data/country-codes.ts`
- Form schema:
  - `src/lib/schemas/contact.ts`
- Static assets:
  - `public/images/logo/`
  - `public/images/generated/`
  - `public/images/portfolio/`
  - favicon/icon assets exist under `public/` and `src/app/`.
  - favicon assets were generated from the AL Bechir logo mark:
    - `src/app/favicon.ico`
    - `src/app/icon.png`
    - `src/app/apple-icon.png`
    - `public/favicon.ico`
    - `public/favicon.png`
    - `public/icon.png`
    - `public/apple-icon.png`

Important project constraints:
- Keep components small and modular.
- Use `apply_patch` for manual file edits.
- Do not revert unrelated user changes. The working tree may be dirty.
- Preserve footer legal name spelling exactly unless user asks otherwise:
  `AL Bechir for Global Buisness LLC`
- Header Services link must point to `/#services`.
- Services dropdown is intentionally removed/hidden. Do not re-add unless requested.
- About is intentionally removed from the header menu for now.
- All `Get Free Consultation` CTAs should navigate/scroll to `/#contact`.
- The design is now light-background-first. Keep section backgrounds light. Preserve blue for CTAs, highlights, icons, pills, and accents.
- Avoid dark section backgrounds unless the user explicitly asks for one.
- Avoid portfolio hover flicker, white flashes, aggressive image scaling, and unstable card lift.
- Do not add instructional UI copy or landing-page explanations.
- For UI work, test responsive desktop/mobile. The user often checks `416x1030`, `768x1030`, and desktop around `1171x1030`.

Current design/visual state:
- The site was converted from a dark-section design to mostly light backgrounds.
- Navbar is light glass/white and uses the transparent header logo:
  `public/images/logo/al-bechir-logo-header-transparent.png`
- The original `al-bechir-logo.png` and `al-bechir-logo-transparent.png` assets had white canvas backgrounds. A cleaned transparent PNG was generated for the header.
- Hero is light blue/white with dark text and blue highlights.
- Hero image is visible on mobile/tablet and appears before the text on those breakpoints.
- Hero image is rendered as a cover-style frame on mobile/tablet, while desktop keeps the two-column feel.
- Hero mobile top gap under the fixed nav was reduced; at `416px` the gap below nav was verified around `19px`.
- Latest mobile hero polish:
  - Hero H1 is intentionally smaller on mobile than the desktop/tablet sizes.
  - On mobile the headline uses `text-[2.25rem] min-[390px]:text-[2.35rem]`, then returns to larger `sm`/desktop sizes.
  - The trust-badge block below the hero CTAs has reduced mobile spacing: `mt-11 pt-5`, with desktop still `lg:mt-16 lg:pt-7`.
  - Trust badge mobile grid gap is tighter (`gap-4`) to reduce vertical bulk.
- Section vertical padding for Services, Why Choose, Process, Portfolio, and Contact was reduced by 35% from `py-24 lg:py-32` to `py-[3.9rem] lg:py-[5.2rem]`.
- Latest Services mobile polish:
  - `services-section.tsx` uses reduced mobile section padding: `py-12`.
  - Services heading margin is tighter on mobile: `mb-10`.
  - Service cards are compact and centered on mobile: `items-center`, `text-center`, `p-5`, with no mobile `min-h`.
  - Desktop/tablet alignment returns at `sm` and `lg`: `sm:items-start sm:text-left`, `sm:min-h-[300px]`, `lg:min-h-[344px]`.
- Browser scrollbar/selection styling was updated to be light-theme-friendly.

Current navigation/footer behavior:
- Header `navLinks` in `src/data/navigation.ts`:
  - Home -> `/`
  - Services -> `/#services`
  - Packages -> `/packages`
  - Contact -> `/contact`
- Footer quick links intentionally use:
  - Home -> `#`
  - Services -> `/#services`
  - Packages -> `#`
  - Contact -> `#`
- Footer services all point to `/#services`.
- Footer React keys were fixed to use label-based keys, not href-based keys, because multiple footer links intentionally share `#` or `/#services`.
- Footer contact:
  - Phone: `+971 50 232 3186`
  - Email: `info@albechir.com`
  - Location: `Dubai, UAE`
  - Hours row was removed from footer rendering.
  - WhatsApp link is `https://wa.me/971502323186`.
- Latest footer mobile polish:
  - Footer uses a mobile two-column grid.
  - Brand block spans both columns on mobile and centers the logo/text/social icons.
  - Quick Links and Services sit in two compact mobile columns.
  - Contact spans both columns on mobile for readable phone/email/location rows.
  - Footer vertical padding is tighter on mobile: `py-10 sm:py-14 lg:py-20`.

Current contact form behavior:
- `cta-section.tsx` uses React Hook Form + Zod.
- Form fields:
  - name
  - country code dropdown/search
  - phone
  - email
  - need selector
- Email validation is required.
- Phone validation is required, with reasonable mobile number constraints.
- Country code dropdown uses all countries from `src/data/country-codes.ts`.
- `What do you need?` is a disabled placeholder, not a real selectable option.
- The team card says `AL Bechir Team` and `+5 experts`.
- Form posts to `POST /api/contact`.

Current Resend/email behavior:
- Contact email sending is implemented in `src/app/api/contact/route.ts`.
- The route:
  - validates with `contactFormSchema`
  - logs the submission server-side
  - requires `RESEND_API_KEY`
  - uses `new Resend(process.env.RESEND_API_KEY)` inside the handler, after checking the env var, so builds do not fail when the key is missing
  - sends to `process.env.CONTACT_EMAIL_TO ?? "info@albechir.com"`
  - sends from `process.env.RESEND_FROM_EMAIL ?? "AL Bechir <onboarding@resend.dev>"`
  - sets `replyTo` to the submitter email
  - returns the real Resend error message on failure instead of a generic message
- `.env` exists locally and contains secret values. Never print or expose secrets.
- `.env` currently has:
  - `RESEND_API_KEY` set
  - `RESEND_FROM_EMAIL=AL Bechir <noreply@albechir.com>`
  - `CONTACT_EMAIL_TO=info@albechir.com`
- `albechir.com` was verified in Resend.
- A real local API test was sent successfully after domain verification:
  - response was `200`
  - message: `Message sent successfully`
  - Resend id: `a541c150-ec46-476a-bb62-14fc3553b8cd`
- If the email fails with Resend’s testing-recipient restriction, check that `RESEND_FROM_EMAIL` is not still using `onboarding@resend.dev`, then restart the dev server so env changes load.
- After env changes, restart the dev server. Next dev does not reliably pick up all env changes in an already-running process.

Current portfolio behavior:
- `src/components/sections/portfolio-section.tsx` renders four selected work cards.
- Current cards:
  - Conversion Optimized Product Page
    - category: `Shopify Store`
    - cover: `/images/portfolio/product-page-cover.jpg`
    - preview: `/images/portfolio/product-page-preview.jpg`
    - preview dimensions: `1086 x 1448`
  - Real Estate Website
    - category: `WordPress Website`
    - cover: `/images/portfolio/realestate-cover.jpg`
    - preview: `/images/portfolio/realestate-preview.jpg`
    - preview dimensions: `941 x 1672`
  - SaaS Customer Support
    - category: `Landing Page`
    - cover: `/images/portfolio/cleaning-cover.jpg`
    - preview: `/images/portfolio/cleaning-preview.jpg`
    - preview title remains `Cleaning Services Landing Page`
    - preview dimensions: `941 x 1672`
  - Dental Clinic
    - category: `Custom Website`
    - cover: `/images/portfolio/dental-cover.jpg`
    - preview: `/images/portfolio/dental-preview.jpg`
    - preview dimensions: `941 x 1672`
- Cover images were regenerated from taller sections of the full preview screenshots so cards show more page content, not only above-the-fold hero sections.
- Card hover overlay/icon was removed due to flicker/white flash.
- Card image rendering should remain stable: no aggressive zoom scale.
- Portfolio modal supports:
  - close button
  - Escape key
  - overlay click
  - content-sized image panel instead of a too-tall empty panel
  - mobile zoom in/out controls using plus/minus buttons
  - scroll/pan inside popup when zoomed
- The modal overlay can stay dark for focus, even though page sections should stay light.

Current CTA animation:
- Blue CTAs use `.cta-attention` in `globals.css`.
- It is a deliberate stronger shake/glow animation.
- The user previously rejected weaker pulse/sheen animation as bad.
- If adjusting, keep it obvious but polished, not broken-looking.

Validation workflow:
- Run `npm run lint`.
- Run `npm run build`.
- For UI changes, verify in browser against `http://localhost:3002/`.
- Most recent validation after favicon work:
  - `npm run lint` passed.
  - `npm run build` passed.
  - Build output included static routes for `/icon.png` and `/apple-icon.png`.
- Most recent visual spot check after mobile polish:
  - In-app browser mobile viewport was checked at `424x1030`.
  - Hero H1, hero/trust-badge spacing, and service cards visually matched the requested mobile tightening.
  - The browser viewport override was restored to `1280x720` after the check.
- The local dev server should run on `http://localhost:3002/`.
- To start it:
  `npm run dev -- --port 3002`
- If port 3002 is in use, either use the existing server or stop/restart the owning process.
- After env changes, restart the dev server.

Deployment status:
- GitHub remote is configured:
  `origin https://github.com/mazinadil/albechir.git`
- Initial clean commit was pushed to GitHub after removing `.playwright-mcp/` artifacts from tracking.
- `.playwright-mcp/` and `.vercel` are ignored in `.gitignore`.
- Vercel CLI auth is working for user:
  `mazinadil21-4050`
- Vercel CLI exists at:
  `C:\Users\Mazin\AppData\Roaming\npm\vercel.ps1`
- Vercel project is linked locally in `.vercel/project.json`:
  - org/team: `zoupeens-projects`
  - project: `ag`
  - projectId: `prj_FuFaVQFtb3t1qKfF4FJW9wmonNaf`
- Production domain:
  `https://www.albechir.com`
- Current Vercel production alias has been deployed successfully multiple times with:
  `vercel deploy . --prod -y`
- Most recent production deployment in this thread:
  `https://ag-m216hqsaj-zoupeens-projects.vercel.app`
- Previous successful production deployment:
  `https://ag-7ljy923us-zoupeens-projects.vercel.app`
- Latest preview deployment before production:
  `https://ag-eqb9te15u-zoupeens-projects.vercel.app`
- Vercel warned during builds that a local `.env` file was detected. Move env values into Vercel Environment Variables for production instead of relying on local `.env`.
- DNS/domain note:
  - `DNS_PROBE_FINISHED_NXDOMAIN` for `www.albechir.com` was not a deploy/code issue.
  - `nslookup www.albechir.com` returned NXDOMAIN at the time of diagnosis.
  - Vercel reported the domain was connected to project `ag` but DNS was not configured properly.
  - Vercel expected DNS records at the provider:
    `A albechir.com 76.76.21.21`
    `A www.albechir.com 76.76.21.21`
  - Cloudflare nameservers seen at that time:
    `connie.ns.cloudflare.com`
    `greg.ns.cloudflare.com`
- Do not claim Vercel deployment is complete unless it actually succeeds.
- For Vercel deployment, ensure env vars are configured in Vercel:
  - `RESEND_API_KEY`
  - `RESEND_FROM_EMAIL=AL Bechir <noreply@albechir.com>`
  - `CONTACT_EMAIL_TO=info@albechir.com`
  - plus any analytics/Turnstile vars if used later

Known current focus:
- The site is in final visual polish and operational setup.
- Vercel deployment now works from this machine.
- The live production domain is `https://www.albechir.com`.
- The most recent confirmed deployment command was a successful production deploy.
- Latest completed local work:
  - Added AL Bechir favicon and app/apple icon assets from the logo mark.
  - Added favicon metadata in `src/app/layout.tsx`.
  - Tightened mobile hero heading size.
  - Reduced mobile trust-badge spacing.
  - Made mobile service cards smaller and centered.
  - Reworked mobile footer menus into a cleaner responsive layout.
- The working tree is dirty and includes user changes plus untracked assets/routes. Do not revert unrelated changes.
- Next likely tasks:
  - final UI polish on the light theme
  - verify mobile/tablet layout after light-theme conversion
  - commit/push the current uncommitted work when user is ready
  - configure/check Vercel production env vars
  - confirm DNS for `www.albechir.com`
  - test production contact email after deploy

Be direct and execution-focused. Read relevant files before editing. Use `apply_patch` for manual changes. Keep the implementation modular and consistent with existing patterns. Do not revert unrelated user changes.
```

## Project Goal

Build a polished conversion-focused website for AL Bechir that presents services, selected work, business trust signals, and a clear consultation funnel. The site should drive users toward the contact form and WhatsApp while showing credible project previews. The current direction is a premium, business-focused, light-background site with blue brand accents.

## Tech Stack

- Next.js `16.2.6`
- React `19.2.4`
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- React Hook Form
- Zod
- Resend `^6.12.3`

## Architecture Overview

```text
src/
  app/
    layout.tsx              Metadata, font, global shell
    page.tsx                Section composition
    globals.css             Theme tokens, animations, shared utilities
    api/contact/route.ts    Contact API route using Resend
    contact/                Contact route/page exists in current worktree
  components/
    layout/
      navbar.tsx
    sections/
      hero-section.tsx
      services-section.tsx
      why-choose-section.tsx
      process-section.tsx
      portfolio-section.tsx
      cta-section.tsx
      footer.tsx
    ui/                     shadcn-style primitives
  data/
    navigation.ts
    services.ts
    features.ts
    process.ts
    portfolio.ts
    country-codes.ts
  lib/
    schemas/contact.ts
    utils.ts
public/
  images/
    generated/
    logo/
    portfolio/
  favicon.ico
  favicon.png
  icon.png
  apple-icon.png
```

## Important Constraints

- Follow `AGENTS.md`: before Next-specific edits, consult the local docs in `node_modules/next/dist/docs/`.
- Keep the site light-background-first unless the user requests otherwise.
- Keep blue brand accents for buttons, highlights, pills, icons, focus rings, and important text.
- Preserve footer legal name spelling: `AL Bechir for Global Buisness LLC`.
- Keep Services routed to `/#services`.
- Keep `Get Free Consultation` CTAs routed to `/#contact`.
- Keep Services dropdown hidden unless requested.
- Keep About out of the header unless requested.
- Avoid portfolio hover flicker, white flashes, text overlap, layout shift, and unstable transforms.
- Keep generated favicon/app icon assets aligned with the AL Bechir logo mark.
- Do not print `.env` secrets. Mask env values when inspecting.
- Restart dev server after env changes.
- Do not claim deployment or email delivery unless actually verified.

## Coding Conventions

- Use `apply_patch` for manual edits.
- Keep components small and data-driven where practical.
- Prefer existing Tailwind and Framer Motion patterns.
- Keep comments sparse and useful.
- Do not revert unrelated user changes in a dirty worktree.
- Run:
  - `npm run lint`
  - `npm run build`
- Browser-test visible UI changes on `http://localhost:3002/` when possible.

## Current Focus

The site is in final visual polish and launch-prep mode.

Most recent completed work:
- Light-background conversion for dark sections.
- Transparent header logo generated and used.
- Favicon, app icon, and Apple touch icon assets generated from the AL Bechir mark and wired through Next metadata.
- Mobile hero typography tightened so the H1 is smaller at phone widths.
- Mobile hero trust-badge spacing reduced.
- Mobile service cards made more compact and centered.
- Mobile footer reorganized into a cleaner two-column layout.
- Portfolio cover and modal behavior refined.
- Footer/contact details corrected.
- Contact form wired to Resend.
- `albechir.com` verified in Resend.
- Local Resend test to `info@albechir.com` succeeded with sender `AL Bechir <noreply@albechir.com>`.
- GitHub remote configured and initial clean commit pushed to:
  `https://github.com/mazinadil/albechir.git`
- Vercel project linked and deployed to production.
- Live production domain:
  `https://www.albechir.com`
- Latest production deployment recorded in this thread:
  `https://ag-m216hqsaj-zoupeens-projects.vercel.app`
- DNS issue diagnosed: `www.albechir.com` returned NXDOMAIN before DNS records were corrected/propagated; Vercel expected A records to `76.76.21.21`.

Next likely work:
- Final responsive visual QA.
- Commit/push the current uncommitted working-tree changes when ready.
- Configure production env vars in Vercel instead of relying on local `.env`.
- Confirm DNS propagation for `www.albechir.com`.
- Production contact form verification after deploy.
