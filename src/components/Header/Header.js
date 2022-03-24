import React, { useState } from 'react';
import './Header.css';

const Header = ({searchHandler}) => {
  const [searchedInput, setSearchedInput] = useState('');

  const searchInputHandler = (e) => {
    const keyValue = e.target.value;
    setSearchedInput(keyValue);
  }

  return (
    <div className='header'>
      <input onChange={searchInputHandler} type="text" placeholder='Search food' />
      <button onClick={() => searchHandler(searchedInput)} className="btn btn-search">Search</button>
    </div>
  );
};

export default Header;