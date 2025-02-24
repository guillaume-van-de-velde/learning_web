var num = 5;
var num2: number;
var numOrString: number | string;

var arr = ['chien', 'chat', 'poisson'];

var tableau1: string[] = [];
var tableau: (number | boolean)[] = [];
var tab2: [number, string] = [5, "yes"];

tableau.push(false);
tableau.push(24);

interface Player {
    id: number,
    name: string,
    jersey?: number
}

var zidane:Player = {
    id: 0,
    name: "Zidane",
};

class Singer {
    id: number;
    name: string;
    alive?: boolean;

    constructor(id: number, name: string, alive?: boolean) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}

const prince = new Singer(0, 'Prince');

const sayMyName = (name?) => {
    // console.log(`Bonjour ${name}`);
}

sayMyName("Bastien");

const ageDuCapitain = (age : number | string, size?:number):string => {
    // if (size)
    //     console.log(`La taille du capitaine est de ${size}cm et il est age de ${age}ans`);
    // else
    //     console.log(`Le capitain est age de ${age}`);
    return "yes";
}

ageDuCapitain(32);
ageDuCapitain(32, 175);

enum Role {ADMIN, PREMIUM, BASIC}

interface User {
    name: string;
    attribute: [number | boolean, string];
    role: Role;
}

const user1:User = {
    name: "Julien",
    attribute: [78, 'author'],
    role: Role.ADMIN
}

// console.log(user1.role);
