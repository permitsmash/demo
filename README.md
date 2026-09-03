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

The contact form submits to a local API route (`/api/contact`) that delivers email to the school's public inbox. Configure delivery with:

```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=...              # server-side only
SCHOOL_CATALOG_SLUG=jmc-driving-school     # optional; defaults to jmc-driving-school
```

Website contact submissions are routed by `SCHOOL_CATALOG_SLUG` to `schools.website_contact_email` in Permit Smash (for JMC: `contact@jmcdrivingschool.com`). The dashboard `contact_email` is not used for website forms.
