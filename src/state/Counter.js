import React from 'react';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  handleButtonClick = () => {
    const newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }
  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>     
          Add 1
        </button>
      </div>
    )
  } 
}

export default Counter;
