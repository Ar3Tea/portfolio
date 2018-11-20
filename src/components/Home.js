import React, { Component } from 'react';
// import { Route, Link, Switch } from "react-router-dom";
import Banner from '../components/Banner.js';
import Message from '../components/Message.js';

class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Message />
      </div>
    );
  }
}

export default Home;
