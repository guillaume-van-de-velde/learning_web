let countries = [];
let sortMethod = 2;
const countriesContainer = document.querySelector('.countries-container');
const btnSort = document.querySelectorAll('.btnSort');

function fetchCountries() {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
            countries = data;
            displayCountry();
        });
}

window.addEventListener("load", () => {
    fetchCountries();
});

function displayCountry() {
    let dupCountries = Array.from(countries);
    countriesContainer.innerHTML = dupCountries
    .sort((a, b) => {
        if (sortMethod == "minToMax")
            return a.population - b.population;
        else if (sortMethod == "maxToMin")
            return b.population - a.population;
        else
            return a.name.common.localeCompare(b.name.common);
    })
    .filter(country => {
        return country.name.common.toLowerCase().match(inputSearch.value.toLowerCase());
    })
    .map((country, index) => {
        if (index < inputRange.value)
        {
            return `
            <div class="country">
                <img src="${country.flags.svg}"></img>
                <h3>${country.name.common}</h3>
                <p>${country.capital && country.capital[0] ? country.capital[0] : ""}</p>
                <p>Population: ${country.population.toLocaleString().replaceAll(',', ' ')}</p>
            </div>
            `;
        }
    }).join("");
}

inputSearch.addEventListener("input", () => {
    displayCountry();
});

btnSort.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        sortMethod = e.target.id;
        displayCountry();
    });
})

inputRange.addEventListener("input", () => {
    rangeValue.textContent = inputRange.value;
    displayCountry();
});