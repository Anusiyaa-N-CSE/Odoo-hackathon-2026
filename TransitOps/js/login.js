// ==========================================
// TransitOps Login Script
// ==========================================

// Show / Hide Password

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {

    const type =
        password.getAttribute("type") === "password"
            ? "text"
            : "password";

    password.setAttribute("type", type);

    togglePassword.innerHTML =
        type === "password"
            ? '<i class="fa-solid fa-eye"></i>'
            : '<i class="fa-solid fa-eye-slash"></i>';

});

// Login Form

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    const pass = document.getElementById("password").value.trim();

    const error = document.getElementById("error");

    error.innerHTML = "";

    // Email Validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        error.innerHTML = "Please enter a valid email address.";

        return;

    }

    // Password Validation

    if (pass.length < 8) {

        error.innerHTML = "Password must contain at least 8 characters.";

        return;

    }

    // Demo Users

    const users = [

        {
            email: "manager@transitops.com",
            password: "Manager@123",
            role: "Fleet Manager",
            name: "John Smith"
        },

        {
            email: "driver@transitops.com",
            password: "Driver@123",
            role: "Driver",
            name: "David"
        },

        {
            email: "safety@transitops.com",
            password: "Safety@123",
            role: "Safety Officer",
            name: "Sophia"
        },

        {
            email: "finance@transitops.com",
            password: "Finance@123",
            role: "Financial Analyst",
            name: "Emma"
        }

    ];

    // Check User

    const user = users.find(

        u =>
            u.email === email &&
            u.password === pass

    );

    if (user) {

        // Save Session

        sessionStorage.setItem("username", user.name);

        sessionStorage.setItem("role", user.role);

        sessionStorage.setItem("email", user.email);

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    }

    else {

        error.innerHTML = "Invalid Email or Password.";

    }

});