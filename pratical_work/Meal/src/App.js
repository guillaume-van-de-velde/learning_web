import React, { use, useEffect, useState } from 'react';
import Meal from './components/Meal';
import axios from "axios";

const App = () => {
  const [meals, setMeals] = useState([]);

  async function getMeals(userInput) {
    await axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + userInput)
    .then(res => setMeals(res));
  }

  useEffect(() => {
    getMeals("Beef");
    console.log(meals);
  }, []);

  return (
    <div className='app'>
      <h1 className='logo'>ReactMeal</h1>
      <input id='searchbar' type="text" placeholder='search' />
      <ul className="listmeals">
        <Meal />
        <Meal />
        <Meal />
        <Meal />
        <Meal />
        <Meal />
      </ul>
    </div>
  );
};

export default App;