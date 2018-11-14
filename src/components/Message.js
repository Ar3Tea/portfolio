import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Portfolio from '../components/Portfolio.js';
import Blog from '../components/Blog.js';

class Message extends Component {
  render() {
    return (
      <div>
        <h2>
          <code>Welcome to Are's Basement</code>
        </h2>
        <h3>
          <code>I'm building something awesome! My website is currently under construction, but you can checkout my GitHub Page below:</code>
        </h3>
        <a
          className="App-link"
          href="https://ar3tea.github.io"
          target="_blank"
          rel="noopener noreferrer"
          >
          <h4>GitHub Page</h4>
        </a>
        <h3>
          <code>You can also checkout my Portfolio <Link to="/portfolio" className="App-link">Here</Link> Or my <Link to="/blog" className="App-link">Blog</Link></code>
        </h3>

        <Switch>
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>

      </div>
    );
  }
}

export default Message;
