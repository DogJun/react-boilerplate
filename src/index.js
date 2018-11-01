import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import routes from 'router'
import { renderRoutes } from 'react-router-config'
import store from 'store'
import 'lib-flexible'

const App = () => (
  <Provider store={store}>
    <Router>
      {renderRoutes(routes)}
    </Router>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
