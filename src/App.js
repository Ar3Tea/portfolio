import React, { Component } from 'react';
import logo from './The_Hideout.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Ryan Tabassi</p>
          </header>
          <br />
          <img src={logo} alt="logo" />

            <h2><code>Welcome to Are's Basement</code></h2>
            <br />
            <h3><code>I'm building something awesome! My website is currently under construction, but you can checkout my GitHub Page below:</code></h3>

          <a
            className="App-link"
            href="https://ar3tea.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
          <h4>GitHub Page</h4>
          </a>
      </div>
    );
  }
}

export default App;
