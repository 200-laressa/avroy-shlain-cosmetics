function addToCart(productName, price) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if item already exists in the cart
    let existingItem = cartItems.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity
    } else {
        cartItems.push({ name: productName, price: price, quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Save cart
    alert(`${productName} added to cart!`);
}
