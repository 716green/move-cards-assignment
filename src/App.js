import React, { useState, useEffect } from 'react';
import Workspace from './components/Workspace';
import './App.css';

const TEMP_CARDS = [
  {
    name: 'Card Title 1',
  },
  {
    name: 'Card Title 2',
  },
  {
    name: 'Card Title 3',
  },
  {
    name: 'Card Title 4',
  },
];

const App = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    setCards(TEMP_CARDS);
  }, []);

  return (
    <div className="App">
      <Workspace cards={cards} title="My Card" setCards={setCards} />
    </div>
  );
};

export default App;
