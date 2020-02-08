import React from 'react'

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            who: 'world',

        }
    }

    clickButton = (e) => {
        this.setState({
            who : e.target.value,
        })
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who}.</p>
                <button value='world' onClick={this.clickButton}>World</button>
                <button value='friend' onClick={this.clickButton}>Friend</button>
                <button value='react' onClick={this.clickButton}>React</button>
            </div>
        )
    }
}




export default HelloWorld;