const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function getpos(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return {x, y};
}

function mouseMoove(e){
    const pos = getpos(e);
    ctx.lineTo(pos.x, pos.y);
    console.log("hello");
    ctx.stroke();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 4;
}

canvas.addEventListener("mousedown", (e) => {
    e.preventDefault();
    const pos = getpos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    canvas.addEventListener("mousemove", mouseMoove);
    addEventListener("mouseup", () => canvas.removeEventListener("mousemove", mouseMoove))
})

reset.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})