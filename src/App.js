import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './The_Hideout.jpg';
import logoReact from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="fl w-100 pa2 bg-black">
        <div>
          <div className="fl w-20 pa2 dim bg-black">
            <code className="blue">const</code> <code>ryanTabassi</code> = <code className="orange">fullStackDeveloper;</code>
          </div>

          <a href="https://linkedin.com/n/ryan-tabassi">
          <div className="fl w-20 pa2 dim bg-black">
                <i class="fab fa-linkedin fa-lg"></i>
          </div>
          </a>

          <a href="https://twitter.com/Ar3Tea">
          <div className="fl w-20 pa2 dim bg-black">
              <i class="fab fa-twitter fa-lg"></i>
          </div>
          </a>

          <a href="https://github.com/ar3tea">
          <div className="fl w-20 pa2 dim bg-black">
              <i class="fab fa-github fa-lg"></i>
          </div>
          </a>

          <div className="fl w-20 pa2 dim bg-black"><code>Ryan.Tabassi@Gmail.com</code></div>
        </div>
      </header>

        <div className="fl w-100 pa1 bn"></div>

          <img src={logo} alt="logo" />

            <h2>
              <code>Welcome to Are's Basement</code>
            </h2>
            <h3>
              <code>I'm building something awesome! My website is currently under construction, but you can checkout my GitHub Page below:</code>
            </h3>

          <a
            className="App-link"
            href="https://ar3tea.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
          <h4>GitHub Page</h4>
          </a>

          <div className="fl w-50 pa3 dim">
            <div className="outline tc pv3">
            <img src={logoReact} className="App-logo" alt="logo" />
          </div>
          </div>

          <div className="fl w-50 pa3 dim">
            <div className="outline tc pv3">
            <img src={logoReact} className="App-logo" alt="logo" />
          </div>
          </div>
          <footer>
            Made with love and React, by me!
          </footer>
      </div>
    );
  }
}

export default App;
