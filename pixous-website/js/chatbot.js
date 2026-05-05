/* ============================================================
   PIXOUS CHATBOT — Pixie
   Smart keyword-based assistant in English / Tamil / Hindi
   Knows: services, products, facilities, PMC, careers, contact,
   pricing, about, industries, location, hours, login, etc.
   ============================================================ */

const CHATBOT_RESPONSES = {
  en: {
    welcome: "Hi! I'm <strong>Pixie</strong>, your Pixous Technologies assistant 👋<br>How can I help you today? You can ask about our services, products, careers, or contact details.",
    quickReplies: ['Services', 'Products', 'Careers', 'Contact', 'About Us'],
    fallback: "I'm not quite sure I understood that. Try asking about <strong>services</strong>, <strong>products</strong>, <strong>facilities</strong>, <strong>PMC</strong>, <strong>careers</strong>, <strong>contact</strong>, or type <strong>help</strong>.",
    help: "I can help you with information about Pixous Technologies! Try keywords like:<ul><li><strong>services</strong> — what we offer</li><li><strong>products</strong> — our solutions</li><li><strong>facilities</strong> — our infrastructure</li><li><strong>PMC</strong> — Project Monitoring & Control</li><li><strong>careers</strong> — job opportunities</li><li><strong>contact</strong> — phone, email, address</li><li><strong>about</strong> — company information</li><li><strong>industries</strong> — sectors we serve</li></ul>",
    services: "We offer the following <strong>core services</strong>:<ul><li>Strategic Planning & Assessment</li><li>Optimization & Remediation Services</li><li>Project Implementation Services</li><li>Digital Transformation</li><li>IT Consulting & Services</li><li>Customer Insight</li><li>Marketing & Sales</li></ul>Visit our <a href='services.html'>Services page</a> for full details!",
    products: "Our <strong>key products</strong> include:<ul><li>SAP® Enterprise Solutions</li><li>TriZetto Facets® IT Platform</li><li>Custom Web & Mobile Applications</li><li>AutoCAD & Primavera Solutions</li><li>HTML5/Java/.NET/Python development tools</li></ul>Check out the <a href='products.html'>Products page</a> for more!",
    facilities: "Our <strong>facilities</strong> include:<ul><li>State-of-the-art development centers</li><li>24/7 technical support</li><li>Offshore development & delivery</li><li>Training & certification labs</li><li>Modern infrastructure at AV IT Park, Coimbatore</li></ul>See <a href='facilities.html'>Facilities page</a>.",
    pmc: "<strong>PMC – Project Monitoring & Control</strong> covers:<ul><li>End-to-end project lifecycle management</li><li>Real-time progress tracking dashboards</li><li>Risk assessment & mitigation planning</li><li>Quality assurance & continuous improvement</li><li>Resource & budget control</li></ul>Visit the <a href='pmc.html'>PMC page</a> to learn more.",
    careers: "We're hiring! Visit our <a href='careers.html'>Careers page</a> for current openings. We look for talent in:<ul><li>Software Development (Java, .NET, Python)</li><li>SAP Consulting</li><li>Project Management</li><li>UI/UX Design</li><li>Business Analysis</li></ul>Send your CV to <strong>info@pixoustech.com</strong>",
    contact: "Here's how to reach us:<br>📞 <strong>+91 70940 47000</strong><br>✉️ <strong>info@pixoustech.com</strong><br>🕒 Office Hours: 8:00 AM – 6:00 PM<br>📍 AV IT Park, Keeranatham Road, Saravanampatti, Coimbatore – 641 035, Tamil Nadu",
    address: "Our offices:<br><strong>Main Office:</strong> AV IT Park, S.F.No: 360/4 & 360/5, Keeranatham Road, near KGISL campus, Saravanampatti, Coimbatore – 641 035, Tamil Nadu, India<br><br><strong>Registered Office:</strong> 382, Lakshmanan Nagar, 2nd Street (Extn.), Gandhipuram, Coimbatore – 641 012, Tamil Nadu",
    about: "<strong>Pixous Technologies</strong> is a multi-expertise, technology driven company with a pool of consultants. We help groom your ideas into real-time technology driven solutions. Our approach combines strategic thinking with thoughtful insights and doable execution. Visit <a href='about.html'>About Us</a>.",
    industries: "We serve a wide range of industries:<ul><li>Pharmaceutical Services</li><li>Healthcare Services</li><li>Manufacturing Industries</li><li>Service Industries</li><li>Construction & Engineering</li></ul>",
    pricing: "Our pricing is project-based and tailored to your requirements. For a custom quote, please <a href='contact.html'>contact us</a> at <strong>+91 70940 47000</strong> or email <strong>info@pixoustech.com</strong>.",
    hours: "Our office hours are <strong>8:00 AM – 6:00 PM</strong>, Monday to Saturday. For urgent inquiries call <strong>+91 70940 47000</strong>.",
    login: "You can sign in here:<br>👤 <a href='login.html'>Customer Login</a><br>👨‍💼 <a href='employee-login.html'>Employee Login</a><br>🛡️ <a href='admin/login.html'>Admin Login</a>",
    thanks: "You're very welcome! 😊 Is there anything else I can help you with?",
    greeting: "Hello there! 👋 Great to see you. How can I assist you today?",
    bye: "Goodbye! Thanks for visiting Pixous Technologies. Have a wonderful day! 🌟"
  },
  ta: {
    welcome: "வணக்கம்! நான் <strong>பிக்ஸி</strong>, உங்கள் பிக்சவ் டெக்னாலஜீஸ் உதவியாளர் 👋<br>நான் எப்படி உதவ முடியும்? சேவைகள், தயாரிப்புகள், வேலைவாய்ப்பு பற்றி கேளுங்கள்.",
    quickReplies: ['சேவைகள்', 'தயாரிப்புகள்', 'வேலைவாய்ப்பு', 'தொடர்பு', 'எங்களைப் பற்றி'],
    fallback: "எனக்கு புரியவில்லை. <strong>சேவைகள்</strong>, <strong>தயாரிப்புகள்</strong>, <strong>வசதிகள்</strong>, <strong>PMC</strong>, <strong>வேலை</strong>, <strong>தொடர்பு</strong> பற்றி கேளுங்கள்.",
    help: "நான் பிக்சவ் டெக்னாலஜீஸ் பற்றிய தகவல்களை வழங்க முடியும்:<ul><li><strong>சேவைகள்</strong></li><li><strong>தயாரிப்புகள்</strong></li><li><strong>வசதிகள்</strong></li><li><strong>PMC</strong></li><li><strong>வேலைவாய்ப்பு</strong></li><li><strong>தொடர்பு</strong></li></ul>",
    services: "எங்கள் <strong>முக்கிய சேவைகள்</strong>:<ul><li>மூலோபாய திட்டமிடல் & மதிப்பீடு</li><li>உகப்பாக்கம் & சரிசெய்தல் சேவைகள்</li><li>திட்ட அமலாக்க சேவைகள்</li><li>டிஜிட்டல் மாற்றம்</li><li>IT ஆலோசனை சேவை</li><li>வாடிக்கையாளர் நுண்ணறிவு</li><li>சந்தைப்படுத்தல் & விற்பனை</li></ul><a href='services.html'>சேவைகள் பக்கம்</a> பார்க்கவும்.",
    products: "எங்கள் <strong>முக்கிய தயாரிப்புகள்</strong>:<ul><li>SAP® எண்டர்பிரைஸ் சொல்யூஷன்ஸ்</li><li>TriZetto Facets® தளம்</li><li>தனிப்பயன் வலை & மொபைல் பயன்பாடுகள்</li><li>AutoCAD & Primavera</li><li>Java/.NET/Python வளர்ச்சி கருவிகள்</li></ul>",
    facilities: "எங்கள் <strong>வசதிகள்</strong>:<ul><li>நவீன மேம்பாட்டு மையங்கள்</li><li>24/7 தொழில்நுட்ப ஆதரவு</li><li>Offshore Development</li><li>பயிற்சி ஆய்வகங்கள்</li><li>கோயம்புத்தூர் AV IT பூங்காவில்</li></ul>",
    pmc: "<strong>PMC – திட்ட கண்காணிப்பு & கட்டுப்பாடு</strong>:<ul><li>முழுமையான திட்ட நிர்வாகம்</li><li>நேரடி முன்னேற்ற கண்காணிப்பு</li><li>இடர் மதிப்பீடு</li><li>தர உறுதி</li><li>வளம் & பட்ஜெட் கட்டுப்பாடு</li></ul>",
    careers: "நாங்கள் ஆட்களை நியமிக்கிறோம்! <a href='careers.html'>வேலைவாய்ப்பு பக்கத்தை</a> பார்க்கவும்.<ul><li>மென்பொருள் வளர்ச்சி</li><li>SAP ஆலோசனை</li><li>திட்ட மேலாண்மை</li><li>UI/UX வடிவமைப்பு</li></ul>உங்கள் CV ஐ <strong>info@pixoustech.com</strong> க்கு அனுப்பவும்.",
    contact: "எங்களைத் தொடர்பு கொள்ள:<br>📞 <strong>+91 70940 47000</strong><br>✉️ <strong>info@pixoustech.com</strong><br>🕒 நேரம்: காலை 8:00 – மாலை 6:00<br>📍 AV IT பூங்கா, கீரணத்தம் சாலை, சரவணம்பட்டி, கோயம்புத்தூர் – 641 035",
    address: "எங்கள் முகவரி:<br><strong>முக்கிய அலுவலகம்:</strong> AV IT பூங்கா, கீரணத்தம் சாலை, சரவணம்பட்டி, கோயம்புத்தூர் – 641 035<br><strong>பதிவு அலுவலகம்:</strong> 382, லட்சுமணன் நகர், 2வது தெரு, காந்திபுரம், கோயம்புத்தூர் – 641 012",
    about: "<strong>பிக்சவ் டெக்னாலஜீஸ்</strong> ஒரு பல்துறை நிபுணத்துவம் கொண்ட, தொழில்நுட்பம் சார்ந்த நிறுவனம். உங்கள் கருத்துக்களை நேரடி, புத்திசாலித்தனமான தீர்வுகளாக மாற்ற நாங்கள் உதவுகிறோம்.",
    industries: "நாங்கள் சேவை செய்யும் தொழில்கள்:<ul><li>மருந்து சேவைகள்</li><li>சுகாதார சேவைகள்</li><li>உற்பத்தி தொழில்கள்</li><li>சேவை தொழில்கள்</li><li>கட்டுமானம் & பொறியியல்</li></ul>",
    pricing: "எங்கள் விலை திட்டத்தைப் பொறுத்தது. சிறப்பு மேற்கோள் பெற <a href='contact.html'>தொடர்பு கொள்ளவும்</a> அல்லது <strong>+91 70940 47000</strong> ஐ அழைக்கவும்.",
    hours: "எங்கள் அலுவலக நேரம் <strong>காலை 8:00 – மாலை 6:00</strong>, திங்கள் முதல் சனி வரை.",
    login: "உள்நுழைய:<br>👤 <a href='login.html'>வாடிக்கையாளர் உள்நுழைவு</a><br>👨‍💼 <a href='employee-login.html'>பணியாளர் உள்நுழைவு</a><br>🛡️ <a href='admin/login.html'>நிர்வாகி உள்நுழைவு</a>",
    thanks: "மிக்க நன்றி! 😊 வேறு எதிலாவது உதவ வேண்டுமா?",
    greeting: "வணக்கம்! 👋 உங்களைப் பார்த்ததில் மகிழ்ச்சி. எப்படி உதவ முடியும்?",
    bye: "பிரியாவிடை! பிக்சவ் டெக்னாலஜீஸ்-ஐப் பார்வையிட்டதற்கு நன்றி! 🌟"
  },
  hi: {
    welcome: "नमस्ते! मैं <strong>पिक्सी</strong> हूँ, आपकी पिक्सस टेक्नोलॉजीज सहायक 👋<br>मैं आपकी कैसे मदद कर सकती हूँ? सेवाओं, उत्पादों, करियर के बारे में पूछें।",
    quickReplies: ['सेवाएँ', 'उत्पाद', 'करियर', 'संपर्क', 'हमारे बारे में'],
    fallback: "मुझे ठीक से समझ नहीं आया। <strong>सेवाएँ</strong>, <strong>उत्पाद</strong>, <strong>सुविधाएँ</strong>, <strong>PMC</strong>, <strong>करियर</strong>, <strong>संपर्क</strong> के बारे में पूछें।",
    help: "मैं पिक्सस टेक्नोलॉजीज की जानकारी दे सकती हूँ:<ul><li><strong>सेवाएँ</strong></li><li><strong>उत्पाद</strong></li><li><strong>सुविधाएँ</strong></li><li><strong>PMC</strong></li><li><strong>करियर</strong></li><li><strong>संपर्क</strong></li></ul>",
    services: "हमारी <strong>मुख्य सेवाएँ</strong>:<ul><li>रणनीतिक योजना और मूल्यांकन</li><li>अनुकूलन और सुधार सेवाएँ</li><li>परियोजना कार्यान्वयन सेवाएँ</li><li>डिजिटल परिवर्तन</li><li>IT परामर्श सेवाएँ</li><li>ग्राहक अंतर्दृष्टि</li><li>विपणन और बिक्री</li></ul><a href='services.html'>सेवाएँ पृष्ठ</a> देखें।",
    products: "हमारे <strong>मुख्य उत्पाद</strong>:<ul><li>SAP® एंटरप्राइज सॉल्यूशंस</li><li>TriZetto Facets® प्लेटफॉर्म</li><li>कस्टम वेब और मोबाइल ऐप</li><li>AutoCAD और Primavera</li><li>Java/.NET/Python विकास उपकरण</li></ul>",
    facilities: "हमारी <strong>सुविधाएँ</strong>:<ul><li>आधुनिक विकास केंद्र</li><li>24/7 तकनीकी सहायता</li><li>ऑफशोर डेवलपमेंट</li><li>प्रशिक्षण प्रयोगशालाएँ</li><li>AV IT पार्क, कोयंबटूर</li></ul>",
    pmc: "<strong>PMC – परियोजना निगरानी और नियंत्रण</strong>:<ul><li>एंड-टू-एंड परियोजना प्रबंधन</li><li>रीयल-टाइम प्रगति ट्रैकिंग</li><li>जोखिम मूल्यांकन</li><li>गुणवत्ता आश्वासन</li><li>संसाधन और बजट नियंत्रण</li></ul>",
    careers: "हम भर्ती कर रहे हैं! <a href='careers.html'>करियर पृष्ठ</a> पर जाएँ।<ul><li>सॉफ्टवेयर डेवलपमेंट</li><li>SAP कंसल्टिंग</li><li>परियोजना प्रबंधन</li><li>UI/UX डिज़ाइन</li></ul>CV भेजें: <strong>info@pixoustech.com</strong>",
    contact: "संपर्क:<br>📞 <strong>+91 70940 47000</strong><br>✉️ <strong>info@pixoustech.com</strong><br>🕒 समय: सुबह 8:00 – शाम 6:00<br>📍 AV IT पार्क, कीरनाथम रोड, सरवनमपट्टी, कोयंबटूर – 641 035",
    address: "हमारे पते:<br><strong>मुख्य कार्यालय:</strong> AV IT पार्क, कीरनाथम रोड, सरवनमपट्टी, कोयंबटूर – 641 035<br><strong>पंजीकृत कार्यालय:</strong> 382, लक्ष्मणन नगर, 2nd Street, गांधीपुरम, कोयंबटूर – 641 012",
    about: "<strong>पिक्सस टेक्नोलॉजीज</strong> एक बहु-विशेषज्ञता वाली, तकनीक-संचालित कंपनी है। हम आपके विचारों को स्मार्ट, वास्तविक समय के समाधानों में बदलने में मदद करते हैं।",
    industries: "हम जिन उद्योगों की सेवा करते हैं:<ul><li>फार्मास्युटिकल</li><li>स्वास्थ्य देखभाल</li><li>विनिर्माण</li><li>सेवा उद्योग</li><li>निर्माण और इंजीनियरिंग</li></ul>",
    pricing: "हमारी कीमतें परियोजना के अनुसार होती हैं। कस्टम कोट के लिए <a href='contact.html'>संपर्क करें</a> या <strong>+91 70940 47000</strong> पर कॉल करें।",
    hours: "हमारे कार्यालय का समय <strong>सुबह 8:00 – शाम 6:00</strong>, सोमवार से शनिवार।",
    login: "लॉगिन करें:<br>👤 <a href='login.html'>ग्राहक लॉगिन</a><br>👨‍💼 <a href='employee-login.html'>कर्मचारी लॉगिन</a><br>🛡️ <a href='admin/login.html'>एडमिन लॉगिन</a>",
    thanks: "आपका बहुत स्वागत है! 😊 क्या मैं और किसी चीज़ में मदद कर सकती हूँ?",
    greeting: "नमस्ते! 👋 आपको देखकर खुशी हुई। मैं आपकी कैसे सहायता कर सकती हूँ?",
    bye: "अलविदा! पिक्सस टेक्नोलॉजीज पर आने के लिए धन्यवाद! 🌟"
  }
};

