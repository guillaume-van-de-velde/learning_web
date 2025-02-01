let r, g, b;

function changeRgb() {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);

    rgb.textContent = `rgb(${r}, ${g}, ${b})`;
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}

changeRgb();

setInterval(changeRgb, 2000);