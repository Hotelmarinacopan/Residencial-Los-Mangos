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
      "hero.description": "Un enclave residencial privado y de alta plusvalía en Copán Ruinas. Lotes urbanizados listos para construir el patrimonio de tu familia.",
      "hero.btn_masterplan": "Explorar Masterplan",
      "hero.btn_agent": "Contactar Asesor",
      "hero.stat1_title": "Lotes Exclusivos",
      "hero.stat1_sub": "Baja Densidad",
      "hero.stat2_title": "Carretera Int.",
      "hero.stat2_sub": "Acceso Pavimentado",
      "hero.stat3_title": "Cuadras",
      "hero.stat3_sub": "Parque Central",
      "hero.stat4_title": "Varas Cuadradas",
      "hero.stat4_sub": "Áreas de Terreno",
      "hero.scroll_hint": "Haz scroll para avanzar en el recorrido",
      "concept.badge": "CONCEPTO URBANÍSTICO",
      "concept.title_part1": "Diseño Planificado.",
      "concept.title_part2": "Armonía Residencial.",
      "concept.subtitle": "Una visión urbanística que prioriza la privacidad, la sostenibilidad y la integración respetuosa con el entorno natural de Copán Ruinas.",
      "concept.c1_title": "Trazado Urbanístico",
      "concept.c1_desc": "Diseño ordenado que optimiza la privacidad entre residencias, con orientación solar favorable y calles de circulación apacible.",
      "concept.c2_title": "Topografía Amigable",
      "concept.c2_desc": "Terrenos con pendientes suaves y geometría regular que facilitan una planificación arquitectónica ágil y sin complicaciones.",
      "concept.c3_title": "Servicios Básicos Listos",
      "concept.c3_desc": "Redes completas de energía eléctrica, agua potable y aguas residuales instaladas y listas para conexión inmediata.",
      "concept.c4_title": "Comunidad Privada",
      "concept.c4_desc": "Entorno estrictamente residencial y pacífico, resguardado por normativas claras que protegen la armonía y plusvalía.",
      "trust.title": "Un proyecto sólido. Una inversión con futuro.",
      "trust.subtitle": "Certeza legal, transparencia notarial y el respaldo necesario para edificar el patrimonio de su familia con total seguridad.",
      "trust.c1_title": "Propiedad Libre de Gravamen",
      "trust.c1_desc": "Propiedad libre de gravamen, listo para escriturar e inscribir inmediatamente ante notario.",
      "trust.c2_title": "Transparencia Documental",
      "trust.c2_desc": "Planos técnicos aprobados, delimitación física exacta de cada lote y antecedentes legales verificados.",
      "trust.c3_title": "Asesoría Integral",
      "trust.c3_desc": "Solicitud de información completa, temas de financiamiento y asesoramiento legal en cada paso.",
      "trust.c4_title": "Inversión con Futuro",
      "trust.c4_desc": "Desarrollo residencial ordenado en Copán Ruinas que asegura la valorización continua de su patrimonio.",
      "mp.badge": "PLANIFICACIÓN URBANA",
      "mp.title_part1": "Masterplan",
      "mp.title_part2": "Interactivo",
      "mp.sub": "Explore la distribución y características exclusivas de los 16 lotes en los sectores Norte, Central y Sur.",
      "mp.tab_a_title": "BLOQUE A",
      "mp.tab_a_sub": "Lotes 1 al 7 &bull; Norte",
      "mp.tab_b_title": "BLOQUE B",
      "mp.tab_b_sub": "Lotes 1 al 5 &bull; Centro",
      "mp.tab_c_title": "BLOQUE C",
      "mp.tab_c_sub": "Lotes 1 al 4 &bull; Sur",
      "mp.btn_compare": "Comparar Bloques A / B / C",
      "mp.lbl_use": "USO DE SUELO",
      "mp.lbl_topo": "TOPOGRAFÍA",
      "mp.lbl_price": "PRECIO ESTIMADO",
      "mp.lbl_fin": "COMPRA & ASESORÍA",
      "mp.val_fin": "Gestión Directa",
      "mp.btn_quote": "Consultar Lote en este Bloque",
      "mp.mode_blueprint": "Plano Oficial",
      "mp.mode_drone": "Vista Drone",
      "inv.badge": "CONDICIONES COMERCIALES",
      "inv.title_part1": "Transparencia Financiera,",
      "inv.title_part2": "Cero Costos Ocultos",
      "inv.subtitle": "Un esquema de adquisición estructurado para brindarle máxima rentabilidad y absoluta tranquilidad en su inversión.",
      "inv.bullet1": "<strong>Impuestos cubiertos por la Desarrolladora</strong>: El 100% de impuestos de traspaso son asumidos por nosotros.",
      "inv.bullet2": "<strong>Honorarios notariales directos</strong>: El comprador abona únicamente los gastos notariales de escrituración.",
      "inv.bullet3": "<strong>Planes y facilidades de pago</strong>: Asesoramiento para estructurar su adquisición con opciones convenientes.",
      "inv.bullet4": "<strong>Lotes de 306 a 695 v²</strong>: Dimensiones ideales para proyectos residenciales unifamiliares o mixtos.",
      "inv.consult_title": "Precios & Disponibilidad",
      "inv.consult_status": "Respuesta Inmediata",
      "inv.consult_desc": "Cada lote cuenta con disponibilidad y especificaciones particulares. Contáctenos para recibir el inventario actualizado y una cotización personalizada.",
      "inv.btn_send_wa": "Cotizar por WhatsApp",
      "inv.btn_prequal": "Solicitar Información Detallada",
      "fin.badge": "UBICACIÓN PRIVILEGIADA",
      "fin.title_part1": "Conectividad Estratégica en",
      "fin.title_part2": "Copán Ruinas",
      "fin.subtitle": "El balance ideal entre acceso vehicular inmediato a las principales rutas y la calma de un entorno histórico reservado.",
      "fin.loc_title": "Entorno & Distancias Clave",
      "fin.loc_sub": "Copán Ruinas &bull; Honduras",
      "fin.loc1_lbl": "Carretera Internacional:",
      "fin.loc1_val": "A solo 175 metros",
      "fin.loc2_lbl": "Parque Central:",
      "fin.loc2_val": "A 4 cuadras caminables",
      "fin.loc3_lbl": "Acceso Vehicular:",
      "fin.loc3_val": "Completamente Pavimentado",
      "fin.loc4_lbl": "Entorno Natural:",
      "fin.loc4_val": "Valle Sereno y Protegido",
      "fin.btn_gmaps": "Abrir en Google Maps",
      "contact.badge": "ATENCIÓN & ASESORÍA",
      "contact.title_part1": "Coordine su visita o",
      "contact.title_part2": "reserve su lote",
      "contact.lead": "Atención personalizada directa con nuestro equipo de desarrolladores y asesores en Copán Ruinas.",
      "contact.wa_lbl": "WhatsApp Inmobiliario",
      "contact.phone_lbl": "Llamada Directa",
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
      "footer.desc": "Desarrollo residencial & comercial exclusivo en Copán Ruinas, Honduras. Un enclave seguro con diseño urbanístico de vanguardia y alta plusvalía patrimonial.",
      "footer.rights": "Todos los derechos reservados.",
      "footer.b1": "Topografía Amigable",
      "footer.b2": "Consulte con Asesor",
      "footer.b3": "Asesoría Directa",
      "compare.title": "Comparativa Integral de Bloques",
      "compare.sub": "Analice las características exclusivas de cada zona de Residencial Los Mangos",
      "compare.col_feature": "Característica",
      "compare.row_use": "Uso de Suelo",
      "compare.row_elevation": "Ubicación del Sector",
      "compare.row_trails": "Acceso & Calles",
      "compare.row_privacy": "Nivel de Privacidad",
      "compare.row_topo": "Topografía",
      "compare.row_price": "Precio",
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
      "hero.description": "A private, high-equity residential haven in Copán Ruinas. Urbanized lots ready to build your family's lasting heritage.",
      "hero.btn_masterplan": "Explore Masterplan",
      "hero.btn_agent": "Contact Advisor",
      "hero.stat1_title": "Exclusive Lots",
      "hero.stat1_sub": "Low Density",
      "hero.stat2_title": "Int'l Highway",
      "hero.stat2_sub": "Paved Access",
      "hero.stat3_title": "Blocks",
      "hero.stat3_sub": "Central Park",
      "hero.stat4_title": "Square Varas",
      "hero.stat4_sub": "Lot Dimensions",
      "hero.scroll_hint": "Scroll down to explore the tour",
      "concept.badge": "URBAN CONCEPT",
      "concept.title_part1": "Planned Design.",
      "concept.title_part2": "Residential Harmony.",
      "concept.subtitle": "An urban vision prioritizing privacy, sustainability, and respectful integration with the natural setting of Copán Ruinas.",
      "concept.c1_title": "Master Urban Layout",
      "concept.c1_desc": "Orderly design optimizing privacy between residences, with favorable sun orientation and tranquil access streets.",
      "concept.c2_title": "Gentle Topography",
      "concept.c2_desc": "Lots with gentle slopes and regular geometry facilitating swift architectural planning without complications.",
      "concept.c3_title": "Utilities Ready",
      "concept.c3_desc": "Complete networks of electrical power, potable water, and wastewater systems installed for immediate hookup.",
      "concept.c4_title": "Private Community",
      "concept.c4_desc": "Strictly residential and peaceful environment, safeguarded by clear community guidelines protecting harmony and equity.",
      "trust.title": "A solid project. An investment with a future.",
      "trust.subtitle": "Legal certainty, notarial transparency, and comprehensive backing to build your family's heritage with absolute security.",
      "trust.c1_title": "Lien-Free Property",
      "trust.c1_desc": "Lien-free property, ready for immediate deed execution and registration.",
      "trust.c2_title": "Documentary Transparency",
      "trust.c2_desc": "Approved technical blueprints, exact physical lot boundaries, and verified legal chain of title.",
      "trust.c3_title": "Comprehensive Advisory",
      "trust.c3_desc": "Complete information inquiry, financing options, and legal advisory every step of the way.",
      "trust.c4_title": "Investment with a Future",
      "trust.c4_desc": "Orderly residential development in Copán Ruinas ensuring continuous appreciation of your estate.",
      "mp.badge": "URBAN PLANNING",
      "mp.title_part1": "Masterplan",
      "mp.title_part2": "Interactive",
      "mp.sub": "Explore the layout and exclusive features of the 16 lots across North, Central, and South sectors.",
      "mp.tab_a_title": "BLOCK A",
      "mp.tab_a_sub": "Lots 1 to 7 &bull; North",
      "mp.tab_b_title": "BLOCK B",
      "mp.tab_b_sub": "Lots 1 to 5 &bull; Center",
      "mp.tab_c_title": "BLOCK C",
      "mp.tab_c_sub": "Lots 1 to 4 &bull; South",
      "mp.btn_compare": "Compare Blocks A / B / C",
      "mp.lbl_use": "LAND USE",
      "mp.lbl_topo": "TOPOGRAPHY",
      "mp.lbl_price": "ESTIMATED PRICE",
      "mp.lbl_fin": "PURCHASE & ADVISORY",
      "mp.val_fin": "Direct Advisory",
      "mp.btn_quote": "Inquire About Lot in this Block",
      "mp.mode_blueprint": "Official Blueprint",
      "mp.mode_drone": "Drone View",
      "inv.badge": "COMMERCIAL TERMS",
      "inv.title_part1": "Financial Transparency,",
      "inv.title_part2": "Zero Hidden Costs",
      "inv.subtitle": "A structured acquisition framework designed to provide maximum value and peace of mind.",
      "inv.bullet1": "<strong>Taxes covered by Developer</strong>: 100% of transfer taxes are covered by us.",
      "inv.bullet2": "<strong>Direct notary fees</strong>: Buyer only covers official notarial deed execution fees.",
      "inv.bullet3": "<strong>Payment plans & flexibility</strong>: Advisory to structure your purchase with convenient financing options.",
      "inv.bullet4": "<strong>Lots from 306 to 695 v²</strong>: Ideal dimensions for family residential or mixed architectural projects.",
      "inv.consult_title": "Pricing & Availability",
      "inv.consult_status": "Instant Response",
      "inv.consult_desc": "Each lot features distinct specifications and availability. Contact us to receive the updated inventory and a customized quote.",
      "inv.btn_send_wa": "Get Quote via WhatsApp",
      "inv.btn_prequal": "Request Detailed Information",
      "fin.badge": "PRIME LOCATION",
      "fin.title_part1": "Strategic Connectivity in",
      "fin.title_part2": "Copán Ruinas",
      "fin.subtitle": "The ideal balance between immediate vehicular highway access and the serenity of a secluded historic setting.",
      "fin.loc_title": "Key Surroundings & Distances",
      "fin.loc_sub": "Copán Ruinas &bull; Honduras",
      "fin.loc1_lbl": "International Highway:",
      "fin.loc1_val": "Just 175 meters away",
      "fin.loc2_lbl": "Central Park:",
      "fin.loc2_val": "4 walkable blocks away",
      "fin.loc3_lbl": "Vehicular Access:",
      "fin.loc3_val": "Fully Paved Road",
      "fin.loc4_lbl": "Natural Setting:",
      "fin.loc4_val": "Serene & Protected Valley",
      "fin.btn_gmaps": "Open in Google Maps",
      "contact.badge": "SALES & ADVISORY",
      "contact.title_part1": "Schedule your visit or",
      "contact.title_part2": "reserve your lot",
      "contact.lead": "Direct personalized attention with our developer and advisory team in Copán Ruinas.",
      "contact.wa_lbl": "Real Estate WhatsApp",
      "contact.phone_lbl": "Direct Phone Call",
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
      "footer.desc": "Exclusive residential & commercial development in Copán Ruinas, Honduras. A secure haven with vanguard urban planning and high property equity.",
      "footer.rights": "All rights reserved.",
      "footer.b1": "Gentle Topography",
      "footer.b2": "Consult with Advisor",
      "footer.b3": "Direct Advisory",
      "compare.title": "Comprehensive Block Comparison",
      "compare.sub": "Analyze the distinct features of each sector in Residencial Los Mangos",
      "compare.col_feature": "Feature",
      "compare.row_use": "Land Use",
      "compare.row_elevation": "Sector Location",
      "compare.row_trails": "Access & Streets",
      "compare.row_privacy": "Privacy Level",
      "compare.row_topo": "Topography",
      "compare.row_price": "Price",
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
     0.6 BRAND LOGO SMOOTH SCROLL TO HERO (REPLACES NAV INICIO)
     ========================================================= */
  const navBrandLogo = document.getElementById('nav-brand-logo');
  if (navBrandLogo) {
    navBrandLogo.addEventListener('click', (e) => {
      e.preventDefault();
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const footerLogoLink = document.querySelector('.footer-logo-link');
  if (footerLogoLink) {
    footerLogoLink.addEventListener('click', (e) => {
      e.preventDefault();
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: 'smooth' });
      }
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
        status: 'Lotes 1 al 7 Disponibles',
        title: 'Sector Norte (Lotes 1 al 7)',
        desc: 'Ubicado en el sector norte del desarrollo, comprende los lotes del 1 al 7. Entorno de máxima privacidad, estrictamente residencial y pacífico.',
        use: '100% Residencial',
        topo: 'Topografía Amigable',
        price: 'Consulte con nuestros asesores',
        fin: 'Gestión Directa con Asesor',
        features: [
          '7 lotes residenciales en la zona norte',
          'Normativa estricta para la preservación residencial',
          'Redes de energía eléctrica, agua potable y aguas residuales',
          'Calles adoquinadas y comunidad exclusiva',
        ],
      },
      B: {
        code: 'BLOQUE B',
        status: 'Lotes 1 al 5 Disponibles',
        title: 'Sector Central & Veredas Verdes (Lotes 1 al 5)',
        desc: 'Ubicado en la zona central del desarrollo, comprende los lotes del 1 al 5 con acceso directo a calles peatonales arboladas y áreas verdes protegidas. 100% de fácil planificación y construcción.',
        use: '100% Residencial',
        topo: 'Topografía Amigable / Plana',
        price: 'Consulte con nuestros asesores',
        fin: 'Gestión Directa con Asesor',
        features: [
          '5 lotes familiares en la franja central',
          'Normativa estricta que preserva la tranquilidad residencial',
          'Redes de energía eléctrica, agua potable y aguas residuales',
          'Proximidad inmediata a circuitos peatonales',
        ],
      },
      C: {
        code: 'BLOQUE C',
        status: 'Lotes 1 al 4 Disponibles',
        title: 'Sector Sur & Calle Independencia (Lotes 1 al 4)',
        desc: 'Estratégicamente posicionado en el sector sur con frente directo a la Calle Independencia, comprende los lotes del 1 al 4 para proyectos comerciales selectos de baja densidad (cafés boutique, consultorios, galerías) o residencias con vocación mixta.',
        use: 'Residencial / Comercial Selecto',
        topo: 'Topografía Amigable / Plana',
        price: 'Consulte con nuestros asesores',
        fin: 'Gestión Directa con Asesor',
        features: [
          '4 lotes con frente directo a la Calle Independencia',
          'Permiso para comercio selecto de bajo impacto',
          'Redes de energía eléctrica, agua potable y aguas residuales',
          'Fácil acceso y estacionamiento para visitas',
        ],
      },
    },
    en: {
      A: {
        code: 'BLOCK A',
        status: 'Lots 1 to 7 Available',
        title: 'North Sector (Lots 1 to 7)',
        desc: 'Located in the northern sector of the development, encompassing lots 1 through 7. Maximum privacy, strictly residential and peaceful setting.',
        use: '100% Residential',
        topo: 'Gentle Topography',
        price: 'Consult with our advisors',
        fin: 'Direct Sales Advisor',
        features: [
          '7 residential lots in the north sector',
          'Strict regulations for residential preservation',
          'Electrical power, potable water, and wastewater systems',
          'Cobblestone paved streets and exclusive community',
        ],
      },
      B: {
        code: 'BLOCK B',
        status: 'Lots 1 to 5 Available',
        title: 'Central Sector & Greenways (Lots 1 to 5)',
        desc: 'Situated in the central area of the development, encompassing lots 1 through 5 with direct access to tree-lined pedestrian paths and protected green areas. 100% easy planning and construction.',
        use: '100% Residential',
        topo: 'Gentle Topography / Flat',
        price: 'Consult with our advisors',
        fin: 'Direct Sales Advisor',
        features: [
          '5 family lots in the central green belt',
          'Strict bylaws preserving residential tranquility',
          'Electrical power, potable water, and wastewater systems',
          'Direct proximity to pedestrian circuits',
        ],
      },
      C: {
        code: 'BLOCK C',
        status: 'Lots 1 to 4 Available',
        title: 'South Sector & Calle Independencia (Lots 1 to 4)',
        desc: 'Strategically positioned in the south sector facing Calle Independencia, encompassing lots 1 through 4 to accommodate select low-density commercial ventures or mixed-use residences.',
        use: 'Residential / Select Commercial',
        topo: 'Gentle Topography / Flat',
        price: 'Consult with our advisors',
        fin: 'Direct Sales Advisor',
        features: [
          '4 lots facing Calle Independencia',
          'Permit for low-impact select boutique commerce',
          'Electrical power, potable water, and wastewater systems',
          'Easy access and dedicated visitor parking spaces',
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
  const masterplanScreenBox = document.getElementById('masterplan-screen-box');

  function setMasterplanViewMode(mode) {
    if (mode === 'drone') {
      if (btnModeDrone) btnModeDrone.classList.add('active');
      if (btnModeBlueprint) btnModeBlueprint.classList.remove('active');
      if (mpDroneImg) mpDroneImg.classList.add('active-view');
      if (mpBlueprintImg) mpBlueprintImg.classList.remove('active-view');
      if (masterplanScreenBox) masterplanScreenBox.classList.add('drone-view');
    } else {
      if (btnModeBlueprint) btnModeBlueprint.classList.add('active');
      if (btnModeDrone) btnModeDrone.classList.remove('active');
      if (mpBlueprintImg) mpBlueprintImg.classList.add('active-view');
      if (mpDroneImg) mpDroneImg.classList.remove('active-view');
      if (masterplanScreenBox) masterplanScreenBox.classList.remove('drone-view');
    }
  }

  if (btnModeBlueprint) btnModeBlueprint.addEventListener('click', () => setMasterplanViewMode('blueprint'));
  if (btnModeDrone) btnModeDrone.addEventListener('click', () => setMasterplanViewMode('drone'));

  /* =========================================================
     4. UNIT CONVERTER (v² ↔ m² ↔ sq ft) & DIRECT AGENT QUOTE
     ========================================================= */
  let activeUnit = 'vara'; // 'vara' | 'm2' | 'sqft'

  const mainPriceNum = document.getElementById('main-price-num');
  const mainPriceUnit = document.getElementById('main-price-unit');
  const pricingTagUnit = document.getElementById('pricing-tag-unit');
  const unitPills = document.querySelectorAll('.unit-pill-btn');
  const whatsappQuoteBtn = document.getElementById('whatsapp-quote-btn');

  function updatePricingUnitDisplay() {
    if (mainPriceNum) {
      mainPriceNum.textContent = currentLang === 'en' ? 'Consult with our advisors' : 'Consulte con nuestros asesores';
      if (mainPriceUnit) mainPriceUnit.textContent = '';
      if (pricingTagUnit) pricingTagUnit.textContent = currentLang === 'en' ? 'Our Advisors' : 'Nuestros Asesores';
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
