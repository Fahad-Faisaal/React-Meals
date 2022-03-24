import React, { useEffect, useState } from 'react';
import './Meals.css';

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json())
    .then(data => setMeals(prevState => [...prevState, ...data.meals]));
  }, []);

  return (
    <div>
      <h1>{meals.length}</h1>
    </div>
  );
};

export default Meals;