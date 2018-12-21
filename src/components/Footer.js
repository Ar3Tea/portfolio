import React, { Component } from 'react';
import logoReact from '../styles/logo.svg';

class Footer extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="fl w-50 pa3 bw1 bb bt b--black">
            <img src={logoReact} className="App-logo" alt="logo" />
          </div>

          <div className="fl w-50 pa3 bw1 bb bt b--black">
              <img src={logoReact} className="App-logo" alt="logo" />
          </div>
      </div>
        Made  with  <i class="fa fa-heart" />  and  <i class="fab fa-react" />,  by <a href="https://github.com/Ar3Tea" target="_blank" rel="noopener noreferrer">me</a>!
      </div>
    );
  }
}

export default Footer;
