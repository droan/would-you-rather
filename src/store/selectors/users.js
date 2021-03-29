import { createSelector } from 'reselect'


export const getUsers = (state) => state.users

export const getUserList = createSelector(
  getUsers,
  (users) => Object.values(users)
)

export const getLeaders = createSelector(
  getUserList,
  (userList) => userList.map(user => {
    const leader = {
      user: user,
      answers_count: Object.keys(user.answers).length,
      questions_count: user.questions.length,
    }
    leader.score = leader.answers_count + leader.questions_count
    return leader
  }).sort((l1, l2) => l2.score - l1.score)
)
