# The Villas at Palecero - Landing Page
## Deployment & Setup Instructions

This landing page is built with vanilla HTML, CSS, and JavaScript for maximum performance and easy deployment to Vercel.

---

## 🚀 QUICK START (5 Minutes)

### Step 1: Deploy to Vercel

1. **Create GitHub Repository**
   ```bash
   cd palecero-landing
   git init
   git add .
   git commit -m "Initial commit: Palecero landing page"
   ```

2. **Push to GitHub**
   ```bash
   # Create a new repository on GitHub first, then:
   git remote add origin https://github.com/YOUR-USERNAME/palecero-landing.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - **Framework Preset:** Other (it's static HTML)
   - Click "Deploy"
   
   **Done!** You'll get a URL like `palecero-landing.vercel.app`

---

## 🔗 CUSTOM DOMAIN SETUP (Next Week)

### When DNS Access is Ready:

1. **Add Custom Domain in Vercel**
   - Go to your project settings
   - Click "Domains"
   - Add domain: `tour.paleceroliving.com`

2. **Update DNS Records (Property Management Company Needs to Do This)**
   ```
   Type: CNAME
   Name: tour
   Value: cname.vercel-dns.com
   TTL: 3600 (or Auto)
   ```

3. **Wait for DNS Propagation**
   - Usually 5-15 minutes
   - Vercel will auto-detect and configure SSL

**Your landing page will then be live at:** `https://tour.paleceroliving.com`

---

## 📸 IMAGE REPLACEMENT CHECKLIST

### CRITICAL Images (Replace First):

**Location:** `/images/` folder

#### Hero Images (3 variants):
- [ ] `hero-corporate.jpg` - Person in garage OR modern kitchen, professional vibe
- [ ] `hero-faculty.jpg` - Peaceful exterior, calm morning aesthetic
- [ ] `hero-lifestyle.jpg` - Active amenity space (pickleball/fire pit)

#### Feature Images:
- [ ] `placeholder-garage.jpg` → Private garage interior (clean, spacious)
- [ ] `placeholder-kitchen.jpg` → Modern kitchen (quartz counters, stainless appliances)
- [ ] `placeholder-living.jpg` → Spacious living room (modern, staged)
- [ ] `placeholder-bedroom.jpg` → Bedroom (large windows, natural light)
- [ ] `placeholder-pickleball.jpg` → Pickleball court
- [ ] `placeholder-dogpark.jpg` → Dog park
- [ ] `placeholder-firepit.jpg` → Fire pit area

#### Other Images:
- [ ] `placeholder-map.jpg` → Location map showing proximity to Walmart HQ, U of A
- [ ] `palecero-logo.png` → Official Villas at Palecero logo

### Optional Video (HIGH Impact):

**Location:** `/videos/hero-loop.mp4`

**Replace:** Placeholder image in hero section with 15-30 second looping video

**Content:** 
- Garage door opening
- Walking through interior
- Showing amenities
- Can be shot on iPhone - golden hour lighting

**To Enable Video:**
Uncomment lines 85-88 in `index.html`:
```html
<video class="hero-video" autoplay muted loop playsinline>
    <source src="/videos/hero-loop.mp4" type="video/mp4">
</video>
```

---

## 🎯 DYNAMIC CONTENT (3 Audience Variants)

### How It Works:

The landing page automatically loads different content based on URL parameters:

**Corporate Relocators:**
```
https://tour.paleceroliving.com/?source=corporate
```

**University Faculty/Staff:**
```
https://tour.paleceroliving.com/?source=faculty
```

**Young Professionals:**
```
https://tour.paleceroliving.com/?source=lifestyle
```

### What Changes:
- Hero headline
- Lifestyle section title
- Hero background image
- Social proof badge (shown/hidden)

### Use in Your Ads:
Set each ad to point to the appropriate URL variant:
- **Ad #1 (Corporate):** `?source=corporate`
- **Ad #2 (Faculty):** `?source=faculty`
- **Ad #3 (Lifestyle):** `?source=lifestyle`

---

## ⚙️ GOHIGHLEVEL INTEGRATION

See **SETUP-GUIDE.md** for complete GHL setup instructions.

### Quick Summary:

1. **Replace Form** (index.html, line ~350)
   - Create form in GHL
   - Copy embed code
   - Replace placeholder form

2. **Add Calendar Link** (confirmation.html)
   - Create calendar in GHL
   - Copy booking link
   - Replace placeholder link

**Total Setup Time:** ~15 minutes

---

## 🧪 TESTING BEFORE LAUNCH

### Test Checklist:

**Mobile Testing:**
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Check all buttons work
- [ ] Verify form is easy to fill
- [ ] Confirm images load properly

**Desktop Testing:**
- [ ] Test on Chrome
- [ ] Test on Safari
- [ ] Test on Firefox
- [ ] Verify all sections render correctly
- [ ] Check modal opens/closes properly

