/* ===== Logout JS ===== */


document.addEventListener("DOMContentLoaded", function () {


    const logoutButton = document.getElementById("logoutBtn");


    if (logoutButton) {


        logoutButton.addEventListener("click", function () {


            // Remove login session

            localStorage.removeItem("transit_logged_in");


            // Redirect to login page

            window.location.href = "/login";


        });


    }


});



/*
    Global logout function
    Can be called from HTML onclick
*/

function logout() {


    localStorage.removeItem("transit_logged_in");


    window.location.href = "/login";


}