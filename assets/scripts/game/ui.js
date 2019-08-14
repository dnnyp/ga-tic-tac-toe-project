// engine.changePlayer()

'use strict'

const engine = require('./engine')
const store = require('./../store')

const newGameSuccess = data => {
  $('#game-status').text('You started a new game!')
  store.game = data.game
  store.currentPlayer = 'x'
  store.isOver = false
  $('.game-square').text('-')
}

const newGameFailure = () => {
  $('#game-status').text('New game failure')
}

const squareClickSuccess = data => {
  $('#game-status').text(store.gameStatus)
  store.game = data.game
  $('#square-' + store.index).text(store.currentPlayer)
  console.log(store.game.cells)
  engine.changePlayer()
}

const squareClickFailure = () => {
  $('#game-status').text('Unsuccessful move')
}

const getStatsSuccess = () => {
  //
}

const getStatsFailure = () => {
  //
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  squareClickSuccess,
  squareClickFailure,
  getStatsSuccess,
  getStatsFailure
}
