import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import banner from './styles/The_Hideout.jpg';
import logoReact from './styles/logo.svg';
import Portfolio from './components/Portfolio.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Banner from './components/Banner.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
<Router>
      <div className="App">
        <Header />

        <Banner />

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
            <Route path="/portfolio" component={Portfolio} />
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
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
