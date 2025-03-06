import React from 'react';

const Meal = () => {
    return (
        <li className="meal">
            <h2>Name</h2>
            <h3>Origin: France</h3>
            <img src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg" alt="" />
            <ul className="ingredients">
                <li>Beef</li>
                <li>Beef Stock Cencentrate</li>
                <li>Tomato Puree</li>
                <li>Water</li>
                <li>Soy Sauce</li>
            </ul>
            <p>
                0.	Combine beef, crushed peppercorn, soy sauce, vinegar, dried bay leaves, lemon, and tomato sauce. Mix well. Marinate beef for at least 30 minutes.<br />
                1.	Put the marinated beef in a cooking pot along with remaining marinade. Add water. Let boil. <br />
                2.	Add Knorr Beef Cube. Stir. Cover the pot and cook for 40 minutes in low heat.<br />
                3.	Turn the beef over. Add tomato paste. Continue cooking until beef tenderizes. Set aside.<br />
                4.	Heat oil in a pan. Fry the potato until it browns. Turn over and continue frying the opposite side. Remove from the pan and place on a clean plate. Do the same with the carrots.<br />
                5.	Save 3 tablespoons of cooking oil from the pan where the potato was fried. Saute onion and garlic until onion softens.<br />
                6.	Pour-in the sauce from the beef stew. Let boil. Add the beef. Cook for 2 minutes.<br />
                7.	Add butter and let it melt. Continue cooking until the sauce reduces to half.
            </p>
        </li>
    );
};

export default Meal;