document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const messageError = document.getElementById('message-error');

            // Reset errors
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
            nameInput.setAttribute('aria-invalid', 'false');
            emailInput.setAttribute('aria-invalid', 'false');
            messageInput.setAttribute('aria-invalid', 'false');

            // Check name
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required';
                nameInput.setAttribute('aria-invalid', 'true');
                isValid = false;
            }

            // Check email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email';
                emailInput.setAttribute('aria-invalid', 'true');
                isValid = false;
            }

            // Check message
            if (messageInput.value.trim() === '') {
                messageError.textContent = 'Message is required';
                messageInput.setAttribute('aria-invalid', 'true');
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault();
            }
        });
    }

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
