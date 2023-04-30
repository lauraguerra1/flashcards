const chai = require('chai');
const assert = chai.assert;

const { createCard } = require('../src/card')
const { takeTurn, endRound, evaluateGuess } = require('../src/round');

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