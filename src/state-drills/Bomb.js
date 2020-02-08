import React from 'react';
import { render } from '@testing-library/react';

class Bomb extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				count: 0,

		}
}

tickTock = () => {
	if (this.state.count === 8) {
		clearInterval(this.interval);
		return 'BOOM!!!!';
	} else if (this.state.count % 2 === 0) {
		return 'tick';
	} else if (this.state.count % 2 !== 0) {
		return 'tock';
	}
}


componentDidMount() {
	console.log('constuctor')
  this.interval = setInterval(() => {
    this.setState({
			count: this.state.count + 1
    })
  }, 1000)
}


componentWillUnmount() {
	clearInterval(this.interval)
}

render() {
	const bombString = this.tickTock();
	
	return (
		<div>
			<p>
				{bombString}
			</p>
		</div>
		)
	}

}

export default Bomb;