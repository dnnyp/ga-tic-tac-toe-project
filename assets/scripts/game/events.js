'use strict'

const api = require('./api')
const ui = require('./ui')
const engine = require('./engine')

// need to initialize game on signin
const onNewGame = () => {
  api.create()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onSquareClick = event => {
  event.preventDefault()

  const index = $(event.target).data('cell-index')

  if (engine.isEmptySquare(index)) {
    const move = {
      game: {
        cell: {
          index: index,
          value: engine.currentPlayer()
        },
        over: false // engine.checkForWin()
      }
    }

    api.update(move)
      .then(ui.squareClickSuccess)
      .then(engine.changePlayer)
      .catch(ui.squareClickFailure)
  } else {
    ui.squareClickFailure()
  }
}

const onGetStats = event => {
  event.preventDefault()

  // total games played
  api.index()
    .then(ui.getStatsSuccess)
    .then(api.indexOver)
    .catch(ui.getStatsFailure)
}

module.exports = {
  onNewGame,
  onSquareClick,
  onGetStats
}
