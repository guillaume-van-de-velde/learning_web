import React, { useState } from 'react';
import Meal from './components/Meal';
import axios from "axios";

const App = () => {
  const [meals, setMeals] = useState([]);

  async function getMeals(userInput) {
    await axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + userInput)
    .then(res => setMeals(res.data.meals));
  }

  return (
    <div className='app'>
      <h1 className='logo'>ReactMeal</h1>
      <input id='searchbar' type="text" placeholder='search' onChange={e => e.target.value ? getMeals(e.target.value) : ""}/>
      <ul className="listmeals">
        {meals && meals.map((meal, index) => {
          return (
            <Meal key={index} meal={meal}/>
          );
        })}
      </ul>
    </div>
  );
};

export default App;