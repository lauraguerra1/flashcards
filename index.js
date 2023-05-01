// This is where your project starts.

const { createCard, createDeck } = require("./src/card");
const { createRound } = require("./src/round");
const { prototypeData } = require("./src/data");
const { printQuestion, printMessage } = require("./src/game");
console.log('Your project is running...'); 

const start = () => {
  const cards = prototypeData.map((card) => createCard(card.id, card.question, card.answers, card.correctAnswer));
  const deck = createDeck(cards);
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
}
start();