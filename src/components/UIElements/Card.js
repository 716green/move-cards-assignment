import './Card.css';

const Card = (props) => {
  const {
    name,
    deleteCard,
    cardIndex,
    moveCardLeft,
    moveCardRight,
    allCards,
    cardBGColor,
    flashCards,
  } = props;

  const deleteCardHandler = () => {
    deleteCard(cardIndex);
  };

  const moveLeftHandler = () => {
    moveCardLeft(cardIndex);
    flashCards(cardIndex, cardIndex - 1);
  };

  const moveRightHandler = () => {
    moveCardRight(cardIndex);
    flashCards(cardIndex, cardIndex + 1);
  };

  return (
    <div className="card" style={{ backgroundColor: cardBGColor }}>
      <h2>{name}</h2>
      <div className="actions">
        <div>
          {cardIndex > 0 && <button onClick={moveLeftHandler}>⬅️</button>}
        </div>
        <div>
          <button onClick={deleteCardHandler}>🗑</button>
        </div>
        <div>
          {cardIndex < allCards?.length - 1 && (
            <button onClick={moveRightHandler}>➡️</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
