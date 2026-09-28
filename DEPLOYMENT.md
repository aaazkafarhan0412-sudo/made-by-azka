# Deploying made.byazka — GitHub + Vercel

You need: **Node.js 18+**, **Git**, a **GitHub** account and a **Vercel** account (free Hobby plan is enough).

---

## 1 · Test it locally first

```bash
npm install
npm run dev
```

Open the printed URL (usually `http://localhost:5173`). To preview the exact production build:

```bash
npm run build
npm run preview
```

---

## 2 · Push the project to GitHub

Inside the project folder:

```bash
git init
git add .
git commit -m "Made by Azka — portfolio site"
git branch -M main
```

Now create an **empty** repository on github.com (no README, no .gitignore — those already exist here),
then connect and push it:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

> `.gitignore` is already configured, so `node_modules` and `dist` are never uploaded.

---

## 3 · Deploy on Vercel (recommended)

**Option A — Dashboard (easiest)**

1. Go to <https://vercel.com/new> and sign in with **GitHub**.
2. Click **Import** next to your repository.
3. Vercel auto-detects everything (a `vercel.json` is included):
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. In ~30 seconds you get a live URL like
   `https://your-repo.vercel.app`.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel login
vercel          # first deploy (preview URL)
vercel --prod   # live production URL
```

Every future `git push` to `main` redeploys automatically. Pull requests get their own preview URL.

---

## 4 · Custom domain (optional)

1. Vercel dashboard → your project → **Settings → Domains** → add `madebyazka.com` (or any domain).
2. At your domain provider, add the records Vercel shows you (usually an `A` record to `76.76.21.21`
   or a `CNAME` to `cname.vercel-dns.com`).
3. HTTPS is issued automatically.

---

## 5 · Alternative: GitHub Pages (also ready to go)

A workflow is included at `.github/workflows/deploy.yml`.

1. GitHub repo → **Settings → Pages**.
2. **Source** → *Deploy from a branch* is *not* needed; choose **GitHub Actions**.
3. Push to `main` — the workflow builds and publishes automatically.
4. Your site appears at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

The production build inlines all CSS, JS and portfolio artwork into a single `index.html`, so it works
from any sub-folder without extra path configuration.

---

## 6 · Updating the site later

| Change                        | Where                                                                 |
| ----------------------------- | --------------------------------------------------------------------- |
| Text, links, prices (PKR)     | `src/config/site.ts`                                                  |
| Instagram handle / email      | `src/config/site.ts` → `brand`                                        |
| Connect a real Instagram post | `src/config/site.ts` → `showcase` → paste the post URL into `link`     |
| Portfolio images              | `src/config/site.ts` (or drop files in `src/assets/` and import them)  |
| Logo                          | `src/components/Logo.tsx` (or pass `imageSrc="/logo.png"`)            |
| Colours                       | `src/index.css` → `@theme`, or presets in `src/config/palettes.ts`    |

Then:

```bash
git add .
git commit -m "Update portfolio"
git push        # Vercel / GitHub Pages rebuild automatically
```

---

## 7 · Good to know

- **The contact form needs no server.** On submit it validates the fields and opens the visitor's own
  email app with the message pre-filled to `aaazkafarhan0412@gmail.com`. If you later want submissions
  stored/emailed automatically, add a free [Formspree](https://formspree.io) or
  [Web3Forms](https://web3forms.com) endpoint in `src/sections/Contact.tsx` (`onSubmit`).
- **Images:** portfolio artwork is bundled into the build; the photography comes from Pexels URLs.
  Replace any URL in `src/config/site.ts` with your own post export.
- **Fonts** load from Google Fonts (Fraunces + Jost) — no install needed.
- **Instagram API:** the grid uses your own images/links, so no token or app review is required. If you
  ever want the feed to update itself, that needs a Meta API token and a small serverless function.
