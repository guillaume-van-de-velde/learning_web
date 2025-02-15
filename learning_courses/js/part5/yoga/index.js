const h1 = document.querySelector('h1');
const main = document.querySelector('main');
const btnContainer = document.querySelector('.btn-container');

class Exo {
    constructor(numero, min, index) {
        this.numero = numero;
        this.min = min;
        this.currSec = 0;
        this.currMin = min;
        this.secTotal = minutesToSeconds(min);
        this.index = index;
    }

    getDisplayChoosePage = function() {
        return (`
        <li>
            <div class="card-header">
                <input type="number" id="input${this.numero}" min="1" max="10" value=${this.min}>
                <span>min</span>
            </div>
            <img src="./img/${this.numero}.png" />
            <i class="fas fa-arrow-alt-circle-left arrow" data-numero=${this.numero}></i>
            <i class="fas fa-times-circle deleteBtn" data-${this.numero}></i>
        </li>
        `);
    }

    getDisplayStartPage = function(index) {
        return (`
        <div class="exercice-container">
            <p>${this.currMin < 10 ? "0" : ""}${this.currMin}:${this.currSec < 10 ? "0" : ""}${this.currSec}</p>
            <img src="./img/${this.numero}.png" />
            <div>${this.index}/${exos.length}</div>
        </div>
        `);
    }
}

function makeExosArray()
{
    let exos = [];
    for (i = 0; i < 10; i++)
        exos.push(new Exo(i, 1, i + 1));
    return exos;
}

let exos = makeExosArray();

function minutesToSeconds(minutes)
{
    seconds = minutes * 60;
    return seconds;
}

function ring() {
    const ring = new Audio();
    ring.src = "./ring.mp3";
    ring.play();
}

function updateTime(exo)
{
    if (exo.currMin == exo.min && exo.currSec == 0)
        ring();
    if (exo.currSec > 0)
        exo.currSec--;
    else
    {
        exo.currSec = 59;
        if (exo.currMin > 0)
            exo.currMin--;
    }
}

function startRoutineContent() {
    let exo = exos.find(obj => obj.currMin || obj.currSec);
    updateTime(exo);
    return (exo.getDisplayStartPage());
}

function getAllListExo() {
    return (
        `
        <ul>
            ${exos.map((exo) => exo.getDisplayChoosePage()).join("")}
        </ul>
        `
    );
}

const vues = {

    choose: {
        title: `Parametrage <i id='reboot' class='fas fa-undo'></i>`,
        content: () => getAllListExo(),
        btn: `<button id="start">Commencez<i class='far fa-play-circle'></i></button>`
    },

    start: {
        title: `Routine`,
        content: () => startRoutineContent(),
        btn: ``
    },

    end: {
        title: `C'est termine !`,
        content: `<button id="start">Recommencer</button>`,
        btn: `<button id='reboot' class='btn-reboot'>Reinitialiser<i class='fas fa-times-circle'></i></button>`
    }

};

function refresh(title, content, btn) {
    h1.innerHTML = title;
    main.innerHTML = content;
    btnContainer.innerHTML = btn;
}

const refreshPage = {
    choose: function() {
        refresh(vues.choose.title, vues.choose.content(), vues.choose.btn);
    },
    start: function () {
        refresh(vues.start.title, vues.start.content(), vues.start.btn);
    },
    end: function () {
        refresh(vues.end.title, vues.end.content, vues.end.btn);
    }
}

function swapExo(index) {
    [exos[index - 1], exos[index]] = [exos[index], exos[index - 1]];
    exos[index - 1].index--;
    exos[index].index++;
}

function deleteExo(indexDel) {
    exos.splice(indexDel, 1);
    exos.map((exo, index) => {
        exo.index = index + 1;
    });
}

function refreshPageStartRoutine()
{
    if (!exos[0])
    {
        refreshPage.end();
        Events.end();
    }
    if (exos.find(exo => exo.currMin || exo.currSec))
    {
        refreshPage.start();
        setTimeout(refreshPageStartRoutine, 1000);
    }
    else
    {
        refreshPage.end();
        Events.end();
    }
}

const Events = {
    load: () => {
        document.addEventListener("DOMContentLoaded", () => {
            refreshPage.choose();
            setTimeout(Events.choose, 0);
        });
    },
    choose: () => {
        reboot.addEventListener("click", () => {
            exos = makeExosArray();
            refreshPage.choose();
            Events.choose();
        });
        exos.map((exo, index) => {
            const input = document.getElementById(`input${exo.numero}`);
            const arrow = document.querySelector(`main ul li:nth-child(${index + 1}) .arrow`);
            const deleteBtn = document.querySelector(`main li:nth-child(${index + 1}) .deleteBtn`);
            input.addEventListener("click", () => {
                exo.min = parseInt(input.value);
                exo.currMin = exo.min;
            });
            arrow.addEventListener("click", () => {
                if (index)
                {
                    swapExo(index);
                    refreshPage.choose();
                    Events.choose();
                }
            });
            deleteBtn.addEventListener("click", () => {
                deleteExo(index);
                refreshPage.choose();
                Events.choose();
            });
        });
        start.addEventListener("click", refreshPageStartRoutine);
    },

    end: () => {
        start.addEventListener("click", () => {
            exos.map(exo => {
                exo.currMin = exo.min;
                exo.currSec = 0;
            });
            refreshPageStartRoutine();
        });
        reboot.addEventListener("click", () => {
            exos = makeExosArray();
            refreshPage.choose();
            Events.choose();
        });
    }
};

Events.load();
