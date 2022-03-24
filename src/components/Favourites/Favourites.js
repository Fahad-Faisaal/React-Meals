import React from 'react';
import FavouritesInfo from '../FavouritesInfo/FavouritesInfo';
import'./Favourites.css';


const Favourites = ({favourite}) => {
  console.log(favourite);
  return (
    <div className='favourites'>
      <div className="favourite">
        <h1 className='favourites-title text-center'>Favourites</h1>
        <FavouritesInfo />
      </div>
    </div>
  );
};

export default Favourites;