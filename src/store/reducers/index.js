import { combineReducers } from 'redux'

import auth from './auth'
import loading from './loading'
import questions from './questions'
import users from './users'


const rootReducer = combineReducers({
  auth,
  loading,
  questions,
  users,
})

export default rootReducer
