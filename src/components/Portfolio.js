import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import Showcase from '../components/Showcase.js';
import Home from '../components/Home.js';
import Popup from "reactjs-popup";
import logoReact from '../styles/logo.svg';
import gig1 from '../styles/GFM.jpg';
import '../styles/App.css';


class Portfolio extends Component {
  render() {
    return (

      <div>

        <div className="fl w-50 pa3">
          <div className="outline tc pv3">
            <Popup trigger={<img src={logoReact} className="App-logo" alt="gig" />} position="right center">
              <div className="popup">
                Popup content here !!
                <img src={logoReact} className="App-logo" alt="logo" />
                <img src={logoReact} className="App-logo" alt="logo" />
                <img src={logoReact} className="App-logo" alt="logo" />
              </div>
              </Popup>
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
        <Route exact path="/showcase" component={Showcase} />
      </Switch>

      </div>
    );
  }
}

export default Portfolio;
