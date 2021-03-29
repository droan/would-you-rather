import React from 'react'
import ReactDOM from 'react-dom'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import middleware from 'store/middleware'
import reducer from 'store/reducers'
import App from 'components/App'


const store = createStore(reducer, composeWithDevTools(middleware))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
