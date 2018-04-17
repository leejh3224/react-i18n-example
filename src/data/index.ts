import i18nDictionary from 'i18n'

import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
} from 'react-redux-i18n'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, thunk]

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  function* saga() {
    yield 'hello world'
  }

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  )

  sagaMiddleware.run(saga)

  const { language } = navigator
  const languageCode = language.slice(0, 2)

  // initialize react-redux-i18n
  syncTranslationWithStore(store)
  store.dispatch(loadTranslations(i18nDictionary))
  store.dispatch(setLocale(languageCode))

  return store
}
