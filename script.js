// Data Pricelist Lengkap
const pricelistData = {
    streaming: {
        "Netflix Premium": [
            { name: "1P1U - 1 Bulan", price: "Rp 32,000" },
            { name: "1P1U - 2 Bulan", price: "Rp 61,000" },
            { name: "1P2U - 1 Bulan", price: "Rp 18,000" },
            { name: "SEMI PRIVATE - 1 Bulan", price: "Rp 35,000" },
            { name: "SEMI PRIVATE - 2 Bulan", price: "Rp 73,000" }
        ],
        "YouTube Premium": [
            { name: "INDPLAN - 1 Bulan", price: "Rp 15,000" },
            { name: "INDPLAN - 3 Bulan", price: "Rp 38,000" },
            { name: "FAMPLAN - 1 Bulan", price: "Rp 10,000" },
            { name: "FAMPLAN - 2 Bulan", price: "Rp 15,000" },
            { name: "MIXPLAN - 2 Bulan", price: "Rp 20,000" },
            { name: "MIXPLAN - 3 Bulan", price: "Rp 24,000" },
            { name: "MIXPLAN - 6 Bulan", price: "Rp 38,000" }
        ],
        "Disney+": [
            { name: "SHARING - 1 Hari", price: "Rp 5,000" },
            { name: "SHARING - 3 Hari", price: "Rp 10,000" },
            { name: "SHARING - 7 Hari", price: "Rp 15,000" },
            { name: "SHARING - 14 Hari", price: "Rp 18,000" },
            { name: "SHARING - 1 Bulan", price: "Rp 30,000" },
            { name: "SHARING - 2 Bulan", price: "Rp 59,000" },
            { name: "SHARING - 6 Bulan", price: "Rp 97,000" },
            { name: "SHARING - 1 Tahun", price: "Rp 150,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 75,000" }
        ],
        "Spotify": [
            { name: "INDPLAN - 1 Bulan", price: "Rp 16,000" },
            { name: "FAMPLAN - 1 Bulan", price: "Rp 22,000" },
            { name: "FAMPLAN - 2 Bulan", price: "Rp 35,000" },
            { name: "STUDENT - 1 Bulan", price: "Rp 25,000" }
        ],
        "WeTV": [
            { name: "SHARING 6U - 1 Bulan", price: "Rp 13,000" },
            { name: "SHARING 6U - 3 Bulan", price: "Rp 20,000" },
            { name: "SHARING 8U - 1 Bulan", price: "Rp 12,000" },
            { name: "SHARING 8U - 3 Bulan", price: "Rp 16,000" },
            { name: "SHARING 8U - 6 Bulan", price: "Rp 22,000" },
            { name: "SHARING 8U - 1 Tahun", price: "Rp 30,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 38,000" }
        ],
        "Viu": [
            { name: "SHARING - 1 Bulan", price: "Rp 5,000" },
            { name: "SHARING - 3 Bulan", price: "Rp 8,000" },
            { name: "SHARING - 9 Bulan", price: "Rp 11,000" },
            { name: "SHARING - 1 Tahun", price: "Rp 16,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 8,000" },
            { name: "PRIVATE - 3 Bulan", price: "Rp 18,000" },
            { name: "PRIVATE - 9 Bulan", price: "Rp 24,000" },
            { name: "PRIVATE - 1 Tahun", price: "Rp 30,000" }
        ],
        "Vision+": [
            { name: "PRIVATE PREMIUM - 1 Bulan", price: "Rp 18,000" },
            { name: "PRIVATE PREMIUM SPORT - 1 Bulan", price: "Rp 31,000" }
        ],
        "LokLok": [
            { name: "SHARING BASIC (NO TV) - 1 Bulan (3U)", price: "Rp 23,000" },
            { name: "SHARING BASIC (NO TV) - 1 Bulan (8U)", price: "Rp 20,000" },
            { name: "SHARING STANDART (BISA TV) - 1 Bulan (4U)", price: "Rp 28,000" },
            { name: "SHARING STANDART (BISA TV) - 1 Bulan (6U)", price: "Rp 23,000" },
            { name: "PRIVATE - 1 Bulan (basic)", price: "Rp 55,000" },
            { name: "PRIVATE - 1 Bulan (standard)", price: "Rp 76,000" }
        ],
        "Vidio Platinum": [
            { name: "Private All Device - 1 Bulan", price: "Rp 75,000" },
            { name: "Sharing Mobile Only - 1 Bulan", price: "Rp 20,000" },
            { name: "Private Mobile Only - 7 Hari", price: "Rp 22,000" },
            { name: "Private Mobile Only - 1 Bulan", price: "Rp 30,000" },
            { name: "Private TV Only - 1 Tahun", price: "Rp 45,000" }
        ],
        "Drakor ID": [
            { name: "SHARING - 1 Bulan", price: "Rp 10,000" },
            { name: "SHARING - 3 Bulan", price: "Rp 14,000" },
            { name: "SHARING - 6 Bulan", price: "Rp 16,000" },
            { name: "SHARING - 1 Tahun", price: "Rp 21,000" }
        ],
        "Dramabox": [
            { name: "SHARING - 1 Bulan", price: "Rp 18,000" },
            { name: "SHARING - 3 Bulan", price: "Rp 22,000" },
            { name: "SHARING - 6 Bulan", price: "Rp 29,000" },
            { name: "SHARING - 1 Tahun", price: "Rp 34,000" }
        ],
        "Bstation": [
            { name: "SHARING - 1 Bulan", price: "Rp 12,000" },
            { name: "SHARING - 2 Bulan", price: "Rp 16,000" },
            { name: "SHARING - 3 Bulan", price: "Rp 20,000" },
            { name: "SHARING - 1 Tahun", price: "Rp 35,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 52,000" }
        ]
    },
    desain: {
        "Canva Pro": [
            { name: "MEMBER - 3 Hari", price: "Rp 2,000" },
            { name: "MEMBER - 7 Hari", price: "Rp 4,000" },
            { name: "MEMBER - 14 Hari", price: "Rp 5,000" },
            { name: "MEMBER - 1 Bulan", price: "Rp 7,000" },
            { name: "MEMBER - 2 Bulan", price: "Rp 11,000" },
            { name: "MEMBER - 3 Bulan", price: "Rp 14,000" },
            { name: "MEMBER - 1 Tahun", price: "Rp 25,000" },
            { name: "MEMBER - Designer", price: "+ Rp 1,500" },
            { name: "EDUCATION - Lifetime", price: "Rp 35,000" },
            { name: "EDUCATION - Designer", price: "+ Rp 1,500" }
        ],
        "PicsArt": [
            { name: "SHARING - 1 Bulan", price: "Rp 8,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 18,000" }
        ],
        "CapCut": [
            { name: "SHARING - 7 Hari", price: "Rp 10,000" },
            { name: "SHARING - 1 Bulan", price: "Rp 14,000" },
            { name: "PRIVATE - 7 Hari", price: "Rp 14,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 35,000" },
            { name: "PRIVATE - 6 Bulan", price: "Rp 170,000" }
        ],
        "Alight Motion": [
            { name: "SHARING 2U - 1 Tahun", price: "Rp 15,000" },
            { name: "PRIVATE - 1 Tahun", price: "Rp 25,000" }
        ]
    },
    ai: {
        "ChatGPT Plus": [
            { name: "SHARING - 7 Hari", price: "Rp 22,000" },
            { name: "SHARING - 1 Bulan (8u)", price: "Rp 34,000" },
            { name: "SHARING - 1 Bulan (10u)", price: "Rp 29,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 100,000" }
        ],
        "Perplexity": [
            { name: "SHARING 5U - 1 Bulan", price: "Rp 18,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 25,000" }
        ],
        "Gemini": [
            { name: "PRIVATE - 1 Bulan", price: "Rp 18,000" },
            { name: "PRIVATE - 1 Tahun", price: "Rp 30,000" }
        ]
    },
    lainnya: {
        "QuillBot": [
            { name: "1 Bulan", price: "Rp 15,000" },
            { name: "3 Bulan", price: "Rp 20,000" },
            { name: "6 Bulan", price: "Rp 32,000" },
            { name: "1 Tahun", price: "Rp 69,000" }
        ],
        "Scribd": [
            { name: "SHARING - 1 Bulan", price: "Rp 15,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 25,000" }
        ],
        "Grammarly": [
            { name: "SHARING - 1 Bulan", price: "Rp 15,000" },
            { name: "SHARING - 1 Tahun", price: "Rp 31,000" },
            { name: "PRIVATE - 1 Bulan", price: "Rp 40,000" }
        ],
        "Get Contact": [
            { name: "1 Bulan", price: "Rp 15,000" }
        ]
    }
};

