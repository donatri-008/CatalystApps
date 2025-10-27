// Admin Panel JavaScript
const API_BASE = '/.netlify/functions/database';
let currentEditingProduct = null;
let allProducts = [];
let allTestimonials = [];

// ================================
// NAVIGATION & UI FUNCTIONS
// ================================

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.admin-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all nav buttons
    document.querySelectorAll('.admin-nav button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show target section and activate button
    document.getElementById(`${sectionName}-section`).classList.add('active');
    event.target.classList.add('active');
    
    // Refresh data for the section
    if (sectionName === 'products') {
        loadProducts();
    } else if (sectionName === 'testimonials') {
        loadTestimonials();
    }
}

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
// PRODUCT MANAGEMENT FUNCTIONS
// ================================

function addPlan() {
    const container = document.getElementById('plans-container');
    const planItem = document.createElement('div');
    planItem.className = 'plan-item';
    planItem.innerHTML = `
        <input type="text" placeholder="Nama paket" class="plan-name" required>
        <input type="text" placeholder="Harga" class="plan-price" required>
        <button type="button" class="btn btn-danger btn-sm" onclick="removePlan(this)">×</button>
    `;
    container.appendChild(planItem);
}

function removePlan(button) {
    const planItems = document.querySelectorAll('.plan-item');
    if (planItems.length > 1) {
        button.parentElement.remove();
    } else {
        showNotification('Minimal harus ada satu paket harga', 'warning');
    }
}

async function loadProducts(category = 'all') {
    try {
        showLoading('products-list', 'Memuat produk...');
        
        const url = category === 'all' 
            ? `${API_BASE}/products` 
            : `${API_BASE}/products?category=${category}`;
            
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch products');
        
        const products = await response.json();
        allProducts = products;
        displayProducts(products);
        updateStats();
        
    } catch (error) {
        console.error('Error loading products:', error);
        showNotification('Gagal memuat produk', 'error');
        showError('products-list', 'Gagal memuat produk. Silakan refresh halaman.');
    }
}

