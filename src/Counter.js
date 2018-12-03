import React, { Component } from 'react'
import { store } from './store'

export default class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = store.getState()
	}

	updateState = () => {
		this.setState(store.getState())
	}

	componentWillMount() {
		console.log(store.getState())
		store.subscribe(this.updateState)
	}

	// componentWillUnmount() {
	// 	store.Unsubscribe(this.updateState)
	// }

	onIncrement = () => {
		const action = {
			type: 'ON_INCREMENT',
			value: 1
		}
		store.dispatch(action)
	}
	onDecrement = () => {
		const action = {
			type: 'ON_DECREMENT',
			value: -1
		}
		store.dispatch(action)
	}
	onReset = () => {
		const action = {
			type: 'ON_RESET'
		}
		store.dispatch(action)
	}

	render() {
		return (
			<section className='Counter'>
				<h1>Count: {this.state.value}</h1>
				<button onClick={this.onIncrement} className='full-width'>
					Increment
				</button>
				<button onClick={this.onDecrement} className='full-width'>
					Decrement
				</button>
				<button onClick={this.onReset} className='full-width'>
					Reset
				</button>
			</section>
		)
	}
}
