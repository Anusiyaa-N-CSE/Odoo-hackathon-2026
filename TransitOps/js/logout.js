// ==========================================
// TransitOps Logout Script
// ==========================================

// Logout Function

function logout() {

    const confirmLogout = confirm(
        "Are you sure you want to logout?"
    );

    if (confirmLogout) {

        // Clear Session Storage

        sessionStorage.clear();

        // Clear Local Storage (if used)

        localStorage.clear();

        // Redirect to Login Page

        window.location.replace("login.html");

    }

}

// ==========================================
// Prevent Browser Back After Logout
// ==========================================

window.history.pushState(null, null, window.location.href);

window.onpopstate = function () {

    window.history.go(1);

};

// ==========================================
// Auto Logout After 20 Minutes
// ==========================================

let logoutTimer;

function resetTimer() {

    clearTimeout(logoutTimer);

    logoutTimer = setTimeout(function () {

        alert("Session expired. Please login again.");

        sessionStorage.clear();

        localStorage.clear();

        window.location.replace("login.html");

    }, 20 * 60 * 1000);

}

// User Activity

document.addEventListener("mousemove", resetTimer);

document.addEventListener("keydown", resetTimer);

document.addEventListener("click", resetTimer);

document.addEventListener("scroll", resetTimer);

// Start Timer

resetTimer();