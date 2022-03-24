import React from 'react';
import './FavouritesInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const FavouritesInfo = () => {
  return (
    <div className='favourites-info'>
      <p>Food Name</p>  
      <button className="btn btn-remove"><FontAwesomeIcon icon={faRemove} /></button>
    </div> 
  );
};

export default FavouritesInfo;