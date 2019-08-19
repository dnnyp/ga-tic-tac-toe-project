'use strict'

const authUi = require('./../auth/ui')
const engine = require('./engine')
const store = require('./../store')

const newGameSuccess = data => {
  updateGameStatus('You started a new game!')
  store.game = data.game
  store.currentPlayer = 'x'
  store.isOver = false
  store.gameStatus = 'turn'
  $('.game-square').text('')
}

const newGameFailure = () => {
  updateGameStatus('New game failure')
}

const squareClickSuccess = data => {
  store.game = data.game
  $('#square-' + store.index).html('<span class="no-select">' + store.currentPlayer + '</span>')
  engine.changePlayer()
  const status = store.gameStatus === 'turn' ? store.currentPlayer.toUpperCase() + "'s turn" : store.gameStatus
  updateGameStatus(status)
}

const takenSquareFailure = () => {
  updateGameStatus('Square already taken!')
}

const gameOverFailure = () => {
  updateGameStatus('Please start a new game!')
}

const getGamesPlayedSuccess = data => {
  store.gamesPlayed = data.games.length
}

const getGamesWonSuccess = data => {
  store.gamesWon = data.games.length
  authUi.newAlert('info', `Games Played: ${store.gamesPlayed} | Games Won: ${store.gamesWon}`, 4000)
}

const getStatsFailure = () => {
  authUi.newAlert('danger', 'Failed getting stats', 1500)
}

const updateGameStatus = message => {
  $('#game-status').html(`<h3 class="no-select">${message}</h3>`)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  squareClickSuccess,
  takenSquareFailure,
  gameOverFailure,
  getGamesPlayedSuccess,
  getGamesWonSuccess,
  getStatsFailure,
  updateGameStatus
}
