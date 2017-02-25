const nav = document.getElementById('main');
const topofNav = nav.offsetHeight;

function fixNav() {
    if (window.scrollY >= topofNav) {
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0 + 'px';
    }
}

window.addEventListener('scroll', fixNav);