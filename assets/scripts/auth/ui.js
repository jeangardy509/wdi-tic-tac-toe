'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Account Successfully created')
  $('#message').css('background-color', 'green')
  $('#message').css('color', 'white')
  console.log('successfully created an Account')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#message').text('Sorry fail to Sign Up!')
  $('#message').css('background-color', 'red')
  $('#message').css('color', 'white')
  console.log(error)
}

const signInSuccess = function (data) {
  $('#message').text('Sign in Successfully ' + data.user.id)
  $('#message').css('background-color', 'green')
  $('#message').css('color', 'white')
  $('.show-for-signed-in').css('display', 'inline')
  $('.hide-for-signed-up').css('display', 'none')
  $('body').css('background-image', 'none')
  $('h2').css('display', 'none')
  $('body').css('background', 'url(https://i.ytimg.com/vi/8A8oa8hyLew/maxresdefault.jpg)')
  $('body').css('background-repeat', 'no-repeat')
  $('body').css('background-attachment', 'fixed')
  $('body').css('background-size', 'cover')
  $('#tictactoe').css('display', 'inline')
  $('#tictactoe').css('display', 'none')
  $('#turn').css('display', 'none')
  console.log(data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error Signing in, please try again!')
  $('#message').css('background-color', 'red')
  $('#message').css('color', 'white')
  console.log(error)
}

const signOutSuccess = function (data) {
  $('#message').text('You have Successfully sign out')
  $('#message').css('background-color', 'green')
  $('#message').css('color', 'white')
  $('.hide-for-signed-up').css('display', 'inline')
  $('.show-for-signed-in').css('display', 'none')
  $('h2').css('display', 'block')
  $('body').css('background', 'url(https://wallpaperscraft.com/image/laptop_room_on_the_desk_keyboard_mouse_apple_window_interior_73963_1920x1080.jpg)')
  console.log(data)
}

const signOutFailure = function (error) {
  $('#message').text('Something went wrong, please try again!')
  $('#message').css('background-color', 'red')
  $('#message').css('color', 'white')
  console.log(error)
}

const changePasswordSuccess = function (error) {
  $('#message').text('Password successfully change!')
  $('#message').css('background-color', 'red')
  $('#message').css('color', 'white')
  console.log(error)
}

const changePasswordFailure = function (error) {
  $('#message').text('Was not able to cahnge password, plase try again!')
  $('#message').css('background-color', 'red')
  $('#message').css('color', 'white')
  console.log(error)
}

// game api

const resetSuccess = function (data) {
  $('#tictactoe').css('display', 'inline')
  $('#tictactoe').css('display', 'inline')
  $('#turn').css('display', 'inline')
  console.log(data)
  store.game = data.game
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  resetSuccess
}
