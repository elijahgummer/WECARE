import React from "react";
import "./css/Hero.css"; // Importing the CSS file
import { PrimButton, SecButton } from './Buttons';

function Hero() {
  return (
    <div id="hero">
      <div className="content">
        <h1>We Care About You.</h1>
        <p>Get the care you need, from professionals who are leaders in their fields.</p>
        <div className="button-container">
        <SecButton>MAKE AN APPOINTMENT</SecButton>
        <PrimButton>LEARN MORE</PrimButton>
        </div>
      </div>
    </div>
  );
}
export default Hero;
