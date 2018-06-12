import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent'
import dishes from './shared/dishes.js';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes:dishes
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
