const createRound = (deck) => { 
  const round = {
    deck: deck.cards,
    get currentCard() {
      return this.deck[this.turns];
    },
    turns: 0,
    incorrectGuesses:[]
  }
  return round;
}

module.exports = {
  createRound,
}