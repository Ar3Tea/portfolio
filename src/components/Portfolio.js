import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logoReact from '../styles/logo.svg';
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
      </div>
    );
  }
}

export default Portfolio;
