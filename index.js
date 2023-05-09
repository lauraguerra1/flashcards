// This is where your project starts.
const fetch = require('node-fetch');
const { createCard, createDeck } = require("./src/card");
const { createRound } = require("./src/round");
const { prototypeData } = require("./src/data");
const { printQuestion, printMessage } = require("./src/game");
console.log('Your project is running...'); 

const start = (data) => {
  const cards = data.map((card) => createCard(card.id, card.question, card.answers, card.correctAnswer)); 
  const deck = createDeck(cards);
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
}
// start(prototypeData);


fetch("https://opentdb.com/api.php?amount=30&category=26")
  .then(response => response.json())
  .then(data => {
    const cards = data.results.map((trivia, i) => createCard(i, trivia.question, [...trivia.incorrect_answers, trivia.correct_answer].sort(), trivia.correct_answer))
    start(cards);
  })


