import Card from './UIElements/Card';
import './Workspace.css';

const Workspace = (props) => {
  const { cards, setCards } = props;

  const deleteCard = (index) => {
    const cardArr = [...cards];
    cardArr.splice(index, 1);
    setCards(cardArr);
  };

  const moveCardLeft = (index) => {
    if (index !== 0) {
      console.log('Move me Left');
      let cardArr = [...cards];
      const currentCard = cardArr[index];
      const leftCard = cardArr[index - 1];
      cardArr[index - 1] = currentCard;
      cardArr[index] = leftCard;
      setCards(cardArr);
    } else {
      alert("Can't move left");
    }
  };

  const moveCardRight = (index) => {
    console.log('Move me Right');
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
            />
          );
        })}
    </section>
  );
};

export default Workspace;
