//If the page is loaded on a mobile device, fix navbar to top. Use Bootstrap breakpoints.
function checkViewportWidth() {

    const navbar = document.querySelector('.navbar');
    const body = document.body;
    
    if (window.innerWidth <= 1200) {
        navbar.classList.add('fixed-top');
        body.style.paddingTop = '58px';
    } 
    else {
        navbar.classList.remove('fixed-top');
        body.style.paddingTop = '0';
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', checkViewportWidth);

// Run on window resize
window.addEventListener('resize', checkViewportWidth);


//Close navbar when a link is clicked
document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
    link.addEventListener('click', e => {
        const section = document.querySelector(e.target.getAttribute('href'));
        if (!section) return;

        e.preventDefault();
        const navHeight = document.querySelector('.navbar-toggler').offsetHeight;
        
        window.scroll({
            top: section.offsetTop - navHeight,
            behavior: 'smooth'
        });
        
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});