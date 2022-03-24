import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  const [mealName, setMealName] = useState('');

  const searchHandler = key => {
    setMealName(key);
  };

  return (
    <div className="App">
      <Header searchHandler={searchHandler} />
      <Main mealName={mealName} />
    </div>
  )
}

export default App;
