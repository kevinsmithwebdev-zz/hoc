import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {import React from 'react';

const withSecretToLife = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return (
        <WrappedComponent
          secretToLife={42}
          {...this.props}
        />
      );
    }
  }

  return HOC;
};

export default withSecretToLife;
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
