// PRODUCTOS DATABASE
const products = [
    // NOTEBOOKS
    {
        id: 1,
        name: 'Notebook ASUS VivoBook 15',
        brand: 'ASUS',
        category: 'notebooks',
        price: 4500000,
        originalPrice: 5200000,
        rating: 4.5,
        icon: '💻'
    },
    {
        id: 2,
        name: 'Notebook HP Pavilion 14',
        brand: 'HP',
        category: 'notebooks',
        price: 3800000,
        originalPrice: 4500000,
        rating: 4.3,
        icon: '💻'
    },
    {
        id: 3,
        name: 'Notebook Lenovo ThinkPad E15',
        brand: 'Lenovo',
        category: 'notebooks',
        price: 5200000,
        originalPrice: 6000000,
        rating: 4.7,
        icon: '💻'
    },
    {
        id: 4,
        name: 'Notebook Dell Inspiron 15',
        brand: 'Dell',
        category: 'notebooks',
        price: 4200000,
        originalPrice: 5000000,
        rating: 4.4,
        icon: '💻'
    },
    
    // CELULARES
    {
        id: 5,
        name: 'Samsung Galaxy A52',
        brand: 'Samsung',
        category: 'celulares',
        price: 2800000,
        originalPrice: 3200000,
        rating: 4.6,
        icon: '📱'
    },
    {
        id: 6,
        name: 'iPhone 13',
        brand: 'Apple',
        category: 'celulares',
        price: 6500000,
        originalPrice: 7500000,
        rating: 4.8,
        icon: '📱'
    },
    {
        id: 7,
        name: 'Xiaomi Redmi Note 11',
        brand: 'Xiaomi',
        category: 'celulares',
        price: 1800000,
        originalPrice: 2200000,
        rating: 4.3,
        icon: '📱'
    },
    {
        id: 8,
        name: 'Motorola Moto G31',
        brand: 'Motorola',
        category: 'celulares',
        price: 1500000,
        originalPrice: 1800000,
        rating: 4.2,
        icon: '📱'
    },
    
    // ELECTRODOMÉSTICOS
    {
        id: 9,
        name: 'Refrigerador Consul Frost Free',
        brand: 'Consul',
        category: 'electrodomesticos',
        price: 3500000,
        originalPrice: 4200000,
        rating: 4.5,
        icon: '🧊'
    },
    {
        id: 10,
        name: 'Lavadora Electrolux 8kg',
        brand: 'Electrolux',
        category: 'electrodomesticos',
        price: 2800000,
        originalPrice: 3500000,
        rating: 4.4,
        icon: '🧺'
    },
    {
        id: 11,
        name: 'Horno Microondas Daewoo 30L',
        brand: 'Daewoo',
        category: 'electrodomesticos',
        price: 900000,
        originalPrice: 1200000,
        rating: 4.2,
        icon: '🍳'
    },
    {
        id: 12,
        name: 'Televisor LG 55 pulgadas 4K',
        brand: 'LG',
        category: 'electrodomesticos',
        price: 5800000,
        originalPrice: 7000000,
        rating: 4.7,
        icon: '📺'
    }
];

