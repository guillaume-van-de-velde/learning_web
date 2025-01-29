const count = document.querySelector('h3');
let counter = 0;

const bubbleMaker = () => {
    const bubble = document.createElement('span');

    bubble.classList.add('bubble');

    document.body.appendChild(bubble);

    const size = Math.random() * 200 + 100;

    bubble.style.height = size + "px";
    bubble.style.width = size + "px";

    bubble.style.top = Math.random() * 100 + 50 + "%";

    bubble.style.left = Math.random() * 100 + "%";

    const sign = Math.random() > 0.5 ? 1 : -1;

    bubble.style.setProperty('--left', Math.random() * 100 * sign + 50 + "%");

    setTimeout(() => {
        bubble.remove();
    }, 8000);

    bubble.addEventListener("click", () => {
        bubble.remove();
        counter++;
        count.textContent = counter;
        return ;
    });
}

setInterval(bubbleMaker, 300);

