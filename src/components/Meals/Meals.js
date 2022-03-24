import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = (props) => {
  const {mealName} = props;

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json())
    .then(data => setMeals(data.meals));
  }, []);

  useEffect(() => {
    if(mealName.length){
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
      .then(res => res.json())
      .then(data => setMeals(data.meals));
    }
  }, [mealName])

  return (
    <div className='meals'>
      {
        meals.map(meal => <Meal 
          key={meal.idMeal} 
          meal={meal}
          addToFavHandler={props.addToFavHandler}
          />)
      }
    </div>
  );
};

export default Meals;