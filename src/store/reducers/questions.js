import produce from 'immer'

import { RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions'


export default function reducer(state = {}, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case RECEIVE_QUESTIONS: {
        return {...action.payload.questions}
      }
      case ANSWER_QUESTION: {
        const { user, question, answer } = action.payload
        draft[question.id][answer].votes.push(user.username)
        break
      }
      case ADD_QUESTION: {
        const { question } = action.payload
        draft[question.id] = question
        break
      }
      default:
        break
    }
  })
}
