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
  createDeck, 
  countCards
}