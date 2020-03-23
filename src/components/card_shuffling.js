import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FadeIn from "react-fade-in";
import { TweenMax, Expo } from "gsap";
import { Controller, Scene } from "react-scrollmagic";

export default function CardShuffer() {
  let butto = useRef(null);
  let card1 = useRef(null);
  let card2 = useRef(null);
  let card3 = useRef(null);
  let card4 = useRef(null);

  let history = useHistory();

  const nextPage = () => {
      TweenMax.to(butto, 1, {
        opacity: 0,
        ease: Expo.easeIn
      })
      TweenMax.to(card1, 1, {
        opacity: 0,
        y: 0,
        ease: Expo.easeIn
      });
      TweenMax.to(card2, 1, {
        opacity: 0,
        y: -2400,
        ease: Expo.easeIn
      });
      TweenMax.to(card3, 1, {
        opacity: 0,
        y: 0,
        ease: Expo.easeIn
      });
      TweenMax.to(
        card4,
        1,
        {
          opacity: 0,
          y: -2400,
          ease: Expo.easeIn
        },
        0.5
      ).then(() => {
        setTimeout(() => {
          history.push("/name");
        }, 500);
      });
  };

  const handleScroll = function(event) {
    TweenMax.to(card1, 1, {
      y: -3000 + window.scrollY * 0.5,
      ease: Expo.easeOut
    });
    TweenMax.to(card2, 1, {
      y: -500 - window.scrollY * 0.7,
      ease: Expo.easeOut
    });
    TweenMax.to(card3, 1, {
      y: -3000 + window.scrollY * 0.7,
      ease: Expo.easeOut
    });
    TweenMax.to(card4, 1, {
      y: -500 - window.scrollY * 0.5,
      ease: Expo.easeOut
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setTimeout(() => {
      let btn = document.querySelector('.btn-border')
      btn.style.opacity = 1
    }, 2000)
  }, [])

  return (
    <div id="card-page-wrap">
      <div className="btn-wrapper">
        <div id="card-btn">
          <div className="btn btn-border" onClick={nextPage} ref={el => {butto = el}}>
            Click me
          </div>
        </div>
      </div>
      <FadeIn duration={800}>
      <Controller>
      <Scene
          duration={4000}
          pin={{ pushFollowers: false }}
          reverse={true}
          indicators={false}
          offset={80}
          triggerHook={0.14}
        >
          <div
            className="flex-wrapper"
            >
              <div
                className="card-bg"
                id="cardNo1"
                ref={el => {
                  card1 = el;
                }}
              ></div>
              <div
                className="card-bg"
                id="cardNo2"
                ref={el => {
                  card2 = el;
                }}
              ></div>
              <div
                className="card-bg"
                id="cardNo3"
                ref={el => {
                  card3 = el;
                }}
              ></div>
              <div
                className="card-bg"
                id="cardNo4"
                ref={el => {
                  card4 = el;
                }}
              ></div>
          </div>
        </Scene>
      </Controller>
      </FadeIn>
    </div>
  );
}
