const chai = require('chai');
const assert = chai.assert;

const { createCard } = require('../src/card');
const {createDeck} = require('../src/deck')
const { evaluateGuess, createRound} = require('../src/round');
const sample = require('../src/sample-data');


describe('round', function() {
  beforeEach(function () {
    this.card1 = createCard(sample.ids[0], sample.questions[0], sample.answers[0], sample.correctAnswers[0]);
    this.card2 = createCard(sample.ids[1], sample.questions[1], sample.answers[1], sample.correctAnswers[1]);
    this.card3 = createCard(sample.ids[2], sample.questions[2], sample.answers[2], sample.correctAnswers[2]);
    this.deck = createDeck([this.card1, this.card2, this.card3]);
    this.round = createRound(this.deck);
  }) 
  it('should be a function', function () {
    assert.isFunction(evaluateGuess);
    assert.isFunction(createRound);
  })
  it('should find correct and incorrect guesses', function () {
    const correctGuess = evaluateGuess('object', this.card1.correctAnswer);
    const incorrectGuess = evaluateGuess('array', this.card1.correctAnswer);
  
    assert.deepEqual(correctGuess, 'correct!');
    assert.deepEqual(incorrectGuess, 'incorrect!')
  })
  it('should have a deck of cards', function () {
  assert.deepEqual(this.round.deck, [this.card1, this.card2, this.card3])
  })
  it('should start at turn 0 with the first card in the deck', function() {
    assert.equal(this.round.turns, 0)
    assert.equal(this.round.currentCard, this.card1)
  })
  it('should start with an empty list of incorrect guesses ', function() {
    assert.deepEqual(this.round.incorrectGuesses, [])
  })
})

