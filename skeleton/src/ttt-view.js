const Game = require("../ttt_node/game");

class View {
  constructor(game, el) {
    this.game = game;
  }

  setupBoard() {
    let grid = document.createElement('ul');
    grid.style.width = "300px";
    grid.style.display = 'flex';
    grid.style.flexWrap = 'wrap';
    grid.style.listStyle = 'none';
    for(let i = 0; i < 9; i++){
      grid.appendChild(document.createElement('li'));
    }
    let lists = grid.children;
    
    console.log(lists);
    for(let i = 0; i < lists.length; i++) {
      lists[i].id = `${i}`
      lists[i].style.width = "90px";
      lists[i].style.height = "90px";
      lists[i].setAttribute("class", "unplayed")
      // lists[i].style.backgroundColor = "lightGrey";
      // lists[i].innerText = "TTT";
      lists[i].style.margin = "2px";
    }
  
    // let test = document.createElement('p');
    // test.innerText = "something";
    // let test2 = document.createElement('a');
    this.appendChild(grid);

  }
  
  bindEvents() {}

  handleClick(e) {
    // console.log(this);
    e.stopPropagation();
    let square = e.target;
    console.log(e.target.id);
    square.setAttribute("class", "played")
    if (square.id){
      this.makeMove(square);
    }
    

  }

  makeMove(square) {
    const pos = {
      0: [0,0],
      1: [0,1],
      2: [0,2],
      3: [1,0],
      4: [1,1],
      5: [1,2],
      6: [2,0],
      7: [2,1],
      8: [2,2], 
    }
    console.log(square);
    let mark = document.createElement('p');;
    mark.innerText = `${this.game.currentPlayer}`;
    square.appendChild(mark); 
    this.game.playMove(pos[square.id]);
  }

}

module.exports = View;
