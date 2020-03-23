import React, { Component } from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import { ReactComponent as Next_btn } from "../assets/next-btn.svg";
import Decorator from "../assets/videos/asset_gender.mp4";

export default class Gender extends Component {
  constructor() {
    super();
    this.slectGender = this.slectGender.bind(this);
  }
  slectGender(e) {
    let wrapper = [].slice.call(
      document.querySelector(".btn-wrapper-row").children
    );
    wrapper.forEach(element => {
      element.classList.remove("btn-active");
    });
    console.log(wrapper);
    e.target.classList.add("btn-active");
  }
  render() {
    const {
      match: { params }
    } = this.props;
    const { name } = params;
    return (
      <div>
        <div className="video-container">
          <FadeIn transitionDuration="500">
            <video autoPlay loop className="myVideo">
              <source src={Decorator} type="video/mp4" />
            </video>
          </FadeIn>
        </div>
        <FadeIn className="form container" delay="300" transitionDuration="500">
          <h1>HI! {name}</h1>
          <h1>Please choose your gender</h1>
          <div className="btn-wrapper-row">
            <div className="btn" onClick={this.slectGender}>
              Male
            </div>
            <div className="btn" onClick={this.slectGender}>
              Female
            </div>
          </div>
          {/* <Link to="/birthdate">Click me</Link> */}
          <Link to={`/birthdate`}>
            <Next_btn width={175} className="main-logo" />
          </Link>
        </FadeIn>
      </div>
    );
  }
}
