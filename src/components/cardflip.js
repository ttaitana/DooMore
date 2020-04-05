import React, { Component } from "react";
import { useHistory, useParams } from "react-router-dom";
import { TweenMax } from "gsap";
import back1 from "../assets/card_set/back1.png";
import front1 from "../assets/card_set/front1.png";
import back2 from "../assets/card_set/back2.png";
import front2 from "../assets/card_set/front2.png";
import back3 from "../assets/card_set/back3.png";
import front3 from "../assets/card_set/front3.png";
import back4 from "../assets/card_set/back4.png";
import front4 from "../assets/card_set/front4.png";
import { useRef } from "react";
import FadeIn from 'react-fade-in'
import Decorator from '../assets/videos/flip_card_bg.mp4'

export default function CardFlip() {
  let { card_id } = useParams();
  let back_card = [back1, back2, back3, back4];
  let front_card = [front1, front2, front3, front4];
  let is_flip = false;
  let history = useHistory();
  let btns = useRef(null);

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
      <div className="flip-card-wrapper">
        <div class="flip-card">
          <div class="flip-card-inner" onClick={fliping}>
            <div class="flip-card-front">
              <img width="20%" src={back_card[card_id - 1]} alt="" />
            </div>
            <div class="flip-card-back">
              <img width="20%" src={front_card[card_id - 1]} />
            </div>
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
