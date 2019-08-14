'use strict'

const store = require('./../store')

const signUpSuccess = () => {
  $('#message').text('Sign up success')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const signUpFailure = () => {
  $('#message').text('Sign up failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully! User is ' + store.user.email)
  $('#message').removeClass()
  $('#message').addClass('success')
}

const signInFailure = () => {
  $('#message').text('Sign in failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const changePasswordSuccess = () => {
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const changePasswordFailure = () => {
  $('#message').text('Change password failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const signOutSuccess = () => {
  store.user = null
  $('#message').text('Signed out successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const signOutFailure = () => {
  $('#message').text('Sign out failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
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
