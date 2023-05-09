const chai = require('chai');
const assert = chai.assert;

const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound } = require('../src/round');
const { evaluateGuess, takeTurn, endRound, calculatePercentCorrect} = require('../src/turn');
const sample = require('../src/sample-data');


describe('turn', function() {
  beforeEach(function () {
    this.card1 = createCard(sample.ids[0], sample.questions[0], sample.answers[0], sample.correctAnswers[0]);
    this.card2 = createCard(sample.ids[1], sample.questions[1], sample.answers[1], sample.correctAnswers[1]);
    this.card3 = createCard(sample.ids[2], sample.questions[2], sample.answers[2], sample.correctAnswers[2]);
    this.deck = createDeck([this.card1, this.card2, this.card3]);
    this.round = createRound(this.deck);
  }) 
  it('should be a function', function() {
    assert.isFunction(evaluateGuess);
    assert.isFunction(takeTurn);
    assert.isFunction(calculatePercentCorrect);
    assert.isFunction(endRound);
  })
  it('should find correct and incorrect guesses', function () {
    const correctGuess = evaluateGuess('object', this.card1.correctAnswer);
    const incorrectGuess = evaluateGuess('array', this.card1.correctAnswer);
  
    assert.deepEqual(correctGuess, 'correct!');
    assert.deepEqual(incorrectGuess, 'incorrect!');
  })
  it('should increment the round\'s turns and announce feedback for correct and incorrect guesses', function () {
    assert.equal(this.round.turns, 0);

    const feedback1 = takeTurn('object', this.round);
    assert.equal(feedback1, 'correct!')
    assert.equal(this.round.turns, 1);

    const feedback2 = takeTurn('Bruce', this.round);
    assert.equal(feedback2, 'incorrect!')
    assert.equal(this.round.turns, 2);
  })
  it('should only keep track of incorrect guesses', function() {
    assert.deepEqual(this.round.incorrectGuesses, [])
    
    takeTurn('object', this.round);
    assert.deepEqual(this.round.incorrectGuesses, []);

    takeTurn('Bruce', this.round);
    assert.deepEqual(this.round.incorrectGuesses, ['Bruce']);
  })
  it('should find the percent of correct guesses', function() {
    takeTurn('object', this.round);
    const percentCorrect1 = calculatePercentCorrect(this.round);
    assert.deepEqual(this.round.incorrectGuesses, []);
    assert.deepEqual(percentCorrect1, 100);

    takeTurn('Bruce', this.round);
    const percentCorrect2 = calculatePercentCorrect(this.round);
    assert.deepEqual(this.round.incorrectGuesses, ['Bruce']);
    assert.deepEqual(percentCorrect2, 50);

    takeTurn(3, this.round)
    const percentCorrect3 = calculatePercentCorrect(this.round);
    assert.deepEqual(this.round.incorrectGuesses, ['Bruce', 3]);
    assert.deepEqual(percentCorrect3, 33);
  })
  it('should know if no guesses are correct', function(){
    takeTurn('array', this.round)
    const percentCorrect = calculatePercentCorrect(this.round);
    assert.deepEqual(percentCorrect, 0)

  })
  it('should announce the percent correct', function() {
    takeTurn('object', this.round);
    const announcement = endRound(this.round);
    assert.deepEqual(announcement, '** Round over! ** You answered 100% of the questions correctly!')
  })
});

