// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[placeholder="Your Name"]').value;
    const email = this.querySelector('input[placeholder="Your Email"]').value;
    const message = this.querySelector('textarea').value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
    } else {
        alert("Form submitted successfully!");
        // You can proceed to send the form data to the server here.
    }
});
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        item.style.transform = 'scale(1.05)';
        item.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
        item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});