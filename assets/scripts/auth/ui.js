'use strict'

const store = require('./../store')

const signUpSuccess = () => {
  $('#message').text('Sign up success')
  $('#message').removeClass()
  $('#message').addClass('alert alert-success')
  $('form').trigger('reset')
}

const signUpFailure = () => {
  $('#message').text('Sign up failed')
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger')
  $('form').trigger('reset')
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully! User is ' + store.user.email)
  $('#message').removeClass()
  $('#message').addClass('alert alert-success')
  $('form').trigger('reset')
  $('#change-password-button').removeClass('d-none')
  $('#sign-up-button').addClass('d-none')
  $('#sign-in-button').addClass('d-none')
  $('#sign-out').removeClass('d-none')
  $('#new-game').removeClass('d-none')
  $('#get-stats').removeClass('d-none')
  $('#game-board').removeClass('d-none')
}

const signInFailure = () => {
  $('#message').text('Sign in failed')
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger')
  $('form').trigger('reset')
}

const changePasswordSuccess = () => {
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('alert alert-success')
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#message').text('Change password failed')
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger')
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  store.user = null
  $('#message').text('Signed out successfully. Sign back in to play!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-success')
  $('#change-password-button').addClass('d-none')
  $('#sign-up-button').removeClass('d-none')
  $('#sign-in-button').removeClass('d-none')
  $('#sign-out').addClass('d-none')
  $('#new-game').addClass('d-none')
  $('#get-stats').addClass('d-none')
  $('#game-board').addClass('d-none')
}

const signOutFailure = () => {
  $('#message').text('Sign out failed')
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
