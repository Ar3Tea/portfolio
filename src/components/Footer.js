import React, { Component } from 'react';
//import logoReact from '../styles/logo.svg';

class Footer extends Component {
  render() {
    return (
      <div>
        <hr />
        <a href="mailto:ryan.tabassi@gmail.com" className="mobile-display">
        <div className="pa1 dim"><p className="left"><strong><code>Ryan.Tabassi</code><code>@Gmail.com</code></strong></p></div>
        </a>
        Made  with  <i className="fa fa-heart" />  and  <i className="fab fa-react" />,  by <a href="https://github.com/Ar3Tea" target="_blank" rel="noopener noreferrer">me</a>!
      </div>
    );
  }
}

export default Footer;
