import React, { Component } from "react";
import profilePicture from "../img/profile.png";
import SocialNetwork from "../components/SocialNetwork";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="condiv">
        <div className="about flex">
          <img
            src={profilePicture}
            className="profilePicture"
            alt="profile"
          ></img>
          <div className="about-description">
            <h1 className="subtopic">About Me</h1>
            <br />
            <h1>I'm Daniel Kang</h1>
            <h3>
              Full Stack Web <u>Developer</u>
            </h3>
            <br />
            <p>
              Organized, collaborative, and Full Stack web developer with 2+
              years of professional experience in dynamic and deadline-driven
              work environments. Eager to learn new things and to cooperate with
              others. In previous roles participated on developing and maintaing
              web application under JSF & Primfaces framework that manipulates
              more than billions of NoSQL records on each collection.
            </p>
          </div>
        </div>
        <SocialNetwork />
      </div>
    );
  }
}
export default About;
