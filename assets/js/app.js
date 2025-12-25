// Green Earth - Main Application JavaScript
// Uses localStorage for cart and orders persistence

// ==================== UTILITY FUNCTIONS ====================

// Sanitize HTML to prevent XSS
function sanitize(str) {
    if (str === null || str === undefined) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Format price with commas
function formatPrice(price) {
    return new Intl.NumberFormat('en-BD').format(price);
}

// ==================== FLASH MESSAGE FUNCTIONS ====================

function showFlash(message, type = 'success') {
    const flashMessage = document.getElementById('flashMessage');
    const flashText = document.getElementById('flashText');
    
    if (flashMessage && flashText) {
        flashText.textContent = message;
        flashMessage.className = `flash-message flash-${type}`;
        flashMessage.style.display = 'block';
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            hideFlash();
        }, 5000);
    }
}

function hideFlash() {
    const flashMessage = document.getElementById('flashMessage');
    if (flashMessage) {
        flashMessage.style.opacity = '0';
        flashMessage.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            flashMessage.style.display = 'none';
            flashMessage.style.opacity = '1';
        }, 500);
    }
}

// ==================== CART FUNCTIONS (localStorage) ====================

// Get cart from localStorage
function getCart() {
    const cart = localStorage.getItem('greenEarthCart');
    return cart ? JSON.parse(cart) : {};
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('greenEarthCart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(treeId, quantity = 1) {
    const cart = getCart();
    const id = parseInt(treeId);
    
    if (cart[id]) {
        cart[id] += quantity;
    } else {
        cart[id] = quantity;
    }
    
    saveCart(cart);
}

// Remove item from cart
function removeFromCart(treeId) {
    const cart = getCart();
    const id = parseInt(treeId);
    
    if (cart[id]) {
        delete cart[id];
        saveCart(cart);
    }
}

// Update cart quantity
function updateCartQuantity(treeId, quantity) {
    const cart = getCart();
    const id = parseInt(treeId);
    
    if (quantity <= 0) {
        delete cart[id];
    } else {
        cart[id] = quantity;
    }
    
    saveCart(cart);
}

// Clear entire cart
function clearCart() {
    localStorage.removeItem('greenEarthCart');
}

// Get cart count (total items)
function getCartCount() {
    const cart = getCart();
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

// Get cart total price
function getCartTotal() {
    const cart = getCart();
    const trees = getTrees();
    let total = 0;
    
    for (const [treeId, quantity] of Object.entries(cart)) {
        const tree = trees.find(t => t.id === parseInt(treeId));
        if (tree) {
            total += tree.price * quantity;
        }
    }
    
    return total;
}

// Get cart items with full tree details
function getCartItems() {
    const cart = getCart();
    const trees = getTrees();
    const items = [];
    
    for (const [treeId, quantity] of Object.entries(cart)) {
        const tree = trees.find(t => t.id === parseInt(treeId));
        if (tree) {
            items.push({
                ...tree,
                quantity: quantity,
                subtotal: tree.price * quantity
            });
        }
    }
    
    return items;
}

// ==================== ORDER FUNCTIONS (localStorage) ====================

// Get orders from localStorage
function getOrders() {
    const orders = localStorage.getItem('greenEarthOrders');
    return orders ? JSON.parse(orders) : [];
}

// Save order
function saveOrder(order) {
    const orders = getOrders();
    orders.push(order);
    localStorage.setItem('greenEarthOrders', JSON.stringify(orders));
}

// ==================== UI FUNCTIONS ====================

// Update cart badge in navigation
function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        const count = getCartCount();
        if (count > 0) {
            badge.textContent = count;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
    }
}

// Create tree card HTML
function createTreeCard(tree, redirectPage = 'index.html') {
    return `
        <div class="tree-card" 
             data-name="${sanitize(tree.name)}" 
             data-category="${sanitize(tree.category)}"
             data-scientific="${sanitize(tree.scientific_name)}">
            <img src="${sanitize(tree.image_url)}" alt="${sanitize(tree.name)}" class="tree-card-image">
            <div class="tree-card-content">
                <h3>${sanitize(tree.name)}</h3>
                <p class="scientific-name">${sanitize(tree.scientific_name)}</p>
                <div class="tree-card-meta">
                    <span class="category">${sanitize(tree.category)}</span>
                    <span class="price">৳${formatPrice(tree.price)}</span>
                </div>
                <p class="description">${sanitize(tree.description)}</p>
                <div class="tree-card-actions">
                    <a href="tree-details.html?id=${tree.id}" class="btn btn-sm">Details</a>
                    <button onclick="addToCartFromCard(${tree.id})" class="btn btn-green btn-sm" style="flex: 1;">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

// Add to cart from card button
function addToCartFromCard(treeId) {
    addToCart(treeId);
    updateCartBadge();
    showFlash('Item added to cart!', 'success');
}

// ==================== NAVIGATION TOGGLE ====================

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Update cart badge on every page load
    updateCartBadge();
});
