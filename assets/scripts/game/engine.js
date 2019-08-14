'use strict'

const store = require('./../store')

const changePlayer = () => {
  store.currentPlayer = store.currentPlayer === 'x' ? 'o' : 'x'
}

const isEmptySquare = index => {
  return store.game.cells[index] === ''
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
    return store.currentPlayer + ' wins!'
  } else if (combinations.every(line => !line.includes(''))) {
    store.isOver = true
    return 'draw'
  } else {
    return 'game in progress...'
  }
}

const isWin = line => {
  return line[0] !== '' && line[0] === line[1] && line[0] === line[2]
}

module.exports = {
  changePlayer,
  isEmptySquare,
  checkForWin
}
