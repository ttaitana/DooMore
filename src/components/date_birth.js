import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Next_btn } from "../assets/next-btn.svg";
import FadeIn from "react-fade-in";
import Decorator from "../assets/videos/asset_date.mp4";
import { ReactComponent as Border } from "../assets/borde.svg";

// What  your  date  of  birth ?

export default class BirthDate extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="eng page-wrapper">
        <div className="video-container">
          <FadeIn transitionDuration="500">
            <video autoPlay loop className="myVideo">
              <source src={Decorator} type="video/mp4" />
            </video>
          </FadeIn>
        </div>
        <FadeIn className="container form" delay="150" transitionDuration={500}>
          <div className="frame">
            <Border width={"96vw"} />
          </div>
          <h1>What your date of birth ?</h1>
          <p>(date/month/year)</p>
          <div className="form-control">
            <input type="text" name="name" placeholder="xx/xx/19xx" />
          </div>
          {/* <Link to="/handscan">Click me</Link> */}
          <Link to={`/handwait`}>
            <Next_btn width={175} className="sub-logo" />
          </Link>
        </FadeIn>
      </div>
    );
  }
}
