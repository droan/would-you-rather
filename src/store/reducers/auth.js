import { LOGIN, LOGOUT } from '../actions/auth'


export default function reducer(state = {}, action) {
  switch(action.type) {
    case LOGIN:
      return {userId: action.payload.userId}
    case LOGOUT:
      return {userId: null}
    default:
      return state
  }
}