// Data aplikasi untuk icon dan deskripsi - SUDAH DIPERBAIKI DENGAN 4 APLIKASI BARU
const appsData = {
    streaming: [
        {
            name: "Netflix Premium",
            icon: "🎬",
            description: "Akses tak terbatas ke semua film dan serial Netflix tanpa iklan"
        },
        {
            name: "YouTube Premium",
            icon: "📺",
            description: "Tonton YouTube tanpa iklan, download video, dan akses YouTube Music"
        },
        {
            name: "Spotify",
            icon: "🎵",
            description: "Nikmati musik tanpa iklan, download offline, dan kualitas audio terbaik"
        },
        {
            name: "Disney+",
            icon: "🏰",
            description: "Koleksi lengkap film Disney, Marvel, Star Wars, dan National Geographic"
        },
        {
            name: "WeTV",
            icon: "📱",
            description: "Platform streaming drama dan film Asia terpopuler"
        },
        {
            name: "Viu",
            icon: "🎭",
            description: "Nonton drama Korea dan Asia tanpa iklan dengan subtitle lengkap"
        },
        {
            name: "Vision+",
            icon: "🎞️",
            description: "Layanan streaming lokal dengan konten eksklusif Indonesia"
        },
        {
            name: "LokLok",
            icon: "📲",
            description: "Aplikasi wallpaper hidup dengan konten eksklusif"
        },
        {
            name: "Vidio Platinum",
            icon: "🎪",
            description: "Streaming lokal dengan konten TV, film, dan olahraga Indonesia"
        },
        {
            name: "Drakor ID",
            icon: "🎎",
            description: "Khusus penggemar drama Korea dengan subtitle Indonesia"
        },
        {
            name: "Dramabox",
            icon: "🎬",
            description: "Platform streaming drama pendek interaktif"
        },
        {
            name: "Bstation",
            icon: "📺",
            description: "Platform streaming anime dan konten Asia"
        }
    ],
    desain: [
        {
            name: "Canva Pro",
            icon: "✏️",
            description: "Desain grafis premium dengan template eksklusif dan aset tanpa batas"
        },
        {
            name: "PicsArt",
            icon: "🖼️",
            description: "Editor foto dan video lengkap dengan efek dan filter premium"
        },
        {
            name: "CapCut",
            icon: "🎬",
            description: "Editor video profesional dengan efek khusus dan tools canggih"
        },
        {
            name: "Alight Motion",
            icon: "⚡",
            description: "Editor video profesional dengan efek visual dan animasi canggih"
        }
    ],
    ai: [
        {
            name: "ChatGPT Plus",
            icon: "🤖",
            description: "Akses ChatGPT dengan prioritas, fitur terbaru, dan respons lebih cepat"
        },
        {
            name: "Perplexity",
            icon: "🔍",
            description: "AI pencarian dengan sumber terpercaya dan kemampuan analisis mendalam"
        },
        {
            name: "Gemini",
            icon: "✨",
            description: "AI dari Google dengan kemampuan multimodal dan analisis canggih"
        }
    ],
    lainnya: [
        {
            name: "QuillBot",
            icon: "✍️",
            description: "Alat parafrase dan penulisan AI untuk meningkatkan kualitas teks"
        },
        {
            name: "Scribd",
            icon: "📚",
            description: "Perpustakaan digital dengan buku, audiobook, dan dokumen premium"
        },
        {
            name: "Grammarly",
            icon: "📝",
            description: "Asisten penulisan AI untuk grammar dan spelling yang lebih baik"
        },
        {
            name: "Get Contact",
            icon: "📞",
            description: "Identifikasi penelepon dan manajemen kontak yang cerdas"
        }
    ]
};

