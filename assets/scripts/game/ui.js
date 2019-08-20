'use strict'

const authUi = require('./../auth/ui')
const engine = require('./engine')
const store = require('./../store')

const newGameSuccess = data => {
  updateGameStatus('You started a new game!')
  // reset stored values
  store.game = data.game
  store.currentPlayer = 'x'
  store.isOver = false
  store.gameStatus = 'turn'
  store.winningLine = -1
  $('.game-square').text('') // reset game board
  $('.game-square').css('background', '') // reset background color
}

const newGameFailure = () => {
  updateGameStatus('New game failure')
}

const squareClickSuccess = data => {
  store.game = data.game // update stored game
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

// array length returned by api.index()
const getGamesPlayedSuccess = data => {
  store.gamesPlayed = data.games.length
}

// array length returned by api.indexOver()
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

const highlightWin = () => {
  const combinations = [
    // row indexes
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // column indexes
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // cross indexes
    [0, 4, 8],
    [2, 4, 6]
  ]

  if (store.winningLine !== -1) {
    combinations[store.winningLine].forEach(index => {
      $('#square-' + index).css('background', 'rgba(0, 173, 181, 0.3)')
    })
  }
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
  updateGameStatus,
  highlightWin
}
