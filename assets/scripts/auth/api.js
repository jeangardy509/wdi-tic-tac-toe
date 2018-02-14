'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigins.production + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
      // Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigins.production + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiOrigins.production + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const onChangePassword = function (data) {
  return $.ajax({
    url: config.apiOrigins.production + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  onChangePassword
}
