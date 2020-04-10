import React, { Component } from "react";
import { useHistory, useParams } from "react-router-dom";
import { TweenMax } from "gsap";
import { ReactComponent as Back1 } from "../assets/card_set/back1.svg";
import { ReactComponent as Front1 } from "../assets/card_set/front1.svg";
import { ReactComponent as Back2 } from "../assets/card_set/back2.svg";
import { ReactComponent as Front2 } from "../assets/card_set/front2.svg";
import { ReactComponent as Back3 } from "../assets/card_set/back3.svg";
import { ReactComponent as Front3 } from "../assets/card_set/front3.svg";
import { ReactComponent as Back4 } from "../assets/card_set/back4.svg";
import { ReactComponent as Front4 } from "../assets/card_set/front4.svg";
import { useRef } from "react";
import FadeIn from "react-fade-in";
import Decorator from "../assets/videos/flip_card_bg.mp4";
import '../style/main.scss'
import { useEffect } from "react";

export default function CardFlip() {
  let { card_id } = useParams();
  let back_card = [<Back1 />, <Back2 />, <Back3 />, <Back4 />];
  let front_card = [<Front1 />, <Front2 />, <Front3 />, <Front4 />];
  let is_flip = false;
  let history = useHistory();
  let btns = useRef(null);
  let cards = useRef(null)

  useEffect(() => {
    TweenMax.to(
      cards, 1,
      {
        opacity: 1,
        y: 0
      }
    )
  })

  function fliping() {
    if (is_flip) {
      history.push(`/result/${card_id}`);
    }
    document.querySelector(".flip-card-inner").className += " flip";
    is_flip = true;
    setTimeout(() => {
      TweenMax.to(btns, 1, {
        opacity: 1,
      });
    }, 1500);
  }
  return (
    <div id="cardflip">
      {/* <p>Card id is {card_id}</p> */}
      <div className="video-container">
        <FadeIn transitionDuration="500">
          <video autoPlay loop className="myVideo">
            <source src={Decorator} type="video/mp4" />
          </video>
        </FadeIn>
      </div>
      <div className="flip-card-wrapper" ref={el => {cards = el}}>
        <div class="flip-card">
          <div class="flip-card-inner" onClick={fliping}>
            <div class="flip-card-front">{back_card[card_id - 1]}</div>
            <div class="flip-card-back">{front_card[card_id - 1]}</div>
          </div>
        </div>
      </div>
      <div
        className="btn-wrapper"
        ref={(el) => {
          btns = el;
        }}
      >
        <div className="btn eng">CLICK ON THE CARD</div>
      </div>
    </div>
  );
}
