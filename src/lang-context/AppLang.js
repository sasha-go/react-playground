import React, { Component } from 'react';
import Child from './Child';
import LangControls from './LangControls';
import LanguageContext from './LanguageContext';

class AppLang extends Component {
	state = {
		lang: window.navigator.language
	};

	handleSetLang = (lang) => {
		this.setState({ lang })
	}

	render() {
		const contextValue = {
			lang: this.state.lang,
			setLang: this.handleSetLang
		}
		
		return (
			<LanguageContext.Provider value={contextValue}>
				<div className="AppLang">
				<LangControls onSetLang={this.handleSetLang} />
				<Child />
				</div>
			</LanguageContext.Provider>
		)
	}
}

export default AppLang;