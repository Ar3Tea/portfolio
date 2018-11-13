import React, { Component } from 'react';
import logo from './The_Hideout.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Ryan Tabassi</h1>
          <img src={logo} alt="logo" />
          <p>
            <h2><code>Welcome to Are's Basement</code></h2>
            <br />
            <code>I'm building something awesome! My website is currently under construction, but you can checkout my GitHub Page below:</code>
          </p>
          <a
            className="App-link"
            href="https://ar3tea.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Page
          </a>
        </header>
      </div>
    );
  }
}

export default App;
