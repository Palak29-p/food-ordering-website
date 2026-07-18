console.log("Script Connected");
        function showToast(message){
            const toast = document.getElementById("toast");
            
            if(!toast) return;
                toast.textContent = message;
                toast.classList.add("show");
                setTimeout(() => {
                    toast.classList.remove("show");
                }, 2000);
            }

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        const item = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: Number(button.dataset.price),
            image: button.dataset.image,
            quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingItem = cart.find(product => product.id === item.id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push(item);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        showToast(item.name+"added to cart!");
    });

});

function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalItems = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
    });

    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = `🛒 Cart (${totalItems})`;
    }
}

updateCartCount();

const search = document.getElementById("search");

if (search) {

    search.addEventListener("keyup", function () {

        const value = search.value.toLowerCase();

        const cards = document.querySelectorAll(".menu-card");

        cards.forEach(card => {

            const foodName = card.querySelector("h3").textContent.toLowerCase();

            if (foodName.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}
const params = new URLSearchParams(window.location.search);
const searchValue = params.get("search");

if (searchValue && search) {

    search.value = searchValue;

    search.dispatchEvent(new Event("keyup"));

}

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.category;

        menuCards.forEach(card => {

            if (category === "all" || card.dataset.category === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});

const homeSearchBtn = document.getElementById("home-search-btn");

if (homeSearchBtn) {

    homeSearchBtn.addEventListener("click", () => {

        const searchValue = document
            .getElementById("home-search")
            .value
            .trim();

        if (searchValue !== "") {
            window.location.href = `menu.html?search=${encodeURIComponent(searchValue)}`;
        } else {
            window.location.href = "menu.html";
        }

    });

}

const wishlistButtons = document.querySelectorAll(".wishlist");

wishlistButtons.forEach(button => {

    const id = button.dataset.id;

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.find(item => item.id === id)) {
        button.classList.add("active");
        button.innerHTML = '<i class="fa-solid fa-heart"></i>';
    }

    button.addEventListener("click", () => {

        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        const existingItem = wishlist.find(item => item.id === id);

        if (existingItem) {

            wishlist = wishlist.filter(item => item.id !== id);

            button.classList.remove("active");
            button.innerHTML = '<i class="fa-regular fa-heart"></i>';

        } else {

            wishlist.push({
                id: button.dataset.id,
                name: button.dataset.name,
                price: button.dataset.price,
                image: button.dataset.image
            });

            button.classList.add("active");
            button.innerHTML = '<i class="fa-solid fa-heart"></i>';
        }

        localStorage.setItem("wishlist", JSON.stringify(wishlist));

    });

});