// The Villas at Palecero - Landing Page JavaScript
// Handles dynamic content switching, form interactions, and modal

// ============================================
// DYNAMIC CONTENT SWITCHING BASED ON AUDIENCE
// ============================================

function getAudienceFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('source');
    
    // Valid sources: corporate, faculty, lifestyle
    const validSources = ['corporate', 'faculty', 'lifestyle'];
    
    if (validSources.includes(source)) {
        return source;
    }
    
    // Default to corporate if no source specified
    return 'corporate';
}

function loadDynamicContent() {
    const audience = getAudienceFromURL();
    
    // Update headline
    const headline = document.querySelector('.hero-headline');
    if (headline && headline.dataset[audience]) {
        headline.textContent = headline.dataset[audience];
    }
    
    // Update lifestyle section title
    const lifestyleTitle = document.querySelector('.lifestyle .section-title');
    if (lifestyleTitle && lifestyleTitle.dataset[audience]) {
        lifestyleTitle.textContent = lifestyleTitle.dataset[audience];
    }
    
    // Show/hide social proof based on audience
    const socialProof = document.querySelector('.social-proof');
    if (socialProof) {
        const showForAudience = socialProof.dataset[audience];
        if (showForAudience === 'hide') {
            socialProof.style.display = 'none';
        } else {
            socialProof.style.display = 'block';
        }
    }
    
    // Update hero background image based on audience
    const heroBackground = document.getElementById('heroBackground');
    if (heroBackground) {
        // Set background image based on audience
        const backgroundImages = {
            corporate: '/images/hero-corporate.jpg',
            faculty: '/images/hero-faculty.jpg',
            lifestyle: '/images/hero-lifestyle.jpg'
        };
        
        heroBackground.style.backgroundImage = `url('${backgroundImages[audience]}')`;
    }
    
    console.log('Loaded content for audience:', audience);
}

// Load dynamic content when page loads
document.addEventListener('DOMContentLoaded', loadDynamicContent);

// ============================================
// SMOOTH SCROLLING TO FORM
// ============================================

function scrollToForm() {
    const formSection = document.getElementById('bookingForm');
    if (formSection) {
        formSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ============================================
// FORM SUBMISSION HANDLING
// ============================================

function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const form = event.target;
    const formData = new FormData(form);
    
    // Log form data (for testing)
    console.log('Form submitted with data:');
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
    
    // REPLACE THIS: When GHL form is integrated, this won't be needed
    // For now, just redirect to confirmation page
    
    // In production with GHL, the form will handle submission and redirect
    // For testing, we'll simulate the redirect
    setTimeout(() => {
        window.location.href = 'confirmation.html';
    }, 500);
}

// Attach form submission handler if form exists
document.addEventListener('DOMContentLoaded', function() {
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', handleFormSubmit);
    }
});

// ============================================
// MODAL FUNCTIONALITY (Confirmation Page)
// ============================================

function showApplicationInstructions() {
    const modal = document.getElementById('instructionsModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal() {
    const modal = document.getElementById('instructionsModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

function openApplicationSite() {
    // Open paleceroliving.com in new tab
    window.open('https://paleceroliving.com', '_blank');
    
    // Close modal
    closeModal();
    
    // Show a brief confirmation message
    showToast('Opening available units. Remember to click "Apply Now" on your preferred unit!');
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('instructionsModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// TOAST NOTIFICATION
// ============================================

function showToast(message, duration = 3000) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    
    // Add styles
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #7A9B76;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        animation: slideUp 0.3s ease;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from {
                transform: translate(-50%, 20px);
                opacity: 0;
            }
            to {
                transform: translate(-50%, 0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(toast);
    
    // Remove after duration
    setTimeout(() => {
        toast.style.animation = 'slideUp 0.3s ease reverse';
        setTimeout(() => {
            document.body.removeChild(toast);
            document.head.removeChild(style);
        }, 300);
    }, duration);
}

// ============================================
// ANALYTICS & TRACKING (Optional)
// ============================================

function trackEvent(eventName, properties = {}) {
    // Add your analytics tracking here
    // Examples: Google Analytics, Facebook Pixel, etc.
    
    console.log('Event tracked:', eventName, properties);
    
    // Example for Google Analytics (if installed)
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, properties);
    }
    
    // Example for Facebook Pixel (if installed)
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, properties);
    }
}

// Track page view on load
document.addEventListener('DOMContentLoaded', function() {
    const audience = getAudienceFromURL();
    trackEvent('PageView', {
        audience: audience,
        page: window.location.pathname
    });
});

// Track form interactions
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('#leadForm input, #leadForm select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            trackEvent('FormFieldFocused', {
                field: this.name
            });
        }, { once: true }); // Only track once per page load
    });
});

// Track CTA clicks
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-primary')) {
        trackEvent('CTAClicked', {
            button: event.target.textContent,
            location: event.target.closest('section')?.className || 'unknown'
        });
    }
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Lazy load images when they come into view
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        if (isInViewport(img)) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        }
    });
}

// Add scroll listener for lazy loading
window.addEventListener('scroll', debounce(lazyLoadImages, 100));

// ============================================
// MOBILE MENU (if needed later)
// ============================================

// Reserved for future navigation menu if added

console.log('Palecero Landing Page JavaScript loaded successfully');
