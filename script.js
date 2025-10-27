// Konfigurasi
const API_BASE = '/.netlify/functions/database';
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

// Data sementara (fallback jika database offline)
let pricelistData = {
    streaming: {},
    desain: {},
    ai: {},
    lainnya: {}
};

let testimonials = [];
let currentSlide = 0;
let autoSlideInterval;
let isAnimating = false;
let slidesPerView = 3;

// ================================
// DATABASE FUNCTIONS
// ================================

async function loadDataFromDatabase() {
    try {
        console.log('Loading data from database...');
        
        // Load products
        const productsResponse = await fetch(`${API_BASE}/products`);
        if (!productsResponse.ok) throw new Error('Failed to fetch products');
        const products = await productsResponse.json();
        
        // Reset pricelistData
        pricelistData = { streaming: {}, desain: {}, ai: {}, lainnya: {} };
        
        // Populate pricelistData from database
        products.forEach(product => {
            if (pricelistData[product.category]) {
                pricelistData[product.category][product.name] = product.plans;
            }
        });
        
        // Load testimonials
        const testimonialsResponse = await fetch(`${API_BASE}/testimonials`);
        if (!testimonialsResponse.ok) throw new Error('Failed to fetch testimonials');
        const dbTestimonials = await testimonialsResponse.json();
        
        // Update testimonials array
        testimonials = dbTestimonials;
        
        console.log('Data loaded successfully:', {
            products: products.length,
            testimonials: testimonials.length
        });
        
        // Update UI components
        updatePricelistUI();
        updateTestimonialsUI();
        updateAppSelection();
        
    } catch (error) {
        console.error('Error loading data from database:', error);
        // Fallback to static data or show error message
        showNotification('Menggunakan data offline', 'info');
    }
}

function updatePricelistUI() {
    const activeTab = document.querySelector('.category-tab.active');
    if (activeTab) {
        const activeCategory = activeTab.getAttribute('data-category');
        renderPricelist(activeCategory);
    }
}

function updateTestimonialsUI() {
    if (document.getElementById('testimonials-slider')) {
        renderTestimonialSlider();
    }
}

function updateAppSelection() {
    const appSelect = document.getElementById('app-selection');
    if (!appSelect) return;
    
    // Clear existing options except the first one
    appSelect.innerHTML = '<option value="">Pilih aplikasi...</option>';
    
    // Group products by category
    const categories = {
        streaming: document.createElement('optgroup'),
        desain: document.createElement('optgroup'),
        ai: document.createElement('optgroup'),
        lainnya: document.createElement('optgroup')
    };
    
    categories.streaming.label = 'Streaming';
    categories.desain.label = 'Desain & Kreatif';
    categories.ai.label = 'AI & Produktivitas';
    categories.lainnya.label = 'Lainnya';
    
    // Add products to respective categories
    Object.keys(pricelistData).forEach(category => {
        Object.keys(pricelistData[category]).forEach(productName => {
            const option = document.createElement('option');
            option.value = productName;
            option.textContent = productName;
            categories[category].appendChild(option);
        });
    });
    
    // Append non-empty categories to select
    Object.values(categories).forEach(optgroup => {
        if (optgroup.children.length > 0) {
            appSelect.appendChild(optgroup);
        }
    });
}

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
    const appNames = Object.keys(apps);
    
    if (appNames.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📦</div>
                    <p>Tidak ada produk untuk kategori ini</p>
                </div>
            </div>
        `;
        return;
    }
    
    appNames.forEach((appName, index) => {
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
                <div class="app-icon">📱</div>
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
    
    // Render initial category
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

function renderTestimonialSlider() {
    const slider = document.getElementById('testimonials-slider');
    const dotsContainer = document.getElementById('slider-dots');
    
    if (!slider || !dotsContainer) return;
    
    slider.innerHTML = '';
    dotsContainer.innerHTML = '';

    slidesPerView = getSlidesPerView();
    
    if (testimonials.length === 0) {
        slider.innerHTML = `
            <div class="empty-state">
                <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📸</div>
                    <p>Belum ada testimoni</p>
                </div>
            </div>
        `;
        return;
    }
    
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
                    onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjQ0NCIgdmlld0JveD0iMCAwIDI1MCA0NDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTAiIGhlaWdodD0iNDQ0IiBmaWxsPSIjMEYxRjM1Ii8+CjxwYXRoIGQ9Ik0xMjUgODBDMTM2LjUgODAgMTQ1IDg4LjUgMTQ1IDEwMEMxNDUgMTExLjUgMTM2LjUgMTIwIDEyNSAxMjBDMTEzLjUgMTIwIDEwNSAxMTEuNSAxMDUgMTAwQzEwNSA4OC41IDExMy41IDgwIDEyNSA4MFoiIGZpbGw9IiMwMEQ0RkYiLz4KPHBhdGggZD0iTTEwMCAxNjBIMTUwVjE0MEgxMDBWMTYwWiIgZmlsbD0iI0Q5NDZFRiIgZmlsbC1vcGFjaXR5PSIwLjciLz4KPHBhdGggZD0iTTEwMCAxOTBIMTUwVjE3MEgxMDBWMTkwWiIgZmlsbD0iI0Q5NDZFRiIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPHBhdGggZD0iTTEwMCAyMjBIMTUwVjIwMEgxMDBWMjIwWiIgZmlsbD0iI0Q5NDZFRiIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KPC9zdmc+Cg=='"
                />
            </div>
            <div class="product-label">
                <div class="product-name">${testimonial.productName}</div>
            </div>
        `;
        slider.appendChild(slide);
    });

    const totalSlides = testimonials.length;
    const totalDots = Math.ceil(totalSlides / slidesPerView);
    
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Pergi ke grup slide ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    currentSlide = 0;
    updateSlider();
}

