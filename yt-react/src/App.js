import React, { Component } from 'react';
import './App.css';

import { listRepositories } from './api/github';
import Item from './components/Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    listRepositories()
      .then(data => this.setState({ data }))
  }

  render() {
    const { data } = this.state

    return (
      <div className="App">
        <ul>
          {data.map(
            item => <Item key={item.id} {...item} />
          )}
        </ul>
      </div>
    );
  }
}

export default App;