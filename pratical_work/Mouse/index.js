const mouses = document.querySelectorAll('.r');

document.body.addEventListener("mousemove", (e) => {
    mouses.forEach(element => {
        element.style.left = e.x + "px";
        element.style.top = e.y + "px";
    });
});