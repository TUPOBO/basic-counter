const initialState = {
	value: 0
}

export default (state = initialState, action) => {
	console.log(state)
	if (action.type === 'ON_INCREMENT') {
		state = { ...state, value: state.value + action.value }
	}
	if (action.type === 'ON_DECREMENT') {
		state = { ...state, value: state.value + action.value }
	}
	if (action.type === 'ON_RESET') {
		state = { ...initialState }
	}
	return state
}
