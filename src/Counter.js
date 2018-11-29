import React, { Component } from 'react'

export default class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 1
		}
	}

	increment = () => {
		// this.setState 传入回调函数
		this.setState(
			{
				count: this.state.count + 1
			},
			() => {
				console.log(this.state.count)
			}
		)
	}

	render() {
		const { count } = this.state
		return (
			<section className='Counter'>
				<h1>Count: {count}</h1>
				<button onClick={this.increment} className='full-width'>
					Increment
				</button>
				<button onClick={() => {}} className='full-width'>
					Decrement
				</button>
				<button onClick={() => {}} className='full-width'>
					Reset
				</button>
			</section>
		)
	}
}
