import React, { Component } from 'react';
import banner from '../styles/The_Hideout.jpg';
import '../styles/App.css';

class Banner extends Component {
  render() {
    return (
      <div>
        <div className="fl w-100 pa1 bn"></div>

          <img src={banner} alt="logo" />
      </div>
    );
  }
}

export default Banner;
