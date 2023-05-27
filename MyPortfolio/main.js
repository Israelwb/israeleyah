var typed =  new Typed(".text", {
    // strings: ['<i>Frontend</i> Developer.', '&amp; Portfolio Developer.'],
    strings: ['Web Developer.', 'Frontend Developer.', 'Portfolio Developer.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0)
});


let menu = document.querySelector("#menu-icon")
let navBar = document.querySelector(".menu-nav")

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navBar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navBar.classList.remove('active')
}