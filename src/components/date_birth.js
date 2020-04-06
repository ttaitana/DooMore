import React, { useRef, useEffect } from "react";
import { TweenMax, Expo } from "gsap";
import { Link } from "react-router-dom";
import { ReactComponent as Next_btn } from "../assets/next-btn.svg";
import FadeIn from "react-fade-in";
import Decorator from "../assets/videos/asset_date.mp4";
import { ReactComponent as Border } from "../assets/borde.svg";
import { useHistory } from "react-router-dom";

// What  your  date  of  birth ?

export default function BirthDate() {
  let box = useRef(null);
  let history = useHistory();

  useEffect(() => {
    TweenMax.to(box, 0, {
      transform: "skewY(-10deg)",
      y: (-box.offsetHeight * 3) / 1.5,
      ease: Expo.easeOut
    }).then(() => {
      TweenMax.to(box, 0, {
        opacity: 1
      });
    });
  });
  const myHandler = () => {
    setTimeout(() => {
      TweenMax.to(box, 1, {
        transform: "skewX(0deg)",
        y: -100,
        height: '120vh',
        ease: Expo.easeOut
      }).then(() => {
        setTimeout(() => {
          history.push("/handwait");
        }, 0);
      });
    }, 500)
  };
    return (
      <div className="eng page-wrapper">
        <div
        className="box-transition"
        ref={el => {
          box = el;
        }}
      ></div>
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
          <Next_btn width={175} className="sub-logo" onClick={myHandler}/>
        </FadeIn>
      </div>
    );
  }

