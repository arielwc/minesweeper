document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = 
{cells: [
  {row: -29, col: -29, hidden: true, isMine: false},
  {row: -28, col: -28, hidden: false, isMine: false},
  {row: -27, col: -27, hidden: false, isMine: false},
  {row: -26, col: -26, hidden: true, isMine: false},
  {row: -25, col: -25, hidden: false, isMine: false},
  {row: -24, col: -24, hidden: false, isMine: true},
  {row: -23, col: -23, hidden: false, isMine: false},
  {row: -22, col: -22, hidden: false, isMine: false},
  {row: -21, col: -21, hidden: false, isMine: true},
  {row: -20, col: -20, hidden: false, isMine: false},
  {row: -19, col: -19, hidden: true, isMine: false},
  {row: -18, col: -18, hidden: false, isMine: false},
  {row: -17, col: -17, hidden: false, isMine: false},
  {row: -16, col: -16, hidden: false, isMine: false},
  {row: -15, col: -15, hidden: false, isMine: true},
  {row: -14, col: -14, hidden: false, isMine: false},
  {row: -13, col: -13, hidden: false, isMine: false},
  {row: -12, col: -12, hidden: false, isMine: true},
  {row: -11, col: -11, hidden: false, isMine: false},
  {row: -10, col: -10, hidden: true, isMine: false},
  {row: -9, col: -9, hidden: false, isMine: false},
  {row: -8, col: -8, hidden: false, isMine: true},
  {row: -7, col: -7, hidden: false, isMine: false},
  {row: -6, col: -6, hidden: false, isMine: false},
  {row: -5, col: -5, hidden: false, isMine: true},
  {row: -4, col: -4, hidden: false, isMine: false},
  {row: -3, col: -3, hidden: false, isMine: false},
  {row: -2, col: -2, hidden: false, isMine: false},
  {row: -1, col: -1, hidden: true, isMine: false},
  {row: 0, col: 0, hidden: false, isMine: false},
  {row: 1, col: 1, hidden: false, isMine: true},
  {row: 2, col: 2, hidden: false, isMine: false},
  {row: 3, col: 3, hidden: false, isMine: false},
  {row: 4, col: 4, hidden: false, isMine: true},
  {row: 5, col: 5, hidden: true, isMine: false},
  {row: 6, col: 6, hidden: false, isMine: false}
]}

function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
}

