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
              <div className="header"> Go Feed Me </div>
              <div className="content">
                {' '}
                A beautiful food delivery site, similar to GrubHub, for Rural Georgia. The site was built using Codeigniter,
                but was unfortunately severely restricted by the agency who built it initially. The business owner came to me
                in hopes she could further her design and regain access to more parts of their site. This is what I gave them:
                <br />
                <br />
                <img src={gig1} alt="gig" />
                <br />
                <br />
                Transferring all the old code from a CentOS server to a new WordPress setup, allowed the business owner to regain
                control of their site, and allowed me to give them a much more fluid design.
              </div>
              <div className="actions">
                <Popup
                  trigger={<button className="button"> Tech </button>}
                  position="top center"
                  closeOnDocumentClick
                  >
                  <span className="popup">
                    CSS customization <br />
                  JavaScript customization <br />
                    PayPal integration
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
