// Academic Book Website Interactive JS App

document.addEventListener('DOMContentLoaded', () => {
    initChapterTabs();
    initLightbox();
    initAccessModal();
    initLanguageSwitcher();
    initSmoothScrolling();
});

// Bilingual Translations Database (AR / EN)
const i18nData = {
    ar: {
        brandTitle: "حماية الموارد المائية",
        brandSubtitle: "د. عز الدين رغيس - كتاب أكاديمي",
        navAbout: "عن الكتاب",
        navStats: "مؤشرات الحوض",
        navChapters: "فصول الكتاب",
        navMethodology: "المنهجية و نظم المعلومات",
        navGallery: "الأشكال و الخرائط",
        navAuthor: "المؤلف و الاتصال",
        btnRequestAccess: "طلب نسخة / إذن الوصول",
        heroBadge: "كتاب علمي محكّم ومقيد الوصول",
        heroTitle: "حماية الموارد المائية في سد عين الناقة (Fontaine des Gazelles): تقييم قائم على نظم المعلومات الجغرافية (GIS) - الجزائر",
        heroDesc: "دراسة هيدرولوجية وبيئية متكاملة تقدم إطاراً منهجياً مبتكراً لتحديد محيطات حماية الموارد المائية السطحية في حوض وادي الحي وشبه أقاليم الأوراس وسد عين الناقة (بسكرة - باتنة)، بالاعتماد على التحليل المكاني، زمن الانتقال المائي، ونمذجة مخاطر التلوث.",
        metaAuthor: "المؤلف: د. عز الدين رغيس",
        metaUniv: "جامعة جيجل / جامعة باتنة 2",
        metaPages: "101 صفحة / 6 فصول متكاملة",
        metaAccess: "كتاب مدفوع مقيد الوصول",
        btnWhatsapp: "طلب الكتاب عبر واتساب",
        btnEmail: "تواصل عبر البريد الإلكتروني",
        btnExplore: "استكشاف المحاور والأشكال",
        statsTitle: "مؤشرات وأرقام الحوض الهيدروغرافي والسد",
        statsSubtitle: "أهم المعطيات الكمية وخصائص حوض وادي الحي وسد عين الناقة المعتمدة في الدراسة",
        statWatershedArea: "مساحة حوض وادي الحي (Sub-Watershed)",
        statWatershedAreaDesc: "يمتد الحوض عبر ولايتي باتنة وبسكرة متغذياً من المرتفعات الجبلية للأوراس.",
        statDamCapacity: "السعة التخزينية لسد عين الناقة",
        statDamCapacityDesc: "سد استراتيجي لتوفير مياه الشرب والري الزراعي في منطقة عين الناقة والقنطرة.",
        statZones: "محيطات الحماية المحددة (IPP / CPP / RPP)",
        statZonesDesc: "محيط حماية مباشر (فوري)، قريب (عالي الحساسية)، وبعيد (على مستوى الحوض).",
        statTransferTime: "نطاق زمن الانتقال المائي (Water Transfer Time)",
        statTransferTimeDesc: "حساب زمن تدفق الجريان السطحي من أي نقطة بالحوض وصولاً إلى بحيرة السد.",
        chaptersTitle: "محاور وفصول الكتاب الأكاديمي",
        chaptersSubtitle: "تصفح الملخصات العلمية الشاملة والمحاور الستة المستخلصة من الكتاب مع الأشكال الخرائطية المتعلقة بكل فصل",
        tabCh1: "المفاهيم والتحديات",
        tabCh2: "إطار حوض وادي الحي",
        tabCh3: "الجيولوجيا والهيدروجيولوجيا",
        tabCh4: "الخصائص المورفومترية",
        tabCh5: "الإطار المنهجي لنظم GIS",
        tabCh6: "التطبيق ومحيطات الحماية",
        ch1Header: "حماية الموارد المائية: المفاهيم، التحديات والمقاربات Scientific Foundations",
        ch1Lead: "يستعرض الفصل الأول الأطر النظرية والبيئية لحماية الموارد المائية السطحية في المناطق الجافة وشبه الجافة، مع التركيز على حوض التغذية الكامل بدلاً من بحيرة السد منفردة.",
        ch2Header: "حوض وادي الحي: الإطار الجغرافي، البيئي والاجتماعي والاقتصادي",
        ch2Lead: "توصيف دقيق لحوض وادي الحي الذي يغطي مساحة 1,660 كم² ويشمل أجزاء من ولايتي باتنة وبسكرة (مثل عين التوتة، القنطرة، ومزارع برني).",
        ch3Header: "الإطار الجيولوجي والهيدروجيولوجيا للحوض Geology & Aquifers",
        ch3Lead: "تحليل التكاوين الصخرية والبنيوية الممتدة من الترياس إلى الرباعي، وتأثير النفاذية والتشققات الجيولوجية على تسرب المياه الجوفية والجريان السطحي.",
        ch4Header: "الخصائص المورفومترية والهيدرولوجية للحوض Physiography & Hydrology",
        ch4Lead: "حساب المعاملات المورفومترية الأساسية وشبكة الصرف الصحي وتحديد مؤشرات الانجراف السيلي وزمن التركيز المائي.",
        ch5Header: "الإطار المنهجي لتحديد محيطات حماية الموارد المائية GIS Workflow",
        ch5Lead: "تطوير منهجية مكانية معتمدة على نظم GIS تحسب \"زمن الانتقال المائي\" (Water Transfer Time) بدلاً من النطاقات الدائرية الهندسية الصماء.",
        ch6Header: "تطبيق مفهوم محيطات الحماية على سد عين الناقة Application & Results",
        ch6Lead: "النتائج النهائية لتطبيق الإطار المنهجي واستخراج خرائط محيطات الحماية المباشرة، القريبة، والبعيدة لسد عين الناقة.",
        chHighlights: "أهم النقاط والمحاور الرئيسية:",
        methTitle: "منهجية نظم المعلومات الجغرافية GIS والتحليل المكاني",
        methSubtitle: "آلية دمج المطبقات الهيدرولوجية وطبوغرافيا السطح لنماذج زمن الانتقال المائي",
        galleryTitle: "معرض الأشكال والخرائط العلمية للكتاب",
        gallerySubtitle: "استعرض جميع الخرائط والمخططات المرفقة في الكتاب الأكاديمي بدقة عالية (انقر على أي صورة للتكبير)",
        authorName: "الدكتور عز الدين رغيس (Dr. Azzeddine Reghais)",
        authorTitle: "دكتوراه في الهيدروجيولوجيا - باحث ومحاضر جامعي",
        authorBio: "متخصص في التطبيقات المتقدمة لنظم المعلومات الجغرافية (GIS)، الاستشعار عن بعد (Remote Sensing)، وتطبيقات الذكاء الاصطناعي وتعلم الآلة (Machine Learning) في الهيدروجيولوجيا، تقييم واستقرار المنحدرات، وجودة المياه الجوفية والسطحية."
    },
    en: {
        brandTitle: "Water-Resource Protection",
        brandSubtitle: "Dr. Azzeddine Reghais - Academic Book",
        navAbout: "About Book",
        navStats: "Watershed Indicators",
        navChapters: "Chapters",
        navMethodology: "GIS Methodology",
        navGallery: "Maps & Figures",
        navAuthor: "Author & Contact",
        btnRequestAccess: "Request Access / Purchase",
        heroBadge: "Peer-Reviewed Restricted Access Edition",
        heroTitle: "Water-Resource Protection at the Fontaine des Gazelles Reservoir: A GIS-Based Assessment (Algeria)",
        heroDesc: "An integrated hydrological and environmental study providing an innovative GIS-based framework for delineating protection perimeters around surface water reservoirs in the Oued El-Hai watershed and Aurès region (Biskra - Batna), based on spatial travel-time modeling and vulnerability mapping.",
        metaAuthor: "Author: Dr. Azzeddine Reghais",
        metaUniv: "Jijel University / Batna 2 University",
        metaPages: "101 Pages / 6 Comprehensive Chapters",
        metaAccess: "Paid & Restricted Access Monograph",
        btnWhatsapp: "Request Book via WhatsApp",
        btnEmail: "Contact via Email",
        btnExplore: "Explore Chapters & Figures",
        statsTitle: "Watershed & Reservoir Key Indicators",
        statsSubtitle: "Key quantitative metrics and physio-hydrological characteristics of the Oued El-Hai catchment and dam.",
        statWatershedArea: "Sub-Watershed Total Area",
        statWatershedAreaDesc: "Extends across Batna and Biskra provinces, recharged from the Aurès mountain ranges.",
        statDamCapacity: "Fontaine des Gazelles Storage Capacity",
        statDamCapacityDesc: "Strategic reservoir supplying drinking water and agricultural irrigation in El-Kantara & Ain Naga.",
        statZones: "Protection Perimeters System (IPP / CPP / RPP)",
        statZonesDesc: "Hierarchical 3-zone system: Immediate, Close (High Sensitivity), and Remote Catchment Protection.",
        statTransferTime: "Water Transfer Time Range",
        statTransferTimeDesc: "Spatially calculated runoff travel time from any catchment point to the reservoir shore.",
        chaptersTitle: "Academic Book Chapters & Core Themes",
        chaptersSubtitle: "Browse comprehensive scientific summaries across all 6 chapters along with thematic GIS maps.",
        tabCh1: "Concepts & Challenges",
        tabCh2: "Oued El-Hai Setting",
        tabCh3: "Geology & Aquifers",
        tabCh4: "Morphometrics & Hydrology",
        tabCh5: "GIS Methodological Framework",
        tabCh6: "Application & Protection Zones",
        ch1Header: "Water Resources Protection: Concepts, Challenges & Approaches",
        ch1Lead: "Chapter 1 establishes the theoretical and environmental foundations for protecting surface water reservoirs in semi-arid environments, emphasizing whole-catchment protection rather than isolated reservoir buffers.",
        ch2Header: "The Oued El-Hai Watershed: Geographic, Environmental & Socioeconomic Setting",
        ch2Lead: "A comprehensive description of the 1,660 km² Oued El-Hai watershed spanning Batna and Biskra municipalities (Ain Touta, El-Kantara, and Berni farms).",
        ch3Header: "Geological & Hydrogeological Framework of the Watershed",
        ch3Lead: "Stratigraphic and structural analysis from Triassic evaporites to Quaternary deposits, examining permeability and fault controls on surface-groundwater interactions.",
        ch4Header: "Physiographic & Hydrological Characteristics",
        ch4Lead: "Derivation of morphometric parameters, drainage networks, torrentiality indices, and watershed concentration time.",
        ch5Header: "Methodological Framework for Delineating Protection Perimeters",
        ch5Lead: "Development of a spatially explicit GIS workflow calculating water transfer times using DEMs, D8 flow accumulation, and Manning surface roughness.",
        ch6Header: "Application to the Fontaine des Gazelles Reservoir",
        ch6Lead: "Final spatial integration results delineating Immediate (Zone I), Close (Zone II < 1h travel time), and Remote (Zone III) protection perimeters.",
        chHighlights: "Key Chapter Highlights & Takeaways:",
        methTitle: "GIS Spatial Analysis & Hydrological Modeling Workflow",
        methSubtitle: "How digital elevation models, Manning roughness, and surface slopes are combined for travel time maps.",
        galleryTitle: "Scientific Figures & GIS Maps Gallery",
        gallerySubtitle: "High-resolution view of all maps and diagrams included in the academic book (click any image to enlarge).",
        authorName: "Dr. Azzeddine Reghais",
        authorTitle: "PhD in Hydrogeology - University Researcher & Lecturer",
        authorBio: "Specializing in high-tech applications of GIS, Remote Sensing, and Machine Learning models in hydrogeology, slope stability analysis, and surface & groundwater quality assessment."
    }
};

