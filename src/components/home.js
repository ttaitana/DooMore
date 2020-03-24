import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import "../style/main.scss";
import { ReactComponent as Mlogo } from "../assets/main_logo.svg";
import Navbar from "./subcomponent/navbar";
import { TweenMax, Expo } from "gsap";
import HandStart from "../assets/home/hand_start.mp4";
import HandLoop from "../assets/home/hand_main.mp4";
import BGMusic from "../assets/home/sound_s.mp3";
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

  const replace = e => {
    e.target.remove();
    // document.querySelector("#handLoop").play()
  };

  return (
    <div>
      <div
        className="box-transition"
        ref={el => {
          box = el;
        }}
      ></div>
      <div className="video-container">
        <video autoPlay className="myVideo2" onEnded={replace}>
          <source src={HandStart} type="video/mp4" />
        </video>
        <video autoPlay loop className="myVideo2">
          <source src={HandLoop} type="video/mp4" />
        </video>
        <audio autoPlay preload loop volume={0.5} id="music">
          <source src={BGMusic} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      <FadeIn delay="300" transitionDuration="500">
        <div className="">
          <Navbar />
          <div className="" id="home">
            <FadeIn delay="300" transitionDuration="500">
              <div className="video-container"></div>
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
    </div>
  );
}
