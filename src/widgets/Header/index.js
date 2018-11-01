import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import styles from './index.less'

class Header extends Component {
  render () {
    const { name, changeName } = this.props
    return (
      <Fragment>
        <div>hello, {name}</div>
        <button className={styles.btn} onClick={changeName}>点击</button>
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
