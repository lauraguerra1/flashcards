// This is where your project starts.
const fetch = require('node-fetch');
const { createCard, createDeck } = require("./src/card");
const { createRound } = require("./src/round");
const { prototypeData } = require("./src/data");
const { printQuestion, printMessage } = require("./src/game");
console.log('Your project is running...'); 

const start = (data) => {
  const cards = data.map((card, i ) => createCard(card.id = i, card.question, [...card['incorrect_answers'], card['correct_answer']], card['correct_answer']));
  const deck = createDeck(cards);
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
}
// start();

// let celebrityQuestions;
fetch("https://opentdb.com/api.php?amount=30&category=26")
  .then(response => response.json())
  .then((data) => start(data.results));

// console.log(celebrityQuestions)