// Keyword patterns — matched in order. First match wins.
const KEYWORD_MAP = [
  { intent: 'greeting', keywords: ['hi','hello','hey','hai','namaste','vanakkam','வணக்கம்','नमस्ते','नमस्कार','bonjour'] },
  { intent: 'thanks',   keywords: ['thank','thanks','thx','நன்றி','धन्यवाद','merci'] },
  { intent: 'bye',      keywords: ['bye','goodbye','see you','poitu varen','போயிட்டு','अलविदा','au revoir'] },
  { intent: 'help',     keywords: ['help','what can you do','options','menu','उदाहरण','உதவி','मदद','aide'] },
  { intent: 'services', keywords: ['service','services','offerings','what do you offer','offer','consult','சேவ','सेवा','सर्विस'] },
  { intent: 'products', keywords: ['product','products','solution','software','tool','sap','trizetto','autocad','primavera','தயாரி','उत्पाद','produit'] },
  { intent: 'facilities',keywords:['facility','facilities','infrastructure','office','center','lab','வசதி','सुविधा'] },
  { intent: 'pmc',      keywords: ['pmc','project monitoring','monitoring','project control','project management','கண்காணிப்பு','निगरानी'] },
  { intent: 'careers',  keywords: ['career','careers','job','jobs','hiring','vacancy','opening','recruitment','apply','cv','resume','வேலை','नौकरी','भर्ती','emploi'] },
  { intent: 'address',  keywords: ['address','location','where','office address','directions','reach','முகவரி','पता','adresse'] },
  { intent: 'contact',  keywords: ['contact','phone','call','email','mail','reach','support','தொடர்பு','फ़ोन','संपर्क','ईमेल'] },
  { intent: 'hours',    keywords: ['hours','timing','open','close','time','நேரம்','समय','horaire'] },
  { intent: 'pricing',  keywords: ['price','pricing','cost','rate','quote','budget','fee','charge','விலை','कीमत','prix'] },
  { intent: 'about',    keywords: ['about','company','who are you','who is pixous','tell me about','introduction','बारे','பற்றி','à propos'] },
  { intent: 'industries',keywords:['industry','industries','sector','pharma','healthcare','manufacturing','engineering','construction','उद्योग','தொழில்'] },
  { intent: 'login',    keywords: ['login','sign in','signin','log in','account','dashboard','employee login','admin','उल्लंघन','उल्ल','उल','उल्ल','उल्लं','உள்நுழை','लॉगिन','कर्मचारी'] }
];

