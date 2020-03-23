import React, { Component } from "react";
import {Link} from 'react-router-dom'
import logo from "../assets/landing_logo.png";
import logo_ring from "../assets/landing_borde.png";
import FadeIn from "react-fade-in";
import "../style/main.scss";
import "../style/animate.scss";
import { ReactComponent as Logo } from '../assets/landing_logo.svg'

export default class Landing extends Component {
  render() {
    return (
      <div className="">
        <FadeIn delay="100" className="text-contain">
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
}