// Data testimonial/screenshots
const testimonials = [
    {
        id: 1,
        productName: "Dramabox 1 Bulan",
        screenshot: "Foto/testi 1.jpg"
    },
    {
        id: 2,
        productName: "Iqiyi 1 Tahun", 
        screenshot: "Foto/testi 2.jpg"
    },
    {
        id: 3,
        productName: "Vision+ 1 Bulan",
        screenshot: "Foto/testi 3.jpg"
    },
    {
        id: 4,
        productName: "ChatGPT Plus 1 Bulan",
        screenshot: "Foto/testi 4.jpg"
    },
    {
        id: 5,
        productName: "Canva 7 Hari",
        screenshot: "Foto/testi 5.jpg"
    },
    {
        id: 6,
        productName: "Canva 1 Tahun",
        screenshot: "Foto/testi 6.jpg"
    },
    {
        id: 7,
        productName: "Spotify 1 Bulan",
        screenshot: "Foto/testi 7.jpg"
    },
    {
        id: 8,
        productName: "Viu 1 Tahun",
        screenshot: "Foto/testi 8.jpg"
    }
];

// WhatsApp Configuration
const WHATSAPP_CONFIG = {
    phoneNumber: '6287767796053',
    autoSend: true,
    messages: {
        order: (orderData) => {
            return `🛒 *PESANAN APLIKASI PREMIUM* 🛒

👤 *Data Pemesan:*
• Nama: ${orderData.name}
• WhatsApp: ${orderData.phone}

📱 *Detail Pesanan:*
• Aplikasi: ${orderData.app}
• Durasi: ${orderData.duration}

💬 *Pesan Tambahan:*
${orderData.message || 'Tidak ada pesan tambahan'}

⏰ *Waktu Order:* ${new Date().toLocaleString('id-ID')}

_Silahkan berikan info harga dan cara pembayaran untuk pesanan di atas. Terima kasih!_`;
        },
        quick: `Halo! Saya tertarik dengan aplikasi premium di Catalyst Store. Bisa info lebih lanjut?`
    }
};

