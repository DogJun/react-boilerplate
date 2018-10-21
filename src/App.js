import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './common/Header'
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
      	<BrowserRouter>
      		<div>
            <Header />
      			<Route path='/' exact component={Home}></Route>
      		</div>
      	</BrowserRouter>
      </Provider>
    )
  }
}

export default App
