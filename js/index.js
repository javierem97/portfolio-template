const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// add the clas nav-open every time we click on the button
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Clase the navigation when a section is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})