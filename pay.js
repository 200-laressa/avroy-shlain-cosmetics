document.getElementById('current-year').textContent = new Date().getFullYear();

// Load cart data from localStorage
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Function to update cart summary
function updateCartSummary() {
    let cartItemsSummary = document.getElementById('cart-items-summary');
    let total = 0;
    let totalQuantity = 0;

    cartItemsSummary.innerHTML = '';

    if (cartItems.length === 0) {
        cartItemsSummary.innerHTML = `<p>Your cart is empty.</p>`;
    } else {
        cartItems.forEach((item, index) => {
            total += item.price * item.quantity;
            totalQuantity += item.quantity;

            cartItemsSummary.innerHTML += `
                <div class="product-summary">
                    <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
        });
    }

    // Update total price and total quantity
    document.getElementById('total-price-summary').textContent = total.toFixed(2);
    document.getElementById('total-quantity').textContent = totalQuantity;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cartItems.splice(index, 1); // Remove item from array
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Update storage
    updateCartSummary(); // Refresh UI
}

// Function to update the order summary
function updateOrderSummary() {
    let orderItemsSummary = document.getElementById('order-items-summary');
    let total = 0;
    orderItemsSummary.innerHTML = '';

    if (cartItems.length === 0) {
        orderItemsSummary.innerHTML = `<p>Your cart is empty.</p>`;
    } else {
        cartItems.forEach(item => {
            total += item.price * item.quantity;
            orderItemsSummary.innerHTML += `
                <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>
            `;
        });
    }

    document.getElementById('total-price-checkout').textContent = total.toFixed(2);
}

// Function to handle checkout
function processCheckout() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (name && address && email && phone && paymentMethod) {
        alert(`Thank you, ${name}! Your order will be shipped to ${address}.`);
        localStorage.removeItem("cartItems"); // Clear cart after successful payment
        window.location.href = 'index.html'; // Redirect to homepage
    } else {
        alert('Please fill in all fields before proceeding.');
    }
}

// Initialize cart and order summaries
updateCartSummary();
updateOrderSummary();
