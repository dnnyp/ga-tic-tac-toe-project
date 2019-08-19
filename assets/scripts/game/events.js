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

  store.index = $(event.target).data('cell-index') // index of selected square

  if (store.gameStatus === 'turn') { // if game is not over
    if (store.game.cells[store.index] === '') { // if square is empty
      store.gameStatus = engine.checkForWin(store.index, store.currentPlayer)

      // new move object
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
      ui.takenSquareFailure() // square is taken
    }
  } else {
    ui.gameOverFailure() // game is over
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