// Variabel global untuk slider
let currentSlide = 0;
let autoSlideInterval;
let isAnimating = false;
let slidesPerView = 3;

// ================================
// MOBILE NAVIGATION FUNCTIONS
// ================================

function initMobileNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavClose = document.getElementById('mobileNavClose');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');

    function openMobileNav() {
        mobileNav.classList.add('active');
        mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
        mobileNav.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', openMobileNav);
    }

    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', closeMobileNav);
    }

    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', closeMobileNav);
    }

    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileNav();
        }
    });
}

function closeMobileNav() {
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    
    if (mobileNav && mobileNavOverlay) {
        mobileNav.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ================================
// PRICELIST FUNCTIONS
// ================================

function renderPricelist(category) {
    const container = document.querySelector(`#${category} .pricelist-grid`);
    if (!container) return;
    
    container.innerHTML = '';

    const apps = pricelistData[category] || {};
    
    Object.keys(apps).forEach((appName, index) => {
        const appData = appsData[category]?.find(app => app.name === appName) || 
                       { icon: "📱", description: "Layanan premium terbaik" };
        
        const card = document.createElement('div');
        card.className = 'pricelist-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const hasBestValue = appName === "YouTube Premium" || appName === "Netflix Premium";
        if (hasBestValue) {
            card.classList.add('best-value');
        }
        
        let itemsHTML = '';
        let itemCount = 0;
        
        apps[appName].forEach((item, itemIndex) => {
            const isNew = itemIndex === 0;
            const itemClass = isNew ? 'pricelist-item new-item' : 'pricelist-item';
            
            itemsHTML += `
                <div class="${itemClass}">
                    <span class="plan-name">${item.name}</span>
                    <span class="plan-price">${item.price}</span>
                </div>
            `;
            itemCount++;
        });
        
        card.innerHTML = `
            ${hasBestValue ? '<div class="popular-badge">🔥 POPULAR</div>' : ''}
            
            <div class="app-header">
                <div class="app-icon">${appData.icon}</div>
                <h3 class="app-name">${appName}</h3>
            </div>
            
            <div class="pricelist-items">
                ${itemsHTML}
            </div>
            
            <div class="order-button-container">
                <button class="order-button" onclick="quickOrder('${appName}')">
                    <span class="button-icon">🛒</span>
                    Pesan Sekarang
                    ${hasBestValue ? '<span style="margin-left: 0.3rem;">⭐</span>' : ''}
                </button>
                
                ${itemCount > 3 ? `
                <div class="price-comparison">
                    <span>${itemCount} pilihan tersedia</span>
                    <span class="price-per-month">Harga terbaik</span>
                </div>
                ` : ''}
            </div>
        `;
        
        container.appendChild(card);
    });
}

function initPricelist() {
    const tabs = document.querySelectorAll('.category-tab');
    const contents = document.querySelectorAll('.category-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            const targetContent = document.getElementById(category);
            if (targetContent) {
                targetContent.classList.add('active');
            }
            
            renderPricelist(category);
        });
    });
    
    const firstTab = document.querySelector('.category-tab.active');
    if (firstTab) {
        const firstCategory = firstTab.getAttribute('data-category');
        renderPricelist(firstCategory);
    }
}

