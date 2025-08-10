// Toggle mobile menu
function toggleMenu() {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('show');
}

// Simple contact form handler (no backend) - shows success message
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            status.textContent = 'Please fill in all fields.';
            status.style.color = '#a00';
            return;
        }

        // Simulate success (replace with real API call later)
        status.textContent = 'Thanks, ' + name + '! Your message has been recorded (demo only).';
        status.style.color = '#006600';
        form.reset();
    });
});
