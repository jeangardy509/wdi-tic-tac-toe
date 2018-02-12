'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Account Successfully created')
  $('#message').css('background-color', 'green')
  console.log('successfully created an Account')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#message').text('Sorry fail to Sign Up!')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const signInSuccess = function (data) {
  $('#message').text('Sign in Successfully')
  $('#message').css('background-color', 'green')
  console.log(data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error Signing in, please try again!')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const signOutSuccess = function (data) {
  $('#message').text('You have Successfully sign out')
  $('#message').css('background-color', 'green')
  console.log(data)
}

const signOutFailure = function (error) {
  $('#message').text('Something went wrong, please try again!')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const changePasswordSuccess = function (error) {
  $('#message').text('Password successfully change!')
  $('#message').css('background-color', 'red')
  console.log(error)
}

const changePasswordFailure = function (error) {
  $('#message').text('Was not able to cahnge password, try agin!')
  $('#message').css('background-color', 'red')
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