// ================================
// TESTIMONIAL SLIDER FUNCTIONS
// ================================

function getSlidesPerView() {
    const width = window.innerWidth;
    if (width < 768) return 1;
    if (width < 1200) return 2;
    return 3;
}

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = reject;
    });
}

function renderTestimonialSlider() {
    const slider = document.getElementById('testimonials-slider');
    const dotsContainer = document.getElementById('slider-dots');
    
    if (!slider || !dotsContainer) return;
    
    slider.innerHTML = '';
    dotsContainer.innerHTML = '';

    slidesPerView = getSlidesPerView();
    
    testimonials.forEach((testimonial, index) => {
        const slide = document.createElement('div');
        slide.className = 'testimonial-slide';
        slide.style.animationDelay = `${index * 0.1}s`;
        slide.innerHTML = `
            <div class="testimonial-screenshot">
                <img 
                    src="${testimonial.screenshot}" 
                    alt="Screenshot ${testimonial.productName}" 
                    loading="lazy"
                    width="250"
                    height="444"
                />
            </div>
            <div class="product-label">
                <div class="product-name">${testimonial.productName}</div>
            </div>
        `;
        slider.appendChild(slide);
    });

    const totalSlides = testimonials.length;
    // Hitung total dots: untuk desktop (3 slide), kita perlu 3 dots (0-2, 3-5, 6-7)
    // Untuk mobile (1 slide), kita perlu 8 dots
    const totalDots = Math.ceil(totalSlides / slidesPerView);
    
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Pergi ke grup slide ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    preloadImages();
    currentSlide = 0; // Reset ke slide pertama
    updateSlider();
}

function preloadImages() {
    testimonials.forEach(testimonial => {
        loadImage(testimonial.screenshot)
            .then(img => {
                const imageElements = document.querySelectorAll(`img[src="${testimonial.screenshot}"]`);
                imageElements.forEach(imgEl => {
                    imgEl.classList.add('loaded');
                });
            })
            .catch(error => {
                console.warn('Gagal memuat gambar:', testimonial.screenshot, error);
                const imageElements = document.querySelectorAll(`img[src="${testimonial.screenshot}"]`);
                imageElements.forEach(imgEl => {
                    imgEl.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjQ0NCIgdmlld0JveD0iMCAwIDI1MCA0NDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTAiIGhlaWdodD0iNDQ0IiBmaWxsPSIjMEYxRjM1Ii8+CjxwYXRoIGQ9Ik0xMjUgODBDMTM2LjUgODAgMTQ1IDg4LjUgMTQ1IDEwMEMxNDUgMTExLjUgMTM2LjUgMTIwIDEyNSAxMjBDMTEzLjUgMTIwIDEwNSAxMTEuNSAxMDUgMTAwQzEwNSA4OC41IDExMy41IDgwIDEyNSA4MFoiIGZpbGw9IiMwMEQ0RkYiLz4KPHBhdGggZD0iTTEwMCAxNjBIMTUwVjE0MEgxMDBWMTYwWiIgZmlsbD0iI0Q5NDZFRiIgZmlsbC1vcGFjaXR5PSIwLjciLz4KPHBhdGggZD0iTTEwMCAxOTBIMTUwVjE3MEgxMDBWMTkwWiIgZmlsbD0iI0Q5NDZFRiIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPHBhdGggZD0iTTEwMCAyMjBIMTUwVjIwMEgxMDBWMjIwWiIgZmlsbD0iI0Q5NDZFRiIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KPC9zdmc+Cg==';
                    imgEl.alt = `Placeholder untuk ${testimonial.productName}`;
                    imgEl.classList.add('loaded');
                });
            });
    });
}

