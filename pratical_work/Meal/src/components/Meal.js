import React from 'react';

const Meal = (meal) => {
    const listProduct = [];
    
    function getListProduct() {
        for (let i = 1; i <= 20; i++)
        {
            let ingredient = `strIngredient${i}`;
            let measure = `strMeasure${i}`;

            ingredient = meal.meal[ingredient];
            measure = meal.meal[measure];

            if (!ingredient)
                break ;

            listProduct.push([`${ingredient} - ${measure}`]);
        }
    }

    getListProduct();

    return (
        <li className="meal">
            <div className="title">
                <h2>{meal.meal.strMeal}</h2>
                <h3>{meal.meal.strArea}</h3>
                <img src={meal.meal.strMealThumb} alt="" />
            </div>
            <ul className="ingredients">
                {listProduct.map((product, index) => {
                    return (
                        <li key={index}>{product}</li>
                    );
                })}
            </ul>
            <div className="preparation">
                <p>
                    {meal.meal.strInstructions
                    .split('\n')
                    .map((line, index) => {
                        return (<React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>);
                    })}
                </p>
            </div>
        </li>
    );
};

export default Meal;