let currentLang = 'ar';

// Language Switcher Logic
function initLanguageSwitcher() {
    const langBtn = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            document.documentElement.lang = currentLang;
            document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
            document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

            langText.textContent = currentLang === 'ar' ? 'English' : 'عربي';

            // Update all DOM elements with data-i18n attribute
            document.querySelectorAll('[data-i18n]').forEach(elem => {
                const key = elem.getAttribute('data-i18n');
                if (i18nData[currentLang] && i18nData[currentLang][key]) {
                    elem.textContent = i18nData[currentLang][key];
                }
            });
        });
    }
}

// Interactive Chapter Tabs Logic
function initChapterTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.chapter-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetCh = btn.getAttribute('data-chapter');

            // Update active state on buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Show corresponding panel
            panels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === `panel-${targetCh}`) {
                    panel.classList.add('active');
                }
            });
        });
    });
}

// Lightbox Modal Logic
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close-btn');

    document.querySelectorAll('.lightbox-trigger').forEach(img => {
        img.addEventListener('click', () => {
            const imgSrc = img.getAttribute('data-img') || img.src;
            const caption = img.getAttribute('data-caption') || img.alt;

            lightboxImg.src = imgSrc;
            lightboxCaption.textContent = caption;
            lightbox.classList.add('active');
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });
    }
}

