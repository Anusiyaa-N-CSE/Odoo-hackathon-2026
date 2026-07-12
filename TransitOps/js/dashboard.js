// ==========================================
// TransitOps Dashboard Script
// ==========================================

// Wait until page is loaded

document.addEventListener("DOMContentLoaded", function () {

    // Get session details

    const username = sessionStorage.getItem("username");
    const role = sessionStorage.getItem("role");

    // If session doesn't exist

    if (!username || !role) {

        window.location.href = "login.html";
        return;

    }

    // Update Welcome Message

    const welcomeText = document.getElementById("welcomeText");

    if (welcomeText) {

        welcomeText.innerHTML = "Welcome, " + username + " 👋";

    }

    // Update Username

    const usernameElement = document.getElementById("username");

    if (usernameElement) {

        usernameElement.innerHTML = username;

    }

    // Update Role

    const roleElement = document.getElementById("roleName");

    if (roleElement) {

        roleElement.innerHTML = role;

    }

    // Placeholder Dashboard Values

    document.getElementById("vehicleCount").innerHTML = "--";
    document.getElementById("driverCount").innerHTML = "--";
    document.getElementById("tripCount").innerHTML = "--";
    document.getElementById("maintenanceCount").innerHTML = "--";

    // Display Current Date

    const today = new Date();

    const options = {

        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"

    };

    console.log("Today : " + today.toLocaleDateString("en-IN", options));

});

// ==========================================
// Card Hover Animation
// ==========================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0px)";

    });

});

// ==========================================
// Sidebar Active Menu
// ==========================================

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

    item.addEventListener("click", function () {

        menuItems.forEach(i => i.classList.remove("active"));

        this.classList.add("active");

    });

});

// ==========================================
// Dashboard Greeting
// ==========================================

const hour = new Date().getHours();

let greeting = "Welcome";

if (hour < 12) {

    greeting = "Good Morning";

}
else if (hour < 17) {

    greeting = "Good Afternoon";

}
else {

    greeting = "Good Evening";

}

const welcome = document.getElementById("welcomeText");

if (welcome && sessionStorage.getItem("username")) {

    welcome.innerHTML = greeting + ", " +
        sessionStorage.getItem("username") + " 👋";

}