import React, { Component } from "react";
import { ReactComponent as Border } from "../assets/forcast_border.svg";
import decolator from "../assets/forcast_background.png";
import { ReactComponent as Next_btns } from "../assets/logo_white.svg";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import BGMusic from "../assets/home/sound_s.mp3";


export default function Forcast() {
  let number = Math.floor(Math.random() * Math.floor(4)) + 1;
  return (
    <FadeIn>
      <div className="thai container" id="forcast">
      <audio autoPlay preload loop volume={0.5} id="music">
          <source src={BGMusic} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="frame">
          <Border height={"96vh"} />
          <img src={decolator} className="" />
        </div>
        <FadeIn
          className="content-wrapper"
          delay="500"
          transitionDuration="700"
        >
          <h1>
            ลายมือของคุณนั้นตรงกับคำทำนาย <br /> ใบที่ {number}
          </h1>
          <Link to={`/cardflip/${number}`}>
            <Next_btns width={175} className="sub-logo" />
          </Link>
        </FadeIn>
      </div>
    </FadeIn>
  );
}
