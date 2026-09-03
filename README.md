# JMC Driving School Website

Next.js marketing site for [JMC Driving School](https://jmcdrivingschool.com/) in Waltham, MA.

## Project location

Use **this folder only**:

```bash
/Users/dineshreddy/Desktop/school
```

An older duplicate copy previously lived at `~/Desktop/imp/school` and has been archived to avoid editing the wrong project.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm run start` — run the production server
- `npm run lint` — run ESLint

## Shared content

Site-wide branding, contact info, and Google reviews live in `src/lib/site.ts`.

## Contact form

The contact form submits to the Permit Smash public API (`/api/public/schools/{slug}/contact`). Configure the school slug and API base URL if needed:

```bash
CATALOG_API_BASE_URL=https://permitsmash.com   # optional
SCHOOL_CATALOG_SLUG=jmc-driving-school         # optional
```

Email delivery is handled by Permit Smash via a Supabase edge function (`public_school_contact`) that uses the existing Resend secrets — no extra email env vars on the school site.
