// engine.changePlayer()

'use strict'

const store = require('./../store')

const newGameSuccess = data => {
  store.game = data.game
  $('#game-status').text('You started a new game!')
}

const newGameFailure = () => {
  $('#game-status').text('New game failure')
}

const squareClickSuccess = data => {
  store.game = data.game
  $('#game-status').text('Successful move!')
}

const squareClickFailure = () => {
  $('#game-status').text('Unsuccessful move!')
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
