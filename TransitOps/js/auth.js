// ==========================================
// TransitOps Authentication & RBAC
// ==========================================

// Get session data
const username = sessionStorage.getItem("username");
const role = sessionStorage.getItem("role");
const email = sessionStorage.getItem("email");

// Check Login
if (!username || !role) {

    alert("Please login first.");

    window.location.href = "login.html";

}

// Display User Information
const userNameElement = document.getElementById("username");
const roleElement = document.getElementById("roleName");
const welcomeElement = document.getElementById("welcomeText");

if(userNameElement){

    userNameElement.innerHTML = username;

}

if(roleElement){

    roleElement.innerHTML = role;

}

if(welcomeElement){

    welcomeElement.innerHTML = "Welcome, " + username + " 👋";

}

// ==========================================
// Role Based Access Control (RBAC)
// ==========================================

// Define permissions

const permissions = {

    "Fleet Manager":[
        "dashboard",
        "vehicles",
        "drivers",
        "trips",
        "maintenance",
        "reports"
    ],

    "Driver":[
        "dashboard",
        "trips"
    ],

    "Safety Officer":[
        "dashboard",
        "drivers",
        "maintenance"
    ],

    "Financial Analyst":[
        "dashboard",
        "reports"
    ]

};

// Function to check access

function hasPermission(module){

    if(!permissions[role]){

        return false;

    }

    return permissions[role].includes(module);

}

// Example Usage

/*
if(!hasPermission("vehicles")){

    window.location.href="unauthorized.html";

}
*/

// Hide Menu Items

document.querySelectorAll("[data-module]").forEach(item=>{

    const module=item.getAttribute("data-module");

    if(!hasPermission(module)){

        item.style.display="none";

    }

});

// Logout Function

function logout(){

    sessionStorage.clear();

    window.location.href="login.html";

}