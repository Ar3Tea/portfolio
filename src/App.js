import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import banner from './styles/The_Hideout.jpg';
import logoReact from './styles/logo.svg';
import Portfolio from './components/Portfolio.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
<Router>
      <div className="App">
        <header className="fl w-100 pa2 bg-black">
        <div>

          <div className="fl w-20 pa2 dim bg-black">
            <p><code className="blue">const</code> <code>ryanTabassi</code>= <code className="orange">fullStackDeveloper;</code></p>
          </div>


          <a href="https://linkedin.com/in/ryan-tabassi">
          <div className="fl w-20 pa2 dim bg-black">
                <i class="fab fa-linkedin fa-2x"></i>
          </div>
          </a>

          <a href="https://twitter.com/Ar3Tea">
          <div className="fl w-20 pa2 dim bg-black">
              <i class="fab fa-twitter fa-2x"></i>
          </div>
          </a>

          <a href="https://github.com/ar3tea">
          <div className="fl w-20 pa2 dim bg-black">
              <i class="fab fa-github fa-2x"></i>
          </div>
          </a>

          <div className="fl w-20 pa2 dim bg-black"><p><code>Ryan.Tabassi @Gmail.com</code></p></div>
        </div>
      </header>

        <div className="fl w-100 pa1 bn"></div>

          <img src={banner} alt="logo" />

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

          <h3>
            <code>Or you can checkout my Portfolio <Link to="/portfolio">HERE</Link></code>
          </h3>

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

          <br />

          <footer>
            Made with love and React, by me!
          </footer>

          <Route path="/portfolio" component={Portfolio} />
      </div>
    </Router>
    );
  }
}

export default App;
