const chai = require('chai');
const expect = chai.expect;

const { createCard, createDeck, countCards } = require('../src/card');
const { prototypeData } = require("../src/data")

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('deck', function() {
  it('should be a function', function() {
    expect(createDeck).to.be.a('function');
  })
  it('should create a deck of cards', function () {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, 'What is Laura\'s Golden Retriever\'s name?', ['Jackson', 'Bruce', 'Ducky'], 'Jackson');
    const deck = createDeck([card1, card2]);
    expect(deck[0]).to.deep.equal(card1);
    expect(deck[1]).to.deep.equal(card2);
    expect(deck).to.deep.equal({0: card1, 1: card2})
  })
  it('should be able to use prototype data to make a new deck', function() {
    const deck = createDeck(prototypeData);
    expect(deck[0]).to.deep.equal(prototypeData[0]);
  } )
  it('should know how many cards are in the deck', function() {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(2, 'What is Laura\'s Golden Retriever\'s name?', ['Jackson', 'Bruce', 'Ducky'], 'Jackson');
    const deck1 = createDeck([card1, card2]);
    const deck2 = createDeck(prototypeData);
    const cardCount1 = countCards(deck1);
    const cardCount2 = countCards(deck2);
    expect(cardCount1).to.deep.equal(2);
    expect(cardCount2).to.deep.equal(30);
  })
})