// Hardcoded credentials for demonstration
const validEmail = "johndoe@example.com";
const validPassword = "password123";

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Check if the entered email and password match the hardcoded credentials
    if (email === validEmail && password === validPassword) {
        // If valid, redirect to another page (simulating a successful login)
        window.location.href = "dashboard.html";  // Redirect to a dashboard page (you can create this page)
    } else {
        // If invalid, show an error message
        document.getElementById('login-error').style.display = "block";
    }
});
