import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent'
import dishes from './shared/dishes.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes:dishes
    }
  }
  render() {
    return (
      <div>
        <Main/>
      </div>
    );
  }
}

export default App;
