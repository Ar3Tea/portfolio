import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Banner from './components/Banner.js';
import Message from './components/Message.js';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Message />
        <Footer />
      </div>
    );
  }
}

export default App;
