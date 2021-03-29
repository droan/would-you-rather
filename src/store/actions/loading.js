// Action types
export const SHOW = 'app/loading/SHOW'
export const HIDE = 'app/loading/HIDE'

// Action creators
export const showLoading = () => ({
  type: SHOW,
})

export const hideLoading = () => ({
  type: HIDE,
})
