import React, { useState } from 'react';
import './Main.css'
import Favourites from '../Favourites/Favourites';
import Meals from '../Meals/Meals';

const Main = () => {
  const [favourite, setFavourite] = useState([]);

  const addToFavHandler = meal => {
    const newFavourite = [...favourite, meal];
    setFavourite(newFavourite);
  }

  return (
    <div className='main'>
      <Meals addToFavHandler={addToFavHandler} />
      <Favourites favourite={favourite} />
    </div>
  );
};

export default Main;