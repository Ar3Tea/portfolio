import React, { Component } from 'react';
import '../styles/App.css';
import Slider from "react-slick";
import logoReact from '../styles/logo.svg';

class Reviews extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true
    };

    return (
      <Slider {...settings} className="small">
        <div>
          <h3>Elizabeth Towler</h3>
          <img src={logoReact} className="App-logo" alt="elizabeth" />
          <blockquote>
            review here
          </blockquote>
        </div>

        <div>
          <h3>2</h3>
        </div>

        <div>
          <h3>3</h3>
        </div>

        <div>
          <h3>4</h3>
        </div>

        <div>
          <h3>5</h3>
        </div>

        <div>
          <h3>6</h3>
        </div>

      </Slider>
    );
  }
}

export default Reviews;
