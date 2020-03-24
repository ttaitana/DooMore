import React from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { ReactComponent as Hand_ready } from "../assets/hand_ready.svg";
import "../style/animate.scss";

export default function HandWait() {
  return (
    <div className="eng eng-light" id="hand-w">
      <FadeIn className="container" delay="150" transitionDuration={500}>
        <p className="header">Ready to discover your fate ?</p>
        <Hand_ready height={"40vh"} />
        <div className="txt-wrapper">
          <p>Take a photo of the palms to get your personal prediction</p>
        </div>
        <Link to={`/inconstruct`}>
          <div className="btn-long">TAKE A PHOTO</div>
        </Link>
      </FadeIn>
    </div>
  );
}
