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
      return this.deck[this.turns];
    },
    turns: 0,
    incorrectGuesses:[]
  }
  return round;
}

  const takeTurn = (guess, round) => {
    const feedback = evaluateGuess(guess, round.currentCard.correctAnswer)
    if(feedback === 'incorrect!'){
      round.incorrectGuesses.push(guess);
    }
    round.turns += 1; 
    return feedback; 
  }


module.exports = {
  evaluateGuess, 
  createRound,
  takeTurn
}