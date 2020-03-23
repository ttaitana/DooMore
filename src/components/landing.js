import React, { useRef } from "react";
import {Link} from 'react-router-dom'
import FadeIn from "react-fade-in";
import "../style/main.scss";
import "../style/animate.scss";
import { ReactComponent as Logo } from '../assets/landing_logo.svg'
import { ReactComponent as Decorator } from '../assets/home_decolator.svg'
import { createRef } from "react";
import { TweenMax, Expo } from "gsap";

export default function Landing(){
    return (
      <div>
        <div className="video-container">
          <FadeIn transitionDuration="500">
            <Decorator width={200} id="de_left"/>
            <Decorator width={200} id="de_right"/>
          </FadeIn>
        </div>
        <FadeIn delay="300" transitionDuration="700" className="text-contain">
          <h1>หากคุณกำลังท้อแท้กับโชคชะตา</h1>
          <h1>หากคุณกำลังเหนื่อยล้ากับชีวิต</h1>
          <h1>
            <span className="highlight">DO MORE</span>
          </h1>
          <h1>จะ “เปลี่ยน” ชีวิตคุณ</h1>
        </FadeIn>
        <Link to="/intro">
          <FadeIn delay="100" className="logo-wrapper">
            {/* <img src={logo} alt="" className="logo" />
            <img src={logo_ring} alt="" className="ring" /> */}
            <Logo width={250} className="main-logo"/>
          </FadeIn>
        </Link>
      </div>
    );
}
