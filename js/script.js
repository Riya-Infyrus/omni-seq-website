// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('nav-blur', 'shadow-lg');
    } else {
        navbar.classList.remove('nav-blur', 'shadow-lg');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission (using Web3Forms - free service)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        message: formData.get('message')
    };

    // Show loading state
    formStatus.classList.remove('hidden');
    formStatus.innerHTML = '<p class="text-gray-400">Sending message...</p>';

    try {
        // For demo purposes, just show success
        // In production, integrate with Web3Forms, Formspree, or EmailJS
        setTimeout(() => {
            formStatus.innerHTML = '<p class="text-green-400">✓ Message sent successfully! We\'ll get back to you soon.</p>';
            contactForm.reset();
            
            setTimeout(() => {
                formStatus.classList.add('hidden');
            }, 5000);
        }, 1000);

        // Example Web3Forms integration (you'll need to sign up for a free API key):
        /*
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
                ...data
            })
        });

        if (response.ok) {
            formStatus.innerHTML = '<p class="text-green-400">✓ Message sent successfully!</p>';
            contactForm.reset();
        } else {
            throw new Error('Failed to send');
        }
        */
    } catch (error) {
        formStatus.innerHTML = '<p class="text-red-400">✗ Failed to send message. Please try again.</p>';
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.card-hover').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});