function updateSlider() {
    const slider = document.getElementById('testimonials-slider');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (!slider) return;
    
    const totalSlides = testimonials.length;
    const maxSlideIndex = Math.ceil(totalSlides / slidesPerView) - 1;
    
    // Batasi currentSlide agar tidak melebihi maxSlideIndex
    if (currentSlide > maxSlideIndex) {
        currentSlide = maxSlideIndex;
    }
    
    // Perhitungan translateX yang benar:
    // Setiap kali next, geser sebesar (100% / slidesPerView) * slidesPerView = 100%
    // Tapi kita perlu memperhitungkan gap juga
    const translatePercent = currentSlide * 100;
    
    slider.style.transform = `translateX(-${translatePercent}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    
    updateButtonStates();
}

function updateButtonStates() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const totalSlides = testimonials.length;
    const totalGroups = Math.ceil(totalSlides / slidesPerView);
    
    if (prevBtn) prevBtn.disabled = currentSlide === 0;
    if (nextBtn) nextBtn.disabled = currentSlide === totalGroups - 1;
}

function goToSlide(slideIndex) {
    if (isAnimating) return;
    
    isAnimating = true;
    currentSlide = slideIndex;
    updateSlider();
    resetAutoSlide();
    
    setTimeout(() => {
        isAnimating = false;
    }, 500);
}

function nextSlide() {
    if (isAnimating) return;
    
    const totalSlides = testimonials.length;
    const totalGroups = Math.ceil(totalSlides / slidesPerView);
    
    if (currentSlide < totalGroups - 1) {
        currentSlide++;
        updateSlider();
    } else {
        currentSlide = 0;
        updateSlider();
    }
    resetAutoSlide();
}

function prevSlide() {
    if (isAnimating) return;
    
    const totalSlides = testimonials.length;
    const totalGroups = Math.ceil(totalSlides / slidesPerView);
    
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    } else {
        currentSlide = totalGroups - 1;
        updateSlider();
    }
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        if (!isAnimating) {
            nextSlide();
        }
    }, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

function initSlider() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    let startX = 0;
    let endX = 0;
    const slider = document.getElementById('testimonials-slider');
    
    if (slider) {
        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        slider.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    startAutoSlide();
    
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        
        sliderContainer.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    }
}

// ================================
// WHATSAPP INTEGRATION FUNCTIONS
// ================================

function scrollToContact() {
    closeMobileNav();
    
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = contactSection.offsetTop - headerHeight - 20;
        
        window.scrollTo({ 
            top: targetPosition,
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            const nameInput = document.getElementById('customer-name');
            if (nameInput) nameInput.focus();
        }, 500);
    }
}

function processOrder(event) {
    event.preventDefault();
    
    const formData = getFormData();
    
    if (!validateForm(formData)) {
        return;
    }
    
    showLoadingState();
    
    setTimeout(() => {
        sendToWhatsApp(formData);
        hideLoadingState();
        showSuccessMessage(formData);
        resetForm();
    }, 1500);
}

function getFormData() {
    return {
        name: document.getElementById('customer-name').value.trim(),
        phone: document.getElementById('customer-phone').value.trim(),
        app: document.getElementById('app-selection').value,
        duration: document.getElementById('duration').value,
        message: document.getElementById('order-message').value.trim()
    };
}

function validateForm(data) {
    if (!data.name || !data.phone || !data.app || !data.duration) {
        showError('Mohon lengkapi semua field yang wajib diisi!');
        return false;
    }
    
    if (data.name.length < 2) {
        showError('Mohon masukkan nama lengkap yang valid!');
        return false;
    }
    
    const cleanPhone = data.phone.replace(/\D/g, '');
    const phoneRegex = /^[0-9]{10,13}$/;
    
    if (!phoneRegex.test(cleanPhone)) {
        showError('Mohon masukkan nomor WhatsApp yang valid (10-13 digit)!');
        return false;
    }
    
    return true;
}

function showError(message) {
    hideError();
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <div style="background: rgba(245, 101, 101, 0.1); border: 1px solid #f56565; border-radius: 8px; padding: 1rem; color: #f56565; text-align: center; margin-bottom: 1rem;">
            ⚠️ ${message}
        </div>
    `;
    
    const form = document.getElementById('order-form');
    form.insertBefore(errorDiv, form.firstChild);
    
    setTimeout(hideError, 5000);
}

