import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import "../style/main.scss";
import "../style/animate.scss";
import { ReactComponent as Logo } from "../assets/landing_logo.svg";
import { ReactComponent as Decorator } from "../assets/home_decolator.svg";

// import { createRef } from "react";
// import { TweenMax, Expo } from "gsap";

export default function Landing() {
  return (
    <div className="scrollmagic-pin-spacer">
      <div className="video-container">
        <FadeIn transitionDuration="500">
          <Decorator width={150} id="de_left" />
          <Decorator width={150} id="de_right" />
        </FadeIn>
      </div>
      <FadeIn delay="500" transitionDuration="1000" className="text-contain">
        <h1 className="f-light">หากคุณกำลังท้อแท้กับโชคชะตา</h1>
        <h1 className="f-light">หากคุณกำลังเหนื่อยล้ากับชีวิต</h1>
        <h1>
          <span className="highlight eng">DO MORE</span>
        </h1>
        <h1 className="f-light">จะ “เปลี่ยน” ชีวิตคุณ</h1>
        <Link to="/intro" className="logo-wrapper">
          <Logo width={250}/>
        </Link>
      </FadeIn>
    </div>
  );
}
