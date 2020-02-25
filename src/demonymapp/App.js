import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'; 
import Demonym from './Demonym';
import CountrySelector from './CountrySelector';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selected: null
    }
  }

  setSelected(selected) {
    this.setState({
      selected
    });
  }

  componentDidMount() {
    fetch('https://country.register.gov.uk/records.json?page-size=5000')
      .then(response => {
        // check if response is ok
        console.log('About to check for errors');
        if(!response.ok) {
          console.log('An error did occur, let\'s throw an error.');
          throw new Error('Something went wrong'); // throw an error
        }
        return response; // ok, so just continue
      })
      .then(response => response.json())
      .then(data => {
        const countries = Object.keys(data)
              .map(key => data[key].item[0]);
              console.log(countries)
        this.setState({
          countries
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    const error = this.state.error
    ? <div className="demonym_app__error">{this.state.error}</div>
    : "";

    const demon = this.state.selected
      ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name} />
      : <div className="demonym_app__placeholder">Select a country above</div>

    return (
      <div className='App'>
        <CountrySelector countries={this.state.countries} changeHandler={selected => this.setSelected(selected)}/>
        {demon}
      </div>
    )
  }
}


export default App;


// render() {
//   const demon = this.state.selected
//         ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name}/>
//         : <div className="demonym_app__placeholder">Select a country above</div>;

//   return (
//     <div className="demonym_app">
//       <CountrySelector countries={this.state.countries}/>
//       {demon}
//     </div>
//   );