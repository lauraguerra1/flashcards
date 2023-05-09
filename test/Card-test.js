const chai = require('chai');
const assert = chai.assert;

const { createCard }  = require('../src/card');
const sample = require('../src/sample-data');

describe('card', function() {
  it('should be a function', function() {
    assert.isFunction(createCard);
  });

  it('should create a card and its properties', function() {
    const card = createCard(sample.ids[0], sample.questions[0], sample.answers[0], sample.correctAnswers[0]);
    
    assert.equal(card.id, 1);
    assert.equal(card.question, 'What allows you to define a set of related information using key-value pairs?');
    assert.deepEqual(card.answers, ['object', 'array', 'function'])
    assert.equal(card.correctAnswer, 'object')
  });  
});