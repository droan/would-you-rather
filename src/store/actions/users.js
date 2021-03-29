// Action types
export const RECEIVE_USERS = 'app/users/RECEIVE_USERS'

// Action creators
export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  payload: {
    users,
  },
})
