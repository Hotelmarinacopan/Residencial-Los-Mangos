/**
 * Residencial Los Mangos — High-End Luxury Engine & Interactive Suite
 * Includes: Drone Frame Scrubbing, Depth-of-Field Blur, Scroll Stagger Reveal,
 * Animated Count-Up, Unit Converter (v2/m2/ft2), ROI Simulator, WhatsApp Quote Generator,
 * Block Comparison Drawer, and Bilingual i18n System.
 */

(function () {
  'use strict';

  /* =========================================================
     0. INTERNATIONALIZATION (i18n) DICTIONARY
     ========================================================= */
  const translations = {
    es: {
      "preloader.location": "COPÁN RUINAS, HONDURAS",
      "preloader.status": "Iniciando experiencia...",
      "nav.home": "Inicio",
      "nav.concept": "Concepto",
      "nav.trust": "Solidez",
      "nav.masterplan": "Masterplan",
      "nav.investment": "Inversión",
      "nav.financing": "Financiamiento",
      "nav.contact": "Contacto",
      "nav.cta": "Reservar Lote",
      "hero.tag": "LANZAMIENTO EXCLUSIVO &bull; COPÁN RUINAS",
      "hero.title_line1": "Innovando el Futuro.",
      "hero.title_line2": "Construyendo tu Legado.",
      "hero.description": "Un enclave residencial de ultra-lujo y alta plusvalía. Lotes con topografía 100% regular a <strong>175 metros de la carretera internacional</strong> y a solo <strong>4 cuadras del Parque Central</strong>.",
      "hero.btn_masterplan": "Explorar Masterplan",
      "hero.btn_calc": "Calcular Inversión",
      "hero.trust_lots": "Lotes Disponibles",
      "hero.trust_road_title": "175m Carretera",
      "hero.trust_road_sub": "Acceso Pavimentado",
      "hero.trust_park_title": "4 Cuadras",
      "hero.trust_park_sub": "Parque Central",
      "hero.trust_bank_sub": "80% Financiable",
      "hero.scroll_hint": "Haz scroll para avanzar en el recorrido",
      "concept.badge": "EL CONCEPTO",
      "concept.title_part1": "Innovando el Futuro.",
      "concept.title_part2": "Construyendo Hoy.",
      "concept.subtitle": "Empoderamos su inversión con infraestructura de vanguardia, seguridad y una ubicación de insuperable plusvalía en el corazón de Copán Ruinas.",
      "concept.c1_title": "Ubicación Insuperable",
      "concept.c1_desc": "A solo 175m de la carretera internacional con acceso directo totalmente pavimentado.",
      "concept.c2_title": "Topografía 100% Plana",
      "concept.c2_desc": "Terrenos regulares listos para construir de inmediato sin costosos movimientos de tierra.",
      "concept.c3_title": "Centro Histórico",
      "concept.c3_desc": "A 4 cuadras del Parque Central de Copán Ruinas, combinando absoluta tranquilidad y cercanía.",
      "concept.c4_title": "Seguridad & Control 24/7",
      "concept.c4_desc": "Muro perimetral cerrado, caseta de vigilancia privada y control de acceso sistematizado.",
      "concept.c5_title": "Servicios Subterráneos",
      "concept.c5_desc": "Redes de agua potable, electricidad y fibra óptica soterradas para preservar la estética visual.",
      "trust.title": "Construido con Solidez. Impulsado por Resultados.",
      "trust.subtitle": "No solo desarrollamos lotes, construimos un legado patrimonial para su familia con respaldo jurídico integral.",
      "trust.c1_title": "Topografía Regular",
      "trust.c1_desc": "Lotes planos con trazado óptimo sin gastos imprevistos de nivelación.",
      "trust.c2_title": "100% Inscritos",
      "trust.c2_desc": "Propiedades libres de gravámenes con traspaso seguro e inmediato.",
      "trust.c3_title": "Financiamiento Bancario",
      "trust.c3_desc": "Respaldo de hasta 80% a través de Banco de Occidente y BAC Honduras.",
      "trust.c4_title": "Seguridad & Control",
      "trust.c4_desc": "Administración profesional del complejo y vigilancia permanente 24/7.",
      "mp.badge": "PLANIFICACIÓN URBANA",
      "mp.title_part1": "Masterplan",
      "mp.title_part2": "Interactivo",
      "mp.tab_a_title": "BLOQUE A",
      "mp.tab_a_sub": "Residencial Exclusivo",
      "mp.tab_b_title": "BLOQUE B",
      "mp.tab_b_sub": "Residencial & Veredas",
      "mp.tab_c_title": "BLOQUE C",
      "mp.tab_c_sub": "Comercial / Mixto",
      "mp.btn_compare": "Comparar Bloques A / B / C",
      "mp.lbl_use": "USO DE SUELO",
      "mp.lbl_topo": "TOPOGRAFÍA",
      "mp.lbl_price": "PRECIO POR VARA",
      "mp.lbl_fin": "FINANCIAMIENTO",
      "mp.btn_quote": "Cotizar en este Bloque",
      "inv.badge": "MODELO DE INVERSIÓN",
      "inv.title_part1": "Lotes listos a",
      "inv.subtitle": "Los impuestos de traspaso son pagados al 100% por la Desarrolladora; el comprador solo abona escrituración notarial.",
      "inv.bullet1": "<strong>Impuestos cubiertos por la Desarrolladora</strong> (cero costos ocultos).",
      "inv.bullet2": "<strong>Comprador solo paga escrituración notarial</strong>.",
      "inv.bullet3": "<strong>Topografía 100% regular y plana</strong> sin sobrecostos de nivelación.",
      "inv.roi_title": "Plusvalía Proyectada (8.5% Anual)",
      "inv.roi_future_val": "Valor Estimado:",
      "inv.roi_gain": "Ganancia Patrimonial:",
      "inv.legal": "Títulos de propiedad plenamente inscritos y libres de gravámenes.",
      "inv.calc_title": "Simulador Bancario",
      "inv.lbl_area": "Área del Lote:",
      "inv.lbl_downpayment": "Prima Inicial (%):",
      "inv.res_total": "VALOR TOTAL",
      "inv.res_prima": "PRIMA",
      "inv.res_cuota": "CUOTA EST. (15 AÑOS)*",
      "inv.btn_send_wa": "Enviar Cotización a WhatsApp (+504 9361-3976)",
      "inv.btn_prequal": "Solicitar Precalificación Bancaria",
      "fin.badge": "FINANCIAMIENTO & LOCALIZACIÓN",
      "fin.title_part1": "Respaldo con",
      "fin.title_part2": "y",
      "fin.subtitle": "Facilidades de crédito de hasta el 80% del valor a plazos de 10 a 15 años.",
      "fin.bank_sub": "Financiamiento de Terrenos",
      "fin.row1_lbl": "Financiamiento:",
      "fin.row1_val": "Hasta 80%",
      "fin.row2_lbl": "Plazo:",
      "fin.row2_val": "10 a 15 años",
      "fin.row3_lbl": "Prima mínima:",
      "fin.row3_val": "20% inicial",
      "fin.row4_lbl": "Cuentas de Reserva:",
      "fin.btn_advisor": "Contactar Asesor Bancario",
      "fin.map_highway": "Carretera Internacional (175m)",
      "fin.map_access": "Acceso Los Mangos",
      "fin.map_park": "Parque Central (4 Cuadras)",
      "fin.leg_highway": "A 175m de Carretera Internacional",
      "fin.leg_park": "A 4 cuadras del Parque Central",
      "contact.badge": "ATENCIÓN VIP",
      "contact.title_part1": "Reserve su lote o agende su",
      "contact.title_part2": "visita guiada",
      "contact.lead": "Atención personalizada directa con nuestro equipo de asesores en Copán Ruinas.",
      "contact.wa_lbl": "WhatsApp Inmobiliario",
      "contact.phone_lbl": "Llamada Directa",
      "contact.hours": "Lunes a Sábado 8:00 AM &ndash; 6:00 PM",
      "contact.form_title": "Solicitud de Reserva / Asesoría",
      "contact.form_name": "Nombre Completo *",
      "contact.form_phone": "WhatsApp / Teléfono *",
      "contact.form_email": "Correo Electrónico *",
      "contact.form_block": "Bloque de Interés",
      "contact.opt_block_a": "Bloque A — Residencial Exclusivo",
      "contact.opt_block_b": "Bloque B — Residencial & Veredas",
      "contact.opt_block_c": "Bloque C — Comercial / Mixto",
      "contact.form_submit": "Enviar Solicitud Inmediata",
      "contact.privacy": "Su información se maneja con estricta confidencialidad.",
      "footer.b1": "Topografía Regular",
      "compare.title": "Comparativa Integral de Bloques",
      "compare.sub": "Analice las características exclusivas de cada zona de Residencial Los Mangos",
      "compare.col_feature": "Característica",
      "compare.row_use": "Uso de Suelo",
      "compare.row_elevation": "Elevación & Vistas",
      "compare.row_trails": "Acceso a Veredas",
      "compare.row_privacy": "Nivel de Privacidad",
      "compare.row_topo": "Topografía",
      "compare.row_price": "Precio Base",
      "compare.row_fin": "Financiamiento",
      "compare.select_a": "Seleccionar A",
      "compare.select_b": "Seleccionar B",
      "compare.select_c": "Seleccionar C"
    },
    en: {
      "preloader.location": "COPÁN RUINAS, HONDURAS",
      "preloader.status": "Loading experience...",
      "nav.home": "Home",
      "nav.concept": "Concept",
      "nav.trust": "Trust",
      "nav.masterplan": "Masterplan",
      "nav.investment": "Investment",
      "nav.financing": "Financing",
      "nav.contact": "Contact",
      "nav.cta": "Reserve Lot",
      "hero.tag": "EXCLUSIVE LAUNCH &bull; COPÁN RUINAS",
      "hero.title_line1": "Innovating the Future.",
      "hero.title_line2": "Building Your Legacy.",
      "hero.description": "An ultra-luxury, high-equity residential development. 100% flat topography lots <strong>175 meters from the international highway</strong> and just <strong>4 blocks from Central Park</strong>.",
      "hero.btn_masterplan": "Explore Masterplan",
      "hero.btn_calc": "Calculate Investment",
      "hero.trust_lots": "Available Lots",
      "hero.trust_road_title": "175m Highway",
      "hero.trust_road_sub": "Paved Access",
      "hero.trust_park_title": "4 Blocks",
      "hero.trust_park_sub": "Central Park",
      "hero.trust_bank_sub": "80% Financing",
      "hero.scroll_hint": "Scroll down to explore the tour",
      "concept.badge": "THE CONCEPT",
      "concept.title_part1": "Innovating the Future.",
      "concept.title_part2": "Building Today.",
      "concept.subtitle": "We empower your investment with state-of-the-art infrastructure, security, and an unbeatable prime location in Copán Ruinas.",
      "concept.c1_title": "Prime Location",
      "concept.c1_desc": "Only 175m from the international highway with fully paved direct access.",
      "concept.c2_title": "100% Flat Topography",
      "concept.c2_desc": "Regular lots ready for immediate construction without expensive earthwork costs.",
      "concept.c3_title": "Historic Center",
      "concept.c3_desc": "4 blocks from Central Park of Copán Ruinas, combining serenity with proximity.",
      "concept.c4_title": "24/7 Security & Control",
      "concept.c4_desc": "Gated perimeter wall, private security guardhouse, and systematized access control.",
      "concept.c5_title": "Underground Utilities",
      "concept.c5_desc": "Underground potable water, electric power, and high-speed fiber optics preserving scenic views.",
      "trust.title": "Built on Trust. Driven by Results.",
      "trust.subtitle": "We don't just develop lots, we build a family heritage with comprehensive legal backing.",
      "trust.c1_title": "Regular Topography",
      "trust.c1_desc": "Flat lots with optimal layout avoiding unforeseen leveling expenses.",
      "trust.c2_title": "100% Registered Titles",
      "trust.c2_desc": "Properties free of all liens with safe and immediate deed transfer.",
      "trust.c3_title": "Bank Financing",
      "trust.c3_desc": "Up to 80% financing backed by Banco de Occidente and BAC Honduras.",
      "trust.c4_title": "Security & Control",
      "trust.c4_desc": "Professional gated community management and round-the-clock surveillance.",
      "mp.badge": "URBAN PLANNING",
      "mp.title_part1": "Interactive",
      "mp.title_part2": "Masterplan",
      "mp.tab_a_title": "BLOCK A",
      "mp.tab_a_sub": "Exclusive Residential",
      "mp.tab_b_title": "BLOCK B",
      "mp.tab_b_sub": "Residential & Greenways",
      "mp.tab_c_title": "BLOCK C",
      "mp.tab_c_sub": "Commercial / Mixed-Use",
      "mp.btn_compare": "Compare Blocks A / B / C",
      "mp.lbl_use": "LAND USE",
      "mp.lbl_topo": "TOPOGRAPHY",
      "mp.lbl_price": "PRICE PER VARA",
      "mp.lbl_fin": "FINANCING",
      "mp.btn_quote": "Get Quote for this Block",
      "inv.badge": "INVESTMENT MODEL",
      "inv.title_part1": "Lots ready at",
      "inv.subtitle": "Transfer taxes are 100% paid by the Developer; the buyer only covers notary closing fees.",
      "inv.bullet1": "<strong>Taxes covered by Developer</strong> (zero hidden costs).",
      "inv.bullet2": "<strong>Buyer only pays notary deed registration</strong>.",
      "inv.bullet3": "<strong>100% regular & flat topography</strong> with no ground-leveling costs.",
      "inv.roi_title": "Projected Equity (8.5% Annual)",
      "inv.roi_future_val": "Estimated Value:",
      "inv.roi_gain": "Capital Gain:",
      "inv.legal": "Property titles fully registered and free of all liens.",
      "inv.calc_title": "Mortgage Simulator",
      "inv.lbl_area": "Lot Area:",
      "inv.lbl_downpayment": "Down Payment (%):",
      "inv.res_total": "TOTAL VALUE",
      "inv.res_prima": "DOWN PAYMENT",
      "inv.res_cuota": "EST. MONTHLY (15 YRS)*",
      "inv.btn_send_wa": "Send Quote to WhatsApp (+504 9361-3976)",
      "inv.btn_prequal": "Request Bank Pre-approval",
      "fin.badge": "FINANCING & LOCATION",
      "fin.title_part1": "Backed by",
      "fin.title_part2": "and",
      "fin.subtitle": "Credit facilities up to 80% value with 10 to 15-year repayment terms.",
      "fin.bank_sub": "Land Financing Program",
      "fin.row1_lbl": "Financing:",
      "fin.row1_val": "Up to 80%",
      "fin.row2_lbl": "Term:",
      "fin.row2_val": "10 to 15 years",
      "fin.row3_lbl": "Min. Down Payment:",
      "fin.row3_val": "20% initial",
      "fin.row4_lbl": "Escrow Accounts:",
      "fin.btn_advisor": "Contact Mortgage Advisor",
      "fin.map_highway": "International Highway (175m)",
      "fin.map_access": "Los Mangos Entrance",
      "fin.map_park": "Central Park (4 Blocks)",
      "fin.leg_highway": "175m from International Highway",
      "fin.leg_park": "4 blocks from Central Park",
      "contact.badge": "VIP SUPPORT",
      "contact.title_part1": "Reserve your lot or book your",
      "contact.title_part2": "guided visit",
      "contact.lead": "Personalized VIP assistance directly with our developer team in Copán Ruinas.",
      "contact.wa_lbl": "Real Estate WhatsApp",
      "contact.phone_lbl": "Direct Phone Call",
      "contact.hours": "Monday to Saturday 8:00 AM &ndash; 6:00 PM",
      "contact.form_title": "Reservation / Inquiry Request",
      "contact.form_name": "Full Name *",
      "contact.form_phone": "WhatsApp / Phone *",
      "contact.form_email": "Email Address *",
      "contact.form_block": "Block of Interest",
      "contact.opt_block_a": "Block A — Exclusive Residential",
      "contact.opt_block_b": "Block B — Residential & Greenways",
      "contact.opt_block_c": "Block C — Commercial / Mixed-Use",
      "contact.form_submit": "Submit Immediate Request",
      "contact.privacy": "Your information is handled with strict confidentiality.",
      "footer.b1": "Regular Topography",
      "compare.title": "Comprehensive Block Comparison",
      "compare.sub": "Analyze the distinct luxury features of each sector in Residencial Los Mangos",
      "compare.col_feature": "Feature",
      "compare.row_use": "Land Use",
      "compare.row_elevation": "Elevation & Views",
      "compare.row_trails": "Trail Access",
      "compare.row_privacy": "Privacy Level",
      "compare.row_topo": "Topography",
      "compare.row_price": "Base Price",
      "compare.row_fin": "Financing",
      "compare.select_a": "Select A",
      "compare.select_b": "Select B",
      "compare.select_c": "Select C"
    }
  };

  let currentLang = 'es';
  window.currentLang = currentLang;

  function detectInitialLanguage() {
    const saved = localStorage.getItem('los_mangos_lang');
    if (saved && (saved === 'es' || saved === 'en')) {
      return saved;
    }
    const browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
    return browserLang.startsWith('en') ? 'en' : 'es';
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    window.currentLang = lang;
    localStorage.setItem('los_mangos_lang', lang);
    document.documentElement.lang = lang;

    const langLabel = document.getElementById('lang-current-label');
    if (langLabel) langLabel.textContent = lang.toUpperCase();

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    const nameInput = document.getElementById('f-name');
    const phoneInput = document.getElementById('f-phone');
    const emailInput = document.getElementById('f-email');
    if (nameInput) nameInput.placeholder = lang === 'en' ? 'e.g. John Miller' : 'Ej. Carlos Mendoza';
    if (phoneInput) phoneInput.placeholder = lang === 'en' ? '+504 9361-3976' : '+504 9361-3976';
    if (emailInput) emailInput.placeholder = lang === 'en' ? 'john@domain.com' : 'carlos@correo.com';

    const activeTab = document.querySelector('.mp-block-btn.active, .mp-tab.active');
    const currentBlockKey = activeTab ? activeTab.dataset.target : 'B';
    setMasterplanBlock(currentBlockKey);

    calculateInvestment();

    if (window.lucide) lucide.createIcons();
  }

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'es' ? 'en' : 'es');
    });
  }

  /* =========================================================
     1. DRONE SCRUBBING & DEPTH-OF-FIELD VELOCITY BLUR
     ========================================================= */
  const TOTAL_FRAMES = 375;
  const START_FRAME = 1;
  const END_FRAME = 375;

  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  const scrollProgressFill = document.getElementById('scroll-progress-fill');

  const preloader = document.getElementById('preloader');
  const preloaderBar = document.getElementById('preloader-bar');
  const preloaderPct = document.getElementById('preloader-pct');
  const preloaderText = document.getElementById('preloader-text');

  const images = new Array(TOTAL_FRAMES + 1);
  let loadedCount = 0;
  let targetProgress = 0;
  let currentProgress = 0;
  let lastRenderedFrame = -1;

  function getFrameSrc(index) {
    const pad = String(index).padStart(4, '0');
    return `assets/frames/frame_${pad}.webp`;
  }

  function initFrameLoading() {
    const firstImg = new Image();
    firstImg.src = getFrameSrc(START_FRAME);

    firstImg.onload = () => {
      images[START_FRAME] = firstImg;
      loadedCount++;
      drawFrame(START_FRAME);
      loadRestOfFrames();
    };

    firstImg.onerror = () => {
      loadRestOfFrames();
    };
  }

  function loadRestOfFrames() {
    const step = 5;
    const priorityIndices = [];
    const remainingIndices = [];

    for (let i = 1; i <= TOTAL_FRAMES; i += step) {
      if (i !== START_FRAME) priorityIndices.push(i);
    }
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      if (i !== START_FRAME && i % step !== 0) remainingIndices.push(i);
    }

    const loadQueue = [...priorityIndices, ...remainingIndices];
    let completed = loadedCount;
    const concurrency = 8;
    let queuePointer = 0;

    function loadNext() {
      if (queuePointer >= loadQueue.length) return;

      const frameIdx = loadQueue[queuePointer++];
      const img = new Image();
      img.src = getFrameSrc(frameIdx);

      img.onload = () => {
        images[frameIdx] = img;
        completed++;
        updatePreloader(completed);
        loadNext();
      };

      img.onerror = () => {
        completed++;
        updatePreloader(completed);
        loadNext();
      };
    }

    for (let c = 0; c < concurrency; c++) {
      loadNext();
    }
  }

  function updatePreloader(count) {
    const pct = Math.min(100, Math.round((count / TOTAL_FRAMES) * 100));
    if (preloaderBar) preloaderBar.style.width = `${pct}%`;
    if (preloaderPct) preloaderPct.textContent = `${pct}%`;

    if (count >= 20 && preloader && !preloader.classList.contains('is-loaded')) {
      if (preloaderText) preloaderText.textContent = currentLang === 'en' ? 'Experience ready...' : 'Experiencia lista...';
      setTimeout(() => {
        preloader.classList.add('is-loaded');
      }, 250);
    }
  }

  let canvasW = 0;
  let canvasH = 0;

  function resizeCanvas() {
    if (!canvas || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvasW = window.innerWidth;
    canvasH = window.innerHeight;

    canvas.width = canvasW * dpr;
    canvas.height = canvasH * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    if (lastRenderedFrame > 0) {
      drawFrame(lastRenderedFrame);
    }
  }

  window.addEventListener('resize', resizeCanvas);

  function drawFrame(frameIndex) {
    if (!ctx) return;
    let img = images[frameIndex];

    if (!img || !img.complete || img.naturalWidth === 0) {
      img = findNearestLoaded(frameIndex);
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    ctx.clearRect(0, 0, canvasW, canvasH);

    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;

    const scale = Math.max(canvasW / imgW, canvasH / imgH);
    const drawW = imgW * scale;
    const drawH = imgH * scale;
    const offsetX = (canvasW - drawW) / 2;
    const offsetY = (canvasH - drawH) / 2;

    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    lastRenderedFrame = frameIndex;
  }

  function findNearestLoaded(target) {
    if (images[target] && images[target].complete && images[target].naturalWidth > 0) {
      return images[target];
    }
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const up = target + offset;
      const down = target - offset;
      if (up <= TOTAL_FRAMES && images[up] && images[up].complete && images[up].naturalWidth > 0) {
        return images[up];
      }
      if (down >= 1 && images[down] && images[down].complete && images[down].naturalWidth > 0) {
        return images[down];
      }
    }
    return null;
  }

  const sections = document.querySelectorAll('.vh-section');
  const navItems = document.querySelectorAll('.nav-item');
  const navbar = document.getElementById('navbar');

  function updateActiveNav() {
    const scrollMid = window.scrollY + window.innerHeight / 2;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollMid >= top && scrollMid < bottom) {
        navItems.forEach((item) => {
          item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
        });
      }
    });

    if (navbar) {
      navbar.classList.toggle('is-scrolled', window.scrollY > 40);
    }
  }

  function onScroll() {
    const currentY = window.pageYOffset || document.documentElement.scrollTop || 0;
    const maxScroll = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    ) - window.innerHeight;

    if (maxScroll <= 0) return;
    targetProgress = Math.max(0, Math.min(1, currentY / maxScroll));

    updateActiveNav();
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  function animate() {
    const lerpFactor = 0.15;
    const diff = targetProgress - currentProgress;

    if (Math.abs(diff) > 0.0001) {
      currentProgress += diff * lerpFactor;
    } else {
      currentProgress = targetProgress;
    }

    const targetFrame = Math.round(START_FRAME + currentProgress * (END_FRAME - START_FRAME));
    const clampedFrame = Math.max(START_FRAME, Math.min(END_FRAME, targetFrame));

    if (clampedFrame !== lastRenderedFrame) {
      drawFrame(clampedFrame);
    }

    if (scrollProgressFill) {
      scrollProgressFill.style.width = `${(currentProgress * 100).toFixed(2)}%`;
    }

    requestAnimationFrame(animate);
  }

  /* =========================================================
     2. CINEMATIC SCROLL REVEAL & ODOMETER COUNT-UP
     ========================================================= */
  function initScrollReveal() {
    const revealItems = document.querySelectorAll('.reveal-item');
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            triggerOdometersInside(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealItems.forEach((el) => observer.observe(el));
  }

  function triggerOdometersInside(container) {
    const odometers = container.querySelectorAll('.odometer-num:not([data-counted])');
    odometers.forEach((odo) => {
      odo.setAttribute('data-counted', 'true');
      const target = parseFloat(odo.dataset.target) || 0;
      const prefix = odo.dataset.prefix || '';
      const suffix = odo.dataset.suffix || '';
      const isFloat = target % 1 !== 0;

      let start = 0;
      const duration = 1200;
      const startTime = performance.now();

      function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(1, elapsed / duration);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = start + (target - start) * ease;

        odo.textContent = `${prefix}${isFloat ? current.toFixed(1) : Math.round(current).toLocaleString('en-US')}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          odo.textContent = `${prefix}${isFloat ? target.toFixed(1) : target.toLocaleString('en-US')}${suffix}`;
        }
      }
      requestAnimationFrame(step);
    });
  }

  /* =========================================================
     3. MASTERPLAN INTERACTIVE LOGIC & BLOCK COMPARISON
     ========================================================= */
  const blockData = {
    es: {
      A: {
        code: 'BLOQUE A',
        status: 'Lotes Disponibles',
        title: 'Zona Residencial Exclusiva & Vistas Altas',
        desc: 'Ubicado en el flanco más elevado del desarrollo, con vistas panorámicas despejadas a las cordilleras de Copán. Entorno de máxima privacidad, estrictamente residencial y libre de ruidos.',
        use: '100% Residencial',
        topo: 'Regular / Suave Elevación',
        price: '$250 / v²',
        fin: 'Banco de Occidente (80%)',
        features: [
          'Vistas panorámicas hacia el atardecer y montañas',
          'Muro perimetral y seguridad redundante 24/7',
          'Servicios subterráneos y calles adoquinadas',
        ],
      },
      B: {
        code: 'BLOQUE B',
        status: 'Lotes Disponibles',
        title: 'Zona Residencial & Veredas Verdes',
        desc: 'Ubicado en el corazón más sereno de la residencial, con acceso directo a calles peatonales arboladas y áreas verdes protegidas. Topografía 100% plana para residencias de alto nivel.',
        use: '100% Residencial',
        topo: 'Regular / Plana',
        price: '$250 / v²',
        fin: 'Banco de Occidente (80%)',
        features: [
          'Normativa estricta que prohíbe comercios ruidosos',
          'Conexión subterránea de agua y energía eléctrica',
          'Proximidad inmediata a circuitos peatonales',
        ],
      },
      C: {
        code: 'BLOQUE C',
        status: 'Zona Mixta / Comercial Selecto',
        title: 'Zona Mixta & Comercio de Baja Densidad',
        desc: 'Estratégicamente posicionado sobre la avenida de acceso para permitir proyectos comerciales selectos de baja densidad (cafés boutique, consultorios, galerías) o residencias con vocación mixta.',
        use: 'Residencial / Comercial Selecto',
        topo: 'Regular / Plana',
        price: '$250 / v²',
        fin: 'Banco de Occidente & BAC',
        features: [
          'Permiso para comercio selecto de bajo impacto',
          'Fácil acceso y estacionamiento para visitas',
          'Alta plusvalía y flujo controlado de visitantes',
        ],
      },
    },
    en: {
      A: {
        code: 'BLOCK A',
        status: 'Available Lots',
        title: 'Exclusive Residential Zone & High Mountain Views',
        desc: 'Located on the most elevated flank of the development, offering unobstructed panoramic views of Copán’s mountain range. Maximum privacy, strictly residential and free from traffic noise.',
        use: '100% Residential',
        topo: 'Regular / Gentle Elevation',
        price: '$250 / v²',
        fin: 'Banco de Occidente (80%)',
        features: [
          'Panoramic views towards sunsets and mountain ridges',
          'Gated perimeter wall and 24/7 security',
          'Underground utilities and paved cobblestone roads',
        ],
      },
      B: {
        code: 'BLOCK B',
        status: 'Available Lots',
        title: 'Residential Zone & Green Walkways',
        desc: 'Situated in the most serene heart of the community, with direct access to tree-lined pedestrian avenues and protected green areas. 100% flat topography for premium family residences.',
        use: '100% Residential',
        topo: 'Regular / Flat',
        price: '$250 / v²',
        fin: 'Banco de Occidente (80%)',
        features: [
          'Strict zoning bylaws prohibiting noisy commercial activities',
          'Underground water and electrical power connections',
          'Direct proximity to pedestrian jogging trails',
        ],
      },
      C: {
        code: 'BLOCK C',
        status: 'Mixed-Use / Select Commercial',
        title: 'Mixed-Use Zone & Low-Density Commerce',
        desc: 'Strategically positioned on the main access boulevard to accommodate select low-density commercial ventures (boutique cafes, consulting suites, art galleries) or mixed residences.',
        use: 'Residential / Select Commercial',
        topo: 'Regular / Flat',
        price: '$250 / v²',
        fin: 'Banco de Occidente & BAC',
        features: [
          'Permit for low-impact select boutique commerce',
          'Easy access and dedicated visitor parking spaces',
          'High equity growth and controlled visitor flow',
        ],
      },
    }
  };

  const mpTabs = document.querySelectorAll('.mp-block-btn, .mp-tab');
  const mpPins = document.querySelectorAll('.map-pin');
  const mpPolygons = document.querySelectorAll('.mp-poly');

  const panelCode = document.getElementById('panel-block-code');
  const panelStatus = document.getElementById('panel-block-status');
  const panelTitle = document.getElementById('panel-block-title');
  const panelDesc = document.getElementById('panel-block-desc');
  const panelUse = document.getElementById('panel-spec-use');
  const panelTopo = document.getElementById('panel-spec-topo');
  const panelPrice = document.getElementById('panel-spec-price');
  const panelFin = document.getElementById('panel-spec-fin');
  const panelFeatures = document.getElementById('panel-block-features');
  const mapLabelTxt = document.getElementById('map-label-txt');
  const formBlockSelect = document.getElementById('f-block');

  let activeBlock = 'B';

  function setMasterplanBlock(blockKey) {
    activeBlock = blockKey;
    const lang = currentLang in blockData ? currentLang : 'es';
    const data = blockData[lang][blockKey];
    if (!data) return;

    mpTabs.forEach((tab) => {
      tab.classList.toggle('active', tab.dataset.target === blockKey);
    });

    mpPins.forEach((pin) => {
      pin.classList.toggle('active-pin', pin.dataset.block === blockKey);
    });

    mpPolygons.forEach((poly) => {
      poly.classList.toggle('active-poly', poly.dataset.block === blockKey);
    });

    if (mapLabelTxt) {
      mapLabelTxt.textContent = lang === 'en' ? `BLOCK ${blockKey} SELECTED` : `BLOQUE ${blockKey} SELECCIONADO`;
    }

    const panel = document.getElementById('mp-specs-panel');
    if (panel) {
      panel.style.opacity = '0.5';
      setTimeout(() => {
        if (panelCode) panelCode.textContent = data.code;
        if (panelStatus) panelStatus.textContent = data.status;
        if (panelTitle) panelTitle.textContent = data.title;
        if (panelDesc) panelDesc.textContent = data.desc;
        if (panelUse) panelUse.textContent = data.use;
        if (panelTopo) panelTopo.textContent = data.topo;
        if (panelPrice) panelPrice.textContent = data.price;
        if (panelFin) panelFin.textContent = data.fin;

        if (panelFeatures) {
          panelFeatures.innerHTML = data.features
            .map(
              (f) => `
            <div class="check-item">
              <i data-lucide="check" class="gold-accent"></i>
              <span>${f}</span>
            </div>`
            )
            .join('');
          if (window.lucide) lucide.createIcons();
        }

        panel.style.opacity = '1';
      }, 100);
    }

    if (formBlockSelect) {
      formBlockSelect.value = blockKey;
    }

    updateWhatsAppQuoteLink();
  }

  mpTabs.forEach((t) => t.addEventListener('click', () => setMasterplanBlock(t.dataset.target)));
  mpPins.forEach((p) => p.addEventListener('click', () => setMasterplanBlock(p.dataset.block)));
  mpPolygons.forEach((py) => py.addEventListener('click', () => setMasterplanBlock(py.dataset.block)));

  // Compare Modal Logic
  const compareModal = document.getElementById('compare-modal');
  const openCompareBtn = document.getElementById('open-compare-btn');
  const closeCompareBtn = document.getElementById('close-compare-btn');
  const selectCompareBtns = document.querySelectorAll('.btn-select-compare');

  if (openCompareBtn && compareModal) {
    openCompareBtn.addEventListener('click', () => {
      compareModal.classList.add('is-open');
    });
  }

  if (closeCompareBtn && compareModal) {
    closeCompareBtn.addEventListener('click', () => {
      compareModal.classList.remove('is-open');
    });
  }

  if (compareModal) {
    compareModal.addEventListener('click', (e) => {
      if (e.target === compareModal) {
        compareModal.classList.remove('is-open');
      }
    });
  }

  selectCompareBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const block = btn.dataset.selectBlock;
      setMasterplanBlock(block);
      if (compareModal) compareModal.classList.remove('is-open');
      const targetSec = document.getElementById('masterplan');
      if (targetSec) targetSec.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* =========================================================
     4. UNIT CONVERTER (v² ↔ m² ↔ sq ft), CALCULATOR & ROI
     ========================================================= */
  let activeUnit = 'vara'; // 'vara' | 'm2' | 'sqft'
  let activeRoiYears = 5;

  const VARA_TO_M2 = 0.6987;
  const VARA_TO_SQFT = 7.5208;
  const PRICE_PER_VARA = 250;
  const ANNUAL_RATE = 0.095;
  const LOAN_YEARS = 15;
  const ANNUAL_APPRECIATION = 0.085; // 8.5% annual capital appreciation

  const varaSlider = document.getElementById('vara-slider');
  const varaValDisplay = document.getElementById('vara-val-display');
  const primaSlider = document.getElementById('prima-slider');
  const primaPctDisplay = document.getElementById('prima-pct-display');

  const calcTotalUsd = document.getElementById('calc-total-usd');
  const calcPrimaUsd = document.getElementById('calc-prima-usd');
  const calcCuotaUsd = document.getElementById('calc-cuota-usd');

  const mainPriceNum = document.getElementById('main-price-num');
  const mainPriceUnit = document.getElementById('main-price-unit');
  const pricingTagUnit = document.getElementById('pricing-tag-unit');

  const roiProjectedVal = document.getElementById('roi-projected-val');
  const roiGainVal = document.getElementById('roi-gain-val');
  const roiBarProgress = document.getElementById('roi-bar-progress');
  const roiBtns = document.querySelectorAll('.roi-btn');
  const unitPills = document.querySelectorAll('.unit-pill-btn');
  const whatsappQuoteBtn = document.getElementById('whatsapp-quote-btn');

  function formatCurrency(amount) {
    return '$' + Math.round(amount).toLocaleString('en-US') + ' USD';
  }

  function calculateInvestment() {
    if (!varaSlider || !primaSlider) return;

    const varas = parseFloat(varaSlider.value) || 500;
    const primaPct = parseFloat(primaSlider.value) || 20;

    const total = varas * PRICE_PER_VARA;
    const prima = total * (primaPct / 100);
    const montoFinanciar = total - prima;

    const monthlyRate = ANNUAL_RATE / 12;
    const totalMonths = LOAN_YEARS * 12;
    let cuotaMensual = 0;

    if (montoFinanciar > 0) {
      cuotaMensual =
        (montoFinanciar * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    }

    // Unit Display Formatting
    if (varaValDisplay) {
      if (activeUnit === 'm2') {
        const m2Val = Math.round(varas * VARA_TO_M2);
        varaValDisplay.textContent = `${m2Val.toLocaleString()} m² (${varas.toLocaleString()} v²)`;
      } else if (activeUnit === 'sqft') {
        const sqftVal = Math.round(varas * VARA_TO_SQFT);
        varaValDisplay.textContent = `${sqftVal.toLocaleString()} ft² (${varas.toLocaleString()} v²)`;
      } else {
        varaValDisplay.textContent = `${varas.toLocaleString()} v²`;
      }
    }

    // Price tags based on unit
    if (mainPriceNum && mainPriceUnit) {
      if (activeUnit === 'm2') {
        const priceM2 = Math.round(PRICE_PER_VARA / VARA_TO_M2);
        mainPriceNum.textContent = priceM2;
        mainPriceUnit.textContent = '/ m²';
        if (pricingTagUnit) pricingTagUnit.textContent = `$${priceM2} por Metro Cuadrado`;
      } else if (activeUnit === 'sqft') {
        const priceSqft = (PRICE_PER_VARA / VARA_TO_SQFT).toFixed(1);
        mainPriceNum.textContent = priceSqft;
        mainPriceUnit.textContent = '/ ft²';
        if (pricingTagUnit) pricingTagUnit.textContent = `$${priceSqft} por Pie Cuadrado`;
      } else {
        mainPriceNum.textContent = '250';
        mainPriceUnit.textContent = '/ v²';
        if (pricingTagUnit) pricingTagUnit.textContent = currentLang === 'en' ? '$250 per Square Vara' : '$250 por Vara Cuadrada';
      }
    }

    if (primaPctDisplay) {
      if (currentLang === 'en') {
        primaPctDisplay.textContent = `${primaPct}% (${primaPct === 20 ? 'Suggested min.' : 'Custom downpayment'})`;
      } else {
        primaPctDisplay.textContent = `${primaPct}% (${primaPct === 20 ? 'Mínimo sugerido' : 'Prima personalizada'})`;
      }
    }

    if (calcTotalUsd) calcTotalUsd.textContent = formatCurrency(total);
    if (calcPrimaUsd) calcPrimaUsd.textContent = formatCurrency(prima);
    if (calcCuotaUsd) {
      const suffix = currentLang === 'en' ? '/mo' : '/mes';
      calcCuotaUsd.textContent = `~${formatCurrency(cuotaMensual)}${suffix}`;
    }

    // Calculate ROI
    calculateRoi(total);

    // Update WhatsApp link
    updateWhatsAppQuoteLink(varas, total, prima, cuotaMensual);
  }

  function calculateRoi(totalValue) {
    const futureVal = totalValue * Math.pow(1 + ANNUAL_APPRECIATION, activeRoiYears);
    const gain = futureVal - totalValue;

    if (roiProjectedVal) roiProjectedVal.textContent = formatCurrency(futureVal);
    if (roiGainVal) roiGainVal.textContent = `+${formatCurrency(gain)}`;

    if (roiBarProgress) {
      const pct = activeRoiYears === 3 ? 45 : activeRoiYears === 5 ? 68 : 100;
      roiBarProgress.style.width = `${pct}%`;
    }
  }

  function updateWhatsAppQuoteLink(varas = 500, total = 125000, prima = 25000, cuota = 955) {
    if (!whatsappQuoteBtn) return;
    const phone = '50493613976';
    const msg = currentLang === 'en'
      ? `Hello Residencial Los Mangos! I would like to get a quote for a ${varas.toLocaleString()} v² lot in Block ${activeBlock}. Estimated Total Value: ${formatCurrency(total)} (Down payment: ${formatCurrency(prima)}, Monthly quote: ~${formatCurrency(cuota)}/mo). Please contact me with more information.`
      : `¡Hola Residencial Los Mangos! Me interesa cotizar un lote de ${varas.toLocaleString()} v² en el Bloque ${activeBlock}. Valor total estimado: ${formatCurrency(total)} (Prima: ${formatCurrency(prima)}, Cuota mensual: ~${formatCurrency(cuota)}/mes). Deseo más información.`;

    whatsappQuoteBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }

  // Unit Switcher Listeners
  unitPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      unitPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      activeUnit = pill.dataset.unit;
      calculateInvestment();
    });
  });

  // ROI Year Selector Listeners
  roiBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      roiBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeRoiYears = parseInt(btn.dataset.years, 10) || 5;
      calculateInvestment();
    });
  });

  if (varaSlider && primaSlider) {
    varaSlider.addEventListener('input', calculateInvestment);
    primaSlider.addEventListener('input', calculateInvestment);
  }

  /* =========================================================
     5. INITIALIZATION
     ========================================================= */
  function init() {
    const initialLang = detectInitialLanguage();
    setLanguage(initialLang);

    resizeCanvas();
    initFrameLoading();
    onScroll();
    calculateInvestment();
    initScrollReveal();
    requestAnimationFrame(animate);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
