import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import * as ducks from './ducks'
import * as services from './services'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(combineReducers({
  ...ducks,
  form: formReducer,
  router: routerReducer,
}), applyMiddleware(thunk.withExtraArgument(services)))

export const history = createHistory()
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
document.getElementById('root'))

registerServiceWorker()
