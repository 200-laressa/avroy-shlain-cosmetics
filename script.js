// Function to add products to the cart
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}

// Display the cart on the cart and checkout pages
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        document.getElementById('cart-items').innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('total-amount').innerHTML = '<p>Total: $0.00</p>';
        document.getElementById('cart-items-checkout').innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('total-amount-checkout').innerHTML = '<p>Total: $0.00</p>';
    } else {
        let subtotal = 0;
        let cartItemsHTML = '';
        cart.forEach(item => {
            subtotal += item.price;
            cartItemsHTML += `
                <div>
                    <span>${item.name}</span> - $${item.price.toFixed(2)}
                </div>
            `;
        });
        let totalAmount = subtotal + 5; // Adding a fixed delivery charge of $5
        document.getElementById('cart-items').innerHTML = cartItemsHTML;
        document.getElementById('total-amount').innerHTML = `
            <p>Subtotal: $${subtotal.toFixed(2)}</p>
            <p>Delivery: $5.00</p>
            <p>Total: $${totalAmount.toFixed(2)}</p>
        `;
        document.getElementById('cart-items-checkout').innerHTML = cartItemsHTML;
        document.getElementById('total-amount-checkout').innerHTML = `
            <p>Subtotal: $${subtotal.toFixed(2)}</p
