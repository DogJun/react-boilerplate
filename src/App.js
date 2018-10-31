import React, { Fragment } from 'react'
import { renderRoutes } from 'react-router-config'
import Header from 'widgets/Header'
import 'styles/index.less'

const App = (props) => (
  <Fragment>
    <Header/>
    {renderRoutes(props.route.routes)}
  </Fragment>
)

export default App
