// Action types
export const LOGIN = 'app/auth/LOGIN'
export const LOGOUT = 'app/auth/LOGOUT'

// Action creators
export const loginUser = (userId) => ({
  type: LOGIN,
  payload: {
    userId,
  },
})

export const logoutUser = () => ({
  type: LOGOUT,
})
