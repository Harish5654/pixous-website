# Pixous Technologies — Website Package

Complete, production-ready website for Pixous Technologies Pvt Ltd, Coimbatore.

---

## Quick Start

1. Unzip this folder anywhere on your computer or server.
2. **To preview locally** — just open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari). No build step, no server needed.
3. **To deploy to production** — upload the entire folder to any static host (Netlify, Vercel, GitHub Pages, AWS S3, your own cPanel/Plesk hosting, etc.). Point your domain to it. Done.

---

## What's Included

### Public Pages (8)
- `index.html` — Home (hero auto-slider, stats, services preview, 3 testimonials, footer)
- `about.html` — About Us (story, vision/mission/values)
- `services.html` — **Clickable service list with photo + Demo button** (the spec'd interactive service viewer)
- `facilities.html` — Facilities cards
- `products.html` — Products grid (SAP, TriZetto, Java/.NET, HTML5, AutoCAD/Primavera, Python)
- `pmc.html` — Project Monitoring & Control
- `careers.html` — Job openings + why-us
- `contact.html` — Contact form + map placeholder + full contact details

### Login Pages (3)
- `login.html` — Customer login (split-screen branded UI)
- `employee-login.html` — Employee login (same UI, employee context)
- `admin/login.html` — Admin login (centered card on dark navy)

### Admin Panel
- `admin/index.html` — Full dashboard with editable hero highlights, services, testimonials, company info, settings

---

## Demo Credentials

| Portal   | Username / Email             | Password   |
| -------- | ---------------------------- | ---------- |
| Customer | `customer@pixoustech.com`    | `demo123`  |
| Employee | `employee@pixoustech.com`    | `demo123`  |
| Admin    | `admin`                      | `admin123` |

---

## Features Delivered

✅ **Multi-page site** — 8 fully separate pages, each with its own URL
✅ **AI Chatbot "Pixie"** — appears on every page; responds to keywords like "services", "contact", "products", "pricing", "languages", etc. — works in English, Tamil, and Hindi
✅ **Multilingual support** — 7 languages: English, தமிழ் (Tamil), हिन्दी (Hindi), తెలుగు (Telugu), മലയാളം (Malayalam), ಕನ್ನಡ (Kannada), Français (French) — language switcher in nav
✅ **Auto-sliding hero** — 5 highlights, rotates every 2 seconds, manual nav dots
✅ **Interactive services page** — click any service in the list, photo and demo button update instantly on the right
✅ **3 testimonials** on homepage with star ratings and avatars
✅ **Footer** with full Pixous contact details (address, phone, email, hours)
✅ **Brand-matched typography** — Montserrat 800/900 to match the bold PIXOUS wordmark in your logo
✅ **Color theme** — navy + green + white with subtle green-dot motifs throughout (matching the logo's arc of dots)
✅ **Customer + Employee + Admin login** — all share the same elegant UI with tabbed switching
✅ **Admin Panel** — fully editable hero highlights, services, testimonials, company info; add/delete/reorder; localStorage persistence; toast notifications

---

## File Structure

```
pixous-website/
├── index.html              ← Home
├── about.html
├── services.html           ← Clickable service list + photo + demo
├── facilities.html
├── products.html
├── pmc.html
├── careers.html
├── contact.html
├── login.html              ← Customer
├── employee-login.html
├── README.md
├── css/
│   ├── style.css           ← Main styles
│   └── chatbot.css         ← Chatbot widget
├── js/
│   ├── main.js             ← Hero slider, scroll, mobile menu
│   ├── i18n.js             ← 7-language translations
│   └── chatbot.js          ← Pixie keyword chatbot
├── images/
│   └── logo.jpg            ← Your Pixous logo
└── admin/
    ├── login.html          ← Admin login
    ├── index.html          ← Admin dashboard
    ├── admin.css
    └── admin.js
```

---

## Customization Tips

- **Replace logo** → drop your high-res logo as `images/logo.jpg` (keep filename or update references)
- **Change colors** → edit CSS variables at the top of `css/style.css` (`--pix-navy`, `--pix-green`, etc.)
- **Edit content** → log into `/admin/login.html` and edit through the panel; OR edit the HTML files directly
- **Add a language** → add a new entry inside the `TRANSLATIONS` object in `js/i18n.js`
- **Add chatbot keywords** → edit the `RESPONSES` object inside `js/chatbot.js`

---

## Going to Production

The admin panel currently uses browser **localStorage** for demo persistence. For real production use:

1. Set up a backend (Node.js/Express, Django, Laravel, etc.)
2. Replace the `loadData()` and `saveData()` functions in `admin/admin.js` with calls to your backend API
3. Add proper authentication (replace the demo credential check in `admin/login.html`)
4. Optionally connect the contact form (`contact.html`) to your email service or CRM

---

## Browser Support

Chrome, Edge, Firefox, Safari — latest 2 major versions. Mobile-responsive across all device sizes.

---

**Built for Pixous Technologies — Grow to Lead 🌱**