**Functionality Testing:**
- [ ] Form submits correctly
- [ ] Redirects to confirmation page
- [ ] Calendar link works
- [ ] "Apply Now" instructions modal opens
- [ ] Opens paleceroliving.com in new tab
- [ ] Add to calendar buttons work

**Dynamic Content Testing:**
- [ ] Test `?source=corporate` URL
- [ ] Test `?source=faculty` URL
- [ ] Test `?source=lifestyle` URL
- [ ] Verify headlines change correctly
- [ ] Check images swap properly

**End-to-End Testing:**
- [ ] Fill out form as real customer
- [ ] Book tour time in GHL calendar
- [ ] Verify notifications sent
- [ ] Check contact created in GHL
- [ ] Test "Apply Now" flow

---

## 📁 FILE STRUCTURE

```
palecero-landing/
├── index.html              # Main landing page
├── confirmation.html       # Post-booking confirmation
├── styles.css             # All styling
├── script.js              # Dynamic content & interactions
├── SETUP-GUIDE.md         # GoHighLevel setup instructions
├── README.md              # This file
└── images/                # Image assets
    ├── hero-corporate.jpg
    ├── hero-faculty.jpg
    ├── hero-lifestyle.jpg
    ├── placeholder-*.jpg
    └── palecero-logo.png
```

---

## 🔄 MAKING UPDATES

### To Update Content:

1. Edit files locally
2. Commit changes:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
3. Vercel auto-deploys in 30 seconds

### To Update Images:

1. Replace files in `/images/` folder
2. Keep same filenames
3. Push to GitHub
4. Vercel auto-deploys

### To Update Copy:

1. Edit HTML directly in `index.html` or `confirmation.html`
2. Save and push
3. Vercel auto-deploys

---

## 📊 ANALYTICS & TRACKING

### Google Analytics (Optional):

Add before `</head>` in both HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA-TRACKING-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA-TRACKING-ID');
</script>
```

### Facebook Pixel (Optional):

Add before `</head>` in both HTML files:
```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR-PIXEL-ID');
  fbq('track', 'PageView');
</script>
```

**Built-in Tracking:**
- Form field focus events
- Button clicks
- Page views
- See `script.js` for details

---

## 🐛 TROUBLESHOOTING

### Images Not Loading:
- Check file paths are correct
- Verify images are in `/images/` folder
- Check image file extensions match HTML

### Form Not Submitting:
- Verify GHL embed code is correct
- Check redirect URL is set correctly in GHL
- Test form in GHL dashboard first

### Modal Not Opening:
- Check `script.js` is loaded
- Verify no JavaScript errors in console
- Test on different browsers

### Dynamic Content Not Switching:
- Verify URL parameter is correct (`?source=corporate`)
- Check `script.js` is loaded
- Open browser console to see logs

---

## 📈 PERFORMANCE OPTIMIZATION

Already optimized for speed:
- ✅ Minimal JavaScript
- ✅ Mobile-first CSS
- ✅ No external dependencies
- ✅ Fast load times (<1 second)

### To Further Optimize:
1. Compress images (use TinyPNG or ImageOptim)
2. Keep images under 500KB each
3. Use WebP format for better compression
4. Enable Vercel Image Optimization (automatic)

---

## 🆘 SUPPORT

### Common Questions:

**Q: Can I edit the page without coding?**
A: The HTML is straightforward. Just edit text between tags. Contact me if you need help.

**Q: How do I add more photos?**
A: Add to `/images/` folder, update HTML image src paths.

**Q: Can I change colors?**
A: Yes! Edit `:root` variables in `styles.css` (lines 20-30).

**Q: Where do I see leads?**
A: In your GoHighLevel dashboard under Contacts.

---

## ✅ POST-LAUNCH CHECKLIST

After going live:

- [ ] Test all 3 URL variants with real ads
- [ ] Monitor form submissions in GHL
- [ ] Check calendar bookings working
- [ ] Verify automated emails sending
- [ ] Test on multiple devices
- [ ] Set up analytics tracking
- [ ] Monitor page speed (should be <2s)
- [ ] Check SSL certificate is active
- [ ] Test "Apply Now" flow end-to-end

---

## 📞 CONTACT INFO

**Property Address:**
339-B Aquino Ave, Tontitown, AR 72762

**Phone:**
(918) 995-4355

**Website:**
https://paleceroliving.com

---

## 🎉 YOU'RE DONE!

Your landing page is now:
- ✅ Mobile-optimized
- ✅ Fast-loading
- ✅ Conversion-focused
- ✅ Ready to deploy
- ✅ Easy to update

**Next Steps:**
1. Deploy to Vercel (5 min)
2. Replace placeholder images (30 min)
3. Set up GoHighLevel (15 min)
4. Test everything (10 min)
5. Add custom domain (next week)
6. Launch ads 🚀

Good luck with the lease-up!
