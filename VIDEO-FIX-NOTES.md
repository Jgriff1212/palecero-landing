# VIDEO SIZING FIX - No More Black Bars

## PROBLEMS FIXED

**Desktop:** Black bars on sides (not edge-to-edge)
**Mobile:** Video letterboxed instead of filling screen

## THE SOLUTION

Used viewport-based sizing with 16:9 aspect ratio math:

```css
.hero-video-container iframe {
    width: 100vw;           /* Full viewport width */
    height: 56.25vw;        /* 16:9 ratio */
    min-height: 100vh;      /* Always fill height */
    min-width: 177.77vh;    /* Always fill width on mobile */
}
```

**Result:** Video now crops intelligently to fill any screen size - no black bars on desktop or mobile.

## DEPLOY & TEST

Extract zip → Push to GitHub → Redeploy on Vercel

Test on:
- Desktop (all sizes)
- Mobile portrait & landscape
- Tablets

Video should now be true edge-to-edge background on all devices.
