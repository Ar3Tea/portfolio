import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import logoReact from '../styles/logo.svg';
import gig1 from '../styles/GFM.jpg';
import Home from '../components/Home.js';
import '../styles/App.css';


class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="fl w-50 pa3 dim">
          <div className="outline tc pv3 left">
            <img src={gig1} className="portfolio-gig" alt="gig" />
            Showcase 1
          </div>
        </div>

        <div className="fl w-50 pa3 dim">
          <div className="outline tc pv3">
            <img src={logoReact} className="App-logo" alt="logo" />
            Showcase 2
          </div>
        </div>

        <div className="fl w-50 pa3 dim">
          <div className="outline tc pv3">
            <img src={logoReact} className="App-logo" alt="logo" />
            Showcase 3
          </div>
        </div>

        <div className="fl w-50 pa3 dim">
          <div className="outline tc pv3">
            <img src={logoReact} className="App-logo" alt="logo" />
            Showcase 4
          </div>
        </div>

        <div className="fl w-50 pa3 dim">
          <div className="outline tc pv3">
            <img src={logoReact} className="App-logo" alt="logo" />
            Showcase 5
          </div>
        </div>

        <div className="fl w-50 pa3 dim">
          <div className="outline tc pv3">
            <img src={logoReact} className="App-logo" alt="logo" />
            Showcase 6
          </div>
        </div>
        <Link to="/home" className="App-link"><h3><code>Back Home</code></h3></Link>
      <Switch>
        <Route exact path="/home" component={Home} />
      </Switch>
      </div>
    );
  }
}

export default Portfolio;