function displayProducts(products) {
    const container = document.getElementById('products-list');
    
    if (products.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="icon">📦</div>
                <p>Tidak ada produk</p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem;">Klik "Tambah Produk Baru" untuk menambahkan produk pertama</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = products.map(product => `
        <div class="admin-card">
            <div class="app-header">
                <div class="app-icon">${product.icon}</div>
                <h3 class="app-name">${product.name}</h3>
            </div>
            <p style="color: var(--text-muted); margin: 0.5rem 0; font-size: 0.9rem;">${product.description}</p>
            <div class="pricelist-items">
                ${product.plans.map(plan => `
                    <div class="pricelist-item">
                        <span class="plan-name">${plan.name}</span>
                        <span class="plan-price">${plan.price}</span>
                    </div>
                `).join('')}
            </div>
            <div class="action-buttons">
                <button class="btn btn-primary btn-sm" onclick="editProduct(${product.id})">✏️ Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">🗑️ Hapus</button>
            </div>
        </div>
    `).join('');
}

async function saveProduct(productData) {
    try {
        showNotification('Menyimpan produk...', 'info');
        
        const url = currentEditingProduct 
            ? `${API_BASE}/products/${currentEditingProduct.id}`
            : `${API_BASE}/products`;
            
        const method = currentEditingProduct ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData)
        });
        
        if (!response.ok) throw new Error('Failed to save product');
        
        showNotification(
            currentEditingProduct ? 'Produk berhasil diupdate' : 'Produk berhasil ditambahkan',
            'success'
        );
        
        resetProductForm();
        loadProducts();
        
    } catch (error) {
        console.error('Error saving product:', error);
        showNotification('Gagal menyimpan produk', 'error');
    }
}

async function editProduct(productId) {
    try {
        const product = allProducts.find(p => p.id === productId);
        
        if (product) {
            currentEditingProduct = product;
            
            // Fill form with product data
            document.getElementById('product-name').value = product.name;
            document.getElementById('product-category').value = product.category;
            document.getElementById('product-icon').value = product.icon;
            document.getElementById('product-description').value = product.description;
            
            // Fill plans
            const plansContainer = document.getElementById('plans-container');
            plansContainer.innerHTML = '';
            
            product.plans.forEach(plan => {
                const planItem = document.createElement('div');
                planItem.className = 'plan-item';
                planItem.innerHTML = `
                    <input type="text" value="${plan.name}" class="plan-name" required>
                    <input type="text" value="${plan.price}" class="plan-price" required>
                    <button type="button" class="btn btn-danger btn-sm" onclick="removePlan(this)">×</button>
                `;
                plansContainer.appendChild(planItem);
            });
            
            // Show cancel button
            document.getElementById('cancel-edit').classList.remove('hidden');
            
            // Scroll to form
            document.getElementById('product-form').scrollIntoView({ behavior: 'smooth' });
            
            showNotification('Edit mode aktif. Silakan edit produk.', 'info');
        }
    } catch (error) {
        console.error('Error editing product:', error);
        showNotification('Gagal memuat produk untuk edit', 'error');
    }
}

async function deleteProduct(productId) {
    if (!confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE}/products/${productId}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) throw new Error('Failed to delete product');
        
        showNotification('Produk berhasil dihapus', 'success');
        loadProducts();
        
    } catch (error) {
        console.error('Error deleting product:', error);
        showNotification('Gagal menghapus produk', 'error');
    }
}

function cancelEdit() {
    currentEditingProduct = null;
    resetProductForm();
    document.getElementById('cancel-edit').classList.add('hidden');
    showNotification('Edit dibatalkan', 'info');
}

function resetProductForm() {
    document.getElementById('product-form').reset();
    const plansContainer = document.getElementById('plans-container');
    plansContainer.innerHTML = `
        <div class="plan-item">
            <input type="text" placeholder="Nama paket" class="plan-name" required>
            <input type="text" placeholder="Harga" class="plan-price" required>
            <button type="button" class="btn btn-danger btn-sm" onclick="removePlan(this)" disabled>×</button>
        </div>
    `;
}

function filterProducts(category) {
    // Update active tab
    document.querySelectorAll('.category-tabs .category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter and display products
    if (category === 'all') {
        displayProducts(allProducts);
    } else {
        const filteredProducts = allProducts.filter(p => p.category === category);
        displayProducts(filteredProducts);
    }
}

// ================================
// TESTIMONIAL MANAGEMENT FUNCTIONS
// ================================

async function loadTestimonials() {
    try {
        showLoading('testimonials-list', 'Memuat testimoni...');
        
        const response = await fetch(`${API_BASE}/testimonials`);
        if (!response.ok) throw new Error('Failed to fetch testimonials');
        
        const testimonials = await response.json();
        allTestimonials = testimonials;
        displayTestimonials(testimonials);
        updateStats();
        
    } catch (error) {
        console.error('Error loading testimonials:', error);
        showNotification('Gagal memuat testimoni', 'error');
        showError('testimonials-list', 'Gagal memuat testimoni. Silakan refresh halaman.');
    }
}

function displayTestimonials(testimonials) {
    const container = document.getElementById('testimonials-list');
    
    if (testimonials.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="icon">📸</div>
                <p>Belum ada testimoni</p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem;">Tambahkan screenshot testimoni pelanggan</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = testimonials.map(testimonial => `
        <div class="admin-card">
            <div class="testimonial-screenshot">
                <img 
                    src="${testimonial.screenshot}" 
                    alt="${testimonial.productName}"
                    style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;"
                    onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMEYxRjM1Ii8+CjxwYXRoIGQ9Ik0xMjUgODBDMTM2LjUgODAgMTQ1IDg4LjUgMTQ1IDEwMEMxNDUgMTExLjUgMTM2LjUgMTIwIDEyNSAxMjBDMTEzLjUgMTIwIDEwNSAxMTEuNSAxMDUgMTAwQzEwNSA4OC41IDExMy41IDgwIDEyNSA4MFoiIGZpbGw9IiMwMEQ0RkYiLz4KPHBhdGggZD0iTTEwMCAxMjBIMTUwVjEwMEgxMDBWMTIwWiIgZmlsbD0iI0Q5NDZFRiIgZmlsbC1vcGFjaXR5PSIwLjciLz4KPC9zdmc+Cg=='"
                >
            </div>
            <div style="padding: 1rem 0;">
                <div class="product-name">${testimonial.productName}</div>
            </div>
            <div class="action-buttons">
                <button class="btn btn-danger btn-sm" onclick="deleteTestimonial(${testimonial.id})">🗑️ Hapus</button>
            </div>
        </div>
    `).join('');
}

async function saveTestimonial(testimonialData) {
    try {
        showNotification('Menyimpan testimoni...', 'info');
        
        const response = await fetch(`${API_BASE}/testimonials`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testimonialData)
        });
        
        if (!response.ok) throw new Error('Failed to save testimonial');
        
        showNotification('Testimoni berhasil ditambahkan', 'success');
        document.getElementById('testimonial-form').reset();
        loadTestimonials();
        
    } catch (error) {
        console.error('Error saving testimonial:', error);
        showNotification('Gagal menyimpan testimoni', 'error');
    }
}

async function deleteTestimonial(testimonialId) {
    if (!confirm('Apakah Anda yakin ingin menghapus testimoni ini?')) {
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE}/testimonials/${testimonialId}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) throw new Error('Failed to delete testimonial');
        
        showNotification('Testimoni berhasil dihapus', 'success');
        loadTestimonials();
        
    } catch (error) {
        console.error('Error deleting testimonial:', error);
        showNotification('Gagal menghapus testimoni', 'error');
    }
}

// ================================
// STATS & UTILITY FUNCTIONS
// ================================

async function updateStats() {
    try {
        const response = await fetch(`${API_BASE}/stats`);
        if (!response.ok) return;
        
        const stats = await response.json();
        
        document.getElementById('total-products').textContent = stats.totalProducts;
        document.getElementById('total-testimonials').textContent = stats.totalTestimonials;
        document.getElementById('streaming-count').textContent = stats.streamingCount;
        document.getElementById('desain-count').textContent = stats.desainCount;
        
    } catch (error) {
        console.error('Error loading stats:', error);
    }
}

function showLoading(containerId, message = 'Memuat...') {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <div class="empty-state">
            <div class="icon">⏳</div>
            <p>${message}</p>
        </div>
    `;
}

function showError(containerId, message) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <div class="empty-state">
            <div class="icon">❌</div>
            <p>${message}</p>
        </div>
    `;
}

// ================================
// FORM HANDLERS
// ================================

document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate plans
    const planItems = document.querySelectorAll('.plan-item');
    const plans = Array.from(planItems).map(item => {
        const name = item.querySelector('.plan-name').value;
        const price = item.querySelector('.plan-price').value;
        return { name, price };
    }).filter(plan => plan.name && plan.price);
    
    if (plans.length === 0) {
        showNotification('Harap tambahkan minimal satu paket harga', 'warning');
        return;
    }
    
    // Prepare product data
    const productData = {
        name: document.getElementById('product-name').value,
        category: document.getElementById('product-category').value,
        icon: document.getElementById('product-icon').value,
        description: document.getElementById('product-description').value,
        plans: plans
    };
    
    // Include ID if editing
    if (currentEditingProduct) {
        productData.id = currentEditingProduct.id;
    }
    
    saveProduct(productData);
});

document.getElementById('testimonial-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const testimonialData = {
        productName: document.getElementById('testimonial-product').value,
        screenshot: document.getElementById('testimonial-screenshot').value
    };
    
    saveTestimonial(testimonialData);
});

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
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
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

// Add notification styles
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
`;
document.head.appendChild(notificationStyles);

// ================================
// INITIALIZATION
// ================================

function initializeAdmin() {
    console.log('Initializing Admin Panel...');
    
    // Initialize mobile navigation
    initMobileNavigation();
    
    // Load initial data
    loadProducts();
    loadTestimonials();
    updateStats();
    
    // Add initial plan item (minimum one)
    addPlan();
    
    console.log('Admin Panel initialized successfully');
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAdmin);
} else {
    initializeAdmin();
}
