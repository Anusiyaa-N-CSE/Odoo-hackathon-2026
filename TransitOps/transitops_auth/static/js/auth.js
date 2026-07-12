/* ===== Authentication JS ===== */


function isUserLoggedIn() {

    return localStorage.getItem("transit_logged_in") === "true";

}


/*
    Protect Dashboard Page
*/

document.addEventListener("DOMContentLoaded", function () {

    const currentPage = window.location.pathname;


    if (currentPage.includes("dashboard")) {

        if (!isUserLoggedIn()) {

            window.location.href = "/unauthorized";

        }

    }


});


/*
    Logout Helper
*/

function logoutUser() {

    localStorage.removeItem("transit_logged_in");

    window.location.href = "/login";

}