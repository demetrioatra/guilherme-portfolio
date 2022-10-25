const header = document.querySelector("header");

window.addEventListener("scroll", headerAnimated);

function headerAnimated() {
    if (window.pageYOffset > 0 && header.classList.contains('maxHeader')) {
        header.classList.remove('maxHeader');
        header.classList.add('minHeader');
    } else if (window.pageYOffset == 0 && header.classList.contains('minHeader')) {
        header.classList.remove('minHeader');
        header.classList.add('maxHeader');
    }
}
