import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Portfolio from '../components/Portfolio.js';
import Home from '../components/Home.js';
import '../styles/App.css';
import logoReact from '../styles/logo.svg'

class Showcase extends Component {
  render() {
    return (
      <div>
        <div className="fl w-50 pa3 dim">
          <div className="outline tc pv3">
            <img src={logoReact} className="App-logo" alt="logo" />
            Showcase 1
          </div>
        </div>
        <Link to="/portfolio" className="App-link"><code>Back to Portfolio</code></Link>
        <Link to="/home" className="App-link"><h3><code>Back Home</code></h3></Link>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
    );
  }
}

export default Showcase;
