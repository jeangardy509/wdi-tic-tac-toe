'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

// game api

const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const store = ('./../store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('say hello world!')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('Welcome!')
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('Thanks for signing out!')
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Password change!')
  api.onChangePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// game api

const onReset = function (event) {
  event.preventDefault()
  console.log('working!')
  gameApi.reset(store)
    .then(gameUi.resetSuccess)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#reset').on('submit', onReset)
}

// const onGetGames = function (event) {
//   event.preventDefault()
//   gameApi.getGames()
//     .then(gameUi.getGamesSuccess)
// }

module.exports = {
  addHandlers
}

 let num = 3,
  EMPTY = '&nbsp;',
  boxes = [],
  turn = 'X',
  score,
  moves

/*
  Initializes the Tic Tac Toe board and starts the game.
*/
function init () {
  const board = document.createElement('table')
  board.setAttribute('border', 1)
  board.setAttribute('cellspacing', 0)

  let identifier = 1
  for (let i = 0; i < num; i++) {
    const row = document.createElement('tr')
    board.appendChild(row)
    for (let j = 0; j < num; j++) {
      const cell = document.createElement('td')
      cell.setAttribute('height', 120)
      cell.setAttribute('width', 120)
      cell.setAttribute('align', 'center')
      cell.setAttribute('valign', 'center')
      cell.classList.add('col' + j, 'row' + i)
      if (i === j) {
        cell.classList.add('diagonal0')
      }
      if (j === num - i - 1) {
        cell.classList.add('diagonal1')
      }
      cell.identifier = identifier
      cell.addEventListener('click', set)
      row.appendChild(cell)
      boxes.push(cell)
      identifier += identifier
    }
  }

  document.getElementById('tictactoe').appendChild(board)
  startNewGame()
}

/*
New game
*/
function startNewGame () {
  score = {
    'X': 0,
    'O': 0
  }
  moves = 0
  turn = 'X'
  boxes.forEach(function (square) {
    square.innerHTML = EMPTY
  })
}

/*
Check if a win or not
*/
function win (clicked) {
// Get all cell classes
  const memberOf = clicked.className.split(/\s+/)
  for (let i = 0; i < memberOf.length; i++) {
    const testClass = '.' + memberOf[i]
    const items = contains('#tictactoe ' + testClass, turn)
    // winning condition: turn === num
    if (items.length === num) {
      return true
    }
  }
  return false
}

function contains (selector, text) {
  const elements = document.querySelectorAll(selector)
  return [].filter.call(elements, function (element) {
    return RegExp(text).test(element.textContent)
  })
}

/*
 Sets clicked square and also updates the turn.
*/
function set () {
  if (this.innerHTML !== EMPTY) {
    return
  }
  this.innerHTML = turn
  moves += 1
  score[turn] += this.identifier
  if (win(this)) {
    $('#status').text('The winner is player ' + turn)
    startNewGame()
  } else if (moves === num * num) {
    $('#status').text('IT\'S  A  DRAW')
    startNewGame()
  } else {
    turn = turn === 'X' ? 'O' : 'X'
    document.getElementById('turn').textContent = 'Player ' + turn
  }
}

init()
