function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    var loadingSpinner = document.getElementById('loading-spinner');

    if (email === "" || password === "") {
        errorMessage.textContent = "Please fill out the fields.";
    } else if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
    } else if (!validatePassword(password)) {
        errorMessage.textContent = "Password must be at least 8 characters long and include at least one special character.";
    } else {
        // Clear error message
        errorMessage.textContent = "";
        
        // Show loading spinner and hide error message
        loadingSpinner.style.display = 'block';

        // Redirect to Senchola Technology Solutions page after a short delay
        setTimeout(function() {
            window.location.href = "https://university.senchola.com/registration/"; // Replace with the actual URL
        }, 500); // Short delay to show the spinner
    }
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    // At least 8 characters, including at least one special character
    var re = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    return re.test(password);
}

function redirectToGoogle() {
    // Add your Google authentication logic or redirect here
    window.location.href = "https://accounts.google.com";
}

function redirectToFacebook() {
    // Add your Facebook authentication logic or redirect here
    window.location.href = "https://facebook.com";
}
