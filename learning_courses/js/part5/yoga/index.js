const body = document.querySelector('body');
const app = document.querySelector('.app');
const h1 = document.querySelector('h1');
const main = document.querySelector('main');
const btn = document.querySelector('btn-container');

class Exo {
    constructor (duree, img) {
        this.duree = duree;
        this.img = img;
    }
    getHTML = function () {
        return (`
            <li>
                <div class="card-header">
                    <input type="number" value=${this.duree}>
                    <h2>min</h2>
                </div>
                <img src="${this.img}">
                <div class="arrow">
                    <button><i class="fa-solid fa-circle-arrow-left"></i></button>
                </div>
                <div class="deleteBtn">
                    <button><i class="fa-regular fa-circle-xmark"></i></button>
                </div>
            </li>
            `);
    }
}

const exos = [];






function createExos() {
    for (let i = 0; i < 10; i++)
        exos[i] = new Exo(1, `./img/${i}.png`);
}

function startPage() {
    const icon = document.createElement('i');
    icon.classList.add("fa-solid");
    icon.classList.add("fa-arrow-rotate-left");
    h1.textContent = `Parametrage`;
    h1.appendChild(icon);
    const ul = document.createElement('ul');
    ul.innerHTML = exos.map(exo => exo.getHTML()).join("");
    main.appendChild(ul);
}

window.addEventListener("load", () => {
    createExos();
    startPage();
});
