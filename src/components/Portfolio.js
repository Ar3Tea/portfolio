import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import Banner from '../components/Banner.js';
import Showcase from '../components/Showcase.js';
import Gfm from '../components/Gfm.js';
import Popup from "reactjs-popup";
import '../styles/App.css';
import logoReact from '../styles/logo.svg';
import gig1 from '../styles/GFM.jpg';
import gig2 from '../styles/ScootersnChairs-Helpcenter-hover.jpg';
import gig3 from '../styles/Roaring-Donkey-Whiskey.jpg';
import gig4 from '../styles/react-qa-app.jpg';

class Portfolio extends Component {
  render() {
    return (<div>
      <Banner/>
      <div className="fl w-50 pa3">
        <div className="outline tc pv3">
          <Popup className="animate" trigger={<img src = {
              logoReact
            }
            className = "App-logo" alt = "gig" />} modal="modal">
            {
              close => (<div className="modal">

                <div className="header">
                  <strong>
                    Go Feed Me
                  </strong>
                </div>
                <div className="content">
                  {' '}
                  A beautiful food delivery site, similar to GrubHub, for Rural Georgia. The site was built using Codeigniter, but was unfortunately severely restricted by the agency who built it initially. The business owner came to me in hopes she could further her design and regain access to more parts of their site. This is what I gave them:
                  <br/>
                  <br/>
                  <img src={gig1} alt="gig"/>
                  <br/>
                  <br/>
                  Transferring all the old code from a CentOS server to a new WordPress setup, allowed the business owner to regain control of their site, and allowed me to give them a much more fluid design.
                </div>
                <div className="actions">
                  <Popup trigger={<button className = "button" > Tech < /button>} position="top center" closeOnDocumentClick="closeOnDocumentClick">
                    <span className="popup">
                      CSS customization
                      <br/>
                      JavaScript customization
                      <br/>
                      PayPal integration
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

      <div className="fl w-50 pa3">
        <div className="outline tc pv3">
          <Popup className="animate" trigger={<img src = {
              logoReact
            }
            className = "App-logo" alt = "gig" />} modal="modal">
            {
              close => (<div className="modal">

                <div className="header">
                  <strong>
                    Scooters n Chairs
                  </strong>
                </div>
                <div className="content">
                  {' '}
                  A scooters and chairs business came to me asking for help with a new help center for their customers. They were interested in a sleek design similar to the Slack Help Center, and this is what I built for them:
                  <br/>
                  <br/>
                  <img src={gig2} alt="gig"/>
                  <br/>
                  <br/>
                  The site was built on Shopify so Liquid played a part in making the Help Center future proof for the client. They also wanted a hover effect for each piece of the grid which I happily obliged.
                </div>
                <div className="actions">
                  <Popup trigger={<button className = "button" > Tech < /button>} position="top center" closeOnDocumentClick="closeOnDocumentClick">
                    <span className="popup">
                      CSS customization
                      <br/>
                      Liquid
                    </span>
                  </Popup>

                </div>
              </div>)
            }
          </Popup>
        </div>
      </div>

      <div className="fl w-50 pa3">
        <div className="outline tc pv3">
          <Popup className="animate" trigger={<img src = {
              logoReact
            }
            className = "App-logo" alt = "gig" />} modal="modal">
            {
              close => (<div className="modal">

                <div className="header">
                  <strong>
                    The Roaring Donkey
                  </strong>
                </div>
                <div className="content">
                  {' '}
                    A great minimalist site for a Whiskey company. The owners came to me with a design from Adobe and asked me to "make it real" for them.
                    Anyone who has worked with Adobe tools before knows how overly complicated and cluttered the code can be coming from there. So I decided
                    to write this entire site from scratch to reduce the clutter.
                  <br/>
                  <br/>
                  <img src={gig3} alt="gig"/>
                  <br/>
                  <br/>
                    Fully responsive with a nice mobile hamburger menu, and a page template for the owners to add to the site whenever they'd like.
                    I received compliments on the cleanliness of my code and organization of my CSS.
                </div>
                <div className="actions">
                  <Popup trigger={<button className = "button" > Tech < /button>} position="top center" closeOnDocumentClick="closeOnDocumentClick">
                    <span className="popup">
                      HTML from scratch
                      <br/>
                      CSS from scratch
                      <br/>
                      Template page creation for future additions
                    </span>
                  </Popup>

                </div>
              </div>)
            }
          </Popup>
        </div>
      </div>

      <div className="fl w-50 pa3">
        <div className="outline tc pv3">
          <Popup className="animate" trigger={<img src = {
              logoReact
            }
            className = "App-logo" alt = "gig" />} modal="modal">
            {
              close => (<div className="modal">

                <div className="header">
                  <strong>
                    React Q&A App
                  </strong>
                </div>
                <div className="content">
                  {' '}
                    A Q&A App built in React. This app utilizes Node and Express on the backend to support the Questions and Answers API.
                  <br/>
                  <br/>
                  <img src={gig4} alt="gig"/>
                  <br/>
                  <br/>
                    This app also uses AuthO for logging in via email or Google, as well as authorization to answer questions.
                    Non-authorized users can see questions and answers, but only authorized users can submit answers.
                </div>
                <div className="actions">
                  <Popup trigger={<button className = "button" > Tech < /button>} position="top center" closeOnDocumentClick="closeOnDocumentClick">
                    <span className="popup">
                      ReactJS
                      <br/>
                      NodeJS
                      <br/>
                      Express
                      <br/>
                      AuthO
                    </span>
                  </Popup>

                </div>
              </div>)
            }
          </Popup>
        </div>
      </div>

      <div className="fl w-50 pa3 none">
        <div className="outline tc pv3">
          <Popup className="animate" trigger={<img src = {
              logoReact
            }
            className = "App-logo" alt = "gig" />} modal="modal">
            {
              close => (<div className="modal">

                <div className="header">
                  <strong>
                    Go Feed Me
                  </strong>
                </div>
                <div className="content">
                  {' '}
                  A beautiful food delivery site, similar to GrubHub, for Rural Georgia. The site was built using Codeigniter, but was unfortunately severely restricted by the agency who built it initially. The business owner came to me in hopes she could further her design and regain access to more parts of their site. This is what I gave them:
                  <br/>
                  <br/>
                  <img src={gig1} alt="gig"/>
                  <br/>
                  <br/>
                  Transferring all the old code from a CentOS server to a new WordPress setup, allowed the business owner to regain control of their site, and allowed me to give them a much more fluid design.
                </div>
                <div className="actions">
                  <Popup trigger={<button className = "button" > Tech < /button>} position="top center" closeOnDocumentClick="closeOnDocumentClick">
                    <span className="popup">
                      CSS customization
                      <br/>
                      JavaScript customization
                      <br/>
                      PayPal integration
                    </span>
                  </Popup>

                </div>
              </div>)
            }
          </Popup>
        </div>
      </div>

      <div className="fl w-50 pa3 none">
        <div className="outline tc pv3">
          <Popup className="animate" trigger={<img src = {
              logoReact
            }
            className = "App-logo" alt = "gig" />} modal="modal">
            {
              close => (<div className="modal">

                <div className="header">
                  <strong>
                    Go Feed Me
                  </strong>
                </div>
                <div className="content">
                  {' '}
                  A beautiful food delivery site, similar to GrubHub, for Rural Georgia. The site was built using Codeigniter, but was unfortunately severely restricted by the agency who built it initially. The business owner came to me in hopes she could further her design and regain access to more parts of their site. This is what I gave them:
                  <br/>
                  <br/>
                  <img src={gig1} alt="gig"/>
                  <br/>
                  <br/>
                  Transferring all the old code from a CentOS server to a new WordPress setup, allowed the business owner to regain control of their site, and allowed me to give them a much more fluid design.
                </div>
                <div className="actions">
                  <Popup trigger={<button className = "button" > Tech < /button>} position="top center" closeOnDocumentClick="closeOnDocumentClick">
                    <span className="popup">
                      CSS customization
                      <br/>
                      JavaScript customization
                      <br/>
                      PayPal integration
                    </span>
                  </Popup>

                </div>
              </div>)
            }
          </Popup>
        </div>
      </div>

      <Link to="/" className="App-link">
        <h3>
          <code>Back Home</code>
        </h3>
      </Link>
      <Switch>
        <Route exact="exact" path="/"/>
        <Route exact="exact" path="showcase" component={Showcase}/>
        <Route exact="exact" path="/gfm" component={Gfm}/>
      </Switch>

    </div>);
  }
}

export default Portfolio;
