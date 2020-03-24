import React, { useRef, useEffect} from "react";
import { useHistory } from "react-router-dom";
import myIntro from "../assets/intro.mp4";
import { TweenMax, Expo } from "gsap";

export default function Intro() {
  let history = useHistory();
  let box = useRef(null);

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
          history.push("/home");
        }, 0);
      });
    }, 500)
  };

  return (
    <div className="video-container allwhite">
      <div
        className="box-transition"
        ref={el => {
          box = el;
        }}
      ></div>
      <video autoPlay className="myVideo" onEnded={myHandler}>
        <source src={myIntro} type="video/mp4"/>
      </video>
    </div>
  );
}
