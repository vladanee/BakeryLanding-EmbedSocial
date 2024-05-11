document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.navbar');  // This should target the navbar for mobile

    menuToggle.addEventListener('click', () => {
        const isVisible = mobileNav.style.display === 'block';
        mobileNav.style.display = isVisible ? 'none' : 'block';
    });
});
