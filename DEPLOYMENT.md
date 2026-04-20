# Hallwiler Triathlon Website - Deployment Guide

## 🎉 Your Website is Ready!

The Hallwiler Triathlon website is built and ready to deploy to Vercel. Here's how to do it:

## Quick Start: Vercel Deployment

### Option 1: Easiest Way (Recommended)

1. **Go to GitHub and create a new repository**
   - Visit https://github.com/new
   - Name: `hallwiler-triathlon-web` (or any name you prefer)
   - Description: "Hallwiler Triathlon website 2026"
   - Make it **Public** (free Vercel deployment for public repos)
   - Click "Create repository"

2. **Push your local code to GitHub**
   ```bash
   cd /Users/nicoclerici/Documents/Arbeit/hallwiler-triathlon-web
   git remote add origin https://github.com/YOUR-USERNAME/hallwiler-triathlon-web.git
   git branch -M main
   git push -u origin main
   ```
   (Replace `YOUR-USERNAME` with your actual GitHub username)

3. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your GitHub repo `hallwiler-triathlon-web`
   - Click Import
   - Vercel will auto-detect Next.js and configure it
   - Click "Deploy"
   - Done! Your site will be live in 1-2 minutes

### Option 2: Deploy Direct from Vercel CLI

```bash
npm i -g vercel
cd /Users/nicoclerici/Documents/Arbeit/hallwiler-triathlon-web
vercel
```

## What's Included

✅ **4 Main Sections:**
- **Hero**: Title, event name, date (9. Mai 2026)
- **Das Event (Info)**: Distances - 750m Swim, 45km Bike, 8km Run
- **Die Routen (Routes)**: Strava activity embeds for all 3 disciplines
- **Anmeldung (Registration)**: Button linking to your Google Form

✅ **Design**: 
- Clean, minimal design with blue accent color
- Fully responsive (mobile, tablet, desktop)
- German language throughout
- Fast load times with Next.js

✅ **Technical**:
- Built with Next.js 16.2.4
- Styled with Tailwind CSS
- TypeScript for type safety
- Optimized for Vercel deployment

## After Deployment

Your site will be live at: `https://hallwiler-triathlon-web.vercel.app`

You can:
- **Custom domain**: Add your own domain (settings in Vercel)
- **Updates**: Edit files locally, push to GitHub, auto-deploys
- **Analytics**: Vercel provides free analytics
- **Environment Variables**: Add secrets/keys in Vercel dashboard if needed

## Local Development

To run locally:
```bash
cd /Users/nicoclerici/Documents/Arbeit/hallwiler-triathlon-web
npm run dev
```
Then open http://localhost:3000

## File Structure

```
hallwiler-triathlon-web/
├── app/
│   ├── layout.tsx          # Main layout, metadata
│   ├── page.tsx            # Homepage with all sections
│   └── globals.css         # Global styles
├── public/                 # Static files
├── package.json            # Dependencies
├── next.config.ts          # Next.js config
├── tailwind.config.ts      # Tailwind styles
└── tsconfig.json          # TypeScript config
```

## Troubleshooting

**Strava embeds not loading?**
- Wait 30 seconds after deploying, they load dynamically
- Check browser console for any errors

**Build fails?**
- Run `npm run build` locally to see errors
- Check Node.js version: `node --version` (should be v18+)

**Need to update content?**
- Edit `app/page.tsx` for website content
- Edit `app/layout.tsx` for title/description
- Push to GitHub, Vercel auto-deploys

## Questions?

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Edit content**: Modify `app/page.tsx`
- **Change colors**: Edit the Tailwind classes in `app/page.tsx`

---

Happy deploying! 🚀
