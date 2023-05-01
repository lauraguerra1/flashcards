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

const calculatePercentCorrect = (round) => {
  const percentCorrect = Math.floor(100 - ((round.incorrectGuesses.length/round.turns) * 100));
  return percentCorrect;
}

const endRound = (round) => {
  const percentCorrect = calculatePercentCorrect(round);
  const announcement = `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`;
  console.log(announcement);
  return announcement;
}

module.exports = {
  evaluateGuess, 
  createRound,
  takeTurn,
  calculatePercentCorrect, 
  endRound
}