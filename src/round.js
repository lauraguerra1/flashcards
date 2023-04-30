const evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer) {
    return 'correct!';
  } 
  return 'incorrect!'
}

const createRound = (deck) => { 
  const round = {
    deck: deck.cards,
    get currentCard() {
      return this.deck[this.turn];
    },
    turn: 0,
    incorrectGuesses:[]
  }
  return round;
}

module.exports = {
  evaluateGuess, 
  createRound,
}