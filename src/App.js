import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import Bomb from './state-drills/Bomb';
import HelloWorld from './state-drills/HelloWorld';
import RouletteGun from './state-drills/RouletteGun';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Da Bomb</h1> */}
        {/* <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <TheDate />
        <Counter /> */}
        {/* <Bomb /> */}
        {/* <HelloWorld /> */}
        <RouletteGun />
      </div>
    );
  }
}

export default App;