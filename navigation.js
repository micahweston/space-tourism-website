const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

// Add event listener for button click
navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');
    // if data-visible is false set it to true, and if true set it to false.
    // Used for transform of navbar on menu click.
    if (visibility === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        navToggle.style.backgroundImage = "url('./assets/shared/icon-close.svg')"
    } else { // if the nav is open, close it.
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        navToggle.style.backgroundImage = "url('./assets/shared/icon-hamburger.svg')"
    }
})