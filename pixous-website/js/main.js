/* ============================================================
   PIXOUS — MAIN JAVASCRIPT
   Handles: hero auto-slider (2s), scroll header,
   fade-in animations, mobile menu, language init,
   admin customization loader (reads from localStorage)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initScrollHeader();
  initFadeIns();
  initMobileMenu();
  initLanguage();
  loadAdminCustomizations();
});

/* ----- Hero auto-sliding highlights (every 2 seconds) ----- */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slide-dots button');
  if (!slides.length) return;

  let idx = 0;
  const total = slides.length;

  function show(i) {
    slides.forEach((s, n) => s.classList.toggle('active', n === i));
    dots.forEach((d, n) => d.classList.toggle('active', n === i));
  }

  dots.forEach((d, i) => d.addEventListener('click', () => { idx = i; show(idx); resetTimer(); }));

  let timer = setInterval(() => { idx = (idx + 1) % total; show(idx); }, 2000);
  function resetTimer() { clearInterval(timer); timer = setInterval(() => { idx = (idx + 1) % total; show(idx); }, 2000); }
  show(0);
}

/* ----- Sticky header shadow on scroll ----- */
function initScrollHeader() {
  const h = document.querySelector('.site-header');
  if (!h) return;
  window.addEventListener('scroll', () => {
    h.classList.toggle('scrolled', window.scrollY > 30);
  });
}

/* ----- IntersectionObserver fade-ins ----- */
function initFadeIns() {
  const els = document.querySelectorAll('.fade-in');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ----- Mobile menu toggle ----- */
function initMobileMenu() {
  const btn = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.nav-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', e => { e.stopPropagation(); menu.classList.toggle('open'); });
  document.addEventListener('click', e => { if (!menu.contains(e.target) && !btn.contains(e.target)) menu.classList.remove('open'); });
}

/* ----- Language: build switcher and apply saved language ----- */
function initLanguage() {
  if (typeof buildLanguageSwitcher === 'function') buildLanguageSwitcher();
  if (typeof setLanguage === 'function') setLanguage(getCurrentLang ? getCurrentLang() : 'en');
}

/* ============================================================
   ADMIN CUSTOMIZATION LOADER
   Admin panel writes values to localStorage. This script
   reads them on every page and replaces the relevant content
   so the admin can update text/images live without re-building.
   Keys used:
     pix_hero_slides   -> [{ eyebrow, title }]
     pix_testimonials  -> [{ name, role, text, initial }]
     pix_company_info  -> { phone, email, address, regd_address }
     pix_services      -> [{ icon, title, desc, image }]
     pix_about         -> { title, intro }
   ============================================================ */
function loadAdminCustomizations() {
  // Hero slides override
  try {
    const slides = JSON.parse(localStorage.getItem('pix_hero_slides') || 'null');
    if (slides && Array.isArray(slides) && slides.length) {
      const slidesContainer = document.querySelector('.hero-slider');
      const dotsContainer = document.querySelector('.slide-dots');
      if (slidesContainer && dotsContainer) {
        // Preserve corner dots decoration
        const corner = slidesContainer.querySelector('.corner-dots');
        slidesContainer.querySelectorAll('.hero-slide').forEach(n => n.remove());
        dotsContainer.innerHTML = '';
        slides.forEach((s, i) => {
          const slide = document.createElement('div');
          slide.className = 'hero-slide' + (i === 0 ? ' active' : '');
          slide.innerHTML = `
            <div class="slide-num">0${i+1}</div>
            <div class="slide-eyebrow">${s.eyebrow || ''}</div>
            <h3>${s.title || ''}</h3>`;
          slidesContainer.appendChild(slide);
          const dot = document.createElement('button');
          if (i === 0) dot.classList.add('active');
          dotsContainer.appendChild(dot);
        });
        // Restart slider
        initHeroSlider();
      }
    }
  } catch (e) { console.warn('hero override failed', e); }

  // Testimonials override
  try {
    const tests = JSON.parse(localStorage.getItem('pix_testimonials') || 'null');
    if (tests && Array.isArray(tests) && tests.length) {
      const grid = document.querySelector('.testimonials-grid');
      if (grid) {
        grid.innerHTML = tests.map(t => `
          <div class="testimonial-card fade-in visible">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
              <div class="author-avatar">${(t.initial || t.name?.[0] || 'A').toUpperCase()}</div>
              <div>
                <div class="author-name">${t.name || ''}</div>
                <div class="author-role">${t.role || ''}</div>
              </div>
            </div>
          </div>`).join('');
      }
    }
  } catch (e) { console.warn('testimonials override failed', e); }

  // Company info override (phone/email/address)
  try {
    const info = JSON.parse(localStorage.getItem('pix_company_info') || 'null');
    if (info) {
      document.querySelectorAll('[data-admin="phone"]').forEach(el => { if (info.phone) el.textContent = info.phone; });
      document.querySelectorAll('[data-admin="email"]').forEach(el => { if (info.email) el.textContent = info.email; });
      document.querySelectorAll('[data-admin="address"]').forEach(el => { if (info.address) el.innerHTML = info.address; });
      document.querySelectorAll('[data-admin="regd_address"]').forEach(el => { if (info.regd_address) el.innerHTML = info.regd_address; });
    }
  } catch (e) { console.warn('company info override failed', e); }

  // Services override
  try {
    const services = JSON.parse(localStorage.getItem('pix_services') || 'null');
    if (services && Array.isArray(services) && services.length) {
      const grid = document.querySelector('[data-admin="services-grid"]');
      if (grid) {
        grid.innerHTML = services.map(s => `
          <div class="service-card fade-in visible">
            <div class="service-icon">${s.icon || serviceIconSVG()}</div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
            <a href="services.html" class="btn-ghost">Learn More</a>
          </div>`).join('');
      }
    }
  } catch (e) { console.warn('services override failed', e); }
}

function serviceIconSVG() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`;
}

/* Smooth-scroll any anchor links */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const target = document.querySelector(a.getAttribute('href'));
  if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
});
