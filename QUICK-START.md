# QUICK START GUIDE
## Deploy Your Landing Page in 15 Minutes

Follow these steps to get your landing page live on Vercel.

---

## ✅ STEP 1: Deploy to Vercel (5 minutes)

### Option A: GitHub + Vercel (Recommended)

1. **Create GitHub Repository**
   ```bash
   cd /path/to/palecero-landing
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create New Repo on GitHub**
   - Go to github.com
   - Click "New Repository"
   - Name it: `palecero-landing`
   - Don't initialize with README (you already have one)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/palecero-landing.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your `palecero-landing` repo
   - Framework Preset: **Other** (it's static HTML)
   - Click "Deploy"

**Done!** Your site is live at `your-project.vercel.app`

### Option B: Vercel CLI (Alternative)

```bash
npm install -g vercel
cd /path/to/palecero-landing
vercel
```

Follow prompts, choose default settings.

---

## ✅ STEP 2: Test Your Site (2 minutes)

Visit your Vercel URL and test:

- [ ] Page loads correctly
- [ ] Form appears (placeholder)
- [ ] All sections visible
- [ ] Mobile responsive
- [ ] Test all 3 URLs:
  - `?source=corporate`
  - `?source=faculty`
  - `?source=lifestyle`

---

## ✅ STEP 3: Share with Team (1 minute)

Send this URL to:
- Property manager
- Marketing team
- Whoever needs to review

**They can see the live page immediately** (even before DNS is set up)

---

## 📝 NEXT STEPS (For Later)

### Before Launch:

**Images (30 min):**
1. Get photos from Joe
2. Optimize images
3. Replace placeholders
4. Push to GitHub → Auto-deploys

**GoHighLevel Setup (15 min):**
1. Follow `SETUP-GUIDE.md`
2. Create form + calendar
3. Replace placeholder form
4. Test submission

**Custom Domain (Next Week):**
1. Property management adds DNS:
   ```
   Type: CNAME
   Name: tour
   Value: cname.vercel-dns.com
   ```
2. Add domain in Vercel settings
3. Wait 5-15 minutes for DNS
4. **Live at:** `tour.paleceroliving.com`

---

## 🎉 YOU'RE LIVE!

Your landing page is now:
- ✅ Deployed and accessible
- ✅ Mobile-optimized
- ✅ Fast-loading
- ✅ Ready for testing

**Share the Vercel URL** with your team now!

---

## 🆘 TROUBLESHOOTING

**Vercel deployment failed:**
- Check all files are committed
- Verify no syntax errors in HTML/CSS/JS
- Check Vercel build logs

**Page loads but looks broken:**
- Check CSS file path in HTML
- Verify all files pushed to GitHub
- Clear browser cache and reload

**Can't push to GitHub:**
- Verify git remote is correct
- Check GitHub repository exists
- Ensure you're on `main` branch

---

## 📞 QUICK REFERENCE

**Your Vercel Dashboard:**
https://vercel.com/dashboard

**Your GitHub Repo:**
https://github.com/YOUR-USERNAME/palecero-landing

**Need Help?**
- Check README.md for detailed instructions
- Review SETUP-GUIDE.md for GHL integration
- See IMAGE-CHECKLIST.md for photo requirements

---

**Estimated Time to Full Launch:**
- Deploy now: 5 minutes ✅
- Share with team: Immediate ✅
- Replace images: 30 minutes
- GHL setup: 15 minutes
- Custom domain: Next week
- **Total active work: ~1 hour**

Let's go! 🚀
