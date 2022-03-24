import React from 'react';
import './Meal.css';

const Meal = ({meal}) => {
  const {strMealThumb, strMeal, strArea, strCategory} = meal
  return (
    <div className='meal'>
      <img src={strMealThumb} alt="" />
      <h2 className='text-center'>{strMeal}</h2>
    </div>
  );  
};

export default Meal;