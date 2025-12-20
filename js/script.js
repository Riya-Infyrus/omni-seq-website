window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('nav-blur', 'shadow-lg');
    } else {
        navbar.classList.remove('nav-blur', 'shadow-lg');
    }
});

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.style.borderRight = '3px solid rgba(14, 165, 233, 0.8)';
            element.style.paddingRight = '4px';
            element.style.animation = 'blink 0.75s step-end infinite';
        }
    }
    type();
}

window.addEventListener('load', function() {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const text = typingElement.textContent;
        typeWriter(typingElement, text, 80);
    }
});

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

const EMAILJS_PUBLIC_KEY = 'wx1rAvmASbsMP-kdf';
const EMAILJS_SERVICE_ID = 'service_mj8y8yb';
const EMAILJS_TEMPLATE_ID = 'template_pk3b9nq';

emailjs.init(EMAILJS_PUBLIC_KEY);

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    formStatus.classList.remove('hidden');
    formStatus.innerHTML = '<p class="text-gray-400 animate-pulse">Sending message...</p>';

    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        phone: document.getElementById('phone').value || 'Not provided',
        message: document.getElementById('message').value,
        to_name: 'Omni Seq Team'
    };

    try {
        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            formData
        );

        console.log('SUCCESS!', response.status, response.text);
        formStatus.innerHTML = '<p class="text-green-400 font-semibold">✓ Message sent successfully! We\'ll get back to you soon.</p>';
        contactForm.reset();
        
        setTimeout(() => {
            formStatus.classList.add('hidden');
        }, 5000);
    } catch (error) {
        console.error('FAILED...', error);
        formStatus.innerHTML = '<p class="text-red-400 font-semibold">✗ Failed to send message. Please try again or email us directly at info@omniseq.com.np</p>';
        
        setTimeout(() => {
            formStatus.classList.add('hidden');
        }, 7000);
    }
});

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

document.querySelectorAll('.card-hover').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});
