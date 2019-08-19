'use strict'

const api = require('./api')
const engine = require('./engine')
const ui = require('./ui')
const store = require('./../store')

const onNewGame = event => {
  api.create()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onSquareClick = event => {
  event.preventDefault()

  store.index = $(event.target).data('cell-index')

  if (store.gameStatus === 'turn') {
    if (engine.isEmptySquare(store.index)) {
      store.gameStatus = engine.checkForWin(store.index, store.currentPlayer)

      const move = {
        game: {
          cell: {
            index: store.index,
            value: store.currentPlayer
          },
          over: store.isOver
        }
      }

      api.update(move)
        .then(ui.squareClickSuccess)
        .catch(ui.takenSquareFailure)
    } else {
      ui.takenSquareFailure()
    }
  } else {
    ui.gameOverFailure()
  }
}

const onGetStats = event => {
  event.preventDefault()

  // total games played
  api.index()
    .then(ui.getGamesPlayedSuccess)
    .then(api.indexOver)
    .then(ui.getGamesWonSuccess)
    .catch(ui.getStatsFailure)
}

const addHandlers = () => {
  $('.game-square').on('click', onSquareClick)
  $('#new-game').on('click', onNewGame)
  $('#get-stats').on('click', onGetStats)
}

module.exports = {
  onNewGame,
  onSquareClick,
  onGetStats,
  addHandlers
}
