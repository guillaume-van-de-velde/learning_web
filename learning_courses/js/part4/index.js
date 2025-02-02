function reqListener() {
    // console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open('get', 'data.txt', true);
// req.open('get', "data.json", true);
req.open('get', "https://api.blablagues.net/?rub=blagues", true);
req.send();


// fetch("Mon lien")
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((err) => console.log(err));

fetch("data.txt")
    .then((res) => res.text())
    // .then((data) => console.log(data));

fetch("data.json")
    .then((res) => res.json())
    // .then((data) => console.log(data.glossary.title));

const myHeaders = new Headers();

const init = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default"
}

// fetch("data.json", init)
//     .then((res) => console.log(res));

const init2 = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    },
    // body: JSON.stringify({
    //     pseudo: "PHXNK",
    //     message: "Yo les gars !"
    // }),
    mode: "cors",
    credential: "same-origin",
};

// fetch('(npm-server)', init2).then( (res) => console.log(res));
// fetch('(npm-server)/2', init2).then( (res) => console.log(res));

async function fetchData() {
    await fetch('data.json');
    console.log("hello");
}

fetch('data.json').then(res => res.json()).then(data => {
    let settings = JSON.stringify(data);
    // console.log(data);
    // console.log(settings);
    // console.log(JSON.parse(settings));
});

// localStorage.data = "Je stock la data";

// document.body.textContent = localStorage.data;


const obj = {
    name: "phxnk",
    age: 21
}

// localStorage.user = JSON.stringify(obj);

// console.log(JSON.parse(localStorage.user));


// localStorage.removeItem('user');


// sessionStorage.dataSettings = "42";

// sessionStorage.clear();

// document.cookie = "username=Phxnk";

// document.cookie = "pseudo=PH;path=/; max-age=450000; secure; samesite"