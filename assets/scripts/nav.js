menuIconContainer = document.querySelector('#menu-icon');
barsIcon = document.querySelector('.fa-bars')
navLinks = document.querySelector('.nav-links')

menuIconContainer.addEventListener('click', function() {
    navLinks.classList.toggle('visible');

    barsIcon.classList.toggle('fa-x');
})

