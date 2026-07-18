const loginForm = document.getElementById("login-form");

if (loginForm) {

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if(email === "" || password === ""){
            alert("Please fill all fields.");
            return;
        }

        alert("Login Successful!");

        loginForm.reset();

    });

}