async function getMealData(meal, dataRequest)
{
    let mealData;
    let ingredientsList = [];
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal.strMeal}`)
        .then(res => res.json())
        .then(data => mealData = data.meals[0]);
    ingredientsList = Object.entries(mealData);
    if (dataRequest === "country")
        return (mealData.strArea);
    else
    {
        let li = "";
        const regex = /|1[0-9]|20|[1-9]|/;
        ingredientsList = ingredientsList.filter(mealElement => (mealElement[0].match("strIngredient" + regex)
            || mealElement[0].match("strMeasure" + regex)));
        for (let i = 0; i < 20; i++)
            ingredientsList[i + 20][0] = ingredientsList[i][1];
        ingredientsList = ingredientsList.slice(-20);
        ingredientsList.map(ingredientContent => {
            if (ingredientContent[0] && ingredientContent[0] !== "")
                li += `<li>${ingredientContent[0]} - ${ingredientContent[1]}</li>`;
        });
        return (li);
    }
}

async function addMealToHTML(meals) {
    if (meals.meals == null)
        return ;
    let mealsList = meals.meals;
    mealsList.length = 12;
    mealsList.map(async meal => {
        const li = document.createElement('li');
        li.classList.add("card");
        result.appendChild(li);
        li.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <p>${await getMealData(meal, "country")}</p>
        <img src=${meal.strMealThumb}></img>
        <ul>${await getMealData(meal, "ingredients")}</ul>
        `;
    })
}

document.querySelector('form').addEventListener("submit", e => {
    e.preventDefault();
    result.textContent = "";
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchbar.value}`)
    .then(res => res.json())
    .then(data => addMealToHTML(data));
    searchbar.value = "";
})
