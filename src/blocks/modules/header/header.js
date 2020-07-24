const button = document.querySelector('.nav__hamburger');
button.addEventListener('click', event => {
    button.classList.toggle("open");
});