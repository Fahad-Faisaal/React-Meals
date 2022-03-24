import React from 'react';
import FavouritesInfo from '../FavouritesInfo/FavouritesInfo';
import'./Favourites.css';


const Favourites = ({favourite, removeHandler}) => {
  return (
    <div className='favourites'>
      <div className="favourite">
        <h1 className='favourites-title text-center'>Favourites</h1>
        {
         favourite.map(el => <FavouritesInfo 
          key={el.idMeal}
          favourite={el} 
          removeHandler={removeHandler}
          />) 
        }
      </div>
    </div>
  );
};

export default Favourites;