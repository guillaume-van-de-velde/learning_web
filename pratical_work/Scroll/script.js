navbar.style.height = "50px";

let btnClosed = false;

window.addEventListener("scroll", () => {
    let scrollValue = (window.innerHeight + window.scrollY) / document.body.offsetHeight;

    if (window.scrollY == 0)
        navbar.style.height = "50px";
    else
        navbar.style.height = "100px";

    if (scrollValue > 0.45)
    {
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = "translateX(0)";
    }

    if (scrollValue > 0.9 && !btnClosed)
    {
        popup.style.opacity = 1;
        popup.style.transform = "translateX(0)";
    }
    else
    {
        popup.style.opacity = 0;
        popup.style.transform = "translateX(400px)";
    }
});

closeBtn.addEventListener("click", () => {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(400px)";
    btnClosed = true;
});