'use strict'

const store = require('./../store')

const signUpSuccess = () => {
  $('#message-container').append('<div class="alert alert-success no-select ml-2" role="alert">Sign up success</div>')
  $('.alert').delay(1500).slideUp(200, function () {
    $(this).alert('close')
  })
  $('form').trigger('reset')
}

const signUpFailure = () => {
  $('#message-container').append('<div class="alert alert-danger no-select ml-2" role="alert">Sign up failed</div>')
  $('.alert').delay(1500).slideUp(200, function () {
    $(this).alert('close')
  })
  $('form').trigger('reset')
}

const signInSuccess = data => {
  store.user = data.user
  $('#message-container').append('<div class="alert alert-success no-select ml-2" role="alert">Signed in successfully! User is ' + store.user.email + '</div>')
  $('.alert').delay(2000).slideUp(200, function () {
    $(this).alert('close')
  })
  $('form').trigger('reset')
  $('#sign-up-button').addClass('d-none')
  $('#sign-up-container').addClass('d-none')
  $('#sign-in-button').addClass('d-none')
  $('#sign-in-container').addClass('d-none')
  $('#change-password-button').removeClass('d-none')
  $('#new-game').removeClass('d-none')
  $('#get-stats').removeClass('d-none')
  $('#sign-out').removeClass('d-none')
  $('#welcome-message').addClass('d-none')
  $('#game-board').removeClass('d-none')
}

const signInFailure = () => {
  $('#message-container').append('<div class="alert alert-danger no-select ml-2" role="alert">Sign in failed</div>')
  $('.alert').delay(1500).slideUp(200, function () {
    $(this).alert('close')
  })
  $('form').trigger('reset')
}

const changePasswordSuccess = () => {
  $('#message-container').append('<div class="alert alert-success no-select ml-2" role="alert">Changed password successfully</div>')
  $('.alert').delay(1500).slideUp(200, function () {
    $(this).alert('close')
  })
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#message-container').append('<div class="alert alert-danger no-select ml-2" role="alert">Change password failed</div>')
  $('.alert').delay(1500).slideUp(200, function () {
    $(this).alert('close')
  })
  $('form').trigger('reset')
}

const signOutSuccess = () => {
  store.user = null
  $('#message-container').append('<div class="alert alert-success no-select ml-2" role="alert">Signed out successfully. Sign back in to play!</div>')
  $('.alert').delay(2000).slideUp(200, function () {
    $(this).alert('close')
  })
  $('form').trigger('reset')
  $('#sign-up-button').removeClass('d-none')
  $('#sign-up-container').removeClass('d-none')
  $('#sign-in-button').removeClass('d-none')
  $('#sign-in-container').removeClass('d-none')
  $('#change-password-button').addClass('d-none')
  $('#new-game').addClass('d-none')
  $('#get-stats').addClass('d-none')
  $('#sign-out').addClass('d-none')
  $('#game-board').addClass('d-none')
  $('#welcome-message').removeClass('d-none')
}

const signOutFailure = () => {
  $('#message-container').append('<div class="alert alert-success no-select ml-2" role="alert">Sign out failed</div>')
  $('.alert').delay(1500).slideUp(200, function () {
    $(this).alert('close')
  })
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
