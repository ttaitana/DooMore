import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import "../style/main.scss";
import { ReactComponent as Mlogo } from "../assets/main_logo.svg";
import Navbar from "./subcomponent/navbar";
import { TweenMax, Expo } from "gsap";
// import homeVideo from "../assets/videos/home_video.mp4";

export default function Home() {
  let box = useRef(null);
  // let vid = useRef(null);
  useEffect(() => {
    TweenMax.to(box, 0, {
      height: "100vh",
      opacity: 1
    }).then(() => {
      TweenMax.to(box, 0.6, {
        y: box.offsetHeight,
        delay: 0.1
      }).then(() => {
        TweenMax.to(box, 0, {
          display: "none"
        });
      });
    });
  });

  return (
    <div>
      <div
        className="box-transition"
        ref={el => {
          box = el;
        }}
      ></div>
      <FadeIn delay="300" transitionDuration="500">
        <div className="">
          <Navbar />
          <div className="" id="home">
            <FadeIn delay="300" transitionDuration="500">
              <h1>
                <span className="highlight eng">DO MORE</span>
              </h1>
              <h2 className="eng">A tool for success</h2>
              <Link to="/card">
                <Mlogo width={280} className="main-logo" />
              </Link>
            </FadeIn>
          </div>
        </div>
        {/* <div className="video-container">
          <div
            className="box-transition"
            ref={el => {
              vid = el;
            }}
          ></div>
        </div> */}
      </FadeIn>
      {/* <div className="video-container">
        <video autoPlay loop className="myVideo">
          <source src={homeVideo} type="video/mp4"/>
        </video>
      </div> */}
    </div>
  );
}
