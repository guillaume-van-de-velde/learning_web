import React from 'react';

const Meal = ({meal}) => {
    const listProduct = [];
    
    function getListProduct() {
        for (let i = 1; i <= 20; i++)
        {
            let ingredient = `strIngredient${i}`;
            let measure = `strMeasure${i}`;

            ingredient = meal[ingredient];
            measure = meal[measure];

            if (!ingredient)
                break ;

            listProduct.push([`${ingredient} - ${measure}`]);
        }
    }

    getListProduct();

    return (
        <li className="meal">
            <div className="title">
                <h2>{meal.strMeal}</h2>
                <h3>{meal.strArea}</h3>
                <img src={meal.strMealThumb} alt="" />
            </div>
            <ul className="ingredients">
                {listProduct &&
                listProduct.map((product, index) => {
                    return (
                        <li key={index}>{product}</li>
                    );
                })}
            </ul>
            <div className="preparation">
                <p>
                    {meal.strInstructions && 
                    meal.strInstructions
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