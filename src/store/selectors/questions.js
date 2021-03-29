import produce from 'immer'
import { createSelector } from 'reselect'

import { getAuthUser } from './auth'
import { getUsers } from './users'


export const getQuestions = (state) => state.questions

export const getQuestionList = createSelector(
  getQuestions,
  (questions) => Object.values(questions)
)

const evaluateAuthors = (questionList, users) => questionList.map(q => produce(q, (draft) => {
    draft.author = users[q.author]
}))

const getQuestionListWithAuthor = createSelector(
  [getQuestionList, getUsers],
  evaluateAuthors,
)

export const getQuestionsWithAuthor = createSelector(
  [getQuestionListWithAuthor],
  (questionList) => Object.fromEntries(questionList.map(question => [question.id, question]))
)

const getQuestionsForFiltering = createSelector(
  [getQuestionListWithAuthor, getAuthUser],
  (questionList, user) => {
    const answeredIds = new Set(Object.keys(user.answers))
    return questionList.map(question => ({
      answered: answeredIds.has(question.id),
      question: question,
    }))
  }
)

export const getAnsweredQuestions = createSelector(
  getQuestionsForFiltering,
  (qs) => qs.filter(q => q.answered === true).map(q => q.question)
)

export const getUnansweredQuestions = createSelector(
  getQuestionsForFiltering,
  (qs) => qs.filter(q => q.answered === false).map(q => q.question)
)
