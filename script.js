const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
    isValid = false;
    messages.push("Email is not in a valid format");
}document.addEventListener("DOMContentLoaded", ready);

function ready() {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const email = document.getElementById("email").value.trim();

        let isValid = true;
        let messages = [];

        if (username.length < 3) {
            isValid = false;
            messages.push("Username is less than 3 characters");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
    isValid = false;
    messages.push("Email is not in a valid format");
}

        if (password.length < 8) {
            isValid = false;
            messages.push("Password is too short");
        }

        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
}