// ESPECIFICACIONES DE PRODUCTOS
const productSpecs = {
    1: {
        processor: 'Intel Core i7',
        ram: '8GB DDR4',
        storage: '512GB SSD',
        display: '15.6" Full HD (1920x1080)',
        os: 'Windows 11',
        battery: '15 horas'
    },
    2: {
        processor: 'Intel Core i5',
        ram: '8GB DDR4',
        storage: '256GB SSD',
        display: '14" Full HD (1920x1080)',
        os: 'Windows 11',
        battery: '12 horas'
    },
    3: {
        processor: 'Intel Core i7',
        ram: '16GB DDR4',
        storage: '512GB SSD',
        display: '15.6" Full HD (1920x1200)',
        os: 'Windows 11 Pro',
        battery: '14 horas'
    },
    4: {
        processor: 'Intel Core i5',
        ram: '8GB DDR4',
        storage: '256GB SSD',
        display: '15.6" Full HD (1920x1080)',
        os: 'Windows 11',
        battery: '10 horas'
    },
    5: {
        processor: 'Snapdragon 778G+',
        ram: '6GB LPDDR5',
        storage: '128GB UFS 3.1',
        display: '6.5" AMOLED 90Hz',
        os: 'Android 12',
        battery: '4500mAh'
    },
    6: {
        processor: 'A15 Bionic',
        ram: '6GB LPDDR5',
        storage: '256GB',
        display: '6.1" Retina XDR',
        os: 'iOS 16',
        battery: '3240mAh'
    },
    7: {
        processor: 'MediaTek Helio G88',
        ram: '4GB LPDDR5',
        storage: '128GB UFS 3.1',
        display: '6.43" AMOLED 90Hz',
        os: 'Android 11',
        battery: '5000mAh'
    },
    8: {
        processor: 'MediaTek Helio G85',
        ram: '4GB LPDDR5',
        storage: '64GB eMMC 5.1',
        display: '6.5" IPS LCD 90Hz',
        os: 'Android 11',
        battery: '5000mAh'
    },
    9: {
        processor: 'Frost Free Inverter',
        ram: '500L',
        storage: '2 años garantía',
        display: 'Acero inoxidable',
        os: 'Clase energética A',
        battery: 'Control de temperatura'
    },
    10: {
        processor: 'Inverter Drive',
        ram: '8kg capacidad',
        storage: '2 años garantía',
        display: 'LED digital',
        os: 'Clase energética A',
        battery: '15 programas'
    },
    11: {
        processor: 'Control digital',
        ram: '30L capacidad',
        storage: '1 año garantía',
        display: 'Espejo reflector',
        os: 'Clase energética A+',
        battery: '6 potencias'
    },
    12: {
        processor: 'Panel de control',
        ram: 'Ultra HD 4K',
        storage: 'HDR10+',
        display: '55 pulgadas',
        os: 'WebOS 22',
        battery: 'Smart TV'
    }
};

// CARRITO
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// USUARIOS
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Actualizar UI al cargar
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    if (currentUser) {
        updateAccountButton();
    }
});

// FUNCIONES DEL CARRITO
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('✓ Agregado al carrito');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartModal();
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartModal();
    }
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = count;
    }
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// CARRITO MODAL
function toggleCart() {
    const cartModal = document.querySelector('.cart-modal');
    cartModal.classList.toggle('active');
    if (cartModal.classList.contains('active')) {
        updateCartModal();
    }
}

