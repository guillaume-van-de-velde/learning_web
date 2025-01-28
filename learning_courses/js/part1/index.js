// alert("Salut JS");
let Variable = "Hello";
let v2="im js";
console.log(v2);
v2 += 89;
let nouvelleChaine = Variable + ' ' + v2;
let autreNouvelleChaine = `Nouvelle chaine : ${nouvelleChaine}. Voila.`;
console.log(autreNouvelleChaine);
console.log(v2);
console.log(nouvelleChaine);
const prenom = "juju";
console.log(Variable);
console.log(prenom);

let array = ["je", "suis", 42, true];

let object = {
    prenom: "martin",
    age: 21,
    ville: "paris"
}

console.log(6 + 5);
console.log(6 - 5);
console.log(6 * 5);
console.log(6 / 5);
console.log(6 ** 5);

let total = 0;

total += 5;

total *= 2;

console.log(++total);

let x = 7;
let y ="2";

// if (x > y) {
//     alert ("YES x plus gros que y");
// } else if (y > x) {
//     alert ("Y plus grand !");
// } else {
//     alert("Egaux");
// }

if (x) {
    console.log("x est different de 0");
}

if (x == y) {
    console.log("ils sont egaux en contenu");
}

if (x === y) {
    console.log("ils sont egaux en type et en contenu");
}

if (x < y || x > 6) {
    console.log("oui ||");
}

if (x > y && x > 6) {
    console.log("oui &&");
}

function FaireQQChose() {
    console.log("Je suis dans la fonction");
    console.log(11 + 3);
    console.log("calcule termine !");
}

FaireQQChose();

const addition = (a, b) => {
    console.log(a + b);   
}

addition(1 + 9, 8);

let num = 4;

function add2() {
    return num + 2;
}

console.log(num);
