import React, { Component, Fragment } from 'react'
import styles from './index.less'
import dog from './imgs/dog.jpg'
import test from './imgs/test.png'
class Home extends Component {
  render () {
    return (
      <Fragment>
        <p className={styles.test}>hello react</p>
        <img src={dog} alt="dog" className={styles.img}/>
        <img src={test} alt="test"/>
      </Fragment>
    )
  }
}

export default Home