function updateCartModal() {
    const cartItemsList = document.querySelector('.cart-items-list');
    const cartTotal = document.querySelector('.cart-total span');
    
    if (!cartItemsList) return;

    if (cart.length === 0) {
        cartItemsList.innerHTML = '<p style="text-align: center; color: #999; padding: 40px 20px;">El carrito está vacío</p>';
        if (cartTotal) cartTotal.textContent = 'Gs. 0';
        return;
    }

    cartItemsList.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.icon}</div>
            <div class="cart-item-details">
                <p class="name">${item.name}</p>
                <p>${item.brand}</p>
                <p class="price">Gs. ${item.price.toLocaleString('es-PY')}</p>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" class="qty-input" value="${item.quantity}" onchange="updateCartQuantity(${item.id}, this.value)">
                    <button class="qty-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">Eliminar</button>
        </div>
    `).join('');

    const total = getCartTotal();
    if (cartTotal) cartTotal.textContent = `Gs. ${total.toLocaleString('es-PY')}`;
}

// NOTIFICACIONES
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #00d4ff;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 2000;
        animation: slideIn 0.3s ease-in;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 3000);
}

// AUTENTICACIÓN
function openAuthModal(type) {
    const modal = document.querySelector('.auth-modal');
    if (!modal) return;

    modal.classList.add('active');
    document.querySelector('.auth-form').innerHTML = type === 'login' ? getLoginForm() : getRegisterForm();
}

function closeAuthModal() {
    const modal = document.querySelector('.auth-modal');
    if (modal) modal.classList.remove('active');
}

function getLoginForm() {
    return `
        <h3>Iniciar Sesión</h3>
        <form onsubmit="handleLogin(event)">
            <div class="form-group">
                <label>Email</label>
                <input type="email" required placeholder="tu@email.com">
            </div>
            <div class="form-group">
                <label>Contraseña</label>
                <input type="password" required placeholder="Contraseña">
            </div>
            <button type="submit" class="btn-checkout">Iniciar Sesión</button>
            <p style="text-align: center; margin-top: 15px;">
                ¿No tienes cuenta? 
                <a href="#" onclick="openAuthModal('register')">Regístrate aquí</a>
            </p>
        </form>
    `;
}

function getRegisterForm() {
    return `
        <h3>Crear Cuenta</h3>
        <form onsubmit="handleRegister(event)">
            <div class="form-group">
                <label>Nombre Completo</label>
                <input type="text" required placeholder="Tu nombre">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" required placeholder="tu@email.com">
            </div>
            <div class="form-group">
                <label>Contraseña</label>
                <input type="password" required placeholder="Contraseña">
            </div>
            <div class="form-group">
                <label>Confirmar Contraseña</label>
                <input type="password" required placeholder="Confirmar contraseña">
            </div>
            <button type="submit" class="btn-checkout">Registrarse</button>
            <p style="text-align: center; margin-top: 15px;">
                ¿Ya tienes cuenta? 
                <a href="#" onclick="openAuthModal('login')">Inicia sesión</a>
            </p>
        </form>
    `;
}

function handleLogin(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;

    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        closeAuthModal();
        updateAccountButton();
        showNotification('✓ Sesión iniciada');
    } else {
        showNotification('✗ Email o contraseña incorrecta');
    }
}

function handleRegister(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value;

    if (password !== confirmPassword) {
        showNotification('✗ Las contraseñas no coinciden');
        return;
    }

    if (users.find(u => u.email === email)) {
        showNotification('✗ El email ya está registrado');
        return;
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    closeAuthModal();
    updateAccountButton();
    showNotification('✓ Cuenta creada exitosamente');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAccountButton();
    showNotification('✓ Sesión cerrada');
}

function updateAccountButton() {
    const accountBtn = document.querySelector('.account-btn');
    if (!accountBtn) return;

    if (currentUser) {
        accountBtn.innerHTML = `👤 ${currentUser.name.split(' ')[0]}`;
        accountBtn.onclick = showAccountMenu;
    } else {
        accountBtn.innerHTML = '👤 Cuenta';
        accountBtn.onclick = () => openAuthModal('login');
    }
}

function showAccountMenu() {
    const menu = document.createElement('div');
    menu.style.cssText = `
        position: absolute;
        top: 60px;
        right: 30px;
        background: white;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        z-index: 500;
        min-width: 200px;
    `;
    
    menu.innerHTML = `
        <a href="javascript:void(0)" onclick="logout()" style="
            display: block;
            padding: 12px 15px;
            color: #ff4757;
            text-decoration: none;
            border-radius: 5px;
        ">Cerrar Sesión</a>
    `;
    
    document.body.appendChild(menu);
    setTimeout(() => menu.remove(), 5000);
}

// BÚSQUEDA
function searchProducts(query) {
    query = query.toLowerCase();
    return products.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query)
    );
}

// NAVEGAR A DETALLES DEL PRODUCTO
function goToProductDetails(productId) {
    window.location.href = `product-details.html?id=${productId}`;
}

// BÚSQUEDA Y NAVEGAR
function searchAndGo(query) {
    if (query.trim() === '') {
        showNotification('✗ Ingresa un término de búsqueda');
        return;
    }
    
    const results = searchProducts(query);
    if (results.length === 0) {
        showNotification('✗ No se encontraron productos');
        return;
    }
    
    if (results.length === 1) {
        // Si hay un solo resultado, ir directamente a detalles
        goToProductDetails(results[0].id);
    } else {
        // Si hay múltiples resultados, ir a productos con búsqueda
        window.location.href = `products.html?search=${encodeURIComponent(query)}`;
    }
}

// FILTROS
function applyFilters() {
    const category = document.querySelector('#categoryFilter')?.value;
    const brand = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(c => c.value);
    const minPrice = parseInt(document.querySelector('#minPrice')?.value) || 0;
    const maxPrice = parseInt(document.querySelector('#maxPrice')?.value) || Infinity;
    const sortBy = document.querySelector('#sortBy')?.value;

    let filtered = products;

    if (category) {
        filtered = filtered.filter(p => p.category === category);
    }

    if (brand.length > 0) {
        filtered = filtered.filter(p => brand.includes(p.brand));
    }

    filtered = filtered.filter(p => p.price >= minPrice && p.price <= maxPrice);

    if (sortBy) {
        if (sortBy === 'price-asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'newest') {
            filtered.sort((a, b) => b.id - a.id);
        }
    }

    displayProducts(filtered);
}

function displayProducts(productsToDisplay) {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;

    if (productsToDisplay.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">No se encontraron productos</p>';
        return;
    }

    productsGrid.innerHTML = productsToDisplay.map(product => `
        <div class="product-card" onclick="goToProductDetails(${product.id})" style="cursor: pointer;">
            <div class="product-image">${product.icon}</div>
            <div class="product-info">
                <p class="product-brand">${product.brand}</p>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">${'⭐'.repeat(Math.floor(product.rating))} (${product.rating})</div>
                <div style="margin: 8px 0;">
                    <div class="product-price">Gs. ${product.price.toLocaleString('es-PY')}</div>
                    <div class="product-original-price">Gs. ${product.originalPrice.toLocaleString('es-PY')}</div>
                </div>
                <div class="product-actions">
                    <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">🛒 Agregar</button>
                    <button class="btn-favorite" onclick="event.stopPropagation()">❤️</button>
                </div>
            </div>
        </div>
    `).join('');
}

// INICIALIZAR PRODUCTOS EN PÁGINA DE INICIO
function initializeHomePage() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;

    // Mostrar productos destacados
    const featured = products.slice(0, 8);
    displayProducts(featured);
}

// CHECKOUT
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('✗ El carrito está vacío');
        return;
    }

    if (!currentUser) {
        openAuthModal('login');
        return;
    }

    // Redirigir a checkout
    window.location.href = 'checkout.html';
}

// PROCESAR PAGO
function processPayment(event) {
    event.preventDefault();

    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    if (!paymentMethod) {
        showNotification('✗ Selecciona un método de pago');
        return;
    }

    const order = {
        id: Date.now(),
        userId: currentUser.id,
        items: cart,
        total: getCartTotal(),
        paymentMethod: paymentMethod.value,
        shippingAddress: {
            street: document.querySelector('#street').value,
            city: document.querySelector('#city').value,
            country: document.querySelector('#country').value,
            zipCode: document.querySelector('#zipCode').value
        },
        status: 'pendiente',
        createdAt: new Date().toISOString()
    };

    // Guardar orden
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Limpiar carrito
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));

    // Mostrar confirmación
    showOrderConfirmation(order);
}

function showOrderConfirmation(order) {
    const modal = document.querySelector('.modal');
    const modalContent = modal.querySelector('.modal-content');

    let paymentInfo = '';
    if (order.paymentMethod === 'transfer') {
        paymentInfo = `
            <h4>Datos Bancarios para Transferencia:</h4>
            <p><strong>Banco:</strong> Banco Nacional del Paraguay</p>
            <p><strong>Cuenta:</strong> 123456789</p>
            <p><strong>Titular:</strong> TechShop Paraguay S.A.</p>
            <p><strong>Referencia:</strong> Orden #${order.id}</p>
        `;
    } else if (order.paymentMethod === 'qr') {
        paymentInfo = `<p style="text-align: center;">
            <span style="font-size: 100px;">📲 QR</span>
            <p>Escanea el código QR con tu celular para pagar</p>
        </p>`;
    }

    modalContent.innerHTML = `
        <div class="modal-header">
            <h2>✓ ¡Orden Confirmada!</h2>
            <button class="close-btn" onclick="location.href='index.html'">&times;</button>
        </div>
        <div>
            <p><strong>Número de Orden:</strong> #${order.id}</p>
            <p><strong>Total:</strong> Gs. ${order.total.toLocaleString('es-PY')}</p>
            <p><strong>Método de Pago:</strong> ${order.paymentMethod === 'transfer' ? 'Transferencia Bancaria' : 'QR'}</p>
            ${paymentInfo}
            <p style="margin-top: 20px; color: #999; font-size: 12px;">
                Recibirás un email de confirmación en breve. Te contactaremos para confirmar tu pago.
            </p>
            <button class="btn-checkout" onclick="location.href='index.html'" style="margin-top: 20px;">Volver al Inicio</button>
        </div>
    `;

    modal.classList.add('active');
}

// CERRAR MODALES
function closeModal(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

// INICIALIZAR
document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', closeModal);
    });

    // Cerrar cart modal al hacer click afuera
    document.addEventListener('click', function(event) {
        const cartModal = document.querySelector('.cart-modal');
        const cartIcon = document.querySelector('.cart-icon');
        if (cartModal && !cartModal.contains(event.target) && !cartIcon.contains(event.target)) {
            if (cartModal.classList.contains('active')) {
                // cartModal.classList.remove('active');
            }
        }
    });
});
