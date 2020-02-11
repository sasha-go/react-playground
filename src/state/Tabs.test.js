import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`Tabs Component`, () => {
	const tabsProp = []

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

	it('renders empty given no tabs', () => {
		const wrapper = shallow(<Tabs />)
		expect(toJson(wrapper)).toMatchSnapshot();
	})

	it('renders the first tab by default', () => {
		const wrapper = shallow(<Tabs tabs={tabsProp}/>)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('closes the first tab and opens any clicked tab', () => {
		const wrapper = shallow(<Tabs tabs={tabsProp} />)
		wrapper.find('button').at(1).simulate('click')
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	// it('closes the first tab and opens any clicked tab', () => {
	// 	const wrapper = shallow(<Tabs tabs={tabsProp} />)
	// 	wrapper.find('button').at(1).simulate('click')
	// 	expect(toJson(wrapper)).toMatchSnapshot()
	// })
})

