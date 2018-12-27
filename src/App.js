import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Portfolio from './components/Portfolio.js';
import Blog from './components/Blog.js';
import BlogPost from './components/BlogPost.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route exact path="/blog" component={Blog} />
        <Route path='/blog/:blogPost' component={BlogPost}/>
      </Switch>

        <Footer />

      </div>
    );
  }
}

export default App;
