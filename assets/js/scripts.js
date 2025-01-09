//If the page is loaded on a mobile device, fix navbar to top. Use Bootstrap breakpoints.
function checkViewportWidth() {
    const navbar = document.querySelector('.navbar');
    if (window.innerWidth <= 1200) {
        navbar.classList.add('fixed-top');
    } 
    
    else {
        navbar.classList.remove('fixed-top');
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', checkViewportWidth);

// Run on window resize
window.addEventListener('resize', checkViewportWidth);