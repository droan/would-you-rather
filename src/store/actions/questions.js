import { _saveQuestionAnswer, _saveQuestion } from 'utils/_DATA'
import { getAuthUser } from '../selectors/auth'
import { showLoading, hideLoading } from './loading'

// Action types
export const RECEIVE_QUESTIONS = 'app/questions/RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'app/questions/ANSWER_QUESTION'
export const ADD_QUESTION = 'app/questions/ADD_QUESTION'

// Action creators
export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  payload: {
    questions,
  },
})

export const answerQuestion = (user, question, answer) => ({
  type: ANSWER_QUESTION,
  payload: {
    user,
    question,
    answer,
  },
})

export const addQuestion = (question) => ({
  type: ADD_QUESTION,
  payload: {
    question,
  },
})

export function handleAnswerQuestion(question, answer) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const user = getAuthUser(getState())
    return _saveQuestionAnswer({authedUser: user.id, qid: question.id, answer})
      .then(() => {
        dispatch(answerQuestion(user, question, answer))
        dispatch(hideLoading())
      })
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const user = getAuthUser(getState())
    return _saveQuestion({optionOneText, optionTwoText, author: user.id})
      // If a handler function returns a value, the promise returned by then
      // gets resolved with the returned value as its value.
      .then(question => {
        dispatch(addQuestion(question))
        dispatch(hideLoading())
        return question
      })
  }
}
