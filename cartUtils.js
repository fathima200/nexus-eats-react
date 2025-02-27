//  add an item to the cart
export function addToCart(id, name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.subtotal = existingItem.quantity * price;
    } else {
        cart.push({
            id,
            name,
            price,
            image,
            quantity: 1,
            subtotal: price
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

//  load the cart from local storage
export function loadCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// remove a specific item
export function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
}

//  clear the cart
export function clearCart() {
    localStorage.removeItem('cart');
}
