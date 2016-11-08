export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE'
export const AUTH_LOGOUT_REQUEST = 'AUTH_LOGOUT_REQUEST'
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS'
export const AUTH_NOT_LOGGED_IN = 'AUTH_NOT_LOGGED_IN'

import feathers from 'feathers-client'
const app = feathers()

initClient()

function initClient () {
  const host = 'http://localhost:3030'
  app
    .configure(feathers.rest(host).fetch(window.fetch))
    .configure(feathers.hooks())
    .configure(feathers.authentication({ storage: window.localStorage }))
}

function login () {

}

function checkAuth () {
  console.log('Check the login!');
  return (dispatch, getState) => {
    dispatch(authLoginRequest())
    app.authenticate()
      .then(function (result) {
        console.info('Authenticated!', result)
        console.log('Your JWT is: ' + app.get('token'))
        const user = result.data
        dispatch(authLoginSuccess({
          user
        }))
      })
      .catch(function (error) {
        console.error('Error authenticating!', error)
        dispatch(authLoginFailure())
      })
  }
}

export const setup = () => {
  return (dispatch, getState) => {
    var token = localStorage.getItem('token')
    var user = JSON.parse(localStorage.getItem('user'))
    dispatch(authLoginSuccess({ user, token }))
  }
}

export const actions = {
  login,
  // logout,
  // resetPassword,
  setup,
  // _getToken,
  // isAuthenticated,
  checkAuth,
  goToLogin: () => console.log('Go to login!')
}

export function authLoginRequest () {
  return {
    type: AUTH_LOGIN_REQUEST
  }
}
export function authLoginSuccess (payload) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    payload
  }
}
export function authLoginFailure (payload) {
  return {
    type: AUTH_LOGIN_FAILURE,
    payload
  }
}

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  failed: false,
  token: '',
  user: null
}

const ACTION_HANDLERS = {
  [AUTH_LOGIN_REQUEST]: (state, action) => {
    return {
      ... state,
      isLoading: true
    }
  },
  [AUTH_LOGIN_FAILURE]: (state, action) => {
    return {
      ... state,
      failed: true,
      isLoading: false
    }
  },
  [AUTH_LOGIN_SUCCESS]: (state, action) => {
    const { user } = action.payload
    return {
      ... state,
      isLoading: false,
      user
    }
  }
}

export default function reducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
