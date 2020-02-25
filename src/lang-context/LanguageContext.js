import React from 'react';

const LanguageContext = React.createContext({
	lang: window.navigator.language
})

export default LanguageContext;