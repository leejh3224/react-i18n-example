import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import 'styles/main.sass'
import App from './App'
import configureStore from './data'
import registerServiceWorker from './registerServiceWorker'

render(
  <Provider store={configureStore()}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement,
)
registerServiceWorker()
