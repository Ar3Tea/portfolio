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
        <Popup trigger={<img src={logoReact} className="App-logo" alt="gig" />} modal>
          {close => (
            <div className="modal">
            /*  <a className="close" onClick={close}>
                &times;
              </a> */
              <div className="header"> Showcase Title </div>
              <div className="content">
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                <br />
                <img src={logoReact} className="App-logo" alt="gig" />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
              </div>
              <div className="actions">
                <Popup
                  trigger={<button className="button"> Tech </button>}
                  position="top center"
                  closeOnDocumentClick
                  >
                  <span className="popup">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                    magni omnis delectus nemo, maxime molestiae dolorem numquam
                    mollitia, voluptate ea, accusamus excepturi deleniti ratione
                    sapiente! Laudantium, aperiam doloribus. Odit, aut.
                  </span>
                </Popup>

              </div>
            </div>
          )}
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
