import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import Banner from '../components/Banner.js';
import Showcase from '../components/Showcase.js';
import Gfm from '../components/Gfm.js';
import Popup from "reactjs-popup";
import '../styles/App.css';
import logoReact from '../styles/logo.svg';
const data = require('../data.json');

export default class Portfolio extends Component {
  render() {
    return (
    <div>
      <Banner/>
      <div>
        <span>Click any box to see a project I've done</span>
      </div>
      {data.map(d =>
      <div className="fl w-third pa3">
        <div className="outline tc pv3">
          <Popup className="animate" trigger={<img src = {logoReact}
            className = "App-logo" alt = "gig" />} modal="modal">
            {
              close => (<div className="modal">

                <div className="header">
                  <strong>
                  <a href={d.url} className="App-link">{d.title}</a>
                  </strong>
                </div>
                <div className="content">
                  {' '}
                  {d.topDescription}
                  <br/>
                  <br/>
                  <img src={require(`../styles/${d.image}`)} alt="gig"/>
                  <br/>
                  <br/>
                  {d.bottomDescription}
                </div>
                <div className="actions">
                  <Popup trigger={<button className = "button"> Tech </button>} position="top center" closeOnDocumentClick="closeOnDocumentClick">
                    <span className="popup">
                      {d.tech}
                    </span>
                  </Popup>
                  <span>
                    <Link to="/Gfm">
                      <h3>
                        <code>Read More</code>
                      </h3>
                    </Link>
                  </span>
                </div>
              </div>)
            }
          </Popup>
        </div>
      </div>
      )}

      <Link to="/" className="App-link">
        <h3>
          <code>Back Home</code>
        </h3>
      </Link>
      <Switch>
        <Route exact="exact" path="/"/>
      </Switch>

    </div>
)}}