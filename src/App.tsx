import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Head } from 'components'
import { Home } from 'pages'

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Head />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App
