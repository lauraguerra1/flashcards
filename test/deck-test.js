const chai = require('chai');
const assert = chai.assert;

const { createCard, createDeck, countCards} = require('../src/card');
const sample = require('../src/sample-data');

describe('deck', function() {
  beforeEach(function () {
    const card1 = createCard(sample.ids[0], sample.questions[0], sample.answers[0], sample.correctAnswers[0]);
    const card2 = createCard(sample.ids[1], sample.questions[1], sample.answers[1], sample.correctAnswers[1]);
    const card3 = createCard(sample.ids[2], sample.questions[2], sample.answers[2], sample.correctAnswers[2]);
    const deck = createDeck([card1, card2, card3]);
    it('should be a function', function() {
      assert.isFunction(createDeck);
    })
    it('should create a deck of cards', function () {
      assert.deepEqual(deck.cards, [card1, card2])
    })
    it('should know how many cards are in the deck', function() {
      const deck2 = createDeck([]);
      const cardCount = countCards(deck);
      const cardCount2 = countCards(deck2);
      
      assert.equal(cardCount, 3);
      assert.equal(cardCount2, 0);
    })
  })
})