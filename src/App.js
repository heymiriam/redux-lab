//import React, { Component } from 'react';
import React from 'react'
import './index.css';
import Persons from './containers/Persons';

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
          <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
        </ol>
        <Persons />
      </div>
    );
  }
}*/
function App(){
  return(
    <div className="App">
    <ol>
      <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
    </ol>
    <Persons />
  </div>
);
}

export default App;
