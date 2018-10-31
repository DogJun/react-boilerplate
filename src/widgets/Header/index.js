import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Header extends Component {
  render () {
    const { name, changeName } = this.props
    return (
      <Fragment>
        <div>hello, {name}</div>
        <button onClick={changeName}>点击</button>
      </Fragment>
    )
  }
}

const mapStateToPorps = (state) => ({
  name: state.header.name
})

const mapDispatchToProps = (dispatch) => ({
  changeName () {
    dispatch(actionCreators.getName())
  }
})

export default connect(mapStateToPorps, mapDispatchToProps)(Header)
