/**
 * Child Custody Legal Aid - Main JavaScript
 * Handles mobile menu, carousel, and dynamic content
 */

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initHeroCarousel();
    updateCopyrightYear();
    initSmoothScroll();
    initHeaderScroll();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle aria-expanded
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', !isExpanded);
            
            // Change icon
            const icon = menuButton.querySelector('svg');
            if (mobileMenu.classList.contains('hidden')) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = menuButton.contains(event.target) || mobileMenu.contains(event.target);
            if (!isClickInside && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuButton.setAttribute('aria-expanded', 'false');
                const icon = menuButton.querySelector('svg');
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            }
        });
        
        // Close menu on window resize if open
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

/**
 * Initialize Hero Carousel with Swiper
 */
function initHeroCarousel() {
    const heroSwiper = document.querySelector('.hero-swiper');
    if (heroSwiper) {
        new Swiper('.hero-swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 800,
        });
    }
}

/**
 * Update Copyright Year
 */
function updateCopyrightYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Header Scroll Effect
 */
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 10) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
            header.classList.add('shadow-md');
        }
        
        lastScroll = currentScroll;
    });
}

/**
 * Form Validation (for Contact Form)
 */
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            const errorElement = field.nextElementSibling;
            
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('border-red-500');
                if (errorElement && errorElement.classList.contains('error-message')) {
                    errorElement.classList.remove('hidden');
                }
            } else {
                field.classList.remove('border-red-500');
                if (errorElement && errorElement.classList.contains('error-message')) {
                    errorElement.classList.add('hidden');
                }
            }
            
            // Email validation
            if (field.type === 'email' && field.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    isValid = false;
                    field.classList.add('border-red-500');
                    if (errorElement && errorElement.classList.contains('error-message')) {
                        errorElement.textContent = 'Please enter a valid email address';
                        errorElement.classList.remove('hidden');
                    }
                }
            }
        });
        
        if (isValid) {
            // Show success message (form is non-functional as per requirements)
            showMessage('Thank you for your message. We will contact you soon.', 'success');
            form.reset();
        }
    });
}

/**
 * Show Message Toast
 */
function showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `fixed top-20 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    } text-white max-w-md`;
    
    messageDiv.innerHTML = `
        <div class="flex items-center justify-between">
            <p class="mr-4">${message}</p>
            <button onclick="this.parentElement.parentElement.remove()" class="text-white hover:text-gray-200">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    `;
    
    document.body.appendChild(messageDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

/**
 * Lazy Load Images
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if images with data-src exist
if (document.querySelector('img[data-src]')) {
    initLazyLoading();
}
