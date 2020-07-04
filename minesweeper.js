document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
//   cells: [
//   {
//     row: 0,
//     col: 0,
//     hidden: true,
//     isMine: false
//   },
//   {
//     row: 0,
//     col: 1,
//     hidden: true,
//     isMine: false
//   },
//   {
//     row: 1,
//     col: 0,
//     hidden: true,
//     isMine: false
//   },
//   {
//     row: 1,
//     col: 1,
//     hidden: true,
//     isMine: false
//   }
// ],
// }
cells: [
  {row: 0, col: 0, hidden: true, isMine: false},
  {row: 0, col: 1, hidden: true, isMine: true},
  {row: 0, col: 2, hidden: true, isMine: false},
  {row: 0, col: 3, hidden: true, isMine: false},
  {row: 0, col: 4, hidden: true, isMine: false},
  {row: 0, col: 5, hidden: true, isMine: true},
  {row: 1, col: 0, hidden: true, isMine: false},
  {row: 1, col: 1, hidden: true, isMine: false},
  {row: 1, col: 2, hidden: true, isMine: true},
  {row: 1, col: 3, hidden: true, isMine: false},
  {row: 1, col: 4, hidden: true, isMine: false},
  {row: 1, col: 5, hidden: true, isMine: false},
  {row: 2, col: 0, hidden: true, isMine: false},
  {row: 2, col: 1, hidden: true, isMine: false},
  {row: 2, col: 2, hidden: true, isMine: false},
  {row: 2, col: 3, hidden: true, isMine: true},
  {row: 2, col: 4, hidden: true, isMine: false},
  {row: 2, col: 5, hidden: true, isMine: false},
  {row: 3, col: 0, hidden: true, isMine: false},
  {row: 3, col: 1, hidden: true, isMine: false},
  {row: 3, col: 2, hidden: true, isMine: false},
  {row: 3, col: 3, hidden: true, isMine: true},
  {row: 3, col: 4, hidden: true, isMine: false},
  {row: 3, col: 5, hidden: true, isMine: false},
  {row: 4, col: 0, hidden: true, isMine: false},
  {row: 4, col: 1, hidden: true, isMine: false},
  {row: 4, col: 2, hidden: true, isMine: true},
  {row: 4, col: 3, hidden: true, isMine: false},
  {row: 4, col: 4, hidden: true, isMine: true},
  {row: 4, col: 5, hidden: true, isMine: false},
  {row: 5, col: 0, hidden: true, isMine: false},
  {row: 5, col: 1, hidden: true, isMine: true},
  {row: 5, col: 2, hidden: true, isMine: false},
  {row: 5, col: 3, hidden: true, isMine: false},
  {row: 5, col: 4, hidden: true, isMine: false},
  {row: 5, col: 5, hidden: true, isMine: false}
  ],}

function startGame () {
  for (var i = 0; i < board.cells.length; i++){
    var cell = board.cells[i]
    cell.surroundingMines = countSurroundingMines(cell)
  }
  lib.initBoard()
}

document.onclick = checkForWin
window.oncontextmenu = checkForWin

function checkForWin () {
var isTheWinner = true

  for (var i = 0; i < board.cells.length; i++){
    var cell = board.cells[i]
    if (cell.isMine && !cell.isMarked)
    isTheWinner = false
  }
    if (isTheWinner)
    lib.displayMessage('You win!')
  }

function countSurroundingMines(cell) {
  var count = 0
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  for (i = 0; i < surrounding.length; i++) {
    var cell = surrounding[i]
    if (cell.isMine){
      count++
    }
  }
  return count
}
