'use strict'

const store = require('./../store')

// check if square is empty
// check current player
// check for winner
// const px = store.game.player_x
// const po = store.game.player_o
// let cp = store.currentPlayer

const currentPlayer = () => {
  return store.currentPlayer
}

const changePlayer = () => {
  store.currentPlayer = store.currentPlayer === 'x' ? 'o' : 'x'
}

const isEmptySquare = index => {
  return store.game.cells[index] === ''
}

const checkForWin = () => {
  //
}

module.exports = {
  currentPlayer,
  changePlayer,
  isEmptySquare,
  checkForWin
}
