const nav = document.querySelector('nav');
let scrollLevel = 0;

window.addEventListener("scroll", () => {
    if (window.scrollY < scrollLevel)
        nav.style.top = -60 + "px";
    else
        nav.style.top = 0;
    scrollLevel = window.scrollY;
})