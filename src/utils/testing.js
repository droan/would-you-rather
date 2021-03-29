import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import middleware from 'store/middleware'
import reducer from 'store/reducers'


export function renderWithStore(ui, initialState, ...options) {
  const store = createStore(reducer, initialState, middleware)

  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>

  return render(ui, { wrapper: Wrapper, ...options })
}
