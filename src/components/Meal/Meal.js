import React from 'react';
import './Meal.css';

const Meal = ({meal}) => {
  const {strMealThumb, strMeal, strArea, strCategory} = meal
  return (
    <div className='meal'>
      <img src={strMealThumb} alt="" />
      <h2 className='meal-title text-center'>{strMeal}</h2>
      <div className='meal-info'>
        <p className='meal-text'>Cuisine: {strArea}</p>
        <p className='meal-text'>Catagory: {strCategory}</p>
      </div>
      <div className='meal-btn-container'>
        <button className='btn btn-add'>Add To Favourites</button>
      </div>
    </div>
  );  
};

export default Meal;