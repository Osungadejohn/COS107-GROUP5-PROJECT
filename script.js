const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));
// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());


//contact form validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let isValid = true;
        const inputs = form.querySelectorAll(".form-input");

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                alert(`Please fill in the ${input.placeholder}`);
            } else if (input.type === "email" && !validateEmail(input.value)) {
                isValid = false;
                alert("Please enter a valid email address");
            } else if (input.type === "tel" && !validatePhone(input.value)) {
                isValid = false;
                alert("Please enter a valid telephone number");
            }
        });

        if (isValid) {
            alert("Form submitted successfully!");
            form.submit(); // Submit the form if all fields are valid
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^[0-9]{10,15}$/; // Adjust as needed
        return phoneRegex.test(phone);
    }
});

