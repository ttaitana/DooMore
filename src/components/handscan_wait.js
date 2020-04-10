import React, {useEffect, useRef} from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { ReactComponent as Hand_ready } from "../assets/hand_ready.svg";
import {TweenMax} from 'gsap'
import "../style/animate.scss";

export default function HandWait() {
  let box = useRef(null);
  useEffect(() => {
    TweenMax.to(box, 0, {
      height: "100vh",
      opacity: 1,
    }).then(() => {
      TweenMax.to(box, 0.6, {
        y: box.offsetHeight,
        delay: 0.1,
      }).then(() => {
        TweenMax.to(box, 0, {
          display: "none",
        });
      });
    });
  });
  return (
    <div className="eng eng-light" id="hand-w">
      <div
        className="box-transition"
        ref={(el) => {
          box = el;
        }}
      ></div>
      <FadeIn className="container" delay="500" transitionDuration="1000">
        <p className="header">Ready to discover your fate ?</p>
        <Hand_ready height={"40vh"} />
        <div className="txt-wrapper">
          <p>Take a photo of the palms to get your personal prediction</p>
        </div>
        <Link to={`/handscan`}>
          <div className="btn-long take-photo">TAKE A PHOTO</div>
        </Link>
      </FadeIn>
    </div>
  );
}
