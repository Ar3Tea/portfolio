import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="fl w-100 pa1 header">

        <div className="fl w-20 pa2 dim">
          <p><code className="blue">const</code> <code>ryanTabassi</code>= <code className="orange">fullStackDeveloper;</code></p>
        </div>


        <a href="https://linkedin.com/in/ryan-tabassi" target="_blank" rel="noopener noreferrer">
          <div className="fl w-20 pa1 dim">
            <i class="fab fa-linkedin fa-2x"></i>
          </div>
        </a>

        <a href="https://twitter.com/Ar3Tea" target="_blank" rel="noopener noreferrer">
          <div className="fl w-20 pa1 dim ">
            <i class="fab fa-twitter fa-2x"></i>
          </div>
        </a>

        <a href="https://github.com/ar3tea" target="_blank" rel="noopener noreferrer">
          <div className="fl w-20 pa1 dim">
            <i class="fab fa-github fa-2x"></i>
          </div>
        </a>

        <a href="mailto:ryan.tabassi@gmail.com">
        <div className="fl w-20 pa1 dim"><p className="left"><strong><code>Ryan.Tabassi@Gmail.com</code></strong></p></div>
        </a>
      </div>
    );
  }
}

export default Header;
