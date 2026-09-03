// Academic Book Website Interactive JS App

document.addEventListener('DOMContentLoaded', () => {
    initChapterTabs();
    initLightbox();
    initAccessModal();
    initSmoothScrolling();
});

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
                `Hello Dr. Azzeddine Reghais,\nI am ${name} from ${org}.\nEmail: ${email}\nI would like to request access to your book on Water-Resource Protection for the following reason:\n${msg}`
            );

            window.open(`https://wa.me/213668261708?text=${text}`, '_blank');
            modal.classList.remove('active');
        });
    }

    if (emailBtnForm) {
        emailBtnForm.addEventListener('click', () => {
            const name = document.getElementById('req-name').value || 'Researcher';
            const email = document.getElementById('req-email').value || '';
            const org = document.getElementById('req-org').value || '';
            const msg = document.getElementById('req-message').value || '';

            const subject = encodeURIComponent(`Book Access Request - Water-Resource Protection (${name})`);
            const body = encodeURIComponent(
                `Name: ${name}\nOrganization: ${org}\nEmail: ${email}\n\nRequest Message:\n${msg}`
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
