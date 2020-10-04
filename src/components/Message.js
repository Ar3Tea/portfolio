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
          <code>I'm constantly building out and improving this site, but you can check out my GitHub Page:</code>
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
          <code>You can also look at my ever evolving Portfolio <Link to="/portfolio" className="App-link">Here</Link> Or read my expanding<Link to="/blog" className="App-link"> Blog</Link></code>
        </h3>
        <h4>
          <code>I have taken a small break from updating this because I have been very focused on a new job I have landed!</code>
        `</h4>

        <Switch>
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>

      </div>
    );
  }
}

export default Message;
