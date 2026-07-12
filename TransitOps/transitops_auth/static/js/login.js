/* ===== Login JS ===== */

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const errorMessage = document.getElementById("errorMessage");


            if (username === "" || password === "") {

                errorMessage.innerHTML = "Please enter username and password";
                return;

            }


            /*
                Temporary authentication check.
                Later this will connect with Odoo controller.
            */

            if (username === "admin" && password === "admin") {

                localStorage.setItem("transit_logged_in", "true");

                window.location.href = "/dashboard";

            } 
            else {

                errorMessage.innerHTML = "Invalid username or password";

            }

        });

    }

});