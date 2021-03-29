import { SHOW, HIDE } from '../actions/loading'


export default function reducer(state = {}, action) {
  switch(action.type) {
    case SHOW:
      return {isLoading: true}
    case HIDE:
      return {isLoading: false}
    default:
      return state
  }
}
