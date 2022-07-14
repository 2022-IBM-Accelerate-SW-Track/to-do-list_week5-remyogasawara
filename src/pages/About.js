import React, { Component } from 'react';
import "./About.css";
import profile_pic_remy from "../assets/profile_pic_remy.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            // Image goes here            
            alt="Profile Pic"
            src={profile_pic_remy}
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title"><p>Remy Ogasawara</p></div>
          <div className="brief_description">
            <p>
            I am a second year Computer Science major at the University of California, Santa Cruz.
            I also love to crochet, cook and garden. 
            A fun fact about me is that my family owns bees in our backyard.
            </p>
          </div>
        </div>
      </div>
    </div>
  
    )
  }
}