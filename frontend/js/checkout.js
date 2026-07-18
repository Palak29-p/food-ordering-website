const checkoutForm = document.getElementById("checkout-form");

if (checkoutForm) {

    checkoutForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Order placed successfully! Thank you for choosing YummmyGo.");

        localStorage.removeItem("cart");

        window.location.href = "index.html";

    });

}