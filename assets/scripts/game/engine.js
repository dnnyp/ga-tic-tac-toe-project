'use strict'

const store = require('./../store')

const changePlayer = () => {
  store.currentPlayer = store.currentPlayer === 'x' ? 'o' : 'x'
}

const checkForWin = (index, currentPlayer) => {
  const cells = store.game.cells.slice(0)
  cells[index] = currentPlayer

  const combinations = [
    // check row
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    // check column
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    // check cross
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]]
  ]

  if (combinations.some(isWin)) {
    store.isOver = true
    store.combination = combinations.find(isWin) // winning combination
    return store.currentPlayer.toUpperCase() + ' wins!'
  } else if (combinations.every(line => !line.includes(''))) {
    store.isOver = true
    return 'Draw'
  } else {
    return 'turn'
  }
}

// helper function for checkForWin
const isWin = line => {
  return line[0] !== '' && line[0] === line[1] && line[0] === line[2]
}

module.exports = {
  changePlayer,
  checkForWin
}
