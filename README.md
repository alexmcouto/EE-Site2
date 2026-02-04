# Ensul Engenharia, S.A. Corporate Website

Production-ready corporate website for Ensul Engenharia, S.A. built with Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui components.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui (Radix UI)
- React Hook Form + Zod
- Framer Motion (optional, minimal)
- @vercel/analytics + @vercel/speed-insights
- ESLint + Prettier

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`.

## Environment Variables
Create `.env.local` with the following keys as needed:
- `RESEND_API_KEY` (optional)
- `CONTACT_TO_EMAIL` (optional)
- `CONTACT_FROM_EMAIL` (optional; defaults to `onboarding@resend.dev`)
- `NEXT_PUBLIC_SITE_URL` (recommended for sitemap and metadata; e.g., `https://example.com`)

If `RESEND_API_KEY` or `CONTACT_TO_EMAIL` are missing, the contact form still returns success and logs the payload server-side.

## Contact Form Notes
- Client-side validation with React Hook Form + Zod.
- Honeypot field (`website`) for spam filtering.
- Basic IP-based rate limiting in memory (development-friendly). For production, consider persisting limits in Vercel KV or a similar store.

## Quality Checks
```bash
npm run lint
npm run build
```

## Vercel Deployment
### CLI
1. Authenticate:
   ```bash
   vercel login
   ```
2. Link or create the project:
   ```bash
   vercel link
   # or
   vercel
   ```
3. Set environment variables:
   ```bash
   vercel env add RESEND_API_KEY
   vercel env add CONTACT_TO_EMAIL
   vercel env add CONTACT_FROM_EMAIL
   vercel env add NEXT_PUBLIC_SITE_URL
   ```
4. Deploy to production:
   ```bash
   vercel --prod
   ```

### Git Integration
- Import the repository into Vercel.
- Configure the same environment variables in the Vercel dashboard.
- Push to the tracked branch to trigger a production deployment.

## Project Structure
- `src/content/` contains all site copy and project data.
- `src/components/` contains reusable UI components and layout elements.
- `src/app/` contains App Router pages, layout, sitemap, and robots configuration.
