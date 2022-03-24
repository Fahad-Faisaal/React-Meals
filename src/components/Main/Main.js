import React from 'react';
import './Main.css'
import Favourites from '../Favourites/Favourites';
import Meals from '../Meals/Meals';

const Main = () => {
  return (
    <div className='main'>
      <Meals />
      <Favourites />
    </div>
  );
};

export default Main;