function hideError() {
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

function showLoadingState() {
    const submitButton = document.getElementById('submit-button');
    const buttonText = submitButton.querySelector('.button-text');
    
    buttonText.textContent = 'Mengirim...';
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    
    const spinner = document.createElement('span');
    spinner.className = 'loading-spinner';
    spinner.style.marginLeft = '0.5rem';
    submitButton.appendChild(spinner);
}

function hideLoadingState() {
    const submitButton = document.getElementById('submit-button');
    const buttonText = submitButton.querySelector('.button-text');
    const spinner = submitButton.querySelector('.loading-spinner');
    
    buttonText.textContent = 'Kirim Pesan ke WhatsApp';
    submitButton.classList.remove('loading');
    submitButton.disabled = false;
    
    if (spinner) {
        spinner.remove();
    }
}

function sendToWhatsApp(orderData) {
    const cleanPhone = orderData.phone.replace(/\D/g, '');
    if (cleanPhone.startsWith('0')) {
        orderData.phone = '62' + cleanPhone.substring(1);
    } else {
        orderData.phone = cleanPhone;
    }
    
    const message = WHATSAPP_CONFIG.messages.order(orderData);
    const encodedMessage = encodeURIComponent(message);
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
    
    if (WHATSAPP_CONFIG.autoSend) {
        window.open(whatsappUrl, '_blank');
    }
}

function showSuccessMessage(orderData) {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.classList.add('show');
    }
}

function hideSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.classList.remove('show');
    }
}

function resetForm() {
    document.getElementById('order-form').reset();
}

function openQuickWhatsApp() {
    closeMobileNav();
    
    const message = WHATSAPP_CONFIG.messages.quick;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

function quickOrder(appName) {
    closeMobileNav();
    scrollToContact();
    
    const buttons = document.querySelectorAll('.order-button');
    buttons.forEach(btn => {
        if (btn.textContent.includes(appName)) {
            btn.classList.add('loading');
            btn.innerHTML = '<span class="button-icon">⏳</span>Membuka Form...';
            
            setTimeout(() => {
                btn.classList.remove('loading');
                btn.innerHTML = '<span class="button-icon">🛒</span>Pesan Sekarang';
            }, 2000);
        }
    });
    
    setTimeout(() => {
        const appSelect = document.getElementById('app-selection');
        if (appSelect) {
            appSelect.value = appName;
            
            const options = appSelect.options;
            for (let i = 0; i < options.length; i++) {
                if (options[i].value === appName) {
                    options[i].style.background = 'rgba(0, 212, 255, 0.1)';
                    setTimeout(() => {
                        options[i].style.background = '';
                    }, 3000);
                }
            }
            
            const durationSelect = document.getElementById('duration');
            if (durationSelect) {
                durationSelect.focus();
                durationSelect.style.borderColor = 'var(--primary-cyan)';
                setTimeout(() => {
                    durationSelect.style.borderColor = '';
                }, 2000);
            }
        }
    }, 600);
}

// ================================
// INITIALIZATION FUNCTIONS
// ================================

function initPhoneFormatting() {
    const phoneInput = document.getElementById('customer-phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.startsWith('0')) {
                value = '62' + value.substring(1);
            }
            
            e.target.value = value;
        });
    }
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initMobileCategoryTabs() {
    const tabs = document.querySelectorAll('.category-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        tab.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

function handleResize() {
    const newSlidesPerView = getSlidesPerView();
    if (newSlidesPerView !== slidesPerView) {
        slidesPerView = newSlidesPerView;
        renderTestimonialSlider();
    }
    
    if (window.innerWidth > 768) {
        closeMobileNav();
    }
}

function initContactEvents() {
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', processOrder);
    }
    
    initPhoneFormatting();
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = sectionId;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').replace('#', '');
        if (href === currentSection) {
            link.classList.add('active');
        }
    });
}

function initScrollSpy() {
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
}

function initMobileNavActiveStates() {
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNavLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function initializeApp() {
    initMobileNavigation();
    initScrollSpy();
    initMobileNavActiveStates();
    initPricelist();
    initSmoothScrolling();
    initMobileCategoryTabs();
    renderTestimonialSlider();
    initSlider();
    initContactEvents();
    
    window.addEventListener('resize', handleResize);
    
    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            renderTestimonialSlider();
        }, 300);
    });

    hideSuccessMessage();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.warn('Gambar tidak dapat dimuat:', e.target.src);
    }
}, true);