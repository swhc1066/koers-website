/**
 * koers-site.js
 * Reads KOERS_CONFIG and applies visibility + CTA wiring
 * across all pages. Include after koers-config.js.
 */

(function(){
  const C = window.KOERS_CONFIG;
  if(!C){ console.warn('koers-config.js not loaded'); return; }

  // ─── WIRE ALL CTAs ────────────────────────────────────────────
  // Any element with data-koers-cta gets href and text from config
  document.querySelectorAll('[data-koers-cta]').forEach(el => {
    if(el.tagName === 'A') el.href = C.cta.url;
    const label = el.querySelector('[data-koers-cta-label]');
    if(label) label.textContent = C.cta.label;
    // If the element itself is the label
    if(el.dataset.koersCta === 'label') el.textContent = C.cta.label;
  });

  // ─── NAV VISIBILITY ───────────────────────────────────────────
  // Elements with data-koers-nav="plan|guide|pricing|beta"
  document.querySelectorAll('[data-koers-nav]').forEach(el => {
    const key = el.dataset.koersNav;
    if(C.nav[key] === false){
      el.style.display = 'none';
    }
  });

  // ─── SECTION VISIBILITY ───────────────────────────────────────
  // Elements with data-koers-section="social_proof" etc.
  document.querySelectorAll('[data-koers-section]').forEach(el => {
    const key = el.dataset.koersSection;
    if(C.sections[key] === false){
      el.style.display = 'none';
    }
  });

  // ─── PAGE GUARD ───────────────────────────────────────────────
  // On pages other than index, check if this page is enabled
  const path = window.location.pathname;
  const pageMap = {
    '/plan.html':    'plan',
    '/guide.html':   'guide',
    '/pricing.html': 'pricing',
    '/beta.html':    'beta',
  };
  const pageKey = pageMap[path];
  if(pageKey && C.pages[pageKey] === false){
    window.location.replace('/index.html');
  }

  // ─── BETA STATUS STRINGS ──────────────────────────────────────
  document.querySelectorAll('[data-koers-beta-label]').forEach(el => {
    el.textContent = C.beta.label;
  });

  // ─── INTEGRATIONS — show/hide individual cells ────────────────
  const intMap = {
    'garmin':  'integrations_garmin',
    'strava':  'integrations_strava',
    'zwift':   'integrations_zwift',
    'komoot':  'integrations_komoot',
    'apple':   'integrations_apple',
  };
  document.querySelectorAll('[data-koers-integration]').forEach(el => {
    const key = intMap[el.dataset.koersIntegration];
    if(key && C.sections[key] === false){
      el.style.display = 'none';
    }
  });

})();
