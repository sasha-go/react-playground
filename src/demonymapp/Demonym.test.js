import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Demonym from './Demonym';

describe('Demonym component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Demonym />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	//Might need to add props to Demonym Component
	it('render the UI as expected', () => {
		const tree = renderer
			.create(<Demonym />)
			.toJSON();
			expect(tree).toMatchSnapshot();
	});
});
