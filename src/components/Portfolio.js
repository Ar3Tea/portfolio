import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import logoReact from '../styles/logo.svg';
import Home from '../components/Home.js'
import '../styles/App.css';


class Portfolio extends Component {
  render() {
    return (
      <div>
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
        <Link to="/home" className="App-link"><code>Back Home</code></Link>
      <Switch>
        <Route exact path="/home" component={Home} />
      </Switch>
      </div>
    );
  }
}

export default Portfolio;
