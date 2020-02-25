import React, { Component } from 'react';
import Child from './Child';
import LangControls from './LangControls';

class AppLang extends Component {
	render() {
		return (
			<div className="AppLang">
				<LangControls />
				<Child />
			</div>
		)
	}
}

export default AppLang;