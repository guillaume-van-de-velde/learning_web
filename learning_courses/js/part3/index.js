let string = "Chaine";
let number = 56;
let boleen = true;
let maVariable;

// console.log(typeof maVariable);


let array = ["Bordeaux", "toulouse", "nantes"];

// console.log(array[1][5]);
// console.log(typeof array);


let array2 = ["Bordeaux", 24, true, [1, 2], {nom: "Denis"}];

// console.log(typeof array2);
// console.log(array2[3][1]);

let object = {
    Pseudo: "PHXNK",
    Age: 21,
    Techno: ["C", "C++", "HTML", "CSS", "Javascript", "Reactjs", "Nodejs"],
    Admin: false
};

// object.Addresse = "22 rue du code";

// console.log(object);


let data = [
    {
        Pseudo: "PHXNK",
        Age: 21,
        Techno: ["C", "C++", "HTML", "CSS", "Javascript", "Reactjs", "Nodejs"],
        Admin: false
    },
    {
        Pseudo: "DRILL",
        Age: 20,
        Techno: ["C", "C++"],
        Admin: true
    },
    {
        Pseudo: "JAGABAN",
        Age: 20,
        Techno: ["HTML", "CSS"],
        Admin: false
    }
];

// console.log(data[1].Techno[1]);

if (data[0].Age > data[2].Age) {
    // console.log(data[0].Pseudo + " est plus age que " + data[2].Pseudo);
}


let w = 0;

while (w < 10) {
    // console.log("w: " + w);
    w++;
}


let i = 0;

do {
    i++;
    // console.log("i: " + i);
} while (i < 5);

for (const user of data) {
    // document.body.innerHTML += `
    // <li>Pseudo: ${user.Pseudo} ---- Age: ${user.Age}ans</li>
    // `;
}

// console.log(data.length);

for (let i = 0; i < data.length; i++) {
    // document.body.innerHTML += `
    // <li>Pseudo: ${data[i].Pseudo} ---- Techno: ${data[i].Techno.join(" / ")}</li>
    // `;
}

document.addEventListener("click", (e) => {
    switch (e.target.id) {
        case "c":
            document.body.style.background = "blue";
            break;
        case "c++":
            document.body.style.background = "skyblue";
            break;
        case "html":
            document.body.style.background = "orange";
            break;
        default : document.body.style.background = "white";
    }
})

let string2 = "Javascript est un langage oriente objet";

// console.log(eval(parseInt("1") + 2));
// console.log(isNaN("-48"));
// console.log(string2.length);
// console.log(string2[string2.length - 1]);
// console.log(string2.indexOf("langage"));

// let newString = string2.slice(5, 17);

// console.log(newString);

// console.log(string2.split(" "));

// console.log(string2.toUpperCase());
// console.log(string2.toLowerCase());

// console.log(string2.replace("Javascript", "PHP"));

let number2 = 42.1234;
let numberString = "42.12 est un chiffre"

// console.log(number2.toFixed(1));
// console.log(parseInt("43"));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// console.log(Math.PI);
// console.log(Math.round(4.5));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.pow(4, 2));
// console.log(Math.sqrt(81));
// console.log(Math.floor(Math.random() * 100));

let array3 = ["Javascript", "Php", "Python"]
let array4 = ["Ruby", "Solidity"]

let newArray = array3.concat(array4);
// console.log(newArray);

// let newArray = [...array3, ...array4];
// console.log(newArray);

// console.log(array3.join("&&&"));

// console.log(array3.slice(1));
// console.log(newArray.slice(1, 3));

// console.log(array3.indexOf("Python"));

// array3.forEach((languages) => console.log(languages));

// console.log(array3.every((language) => language === "Php"));
// console.log(array3.some((language) => language == "Php"));

// let shift = array3.shift();
// console.log(shift);
// console.log(array3);

// console.log(array3.pop());
// console.log(array3);

// const restArray = array3.splice(0, 2, ...array4);
// console.log(restArray);
// console.log(array3);

let arrayNumber = [4, 74, 28, 12, 1, "cc", 9, 8];

// console.log(arrayNumber.reduce((x, y) => x + y));

arrayNumber.push(17);

// console.log(arrayNumber);


// console.log(arrayNumber.filter((numbe) => numbe > 10));

// console.log(arrayNumber.sort());

// console.log(arrayNumber.sort((a, b) => b - a));

// console.log(arrayNumber.filter((numbe) => numbe > 10).sort((a, b) => b - a));

document.body.innerHTML += arrayNumber
    .map((number) =>`<li>${number}</li>`)
    .join("");

document.body.innerHTML += data
    // .filter((user) => user.Admin === false)
    // .filter((user) => user.Pseudo
    //     .includes("JA"))
    .sort((a, b) => a.Age - b.Age)
    .map((user) => `
        <div class="user-card">
            <h2>${user.Pseudo}</h2>
            <p>Age : ${user.Age}</p>
            <p>Status : ${user.Admin ? "Moderateur" : "membre"}</p>
        </div>
    `)
    .join("");


let date = new Date();

// console.log(date);

let timestamp = Date.parse(date);
// console.log(timestamp);

let iso = date.toISOString();
// console.log(iso);

function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    });
    return newDate;
}

// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));

let moreData = {
    destVar: ["Element 1", "Element 2"],
};

const { destVar } = moreData;

// console.log(moreData.destVar);
// console.log(destVar);

let array5 = [70, 80, 90];

let [x, y, z] = array5;

// console.log(x);
// console.log(y);
// console.log(z);

// console.log(iso);
const dateDestructuring = (chaine) => {
    [y, m, d] = chaine.split('T')[0].split("-");
    return [d, m, y].join("/");
}

// console.log(dateDestructuring(iso));

const h3js = document.getElementById('html');
// console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll('h3');

// h3.forEach((language) => {
//     console.log(language.dataset.lang);
// })

let mail = "phxnk_music@gmail.com";
// console.log(mail.search(/phxnk/));

// console.log(mail.replace(/phxnk/, "drill"));

// console.log(mail.match(/_music/i));

// console.log(mail.match(/[ziup]/));

// console.log(mail.match(/[123]/));

// console.log(mail.match(/\d/));

// console.log(mail.match(/[q-z]/));

// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

let separator = 2532365423;

console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
