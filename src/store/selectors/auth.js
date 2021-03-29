import { createSelector } from 'reselect'

import { getUsers } from './users'


export const getAuth = (state) => state.auth

export const getIsUserAuth = createSelector(
  getAuth,
  (auth) => Boolean(auth.userId)
)

export const getAuthUser = createSelector(
  [getAuth, getUsers],
  (auth, users) => auth.userId ? users[auth.userId] : null
)
