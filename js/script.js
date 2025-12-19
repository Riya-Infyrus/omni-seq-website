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

// Form submission using Web3Forms
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

// IMPORTANT: Replace this with your actual Web3Forms Access Key
// Get it free at: https://web3forms.com
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const phone = formData.get('phone');
    
    // Build the data object
    const data = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.get('name'),
        email: formData.get('email'),
        phone: phone || 'Not provided',
        message: formData.get('message'),
        from_name: "Omni Seq Website Contact Form"
    };

    // Show loading state
    formStatus.classList.remove('hidden');
    formStatus.innerHTML = '<p class="text-gray-400 animate-pulse">Sending message...</p>';

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            formStatus.innerHTML = '<p class="text-green-400 font-semibold">✓ Message sent successfully! We\'ll get back to you soon.</p>';
            contactForm.reset();
            
            setTimeout(() => {
                formStatus.classList.add('hidden');
            }, 5000);
        } else {
            throw new Error(result.message || 'Failed to send');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        formStatus.innerHTML = '<p class="text-red-400">✗ Failed to send message. Please try again or email us directly.</p>';
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
