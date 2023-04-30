const createCard = (id, question, answers, correctAnswer) => {
  return {
    id,
    question,
    answers,
    correctAnswer
  };
};

const createDeck = (data) => {
  return data.reduce((acc, curr, index) => {
    acc[index] = curr;
    return acc;
  }, {});
};

const countCards = (deck) => {
  const cardCount = Object.keys(deck).length;
  return cardCount;
}

module.exports = {
  createCard,
  createDeck,
  countCards
};
