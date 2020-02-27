import React from 'react';
import LanguageContext from './LanguageContext';

function LangControls(props) {
	return(
		<LanguageContext.Consumer>
			{(value) => {
				return(
					<div>
						<button 
							onClick={() => props.onSetLang('en-GB')}
							disabled={value.lang === 'en-GB'} >
							British{' '}
							<span role='img' aria-label='en-GB'>🇬🇧</span>
						</button>
						{' '}
						<button 
							onClick={() => props.onSetLang('en-US')}
							disabled={value.lang === 'en-US'}>
							American{' '}
							<span role='img' aria-label='en-US'>🇺🇸</span>
						</button>
						{' '}
						<button 
							onClick={() => props.onSetLang('ko')}
							disabled={value.lang === 'ko'}>
							Korean{' '}
							<span role='img' aria-label='ko'>🇰🇷</span>
						</button>
					</div>
				)
			}}
		</LanguageContext.Consumer>
		
	)
}

export default LangControls;