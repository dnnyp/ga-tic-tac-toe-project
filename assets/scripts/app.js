'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const authUi = require('./auth/ui')
const gameEvents = require('./game/events')
const store = require('./store')

$(() => {
  authUi.hideOnLogout()
  authEvents.addHandlers()

  store.currentPlayer = 'x'
  store.isOver = false
  store.gameStatus = 'turn'
  store.winningLine = -1
  gameEvents.addHandlers()
  $('html').removeAttr('style')
})
