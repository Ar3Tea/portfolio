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
import gig5 from '../styles/Fasterpants.jpg';
import gig6 from '../styles/SbarroPizza.jpg';
import gig7 from '../styles/SbarroInternational.jpg';
import gig8 from '../styles/realgoodmarketing.jpg';
import gig9 from '../styles/Arctype-Labs.jpg';
const data = require('../data.json');

class Portfolio extends Component {
  render() {
    return (<div>
      <Banner/>
      <div>
      <span>Click any box to see a project I've done</span>
      </div>
      <div className="fl w-33 pa3">
        {data.map((d, i) => 
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
                  A beautiful food delivery site, similar to GrubHub, for Rural Georgia. The site was built using Codeigniter, but was unfortunately severely restricted by the agency who built it initially. The business owner came to me in hopes she could further her design and regain access to more parts of their site. This is what I gave them:
                  <br/>
                  <br/>
                  <img src={gig1} alt="gig"/>
                  <br/>
                  <br/>
                  Transferring all the old code from a CentOS server to a new WordPress setup, allowed the business owner to regain control of their site, and allowed me to give them a much more fluid design.
                </div>
                <div className="actions">
                  <Popup trigger={<button className = "button"> Tech </button>} position="top center" closeOnDocumentClick="closeOnDocumentClick">
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
        )}
      </div>

      <div className="fl w-33 pa3">
        <div className="outline tc pv3">
          <Popup className="animate" trigger={<img src = {logoReact}
            className = "App-logo" alt = "gig" />} modal="modal">
            {
              close => (<div className="modal">

                <div className="header">
                  <strong>
                  <a href="https://www.scootersnchairs.com/pages/scooter-help-center" className="App-link">Scooters n Chairs</a>
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
                  <Popup trigger={<button className = "button"> Tech </button>} position="top center" closeOnDocumentClick="closeOnDocumentClick">
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

      <div className="fl w-33 pa3">
        <div className="outline tc pv3">
          <Popup className="animate" trigger={<img src = {logoReact}
            className = "App-logo" alt = "gig" />} modal="modal">
            {
              close => (<div className="modal">

                <div className="header">
                  <strong>
                  <a href="https://jovial-haibt-bedaf5.netlify.com/" className="App-link">The Roaring Donkey</a>
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
                  <Popup trigger={<button className = "button"> Tech </button>} position="top center" closeOnDocumentClick="closeOnDocumentClick">
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

      <div className="fl w-33 pa3">
        <div className="outline tc pv3">
          <Popup className="animate" trigger={<img src = {logoReact}
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
                    Non-authorized users can see questions and answers, but only authorized users can submit new questions and answers.
                </div>
                <div className="actions">
                  <Popup trigger={<button className = "button"> Tech </button>} position="top center" closeOnDocumentClick="closeOnDocumentClick">
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

      <div className="fl w-33 pa3">
        <div className="outline tc pv3">
          <Popup className="animate" trigger={<img src = {logoReact}
            className = "App-logo" alt = "gig" />} modal="modal">
            {
              close => (<div className="modal">

                <div className="header">
                  <strong>
                  <a href="https://www.fasterpants.com/" className="App-link">Fasterpants</a>
                  </strong>
                </div>
                <div className="content">
                  {' '}
                    Fasterpants is a fashion business out of New York City. The owner of this startup came to me with a very outdated and unintuitive platform to showcase is work.
                  <br/>
                  <br/>
                  <img src={gig5} alt="gig"/>
                  <br/>
                  <br/>
                  A beautiful outfit algorithm was being hidden behind terrible flow and design so the user was hard pressed to get to where they needed to be.
                  I completely tore down the old site rebuilt from scratch. After a lot of tweaking and building, we came out with this. Further iterations are planned.
                </div>
                <div className="actions">
                  <Popup trigger={<button className = "button"> Tech </button>} position="top center" closeOnDocumentClick="closeOnDocumentClick">
                    <span className="popup">
                      CSS/HTML customization
                      <br/>
                      JavaScript customization
                      <br/>
                      Ruby on Rails
                    </span>
                  </Popup>

                </div>
              </div>)
            }
          </Popup>
        </div>
      </div>

      <div className="fl w-33 pa3">
        <div className="outline tc pv3">
          <Popup className="animate" trigger={<img src = {logoReact}
            className = "App-logo" alt = "gig" />} modal="modal">
            {
              close => (<div className="modal">

                <div className="header">
                  <strong>
                  <a href="https://sbarro.com/" className="App-link">Sbarro Pizza</a>
                  </strong>
                </div>
                <div className="content">
                  {' '}
                    I was sub-contracted to help the Dev and Marketing team at Sbarro Pizza with some new connections, adding new areas for content, and switching headers from images to indexable text.
                  <br/>
                  <br/>
                  <img src={gig6} alt="gig"/>
                  <br/>
                  <br/>
                    Sbarro has a unique setup due to all their franchises and locations (over 600), so it utilizes an API to pull in data to a WordPress frame. Utilizing Custom Fields, Custom API calls, and Custom Design.
                    The team at Sbarro was so pleased with my work we've begun discussing a more in-depth redesign.
                </div>
                <div className="actions">
                  <Popup trigger={<button className = "button"> Tech </button>} position="top center" closeOnDocumentClick="closeOnDocumentClick">
                    <span className="popup">
                      CSS/HTML customization
                      <br/>
                      JavaScript customization
                      <br/>
                      API Usage
                      <br />
                      Custom Fields
                      <br />
                      PHP
                      <br />
                      WordPress
                    </span>
                  </Popup>

                </div>
              </div>)
            }
          </Popup>
        </div>
      </div>

      <div className="fl w-33 pa3">
        <div className="outline tc pv3">
          <Popup className="animate" trigger={<img src = {logoReact}
            className = "App-logo" alt = "gig" />} modal="modal">
            {
              close => (<div className="modal">

                <div className="header">
                  <strong>
                  <a href="https://international.sbarro.com/" className="App-link">Sbarro International Franchise</a>
                  </strong>
                </div>
                <div className="content">
                  {' '}
                    Sbarro was so pleased with my work that they asked me to build their International Franchise site!
                  <br/>
                  <br/>
                  <img src={gig7} alt="gig"/>
                  <br/>
                  <br/>
                    The Sbarro Marketing team had trouble making edits to their main site because of the complexity involved with its architecture. With that in mind
                    Sbarro asked me to specifically build them a site they would have easy editable control over in the future. This was a challenge with their design,
                    but it was quite fun, and I succeeded! This is their WordPress site I built for them.
                </div>
                <div className="actions">
                  <Popup trigger={<button className = "button"> Tech </button>} position="top center" closeOnDocumentClick="closeOnDocumentClick">
                    <span className="popup">
                      CSS/HTML customization
                      <br/>
                      JavaScript customization
                      <br/>
                      WordPress
                    </span>
                  </Popup>

                </div>
              </div>)
            }
          </Popup>
        </div>
      </div>

      <div className="fl w-33 pa3">
        <div className="outline tc pv3">
          <Popup className="animate" trigger={<img src = {logoReact}
            className = "App-logo" alt = "gig" />} modal="modal">
            {
              close => (<div className="modal">

                <div className="header">
                  <strong>
                  <a href="https://realgood.marketing" className="App-link">Real Good Marketing</a>
                  </strong>
                </div>
                <div className="content">
                  {' '}
                    A small marketing collective startup that needed some web visibility. After contracting with them for a bit, I was asked to get the live on the web!
                  <br/>
                  <br/>
                  <img src={gig8} alt="gig"/>
                  <br/>
                  <br/>
                    A very fun styled theme in WordPress that tells the story of the company, showcases the work, testimonials and team. This was a fun project
                    since I got to play with a lot more colors than normal. And icons that screamed FUN!
                </div>
                <div className="actions">
                  <Popup trigger={<button className = "button"> Tech </button>} position="top center" closeOnDocumentClick="closeOnDocumentClick">
                    <span className="popup">
                      CSS/HTML customization
                      <br/>
                      JavaScript customization
                      <br/>
                      WordPress
                    </span>
                  </Popup>

                </div>
              </div>)
            }
          </Popup>
        </div>
      </div>

      <div className="fl w-33 pa3">
        <div className="outline tc pv3">
          <Popup className="animate" trigger={<img src = {logoReact}
            className = "App-logo" alt = "gig" />} modal="modal">
            {
              close => (<div className="modal">

                <div className="header">
                  <strong>
                  <a href="#" className="App-link">Arcytybe Labs</a>
                  </strong>
                </div>
                <div className="content">
                  {' '}
                    A landing page for a Machine Learning company providing services to the Enterprise and Start-ups.
                  <br/>
                  <br/>
                  <img src={gig9} alt="gig"/>
                  <br/>
                  <br/>
                    This landing page was built in ReactJS Utilizing a Figma design file. This design was very aesthetically pleasing with the
                    pastel colors used and really unique icons. One challenge was being able to place unique backgrounds in unique places in order
                    to give the overall feel of technology driven services.
                </div>
                <div className="actions">
                  <Popup trigger={<button className = "button"> Tech </button>} position="top center" closeOnDocumentClick="closeOnDocumentClick">
                    <span className="popup">
                      CSS/HTML customization
                      <br/>
                      ReactJS
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
