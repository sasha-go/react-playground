import React from 'react';
import GrandChild from './GrandChild';

const Child = () => {
	return(
		<main role='main' className='Child'>
			<GrandChild />
		</main>
	);
}

export default Child;