import React from 'react';
import ReactDOM from 'react-dom';
import AppLang from './lang-context/AppLang';
// import App from './demonymapp/App';
// import App from './App';
import './index.css';
// import Bomb from './state-drills/Bomb';
// import HelloWorld from './state-drills/HelloWorld';
// import Accordion from './state-drills/Accordion';
// import App from './paltrows-power-toes/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<AppLang />
	</BrowserRouter>,
	document.getElementById('root')
);