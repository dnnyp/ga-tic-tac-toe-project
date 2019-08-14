'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const store = require('./store')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  store.currentPlayer = 'x'
  store.isOver = false
  store.gameStatus = 'Game in progress'
  $('#square-0').on('click', gameEvents.onSquareClick)
  $('#square-1').on('click', gameEvents.onSquareClick)
  $('#square-2').on('click', gameEvents.onSquareClick)
  $('#square-3').on('click', gameEvents.onSquareClick)
  $('#square-4').on('click', gameEvents.onSquareClick)
  $('#square-5').on('click', gameEvents.onSquareClick)
  $('#square-6').on('click', gameEvents.onSquareClick)
  $('#square-7').on('click', gameEvents.onSquareClick)
  $('#square-8').on('click', gameEvents.onSquareClick)
  $('#new-game').on('click', gameEvents.onNewGame)
  $('#get-stats').on('click', gameEvents.onGetStats)
})
