import React from 'react';
import './FavouritesInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const FavouritesInfo = ({favourite, removeHandler}) => {
  return (
    <div className='favourites-info'>
      <p className='favourites-info-text'>{favourite.strMeal}</p>  
      <button onClick={() => removeHandler(favourite)} className="btn btn-remove"><FontAwesomeIcon icon={faRemove} /></button>
    </div> 
  );
};

export default FavouritesInfo;