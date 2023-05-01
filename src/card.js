const createCard = (id, question, answers, correctAnswer) => {
  return {
    id,
    question,
    answers,
    correctAnswer
  };
};

const createDeck = (data) => {
  return {
    cards: data
  }
};

const countCards = (deck) => {
  const cardCount = deck.cards.length;
  return cardCount;
}

module.exports = {
  createCard,
  createDeck,
  countCards
};
