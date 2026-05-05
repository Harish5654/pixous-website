/* ============================================================
   PIXOUS ADMIN PANEL — JAVASCRIPT
   All edits stored in localStorage; the public site reads them
   on every load via main.js → loadAdminCustomizations().
   ============================================================ */

// ---- Auth gate
if (sessionStorage.getItem('pix_admin_auth') !== '1') {
  window.location.href = 'login.html';
}

// ---- Default content
const DEFAULTS = {
  hero_slides: [
    { eyebrow: 'NEW SKILLS',                title: 'Strategic Planning & Assessment Services' },
    { eyebrow: 'DEVELOP STRONGER MINDS',    title: 'Project Implementation Services' },
    { eyebrow: 'INDUSTRY ANALYSIS',         title: 'Digital Transformation Excellence' },
    { eyebrow: 'BEST CHOICE',               title: 'IT Consulting Services' },
    { eyebrow: 'MARKETING ANALYSIS',        title: 'Marketing, Sales & Customer Insight' }
  ],
  testimonials: [
    { name:'Dr. Ramesh Kumar', role:'CTO, MediCare Solutions', initial:'RK',
      text:'Pixous transformed our enterprise systems with their SAP expertise. Their team understood our healthcare workflows perfectly, and the implementation was smooth from start to finish.' },
    { name:'Priya Sundaram', role:'VP Operations, BharatPharma', initial:'PS',
      text:'The digital transformation roadmap they delivered helped us reduce operational costs by 35%. Their consultants are sharp, responsive, and genuinely invested in our success.' },
    { name:'Arjun Jeyaraman', role:'Project Director, BuildTech Engineering', initial:'AJ',
      text:'Working with Pixous on our project monitoring system was a breeze. The PMC dashboard they built gave us real-time visibility we never had before. Highly recommended!' }
  ],
  company_info: {
    phone: '+91 70940 47000',
    email: 'info@pixoustech.com',
    address: 'AV IT Park, S.F.No: 360/4 & 360/5, Keeranatham Road, near KGISL campus, Saravanampatti, Coimbatore – 641 035, Tamil Nadu, India',
    regd_address: '382, Lakshmanan Nagar, 2nd Street (Extn.), Gandhipuram, Coimbatore – 641 012, Tamil Nadu, India',
    hours: '8:00 AM – 6:00 PM',
    tagline: 'Pixous Technologies is a customer-centric company delivering strategic thinking and doable approaches for projects across industries.'
  },
  services: [
    { title:'Strategic Planning',   desc:'Comprehensive business assessment and strategic roadmap development for sustainable growth.' },
    { title:'Optimization Services',desc:'Streamline operations and remediate inefficiencies for peak organizational performance.' },
    { title:'Project Implementation',desc:'End-to-end execution with proven methodologies and dedicated delivery teams.' },
    { title:'Digital Transformation',desc:'Modernize your business with cutting-edge digital solutions and cloud capabilities.' },
    { title:'IT Consulting',        desc:'World-class consultants guiding you through complex business challenges.' },
    { title:'Marketing & Sales',    desc:'Customer insight-driven marketing strategies and sales enablement for measurable ROI.' }
  ]
};

