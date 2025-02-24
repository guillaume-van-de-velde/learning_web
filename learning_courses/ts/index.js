var num = 5;
var num2;
var numOrString;
var arr = ['chien', 'chat', 'poisson'];
var tableau1 = [];
var tableau = [];
var tab2 = [5, "yes"];
tableau.push(false);
tableau.push(24);
var zidane = {
    id: 0,
    name: "Zidane",
};
var Singer = /** @class */ (function () {
    function Singer(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
    return Singer;
}());
var prince = new Singer(0, 'Prince');
var sayMyName = function (name) {
    // console.log(`Bonjour ${name}`);
};
sayMyName("Bastien");
var ageDuCapitain = function (age, size) {
    // if (size)
    //     console.log(`La taille du capitaine est de ${size}cm et il est age de ${age}ans`);
    // else
    //     console.log(`Le capitain est age de ${age}`);
    return "yes";
};
ageDuCapitain(32);
ageDuCapitain(32, 175);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIUM"] = 1] = "PREMIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
var user1 = {
    name: "Julien",
    attribute: [78, 'author'],
    role: Role.ADMIN
};
// console.log(user1.role);
