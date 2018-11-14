import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="fl w-100 pa2 header">

        <div className="fl w-20 pa2 dim">
          <p><strong><code className="blue">const</code> <code>ryanTabassi</code>= <code className="orange">fullStackDeveloper;</code></strong></p>
        </div>


        <a href="https://linkedin.com/in/ryan-tabassi">
          <div className="fl w-20 pa2 dim">
            <i class="fab fa-linkedin fa-2x"></i>
          </div>
        </a>

        <a href="https://twitter.com/Ar3Tea">
          <div className="fl w-20 pa2 dim ">
            <i class="fab fa-twitter fa-2x"></i>
          </div>
        </a>

        <a href="https://github.com/ar3tea">
          <div className="fl w-20 pa2 dim">
            <i class="fab fa-github fa-2x"></i>
          </div>
        </a>

        <div className="fl w-20 pa2 dim"><p><strong><code>Ryan.Tabassi @ Gmail.com</code></strong></p></div>
      </div>
    );
  }
}

export default Header;
