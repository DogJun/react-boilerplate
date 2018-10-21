import * as constants from './constants';

const defaultState = {
	name: 'DogJun'
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_NAME:
			console.log('222')
			return {
				...state,
				name: 'xiaomi'
			}
		default:
			return state;
	}
}