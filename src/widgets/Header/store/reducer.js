import * as constants from './constants'

const defaultState = {
  name: 'DogJun'
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_NAME:
      return {
        ...state,
        name: 'xiaomi'
      }
    default:
      return state
  }
}
