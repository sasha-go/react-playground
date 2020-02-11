import React from 'react';


class Accordion extends React.Component {
    static defaultProps = {
        sectionProp: []
		}
		
    state = {
        currentSectionIndex: 0,
		}
		
    handleButtonClick(index) {
        this.setState({
            currentSectionIndex: index
        })
		}
		
    renderButtons() {
        return this.props.sectionProp.map((section, index) => (
            <ul>
                <li>
                    <button key={index} onClick={() => this.handleButtonClick(index)}>{section.title}</button>
										{/* {(activeSectionIndex === idx) && <p>{section.content}</p>} */}
                </li>
            </ul>
        ))
		}
		
    renderContent() {
        const currentSection = this.props.sectionProp[this.state.currentSectionIndex]
        return (
          <div className='content'>
								<p>{currentSection.content}</p>
          </div>
        )
			}
			
    render() {
        return (
            <div>
								{!!this.props.sectionProp.length && this.renderContent()}
								{this.renderButtons()}
            </div>
        )
    }
}
export default Accordion;