// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays

let countries = [];

function fetchCountries() {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => countries = data);
}

function displayCountry() {
    countriesContainer = document.querySelector('.countries-container');
    
    countries.map(country => {
        countriesContainer.innerHTML += `
        <div .country>
            <img src="${country.coatOfArms.svg}"></img>
            <h3>${country.name.common}</h3>
            <p>${country.capital ? country.capital[0] : ""}<p>
            <p>Population: ${country.population}</p>
        </div>
        `;
    })
}

fetchCountries();

setTimeout(() => {
    displayCountry();
}, 1000)