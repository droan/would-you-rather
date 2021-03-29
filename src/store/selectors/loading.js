import { createSelector } from 'reselect'


export const getLoading = (state) => state.loading

export const getIsLoading = createSelector(
  getLoading,
  (loading) => Boolean(loading.isLoading)
)
