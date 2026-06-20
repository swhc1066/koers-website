/**
 * koers-config.js
 * Single source of truth for what's live on koers.app.
 * Flip a value, redeploy — 30 seconds on Vercel.
 *
 * Include on every page:
 *   <script src="/koers-config.js"></script>
 *   <script src="/koers-site.js"></script>
 */

const KOERS_CONFIG = {

  // ─── CTA / SIGNUP ──────────────────────────────────────────────
  cta: {
    // 'beta'     → /beta.html (current state)
    // 'waitlist' → inline email capture (future)
    // 'signup'   → full app signup (post-launch)
    mode: 'beta',
    url: '/beta.html',
    label: 'Request beta access →',
    fine: 'No credit card · No drip sequence',
  },

  // ─── NAV LINKS ─────────────────────────────────────────────────
  nav: {
    plan:   true,   // /plan.html   — Sample Plan (live)
    guide:  false,  // /guide.html  — Field Guide (not built yet)
    pricing: false, // /pricing.html — Pricing (not built yet)
    beta:   true,   // /beta.html   — Beta signup (live)
  },

  // ─── PAGE-LEVEL VISIBILITY ─────────────────────────────────────
  pages: {
    // If false, visiting the page redirects to index
    plan:    true,
    guide:   false,
    pricing: false,
    beta:    true,
  },

  // ─── SECTION VISIBILITY ────────────────────────────────────────
  sections: {
    // Almanac page
    social_proof:        false,  // no real quotes yet
    integrations_garmin: false,  // v2
    integrations_strava: false,  // planned
    integrations_zwift:  false,  // planned
    integrations_komoot: false,  // planned
    integrations_apple:  false,  // planned

    // Sample plan page
    plan_weeks_all: false, // only featured weeks shown; rest show CTA stub
  },

  // ─── BETA STATUS ───────────────────────────────────────────────
  beta: {
    open: true,
    cohort_size: 24,
    label: '24 riders currently · Targeting Gravel Worlds 2026',
    wahoo_live: true,
    garmin_live: false,
  },

};
