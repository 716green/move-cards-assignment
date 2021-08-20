import React, { useState } from 'react';

import Card from './UIElements/Card';
import './Workspace.css';

const Workspace = (props) => {
  const [cardBGColor, setCardBGColor] = useState('white');
  const [flashingArray, setFlashingArray] = useState([]);
  const { cards, setCards } = props;

  const flashCards = (...indexes) => {
    setCardBGColor('lightgray');
    setTimeout(() => {
      setCardBGColor('white');
    }, 500);
    setFlashingArray([...indexes]);
  };

  const deleteCard = (index) => {
    const cardArr = [...cards];
    cardArr.splice(index, 1);
    setCards(cardArr);
  };

  const moveCardLeft = (index) => {
    let cardArr = [...cards];
    const currentCard = cardArr[index];
    const leftCard = cardArr[index - 1];
    cardArr[index - 1] = currentCard;
    cardArr[index] = leftCard;
    setCards(cardArr);
  };

  const moveCardRight = (index) => {
    let cardArr = [...cards];
    const currentCard = cardArr[index];
    const rightCard = cardArr[index + 1];
    cardArr[index + 1] = currentCard;
    cardArr[index] = rightCard;
    setCards(cardArr);
  };

  return (
    <section className="workspace">
      {cards?.length > 0 &&
        cards.map((card, i) => {
          return (
            <Card
              key={i}
              cardIndex={i}
              name={card.name}
              deleteCard={deleteCard}
              moveCardLeft={moveCardLeft}
              moveCardRight={moveCardRight}
              allCards={cards}
              cardBGColor={flashingArray.includes(i) ? cardBGColor : 'white'}
              flashCards={flashCards}
            />
          );
        })}
    </section>
  );
};

export default Workspace;