// Request Access Modal Logic
function initAccessModal() {
    const modal = document.getElementById('access-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const requestBtns = document.querySelectorAll('.btn-request, #btn-request-top');
    const requestForm = document.getElementById('request-form');
    const emailBtnForm = document.getElementById('btn-send-email-form');

    requestBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modal) modal.classList.add('active');
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    if (requestForm) {
        requestForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('req-name').value;
            const email = document.getElementById('req-email').value;
            const org = document.getElementById('req-org').value;
            const msg = document.getElementById('req-message').value;

            const text = encodeURIComponent(
                `مرحباً الدكتور عز الدين رغيس،\nأنا ${name} من (${org}).\nالبريد: ${email}\nأود طلب نسخة من الكتاب للأسباب التالية:\n${msg}`
            );

            window.open(`https://wa.me/213668261708?text=${text}`, '_blank');
            modal.classList.remove('active');
        });
    }

    if (emailBtnForm) {
        emailBtnForm.addEventListener('click', () => {
            const name = document.getElementById('req-name').value || 'الباحث';
            const email = document.getElementById('req-email').value || '';
            const org = document.getElementById('req-org').value || '';
            const msg = document.getElementById('req-message').value || '';

            const subject = encodeURIComponent(`طلب نسخة من كتاب حماية الموارد المائية - ${name}`);
            const body = encodeURIComponent(
                `الاسم: ${name}\nالمؤسسة: ${org}\nالبريد الإلكتروني: ${email}\n\nنص الطلب:\n${msg}`
            );

            window.location.href = `mailto:azzeddine.reghais@gmail.com?subject=${subject}&body=${body}`;
            if (modal) modal.classList.remove('active');
        });
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElem = document.querySelector(targetId);
                if (targetElem) {
                    e.preventDefault();
                    targetElem.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}
