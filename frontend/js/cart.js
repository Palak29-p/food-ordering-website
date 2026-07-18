let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.quantity;

        cartItems.innerHTML += `
        <div class="cart-card">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-info">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>

                <div class="quantity-box">
                    <button onclick="decreaseQuantity(${index})">−</button>

                    <span>${item.quantity}</span>

                    <button onclick="increaseQuantity(${index})">+</button>
                </div>

                <button class="remove-btn" onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

        </div>
        `;
    });

    const delivery = 40;
const gst = total * 0.05;
const grandTotal = total + delivery + gst;

if (document.getElementById("subtotal")) {
    document.getElementById("subtotal").textContent = "₹" + total.toFixed(2);
}

if (document.getElementById("gst")) {
    document.getElementById("gst").textContent = "₹" + gst.toFixed(2);
}

if (document.getElementById("grand-total")) {
    document.getElementById("grand-total").textContent = "₹" + grandTotal.toFixed(2);
}

if (totalPrice) {
    totalPrice.textContent = grandTotal.toFixed(2);
}
}

function increaseQuantity(index) {
    cart[index].quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

displayCart();