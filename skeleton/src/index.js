const View = require("./ttt-view")// require appropriate file
const Game = require("../ttt_node/game")// require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  let game = new Game();
  let view = new View(game);
  let body = document.querySelector('body')
  view.setupBoard.apply(body);
  let gameView = document.querySelector("ul");

  gameView.addEventListener("click", view.handleClick.bind(view));


});
