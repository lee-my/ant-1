require('styles/admin.scss')

import React from 'react'

import SliderBar from './SliderBar'
import Header from './Header'
import Container from './Container'

class Main extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<SliderBar />
				<Container />
			</div>
		)
	}
}

export default Main