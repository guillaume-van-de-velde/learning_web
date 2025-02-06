const obj = {
    pseudo: "PHXNK",
    ville: "Paris",

    direBonjour: function () {
        console.log("Bonjour je suis " + this.pseudo);
    }
    // direBonjour() {
    //     console.log("Bonjour je suis " + this.pseudo);
    // }
}

// console.log(typeof obj);

// let array = [1, 2, 3];

// console.log(typeof array);

// console.log(document.body);


// console.log(typeof document.body);

// console.log(typeof null);

obj.age = 21;
obj["admin"] = true;

// console.log(obj);

// obj.pseudo = "PHNK";
// delete obj.ville;

// console.log(obj);

// console.log("pseudo" in obj);

// for (const key in obj) {
//     console.log(key + " : " + obj[key]);
// }

// obj.direBonjour();

const keys = Object.keys(obj);

// console.log(keys);

const values = Object.values(obj);

// console.log(values);

const nestedArray = Object.entries(obj);

// console.log(nestedArray);

const obj2 = {
    taille: "1m80",
    poids: "75kg"
}

const fusion = {truc: "test"};
Object.assign(fusion, obj, obj2);

// console.log(fusion);

// const newObj = Object.freeze(obj);
// const newObj = Object.seal(obj);

// newObj.pseudo = "Test";

// newObj.adresse = "42 avenue du code";

// console.log(newObj);

function User(pseudo, ville)
{
    this.pseudo = pseudo;
    this.ville = ville;
    this.getCity = function() {
        console.log(this.pseudo + "habite a " + this.ville);
    }
}

const user1 = new User('PHHHXNK', 'PAAARIIS');

// console.log(user1);

// user1.getCity();

function User3(pseudo, ville) {
    return (
        pseudo,
        ville
    );
}

// const user4 = User3('PK', 'nice');


class Utilisateur {
    constructor(pseudo, ville) {
        this.pseudo = pseudo;
        this.ville = ville;
    }
    sayMyName = function () {
        console.log("Bonjour je suis " + this.pseudo);
    }
}

const user5 = new Utilisateur("PN", "Lyon");

Utilisateur.prototype.sayCity = function () {
    console.log("j'habite a " + this.ville + " yes !");
    
}

// console.log(user5);

// user5.sayCity();

let array = [1, 2, 3];

// console.log(array.filter);

Object.assign(Utilisateur.prototype, {
    method1() {},
    method2() {}
})

// console.log(user5);

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    saySomething (text) {
        console.log(this.name + " dit : " + text);
    }
}

class Dog extends Animal {
    run() {
        console.log("Le chien court !");
    }
}

class Cat extends Animal {
    hunt () {
        console.log("j'ai tuer un oiseau");
    }
}

const rintintin = new Dog("Rintintin", 9);

// console.log(rintintin);
