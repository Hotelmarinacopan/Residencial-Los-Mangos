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
      "nav.location": "Ubicación",
      "nav.contact": "Contacto",
      "nav.cta": "Reservar Lote",
      "hero.tag": "LANZAMIENTO EXCLUSIVO &bull; COPÁN RUINAS",
      "hero.title_line1": "Innovando el Futuro.",
      "hero.title_line2": "Construyendo tu Legado.",
      "hero.description": "Un enclave residencial de ultra-lujo y alta plusvalía. Lotes con topografía 100% regular a <strong>175 metros de la carretera internacional</strong> y a solo <strong>4 cuadras del Parque Central</strong>.",
      "hero.btn_masterplan": "Explorar Masterplan",
      "hero.btn_agent": "Contactar Asesor",
      "hero.trust_lots": "Lotes Disponibles",
      "hero.trust_road_title": "175m Carretera",
      "hero.trust_road_sub": "Acceso Pavimentado",
      "hero.trust_park_title": "4 Cuadras",
      "hero.trust_park_sub": "Parque Central",
      "hero.trust_agent_title": "Atención VIP",
      "hero.trust_agent_sub": "Asesoría Directa",
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
      "trust.c3_giant": "VIP",
      "trust.c3_title": "Asesoría Integral",
      "trust.c3_desc": "Acompañamiento personalizado directo con nuestro agente de ventas y gestión de compra.",
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
      "mp.lbl_fin": "COMPRA & ASESORÍA",
      "mp.val_fin": "Gestión Directa",
      "mp.btn_quote": "Cotizar con Asesor",
      "mp.mode_blueprint": "Plano Oficial",
      "mp.mode_drone": "Vista Drone",
      "inv.badge": "MODELO DE INVERSIÓN",
      "inv.title_part1": "Lotes listos a",
      "inv.subtitle": "Los impuestos de traspaso son pagados al 100% por la Desarrolladora; el comprador solo abona escrituración notarial.",
      "inv.bullet1": "<strong>Impuestos cubiertos por la Desarrolladora</strong> (cero costos ocultos).",
      "inv.bullet2": "<strong>Comprador solo paga escrituración notarial</strong>.",
      "inv.bullet3": "<strong>Topografía 100% regular y plana</strong> sin sobrecostos de nivelación.",
      "inv.bullet4": "<strong>Lotes desde 300 v² hasta 1,500+ v²</strong> listos para escrituración.",
      "inv.legal": "Títulos de propiedad plenamente inscritos y libres de gravámenes.",
      "inv.consult_title": "Atención & Asesoría Directa",
      "inv.consult_status": "Respuesta Inmediata",
      "inv.consult_desc": "Comuníquese directamente con nuestro agente de ventas exclusivo para recibir el catálogo de lotes disponibles, opciones de pago y coordinar su visita guiada en Copán Ruinas.",
      "inv.stat_area_label": "ÁREAS DISPONIBLES",
      "inv.stat_delivery_label": "ESCRITURACIÓN",
      "inv.stat_delivery_val": "Inmediata",
      "inv.btn_send_wa": "Chatear con Agente de Ventas (+504 9361-3976)",
      "inv.btn_prequal": "Agendar Visita Guiada / Reserva",
      "fin.badge": "UBICACIÓN & CONTACTO",
      "fin.title_part1": "Ubicación Estratégica &",
      "fin.title_part2": "Contacto Directo",
      "fin.subtitle": "Situado a 175m de la carretera internacional en Copán Ruinas. Conecte de inmediato con nuestro agente de ventas o asesor para coordinar su compra.",
      "fin.contact_title": "Canales de Atención",
      "fin.contact_sub": "Residencial Los Mangos &bull; Copán Ruinas",
      "fin.row1_lbl": "Agente de Ventas:",
      "fin.row2_lbl": "Atención al Cliente:",
      "fin.row2_val": "Lunes a Sábado 8am - 6pm",
      "fin.row3_lbl": "Asesoría Bancaria:",
      "fin.row3_val": "Gestión & Conexión Directa",
      "fin.row4_lbl": "Ubicación:",
      "fin.btn_advisor": "Hablar con Asesor de Ventas",
      "fin.leg_highway": "A 175m de Carretera Internacional",
      "fin.leg_park": "A 4 cuadras del Parque Central",
      "fin.btn_gmaps": "Abrir en Google Maps",
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
      "footer.b3": "Asesoría Directa",
      "compare.title": "Comparativa Integral de Bloques",
      "compare.sub": "Analice las características exclusivas de cada zona de Residencial Los Mangos",
      "compare.col_feature": "Característica",
      "compare.row_use": "Uso de Suelo",
      "compare.row_elevation": "Elevación & Vistas",
      "compare.row_trails": "Acceso a Veredas",
      "compare.row_privacy": "Nivel de Privacidad",
      "compare.row_topo": "Topografía",
      "compare.row_price": "Precio Base",
      "compare.row_fin": "Gestión de Compra",
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
      "nav.location": "Location",
      "nav.contact": "Contact",
      "nav.cta": "Reserve Lot",
      "hero.tag": "EXCLUSIVE LAUNCH &bull; COPÁN RUINAS",
      "hero.title_line1": "Innovating the Future.",
      "hero.title_line2": "Building Your Legacy.",
      "hero.description": "An ultra-luxury, high-equity residential development. 100% flat topography lots <strong>175 meters from the international highway</strong> and just <strong>4 blocks from Central Park</strong>.",
      "hero.btn_masterplan": "Explore Masterplan",
      "hero.btn_agent": "Contact Sales Agent",
      "hero.trust_lots": "Available Lots",
      "hero.trust_road_title": "175m Highway",
      "hero.trust_road_sub": "Paved Access",
      "hero.trust_park_title": "4 Blocks",
      "hero.trust_park_sub": "Central Park",
      "hero.trust_agent_title": "VIP Service",
      "hero.trust_agent_sub": "Direct Advisory",
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
      "trust.c3_giant": "VIP",
      "trust.c3_title": "Comprehensive Advisory",
      "trust.c3_desc": "Direct personalized assistance with our sales agent and acquisition process.",
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
      "mp.lbl_fin": "PURCHASE & ADVISORY",
      "mp.val_fin": "Direct Advisory",
      "mp.btn_quote": "Get Quote with Advisor",
      "mp.mode_blueprint": "Official Blueprint",
      "mp.mode_drone": "Drone View",
      "inv.badge": "INVESTMENT MODEL",
      "inv.title_part1": "Lots ready at",
      "inv.subtitle": "Transfer taxes are 100% paid by the Developer; the buyer only covers notary closing fees.",
      "inv.bullet1": "<strong>Taxes covered by Developer</strong> (zero hidden costs).",
      "inv.bullet2": "<strong>Buyer only pays notary deed registration</strong>.",
      "inv.bullet3": "<strong>100% regular & flat topography</strong> with no ground-leveling costs.",
      "inv.bullet4": "<strong>Lots from 300 v² to 1,500+ v²</strong> ready for deed transfer.",
      "inv.legal": "Property titles fully registered and free of all liens.",
      "inv.consult_title": "Direct Advisory & Sales",
      "inv.consult_status": "Instant Response",
      "inv.consult_desc": "Contact our exclusive sales agent directly to receive the catalog of available lots, purchase options, and schedule your guided tour in Copán Ruinas.",
      "inv.stat_area_label": "AVAILABLE AREAS",
      "inv.stat_delivery_label": "DEED TRANSFER",
      "inv.stat_delivery_val": "Immediate",
      "inv.btn_send_wa": "Chat with Sales Agent (+504 9361-3976)",
      "inv.btn_prequal": "Schedule Guided Tour / Reservation",
      "fin.badge": "LOCATION & CONTACT",
      "fin.title_part1": "Strategic Location &",
      "fin.title_part2": "Direct Contact",
      "fin.subtitle": "Located 175m from the international highway in Copán Ruinas. Connect directly with our sales agent to coordinate your purchase.",
      "fin.contact_title": "Contact Channels",
      "fin.contact_sub": "Residencial Los Mangos &bull; Copán Ruinas",
      "fin.row1_lbl": "Sales Agent:",
      "fin.row2_lbl": "Customer Support:",
      "fin.row2_val": "Monday to Saturday 8am - 6pm",
      "fin.row3_lbl": "Banking Advisory:",
      "fin.row3_val": "Direct Banking Connection",
      "fin.row4_lbl": "Location:",
      "fin.btn_advisor": "Talk to Sales Advisor",
      "fin.leg_highway": "175m from International Highway",
      "fin.leg_park": "4 blocks from Central Park",
      "fin.btn_gmaps": "Open in Google Maps",
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
      "footer.b3": "Direct Advisory",
      "compare.title": "Comprehensive Block Comparison",
      "compare.sub": "Analyze the distinct luxury features of each sector in Residencial Los Mangos",
      "compare.col_feature": "Feature",
      "compare.row_use": "Land Use",
      "compare.row_elevation": "Elevation & Views",
      "compare.row_trails": "Trail Access",
      "compare.row_privacy": "Privacy Level",
      "compare.row_topo": "Topography",
      "compare.row_price": "Base Price",
      "compare.row_fin": "Purchase Advisory",
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

    updatePricingUnitDisplay();
    updateWhatsAppQuoteLink();

    if (window.lucide) lucide.createIcons();
  }

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'es' ? 'en' : 'es');
    });
  }

  /* =========================================================
     1. DUAL-LAYER DRONE ENGINE: LOW-RES SKELETON + HD SWAP
     ========================================================= */
  const TOTAL_FRAMES = 375;
  const START_FRAME = 1;
  const END_FRAME = 375;

  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  const scrollProgressFill = document.getElementById('scroll-progress-fill');
  const preloader = document.getElementById('preloader');

  // Dual frame stores (Fast low-res skeleton + High-res 1080p)
  const lowImages = new Array(TOTAL_FRAMES + 1);
  const hdImages = new Array(TOTAL_FRAMES + 1);

  let targetProgress = 0;
  let currentProgress = 0;
  let lastRenderedFrame = -1;

  function getLowFrameSrc(index) {
    const pad = String(index).padStart(4, '0');
    return `assets/frames_low/frame_${pad}.webp`;
  }

  function getHdFrameSrc(index) {
    const pad = String(index).padStart(4, '0');
    return `assets/frames/frame_${pad}.webp`;
  }

  function initFrameLoading() {
    // Instant initial draw: Load frame 1 in low-res and HD
    const firstLow = new Image();
    firstLow.src = getLowFrameSrc(START_FRAME);

    const firstHd = new Image();
    firstHd.src = getHdFrameSrc(START_FRAME);

    let firstLoaded = false;
    function onFirstReady(img, isHd) {
      if (isHd) hdImages[START_FRAME] = img;
      else lowImages[START_FRAME] = img;

      if (!firstLoaded) {
        firstLoaded = true;
        drawFrame(START_FRAME);
        if (preloader) preloader.classList.add('is-loaded');

        // Start dual progressive streams:
        startLowResStream();
        startHdStream();
      } else {
        drawFrame(START_FRAME);
      }
    }

    firstLow.onload = () => onFirstReady(firstLow, false);
    firstHd.onload = () => onFirstReady(firstHd, true);

    firstLow.onerror = () => {
      if (preloader) preloader.classList.add('is-loaded');
      startLowResStream();
      startHdStream();
    };
  }

  // Priority Stream A: Fast Low-Res Skeleton (downloads ~38KB frames rapidly with high concurrency)
  function startLowResStream() {
    const p1 = [];
    const p2 = [];
    for (let i = 1; i <= TOTAL_FRAMES; i += 5) {
      if (i !== START_FRAME) p1.push(i);
    }
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      if (i !== START_FRAME && i % 5 !== 0) p2.push(i);
    }

    const queue = [...p1, ...p2];
    const concurrency = 10;
    let ptr = 0;

    function loadNext() {
      if (ptr >= queue.length) return;
      const idx = queue[ptr++];
      const img = new Image();
      img.src = getLowFrameSrc(idx);

      img.onload = () => {
        lowImages[idx] = img;
        const currentTarget = Math.min(TOTAL_FRAMES, Math.max(1, Math.round(1 + currentProgress * (TOTAL_FRAMES - 1))));
        if (currentTarget === idx && !hdImages[idx]) {
          drawFrame(idx);
        }
        loadNext();
      };
      img.onerror = () => loadNext();
    }

    for (let c = 0; c < concurrency; c++) loadNext();
  }

  // Priority Stream B: Seamless HD Swap in Background
  function startHdStream() {
    const tier1 = [];
    const tier2 = [];
    const tier3 = [];
    for (let i = 1; i <= TOTAL_FRAMES; i += 10) {
      if (i !== START_FRAME) tier1.push(i);
    }
    for (let i = 1; i <= TOTAL_FRAMES; i += 5) {
      if (!tier1.includes(i) && i !== START_FRAME) tier2.push(i);
    }
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      if (!tier1.includes(i) && !tier2.includes(i) && i !== START_FRAME) {
        tier3.push(i);
      }
    }

    const queue = [...tier1, ...tier2, ...tier3];
    const concurrency = 6;
    let ptr = 0;

    function loadNext() {
      if (ptr >= queue.length) return;
      const idx = queue[ptr++];
      const img = new Image();
      img.src = getHdFrameSrc(idx);

      img.onload = () => {
        hdImages[idx] = img;
        if (lastRenderedFrame === idx) {
          drawFrame(idx);
        }
        loadNext();
      };
      img.onerror = () => loadNext();
    }

    for (let c = 0; c < concurrency; c++) loadNext();
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

    // 1. Prefer HD frame
    let img = hdImages[frameIndex];

    // 2. Fallback to Low-Res frame
    if (!img || !img.complete || img.naturalWidth === 0) {
      img = lowImages[frameIndex];
    }

    // 3. Fallback to Nearest Loaded (search outward)
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
    if (hdImages[target] && hdImages[target].complete && hdImages[target].naturalWidth > 0) {
      return hdImages[target];
    }
    if (lowImages[target] && lowImages[target].complete && lowImages[target].naturalWidth > 0) {
      return lowImages[target];
    }

    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const up = target + offset;
      const down = target - offset;

      if (up <= TOTAL_FRAMES) {
        if (hdImages[up] && hdImages[up].complete && hdImages[up].naturalWidth > 0) return hdImages[up];
        if (lowImages[up] && lowImages[up].complete && lowImages[up].naturalWidth > 0) return lowImages[up];
      }
      if (down >= 1) {
        if (hdImages[down] && hdImages[down].complete && hdImages[down].naturalWidth > 0) return hdImages[down];
        if (lowImages[down] && lowImages[down].complete && lowImages[down].naturalWidth > 0) return lowImages[down];
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
      navbar.classList.toggle('is-visible', window.scrollY > 80);
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
        fin: 'Gestión Directa con Asesor',
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
        fin: 'Gestión Directa con Asesor',
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
        fin: 'Gestión Directa con Asesor',
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
        fin: 'Direct Sales Advisor',
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
        fin: 'Direct Sales Advisor',
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
        fin: 'Direct Sales Advisor',
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

  // Masterplan View Mode Switcher (Blueprint vs Drone)
  const btnModeBlueprint = document.getElementById('btn-mode-blueprint');
  const btnModeDrone = document.getElementById('btn-mode-drone');
  const mpBlueprintImg = document.getElementById('mp-blueprint-img');
  const mpDroneImg = document.getElementById('mp-drone-img');

  function setMasterplanViewMode(mode) {
    if (mode === 'drone') {
      if (btnModeDrone) btnModeDrone.classList.add('active');
      if (btnModeBlueprint) btnModeBlueprint.classList.remove('active');
      if (mpDroneImg) mpDroneImg.classList.add('active-view');
      if (mpBlueprintImg) mpBlueprintImg.classList.remove('active-view');
    } else {
      if (btnModeBlueprint) btnModeBlueprint.classList.add('active');
      if (btnModeDrone) btnModeDrone.classList.remove('active');
      if (mpBlueprintImg) mpBlueprintImg.classList.add('active-view');
      if (mpDroneImg) mpDroneImg.classList.remove('active-view');
    }
  }

  if (btnModeBlueprint) btnModeBlueprint.addEventListener('click', () => setMasterplanViewMode('blueprint'));
  if (btnModeDrone) btnModeDrone.addEventListener('click', () => setMasterplanViewMode('drone'));

  /* =========================================================
     4. UNIT CONVERTER (v² ↔ m² ↔ sq ft) & DIRECT AGENT QUOTE
     ========================================================= */
  let activeUnit = 'vara'; // 'vara' | 'm2' | 'sqft'

  const VARA_TO_M2 = 0.6987;
  const VARA_TO_SQFT = 7.5208;
  const PRICE_PER_VARA = 250;

  const mainPriceNum = document.getElementById('main-price-num');
  const mainPriceUnit = document.getElementById('main-price-unit');
  const pricingTagUnit = document.getElementById('pricing-tag-unit');
  const unitPills = document.querySelectorAll('.unit-pill-btn');
  const whatsappQuoteBtn = document.getElementById('whatsapp-quote-btn');

  function updatePricingUnitDisplay() {
    if (mainPriceNum && mainPriceUnit) {
      if (activeUnit === 'm2') {
        const priceM2 = Math.round(PRICE_PER_VARA / VARA_TO_M2);
        mainPriceNum.textContent = priceM2;
        mainPriceUnit.textContent = '/ m²';
        if (pricingTagUnit) pricingTagUnit.textContent = currentLang === 'en' ? `$${priceM2} per Square Meter` : `$${priceM2} por Metro Cuadrado`;
      } else if (activeUnit === 'sqft') {
        const priceSqft = (PRICE_PER_VARA / VARA_TO_SQFT).toFixed(1);
        mainPriceNum.textContent = priceSqft;
        mainPriceUnit.textContent = '/ ft²';
        if (pricingTagUnit) pricingTagUnit.textContent = currentLang === 'en' ? `$${priceSqft} per Square Foot` : `$${priceSqft} por Pie Cuadrado`;
      } else {
        mainPriceNum.textContent = '250';
        mainPriceUnit.textContent = '/ v²';
        if (pricingTagUnit) pricingTagUnit.textContent = currentLang === 'en' ? '$250 per Square Vara' : '$250 por Vara Cuadrada';
      }
    }
  }

  function updateWhatsAppQuoteLink() {
    if (!whatsappQuoteBtn) return;
    const phone = '50493613976';
    const msg = currentLang === 'en'
      ? `Hello Residencial Los Mangos! I would like to get information and a quote for available lots in Block ${activeBlock}. Please contact me with more details.`
      : `¡Hola Residencial Los Mangos! Me interesa recibir información y cotizar lotes disponibles en el Bloque ${activeBlock}. Deseo coordinar una visita.`;

    whatsappQuoteBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }

  // Unit Switcher Listeners
  unitPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      unitPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      activeUnit = pill.dataset.unit;
      updatePricingUnitDisplay();
    });
  });

  /* =========================================================
     4.5 MOBILE HAMBURGER MENU DRAWER INTERACTION
     ========================================================= */
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawerClose = document.getElementById('mobile-drawer-close');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item, .mobile-drawer-footer a');

  function openMobileMenu() {
    if (mobileMenuDrawer) {
      mobileMenuDrawer.classList.add('is-open');
    }
  }

  function closeMobileMenu() {
    if (mobileMenuDrawer) {
      mobileMenuDrawer.classList.remove('is-open');
    }
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', openMobileMenu);
  }

  if (mobileDrawerClose) {
    mobileDrawerClose.addEventListener('click', closeMobileMenu);
  }

  mobileNavItems.forEach((item) => {
    item.addEventListener('click', closeMobileMenu);
  });

  /* =========================================================
     5. INITIALIZATION
     ========================================================= */
  function init() {
    const initialLang = detectInitialLanguage();
    setLanguage(initialLang);

    resizeCanvas();
    initFrameLoading();
    onScroll();
    updatePricingUnitDisplay();
    updateWhatsAppQuoteLink();
    initScrollReveal();
    requestAnimationFrame(animate);

    // Failsafe preloader dismissal
    setTimeout(() => {
      const p = document.getElementById('preloader');
      if (p) p.classList.add('is-loaded');
    }, 1200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
