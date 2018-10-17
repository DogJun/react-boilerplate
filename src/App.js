import React from 'react'
import ReactDom from 'react-dom'
import styles from './main.css'

const App = () => {
  return (
    <div>
      <p className={styles.test}>hello react!!!</p>
    </div>
  )
} 

ReactDom.render(<App/>, document.getElementById('root'))

export default App