function updateSlider() {
    const slider = document.getElementById('testimonials-slider');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (!slider || testimonials.length === 0) return;
    
    const totalSlides = testimonials.length;
    const maxSlideIndex = Math.ceil(totalSlides / slidesPerView) - 1;
    
    if (currentSlide > maxSlideIndex) {
        currentSlide = maxSlideIndex;
    }
    
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
    
    if (prevBtn) prevBtn.disabled = currentSlide === 0 || testimonials.length === 0;
    if (nextBtn) nextBtn.disabled = currentSlide === totalGroups - 1 || testimonials.length === 0;
}

function goToSlide(slideIndex) {
    if (isAnimating || testimonials.length === 0) return;
    
    isAnimating = true;
    currentSlide = slideIndex;
    updateSlider();
    resetAutoSlide();
    
    setTimeout(() => {
        isAnimating = false;
    }, 500);
}

function nextSlide() {
    if (isAnimating || testimonials.length === 0) return;
    
    const totalSlides = testimonials.length;
    const totalGroups = Math.ceil(totalSlides / slidesPerView);
    
    if (currentSlide < totalGroups - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlider();
    resetAutoSlide();
}

function prevSlide() {
    if (isAnimating || testimonials.length === 0) return;
    
    const totalSlides = testimonials.length;
    const totalGroups = Math.ceil(totalSlides / slidesPerView);
    
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalGroups - 1;
    }
    updateSlider();
    resetAutoSlide();
}

function startAutoSlide() {
    if (testimonials.length === 0) return;
    
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
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message show';
    successMessage.innerHTML = `
        <div class="success-icon">✅</div>
        <div class="success-title">Pesanan Terkirim!</div>
        <div class="success-text">
            Pesanan Anda untuk <strong>${orderData.app}</strong> telah dikirim ke WhatsApp.<br>
            Tim support akan segera merespons pesanan Anda.
        </div>
        <button class="continue-button" onclick="this.parentElement.remove()">Lanjutkan Belanja</button>
    `;
    
    const contactSection = document.querySelector('.contact-section');
    contactSection.insertBefore(successMessage, contactSection.firstChild);
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
    
    setTimeout(() => {
        const appSelect = document.getElementById('app-selection');
        if (appSelect) {
            appSelect.value = appName;
            
            // Highlight the selected option
            appSelect.style.borderColor = 'var(--primary-cyan)';
            appSelect.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
            setTimeout(() => {
                appSelect.style.borderColor = '';
                appSelect.style.boxShadow = '';
            }, 2000);
        }
    }, 600);
}

// ================================
// NOTIFICATION SYSTEM
// ================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        z-index: 10000;
        max-width: 300px;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;
    
    const colors = {
        success: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        error: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
        info: 'linear-gradient(135deg, var(--primary-cyan) 0%, var(--primary-purple) 100%)',
        warning: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
    };
    
    notification.style.background = colors[type] || colors.info;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .error-message {
        background: rgba(245, 101, 101, 0.1);
        border: 1px solid #f56565;
        border-radius: 8px;
        padding: 1rem;
        color: #f56565;
        text-align: center;
        margin-bottom: 1rem;
    }
    
    .success-message {
        background: linear-gradient(135deg, rgba(37, 211, 102, 0.1) 0%, rgba(18, 140, 126, 0.1) 100%);
        border: 1px solid #25D366;
        border-radius: 12px;
        padding: 2rem;
        text-align: center;
        margin-bottom: 2rem;
        display: none;
    }
    
    .success-message.show {
        display: block;
        animation: fadeIn 0.5s ease;
    }
    
    .success-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    
    .success-title {
        font-size: 1.5rem;
        color: #25D366;
        margin-bottom: 0.5rem;
        font-weight: 600;
    }
    
    .success-text {
        color: var(--text-muted);
        margin-bottom: 1.5rem;
        line-height: 1.5;
    }
    
    .continue-button {
        background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
        color: white;
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .continue-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 20px rgba(37, 211, 102, 0.4);
    }
    
    .loading-spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid transparent;
        border-top: 2px solid currentColor;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(notificationStyles);

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
    initSlider();
    initContactEvents();
    
    // Load data from database
    loadDataFromDatabase();
    
    window.addEventListener('resize', handleResize);
    
    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            renderTestimonialSlider();
        }, 300);
    });

    console.log('Catalyst Store initialized successfully');
}

// Initialize the application
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