function detectIntent(message) {
  const m = message.toLowerCase().trim();
  for (const item of KEYWORD_MAP) {
    for (const kw of item.keywords) {
      if (m.includes(kw.toLowerCase())) return item.intent;
    }
  }
  return 'fallback';
}

/* ============================================================
   Chatbot UI controller
   ============================================================ */
const Chatbot = {
  init() {
    if (document.getElementById('pixie-chatbot')) return;
    document.body.insertAdjacentHTML('beforeend', this.template());
    this.cacheEls();
    this.bind();
    this.greet();
  },

  template() {
    return `
    <button class="chatbot-launcher" id="pixie-launcher" aria-label="Open chat">
      <span class="pulse-ring"></span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      <span class="badge">1</span>
    </button>
    <div class="chatbot-window" id="pixie-chatbot" role="dialog">
      <div class="chatbot-header">
        <div class="cb-header-row">
          <div class="cb-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>
          </div>
          <div class="cb-info">
            <h4 data-i18n="chat.title">Pixie Assistant</h4>
            <div class="cb-status"><span class="dot"></span><span data-i18n="chat.online">Online</span> • Pixous</div>
          </div>
          <button class="cb-close" id="pixie-close" aria-label="Close chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
      <div class="chatbot-messages" id="pixie-messages"></div>
      <div class="chatbot-input">
        <input type="text" id="pixie-input" data-i18n-placeholder="chat.placeholder" placeholder="Type your message..." autocomplete="off"/>
        <button class="cb-send" id="pixie-send" aria-label="Send">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
      <div class="cb-footer">Powered by <strong>Pixous AI</strong></div>
    </div>`;
  },

  cacheEls() {
    this.$launcher = document.getElementById('pixie-launcher');
    this.$window   = document.getElementById('pixie-chatbot');
    this.$close    = document.getElementById('pixie-close');
    this.$messages = document.getElementById('pixie-messages');
    this.$input    = document.getElementById('pixie-input');
    this.$send     = document.getElementById('pixie-send');
    this.$badge    = this.$launcher.querySelector('.badge');
  },

  bind() {
    this.$launcher.addEventListener('click', () => this.toggle(true));
    this.$close.addEventListener('click', () => this.toggle(false));
    this.$send.addEventListener('click', () => this.handleSend());
    this.$input.addEventListener('keydown', e => { if (e.key === 'Enter') this.handleSend(); });
  },

  toggle(open) {
    this.$window.classList.toggle('open', open);
    if (open && this.$badge) this.$badge.style.display = 'none';
    if (open) setTimeout(() => this.$input.focus(), 250);
  },

  getLang() {
    const code = (typeof getCurrentLang === 'function') ? getCurrentLang() : (localStorage.getItem('pixous_lang') || 'en');
    return CHATBOT_RESPONSES[code] ? code : 'en';
  },

  greet() {
    const lang = this.getLang();
    const r = CHATBOT_RESPONSES[lang];
    setTimeout(() => {
      this.addMessage('bot', r.welcome, r.quickReplies);
    }, 400);
  },

  handleSend() {
    const text = this.$input.value.trim();
    if (!text) return;
    this.addMessage('user', this.escape(text));
    this.$input.value = '';
    this.respond(text);
  },

  respond(text) {
    this.showTyping();
    setTimeout(() => {
      this.hideTyping();
      const lang = this.getLang();
      const r = CHATBOT_RESPONSES[lang];
      const intent = detectIntent(text);
      const reply = r[intent] || r.fallback;
      this.addMessage('bot', reply, intent === 'fallback' || intent === 'greeting' ? r.quickReplies : null);
    }, 700 + Math.random() * 500);
  },

  addMessage(role, html, quickReplies = null) {
    const initials = role === 'bot' ? 'P' : 'You'.charAt(0);
    const wrap = document.createElement('div');
    wrap.className = `cb-message ${role}`;
    let qrHTML = '';
    if (quickReplies && quickReplies.length) {
      qrHTML = `<div class="cb-quick-replies">` +
        quickReplies.map(q => `<button class="cb-quick-reply">${q}</button>`).join('') +
        `</div>`;
    }
    wrap.innerHTML = `
      <div class="cb-msg-avatar">${initials}</div>
      <div class="cb-bubble">${html}${qrHTML}</div>`;
    this.$messages.appendChild(wrap);
    this.$messages.scrollTop = this.$messages.scrollHeight;

    // Wire up quick replies
    wrap.querySelectorAll('.cb-quick-reply').forEach(btn => {
      btn.addEventListener('click', () => {
        const txt = btn.textContent;
        this.addMessage('user', this.escape(txt));
        this.respond(txt);
      });
    });
  },

  showTyping() {
    const t = document.createElement('div');
    t.className = 'cb-message bot';
    t.id = 'cb-typing-row';
    t.innerHTML = `
      <div class="cb-msg-avatar">P</div>
      <div class="cb-typing"><span></span><span></span><span></span></div>`;
    this.$messages.appendChild(t);
    this.$messages.scrollTop = this.$messages.scrollHeight;
  },
  hideTyping() {
    const t = document.getElementById('cb-typing-row');
    if (t) t.remove();
  },
  escape(s) {
    return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
};

document.addEventListener('DOMContentLoaded', () => Chatbot.init());
