import React, { Component } from 'react';
import { listRepositories } from './api/github';
import './App.css';

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
            item => <li>{ item.full_name }</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;