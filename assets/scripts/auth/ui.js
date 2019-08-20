'use strict'

const store = require('./../store')

const signUpSuccess = () => {
  newAlert('success', 'Sign up success', 1500)
  $('form').trigger('reset')
}

const signUpFailure = () => {
  newAlert('danger', 'Sign up failed', 1500)
  $('form').trigger('reset')
}

const signInSuccess = data => {
  store.user = data.user
  newAlert('success', 'Signed in successfully! User is ' + store.user.email, 2000)
  $('form').trigger('reset')
  hideOnLogin()
  showOnLogin()
}

const signInFailure = () => {
  newAlert('danger', 'Sign in failed', 1500)
  $('form').trigger('reset')
}

const changePasswordSuccess = () => {
  newAlert('success', 'Changed password successfully', 1500)
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  newAlert('danger', 'Change password failed', 1500)
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  store.user = null // resets user on signout
  newAlert('success', 'Signed out successfully. Sign back in to play!', 2000)
  $('form').trigger('reset')
  hideOnLogout()
  showOnLogout()
}

const signOutFailure = () => {
  newAlert('danger', 'Sign out failed', 1500)
}

const hideOnLogout = () => {
  $('#new-game').addClass('d-none')
  $('#get-stats').addClass('d-none')
  $('#sign-out').addClass('d-none')
  $('#change-password-button').addClass('d-none')
  $('#game').addClass('d-none')
}

const showOnLogout = () => {
  $('#sign-up-button').removeClass('d-none')
  $('#sign-up-container').removeClass('d-none')
  $('#sign-in-button').removeClass('d-none')
  $('#sign-in-container').removeClass('d-none')
  $('#welcome-container').removeClass('d-none')
  $('#welcome-message').removeClass()
  $('#welcome-message').addClass('no-select animated fadeInUp')
}

const hideOnLogin = () => {
  $('#sign-up-button').addClass('d-none')
  $('#sign-up-container').addClass('d-none')
  $('#sign-in-button').addClass('d-none')
  $('#sign-in-container').addClass('d-none')
  $('#welcome-container').addClass('d-none')
}

const showOnLogin = () => {
  $('#new-game').removeClass('d-none')
  $('#get-stats').removeClass('d-none')
  $('#sign-out').removeClass('d-none')
  $('#change-password-button').removeClass('d-none')
  $('#game').removeClass()
  $('#game').addClass('no-select animated fadeIn slower')
}

// alerts factory function
const newAlert = (type, message, delay) => {
  $('#message-container').append(`<div class="alert alert-${type} no-select ml-2" role="alert">${message}</div>`)
  $('.alert').delay(delay).fadeOut(2000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  hideOnLogout,
  showOnLogout,
  hideOnLogin,
  showOnLogin,
  newAlert
}
