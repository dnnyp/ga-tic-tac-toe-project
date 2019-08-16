'use strict'

const engine = require('./engine')
const store = require('./../store')

const newGameSuccess = data => {
  $('#game-status').html('<h3 class="no-select">You started a new game!</h3>')
  store.game = data.game
  store.currentPlayer = 'x'
  store.isOver = false
  store.gameStatus = 'turn'
  $('.game-square').text('')
}

const newGameFailure = () => {
  $('#game-status').html('<h3 class="no-select">New game failure</h3>')
}

const squareClickSuccess = data => {
  store.game = data.game
  $('#square-' + store.index).html('<span class="no-select">' + store.currentPlayer + '</span>')
  engine.changePlayer()
  const status = store.gameStatus === 'turn' ? store.currentPlayer.toUpperCase() + "'s turn" : store.gameStatus
  $('#game-status').html('<h3 class="no-select">' + status + '</h3>')
}

const takenSquareFailure = () => {
  $('#game-status').html('<h3 class="no-select">Square already taken!</h3>')
}

const gameOverFailure = () => {
  $('#game-status').html('<h3 class="no-select">Please start a new game!</h3>')
}

const getGamesPlayedSuccess = data => {
  store.gamesPlayed = data.games.length
}

const getGamesWonSuccess = data => {
  store.gamesWon = data.games.length
  $('#message-container').append('<div class="alert alert-info no-select ml-2" role="alert">Games Played: ' + store.gamesPlayed + ' | Games Won: ' + store.gamesWon + '</div>')
  $('.alert').delay(4000).slideUp(200, function () {
    $(this).alert('close')
  })
}

const getStatsFailure = () => {
  $('#message-container').append('<div class="alert alert-danger no-select ml-2" role="alert">Failed getting stats</div>')
  $('.alert').delay(1500).slideUp(200, function () {
    $(this).alert('close')
  })
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
