let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const wishlistItems = document.getElementById("wishlist-items");

function displayWishlist() {

    wishlistItems.innerHTML = "";

    if (wishlist.length === 0) {
        wishlistItems.innerHTML = "<h2>Your wishlist is empty ❤️</h2>";
        return;
    }

    wishlist.forEach((item, index) => {

        wishlistItems.innerHTML += `
        <div class="menu-card">

            <img src="${item.image}" alt="${item.name}">

            <div class="ratings">
                <i class="fa-solid fa-star"></i> 4.8
            </div>

            <h3>${item.name}</h3>

            <p class="price">₹${item.price}</p>

            <button class="remove-btn"
            onclick="removeWishlist(${index})">
                Remove
            </button>

        </div>
        `;

    });

}

function removeWishlist(index){

    wishlist.splice(index,1);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    displayWishlist();

}

displayWishlist();