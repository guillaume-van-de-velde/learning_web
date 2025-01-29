document.querySelector("h4").style.background="red";

const baliseHtml = document.querySelector("h4");

baliseHtml.style.background="grey";

const questionContainer = document.querySelector('.click-event');

questionContainer.style.borderRadius = "150px";

let a = 0;

questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-click");
    a++;
    if (a % 2 == 0)
    {
        document.querySelector('p').style.color = "white";
        a = 0;
    }
    else
        document.querySelector('p').style.color = "black";
});


const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const response = document.querySelector('p');

btn1.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "green";
});

btn2.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "red";
});

const mousemove = document.querySelector(".mousemove");

window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)"
});

questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "pink"
});

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(2deg)";
});

response.addEventListener("mouseout", () => {
    response.style.transform = "rotate(0deg)";
});

const keypress = document.querySelector('.keypress');
const key = document.getElementById('key');

const ring = () => {
    const audio = new Audio();
    audio.src = "./Enter.mp3"
    audio.play();
}

document.addEventListener('keypress', (e) => {
    key.textContent = e.key;
    if (e.key === "j") {
        keypress.style.background = "green";
    }
    else if (e.key === "r") {
        ring();
        keypress.style.background = "black";
    }
    else 
        keypress.style.background = "black";
});

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
        nav.style.top=0;
    }
    else
        nav.style.top= "-50px";
});

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector('form');

let pseudo;
let language;

inputName.addEventListener('input', (e) => {
    pseudo = e.target.value;
});

select.addEventListener('input', (e) => {
    language = e.target.value;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (cgv.checked) {
        document.querySelector('form > div').innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Language prefere : ${language}</h4>
        `;
    }
    else
        alert('Veuillez accepter les CGV');
});

window.addEventListener("load", () => {
    console.log("yeeeeee");
});

window.addEventListener("DOMContentLoaded", () => {
    console.log("yooooo");
});

// const boxes = document.querySelectorAll(".box");
// let b = 0;

// boxes.forEach(element => {
//     element.addEventListener('click', (e) => {
//         b++;
//         if (b % 2 == 0) {
//             e.target.style.transform = "scale(0.7)";
//             b == 0;
//         }
//         else
//             e.target.style.transform = "scale(1)";
//     })
// });

// document.body.onclick = () => {
//     console.log("Click !");
// }

// document.body.addEventListener("click", () => {
//     console.log("Click 2 !");
// }, false);

// document.body.addEventListener("click", () => {
//     console.log("Click 3 !");
// }, true);

// questionContainer.addEventListener('click', (e) => {
//     console.log("yaaaaa");
//     e.stopPropagation();
// })

console.log(window.innerWidth);
console.log(window.scrollY);

// window.open('http://google.com', "cours js", "height=300", "width=400");
// window.close();

btn2.addEventListener("click", () => {
    confirm("Voulez-vous vous tromper ?");
});

btn1.addEventListener("click", () => {
    let answer = prompt("Entrez votre nom !");

    questionContainer.innerHTML += `
    <h3>Bravo ${answer} </h3>
    `
});

setTimeout(
    () => {
        questionContainer.style.borderRadius = "0px";
    }, 2000
)

// let interval = setInterval(
//     () => {
//         document.body.innerHTML += "<div class='box'><h2>Nouvelle boite !</h2></div>"
//     }, 1000
// );

// document.body.addEventListener("click", () => {
//     clearInterval(interval);
// });

// setTimeout(
//     () => {
//         clearInterval(interval);
//     }, 5000
// );

console.log(location.href);
console.log(location.host);
console.log(location.pathname);
console.log(location.search);

console.log(navigator.userAgent);

function fun(pos) {
    var crd = pos.coords;
    console.log(crd.latitude);
}

// navigator.geolocation.getCurrentPosition(fun);

console.log(history);
// window.history.back();
// history.go(-2);

window.addEventListener("mousemove", (e) => {
    nav.style.setProperty('--x', e.layerX + "px");
    nav.style.setProperty('--y', e.layerY + "px");
});