// ---- Load from localStorage or defaults
function loadData(key, fallback) {
  try {
    const raw = localStorage.getItem('pix_' + key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) { return fallback; }
}
function saveData(key, value) {
  localStorage.setItem('pix_' + key, JSON.stringify(value));
  showToast('✓ Changes saved successfully');
}
function showToast(msg) {
  let t = document.getElementById('admin-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'admin-toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> <span>${msg}</span>`;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2400);
}

// ---- Tab switching
function switchTab(tabId) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + tabId));
}

// ---- Render Hero Slides editor
function renderHeroSlides() {
  const slides = loadData('hero_slides', DEFAULTS.hero_slides);
  const list = document.getElementById('heroSlidesList');
  list.innerHTML = slides.map((s, i) => `
    <div class="edit-card" data-i="${i}">
      <div class="edit-card-head">
        <div class="num"><span>${i+1}</span> Highlight ${i+1}</div>
        <div class="actions">
          ${i>0?`<button class="btn-icon" onclick="moveSlide(${i},-1)" title="Move up"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg></button>`:''}
          ${i<slides.length-1?`<button class="btn-icon" onclick="moveSlide(${i},1)" title="Move down"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></button>`:''}
          <button class="btn-icon danger" onclick="deleteSlide(${i})" title="Delete"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
        </div>
      </div>
      <div class="form-grid">
        <div class="fld">
          <label>Eyebrow Text</label>
          <input type="text" value="${escape(s.eyebrow)}" onchange="updateSlide(${i},'eyebrow',this.value)">
        </div>
        <div class="fld">
          <label>Highlight Title</label>
          <input type="text" value="${escape(s.title)}" onchange="updateSlide(${i},'title',this.value)">
        </div>
      </div>
    </div>`).join('');
}
function updateSlide(i, key, value) {
  const slides = loadData('hero_slides', DEFAULTS.hero_slides);
  slides[i][key] = value;
  localStorage.setItem('pix_hero_slides', JSON.stringify(slides));
}
function moveSlide(i, dir) {
  const slides = loadData('hero_slides', DEFAULTS.hero_slides);
  const j = i + dir;
  [slides[i], slides[j]] = [slides[j], slides[i]];
  localStorage.setItem('pix_hero_slides', JSON.stringify(slides));
  renderHeroSlides();
}
function deleteSlide(i) {
  if (!confirm('Delete this highlight?')) return;
  const slides = loadData('hero_slides', DEFAULTS.hero_slides);
  slides.splice(i, 1);
  saveData('hero_slides', slides);
  renderHeroSlides();
}
function addSlide() {
  const slides = loadData('hero_slides', DEFAULTS.hero_slides);
  slides.push({ eyebrow: 'NEW HIGHLIGHT', title: 'Edit me — describe your highlight here' });
  saveData('hero_slides', slides);
  renderHeroSlides();
}
function saveHeroSlides() {
  // Already saved via updateSlide; this just confirms
  showToast('✓ Hero slides saved');
}

// ---- Render Testimonials editor
function renderTestimonials() {
  const items = loadData('testimonials', DEFAULTS.testimonials);
  const list = document.getElementById('testimonialsList');
  list.innerHTML = items.map((t, i) => `
    <div class="edit-card">
      <div class="edit-card-head">
        <div class="num"><span>${i+1}</span> Testimonial ${i+1}</div>
        <div class="actions">
          <button class="btn-icon danger" onclick="deleteTestimonial(${i})" title="Delete"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg></button>
        </div>
      </div>
      <div class="form-grid">
        <div class="fld"><label>Client Name</label><input type="text" value="${escape(t.name)}" onchange="updateTestimonial(${i},'name',this.value)"></div>
        <div class="fld"><label>Role / Company</label><input type="text" value="${escape(t.role)}" onchange="updateTestimonial(${i},'role',this.value)"></div>
      </div>
      <div class="fld"><label>Initials (avatar)</label><input type="text" maxlength="3" value="${escape(t.initial||'')}" onchange="updateTestimonial(${i},'initial',this.value.toUpperCase())"></div>
      <div class="fld"><label>Testimonial Text</label><textarea onchange="updateTestimonial(${i},'text',this.value)">${escape(t.text)}</textarea></div>
    </div>`).join('');
}
function updateTestimonial(i, key, value) {
  const items = loadData('testimonials', DEFAULTS.testimonials);
  items[i][key] = value;
  localStorage.setItem('pix_testimonials', JSON.stringify(items));
}
function deleteTestimonial(i) {
  if (!confirm('Delete this testimonial?')) return;
  const items = loadData('testimonials', DEFAULTS.testimonials);
  items.splice(i, 1);
  saveData('testimonials', items);
  renderTestimonials();
}
function addTestimonial() {
  const items = loadData('testimonials', DEFAULTS.testimonials);
  items.push({ name: 'New Client', role: 'Position, Company', initial: 'NC', text: 'Add the testimonial text here...' });
  saveData('testimonials', items);
  renderTestimonials();
}

// ---- Render Services editor
function renderServices() {
  const items = loadData('services', DEFAULTS.services);
  const list = document.getElementById('servicesList');
  list.innerHTML = items.map((s, i) => `
    <div class="edit-card">
      <div class="edit-card-head">
        <div class="num"><span>${i+1}</span> Service ${i+1}</div>
        <div class="actions">
          <button class="btn-icon danger" onclick="deleteService(${i})" title="Delete"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg></button>
        </div>
      </div>
      <div class="form-grid">
        <div class="fld"><label>Service Title</label><input type="text" value="${escape(s.title)}" onchange="updateService(${i},'title',this.value)"></div>
      </div>
      <div class="fld"><label>Short Description</label><textarea onchange="updateService(${i},'desc',this.value)">${escape(s.desc)}</textarea></div>
    </div>`).join('');
}
function updateService(i, key, value) {
  const items = loadData('services', DEFAULTS.services);
  items[i][key] = value;
  localStorage.setItem('pix_services', JSON.stringify(items));
}
function deleteService(i) {
  if (!confirm('Delete this service?')) return;
  const items = loadData('services', DEFAULTS.services);
  items.splice(i, 1);
  saveData('services', items);
  renderServices();
}
function addService() {
  const items = loadData('services', DEFAULTS.services);
  items.push({ title: 'New Service', desc: 'Describe this service in 1-2 sentences.' });
  saveData('services', items);
  renderServices();
}

// ---- Render Company Info editor
function renderCompanyInfo() {
  const info = loadData('company_info', DEFAULTS.company_info);
  document.getElementById('ci_phone').value = info.phone || '';
  document.getElementById('ci_email').value = info.email || '';
  document.getElementById('ci_hours').value = info.hours || '';
  document.getElementById('ci_address').value = info.address || '';
  document.getElementById('ci_regd_address').value = info.regd_address || '';
  document.getElementById('ci_tagline').value = info.tagline || '';
}
function saveCompanyInfo() {
  const info = {
    phone: document.getElementById('ci_phone').value,
    email: document.getElementById('ci_email').value,
    hours: document.getElementById('ci_hours').value,
    address: document.getElementById('ci_address').value,
    regd_address: document.getElementById('ci_regd_address').value,
    tagline: document.getElementById('ci_tagline').value
  };
  saveData('company_info', info);
}

// ---- Reset to defaults
function resetAll() {
  if (!confirm('This will erase all admin customizations and restore default content. Continue?')) return;
  ['hero_slides','testimonials','company_info','services'].forEach(k => localStorage.removeItem('pix_' + k));
  showToast('✓ All settings reset to defaults');
  setTimeout(()=>location.reload(), 800);
}

// ---- Logout
function logout() {
  sessionStorage.removeItem('pix_admin_auth');
  window.location.href = 'login.html';
}

// ---- Helpers
function escape(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// ---- Init
document.addEventListener('DOMContentLoaded', () => {
  renderHeroSlides();
  renderTestimonials();
  renderServices();
  renderCompanyInfo();

  // Tab navigation
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  // Sidebar nav links scroll/switch
  document.querySelectorAll('.admin-nav a[data-tab]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      switchTab(a.dataset.tab);
      document.querySelectorAll('.admin-nav a').forEach(x => x.classList.remove('active'));
      a.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});
