import { combineReducers } from 'redux'
import { reducer as headerReducer } from 'widgets/Header/store'

const reducer = combineReducers({
  header: headerReducer
})

export default reducer
