const chai = require('chai');
const assert = chai.assert;

const { 
  createCard, 
  createDeck 
} = require('../src/card');

const { 
  takeTurn, 
  endRound, 
  evaluateGuess, 
  createRound 
} = require('../src/round');
const { prototypeData } = require('../src/data');

describe('evaluateGuess', function () {
  it('should be a function', function () {
    assert.isFunction(evaluateGuess);
  });
  it('should find correct and incorrect guesses', function () {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const correctGuess = evaluateGuess('object', card.correctAnswer);
    const incorrectGuess = evaluateGuess('array', card.correctAnswer);

    assert.deepEqual(correctGuess, 'correct!');
    assert.deepEqual(incorrectGuess, 'incorrect!')
  });
})

describe('round', function() {
  it('should be a function', function () {
    assert.isFunction(createRound);
  })
  it('should have a deck of cards', function () {
    const deck = createDeck(prototypeData);
    const round = createRound(deck)

    assert.equal(round.deck, prototypeData)
  })
  it('should start at turn 0 with the first card in the deck', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, 'What is Laura\'s Golden Retriever\'s name?', ['Jackson', 'Bruce', 'Ducky'], 'Jackson');
    const deck = createDeck([card1, card2]);
    const round = createRound(deck)
    assert.equal(round.turns, 0)
    assert.equal(round.currentCard, deck.cards[0])
  })
  it('should start with an empty list of incorrect guesses ', function() {
    const deck = createDeck(prototypeData);
    const round = createRound(deck);
    assert.deepEqual(round.incorrectGuesses, [])
  })
});

describe('turn', function() {
  it('should be a function', function() {
    assert.isFunction(takeTurn);
  })
  it('should increment the round\'s turns and evaluate the guess', function () {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, 'What is Laura\'s Golden Retriever\'s name?', ['Jackson', 'Bruce', 'Ducky'], 'Jackson');
    const deck = createDeck([card1, card2]);
    const round = createRound(deck);
    assert.equal(round.turns, 0);

    const feedback1 = takeTurn('object', round);
    assert.equal(feedback1, 'correct!')
    assert.equal(round.turns, 1);

    const feedback2 = takeTurn('Bruce', round);
    assert.equal(feedback2, 'incorrect!')
    assert.equal(round.turns, 2);
  })
  it('should only keep track of incorrect guesses', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, 'What is Laura\'s Golden Retriever\'s name?', ['Jackson', 'Bruce', 'Ducky'], 'Jackson');
    const deck = createDeck([card1, card2]);
    const round = createRound(deck);
    assert.equal(round.turns, 0);
    assert.deepEqual(round.incorrectGuesses, [])

    takeTurn('object', round);
    assert.deepEqual(round.incorrectGuesses, []);

    takeTurn('Bruce', round);
    assert.deepEqual(round.incorrectGuesses, ['Bruce']);
  })
});

