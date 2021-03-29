import produce from 'immer'

import { ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions'
import { RECEIVE_USERS } from '../actions/users'


export default function reducer(state = {}, action) {
  // return new state or mutate the draft object directly
  return produce(state, (draft) => {
    switch (action.type) {
      case RECEIVE_USERS: {
        return {...action.payload.users}
      }
      case ANSWER_QUESTION: {
        const { user, question, answer } = action.payload
        draft[user.id].answers[question.id] = answer
        break
      }
      case ADD_QUESTION: {
        const { question } = action.payload
        draft[question.author].questions.push(question.id)
        break
      }
      default:
        break
    }
  })
}
