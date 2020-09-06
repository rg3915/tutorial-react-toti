import React, { Component } from 'react';
import './App.css';

import { listRepositories } from './api/github';
import Item from './components/Item';
import Repositories from './containers/Repositories';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Repositories />
      </div>
    );
  }
}

export default App;