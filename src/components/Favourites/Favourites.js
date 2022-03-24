import React from 'react';
import FavouritesInfo from '../FavouritesInfo/FavouritesInfo';
import'./Favourites.css';


const Favourites = () => {
  return (
    <div className='favourites'>
      <h1 className='favourites-title text-center'>Favourites</h1>
      <FavouritesInfo />
    </div>
  );
};

export default Favourites;