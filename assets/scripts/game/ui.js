'use strict'

const engine = require('./engine')
const store = require('./../store')

const newGameSuccess = data => {
  $('#game-status').html('<h1>You started a new game!</h1>')
  store.game = data.game
  store.currentPlayer = 'x'
  store.isOver = false
  store.gameStatus = 'Game in progress'
  $('.game-square').text('')
}

const newGameFailure = () => {
  $('#game-status').html('<h1>New game failure</h1>')
}

const squareClickSuccess = data => {
  $('#game-status').html('<h1>' + store.gameStatus + '</h1>')
  store.game = data.game
  $('#square-' + store.index).text(store.currentPlayer)
  engine.changePlayer()
}

const takenSquareFailure = () => {
  $('#game-status').html('<h1>Square already taken!<h1>')
}

const gameOverFailure = () => {
  $('#game-status').html('<h1>Please start a new game!</h1>')
}

const getGamesPlayedSuccess = data => {
  store.gamesPlayed = data.games.length
}

const getGamesWonSuccess = data => {
  store.gamesWon = data.games.length
  $('#message').text('Games Played: ' + store.gamesPlayed + ' | Games Won: ' + store.gamesWon)
  $('#message').removeClass()
  $('#message').addClass('alert alert-info')
}

const getStatsFailure = () => {
  $('#message').text('Failed getting stats')
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  squareClickSuccess,
  takenSquareFailure,
  gameOverFailure,
  getGamesPlayedSuccess,
  getGamesWonSuccess,
  getStatsFailure
}
