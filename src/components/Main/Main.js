import React, { useState } from 'react';
import './Main.css'
import Favourites from '../Favourites/Favourites';
import Meals from '../Meals/Meals';

const Main = () => {
  const [favourite, setFavourite] = useState([]);

  let newFavourite;
  const addToFavHandler = meal => {
    const exist = favourite.find(fav => fav.idMeal === meal.idMeal);
    exist ? newFavourite = [...favourite] : newFavourite = [...favourite, meal];
    setFavourite(newFavourite);
  }

  const removeHandler = selectedFavourite => {
    const restFavourite = favourite.filter(fav => fav.idMeal !== selectedFavourite.idMeal);
    setFavourite(restFavourite);
  }

  return (
    <div className='main'>
      <Meals addToFavHandler={addToFavHandler} />
      <Favourites favourite={favourite} removeHandler={removeHandler} />
    </div>
  );
};

export default Main;