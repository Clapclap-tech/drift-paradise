var scrollToTopBtn = document.getElementById("scrollToTop");

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Register function
function register() {
    const username = document.getElementById("reg-username").value.trim();
    const password = document.getElementById("reg-password").value.trim();

    if (!username || !password) {
        alert("Please fill out all fields.");
        return;
    }

    if (localStorage.getItem(username.toLowerCase())) {
        alert("Username already exists. Please choose a different one.");
        return;
    }

    localStorage.setItem(username.toLowerCase(), password); // Store username in lowercase for consistency
    alert("Registration successful! You can now log in.");
    showLoginForm();
}

// Login function
function login() {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    if (!username || !password) {
        alert("Please enter your username and password.");
        return;
    }

    const storedPassword = localStorage.getItem(username.toLowerCase());
    if (storedPassword === password) {
        alert("Login successful! Welcome " + username);
        localStorage.setItem("loggedInUser", username.toLowerCase()); // Store the logged-in user
        // Proceed to the dashboard or hide the login form
        document.getElementById("auth-section").style.display = "none";
        // Add your dashboard loading logic here
    } else {
        alert("Login failed. Please check your username and password.");
    }
}

// Show the register form
function showRegisterForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
}

// Show the login form
function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
}

