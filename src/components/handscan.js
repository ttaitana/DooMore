import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import FadeIn from "react-fade-in";
import WebcamBtn from "../assets/webcam-btn.png";
import { TweenMax, Elastic, Power3, Power2 } from "gsap";
import { Link } from "react-router-dom";
import { ReactComponent as Overlay } from "../assets/overlay.svg";

export default function HandScan() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  let imageSrc = null;
  let webcamRef = useRef(null);
  let progress = useRef(null);
  let btn_cp = useRef(null);
  let tx_cp = useRef(null);
  let circle = useRef(null);
  let overlay = useRef(null);
  useEffect(() => {
    console.log(webcamRef);
  });

  const capture = React.useCallback(() => {
    // console.log(webcamRef.getScreenshot());
    imageSrc = webcamRef.getScreenshot();
    // console.log(imageSrc);
    document.querySelector("#pic-web").src = imageSrc;
    document.querySelector("#webcam").remove();
    // const c_length = circle.getTotalLength()
    // console.log(c_length);
    TweenMax.to(document.querySelector("#main_x5F_hand"), 4, {
      strokeDashoffset: 0,
      ease: Power2.easeOut,
    });
    TweenMax.to(document.querySelector("#main_x5F_hand"), 0, {
      strokeDashoffset: 2457.107421875,
      delay: 4
    }).then(() => {
      TweenMax.to(document.querySelector("#main_x5F_hand"), 4, {
        strokeDashoffset: 0,
        ease: Power2.easeOut,
      }).then(() => {
        var Cont = { val: 0 },
          NewVal = 100;
        TweenMax.to(overlay, 1, {
          // y: 10,
          opacity: 0,
        });
        TweenMax.to(tx_cp, 1, {
          y: 10,
          opacity: 0,
        });
        TweenMax.to(btn_cp, 1, {
          y: 10,
          opacity: 0,
        }).then(() => {
          document.querySelector("#webcBtn").remove();
          document.querySelector(".overlay").style.bottom = "unset";
        });
        TweenMax.to(progress, 1, {
          y: 0,
          opacity: 1,
        }).then(() => {
          // document.querySelector("#indicator").style.strokeDashoffset = 'calc(440 - (440 * 90) / 100)';
          TweenMax.to(circle, 5, {
            strokeDashoffset: 0,
            ease: Power3.easeInOut,
            delay: 0.7,
          });
          TweenMax.to(Cont, 5, {
            val: NewVal,
            ease: Power3.easeInOut,
            roundProps: "val",
            delay: 0.7,
            onUpdate: function () {
              document.getElementById("ind_num").innerHTML = Cont.val;
            },
          })
            .then(() => {
              let des = document.querySelector("#desc-contain");
              let child = des.lastElementChild;
              while (child) {
                des.removeChild(child);
                child = des.lastElementChild;
              }
              des = document.querySelector("#forcast_link");
              console.log(des);
              let para = document.createElement("div");
              para.className += "bouncing-ani eng";
              para.style.transition = undefined;
              para.style.width = undefined;
              var t = document.createTextNode("Get Results");
              para.appendChild(t);
              des.appendChild(para);
              console.log("btn created");
            })
            .then(() => {
              let btnb = document.querySelector(".bouncing-ani");
              TweenMax.to(btnb, 2, {
                ease: Elastic.easeOut.config(1, 0.3),
                scale: 1.1,
              });
            });
        });
      });
    });
  }, [webcamRef]);

  return (
    <FadeIn delay={1700}>
      <div id="handscan">
        <Webcam
          audio={false}
          ref={(el) => {
            webcamRef = el;
          }}
          screenshotFormat="image/jpeg"
          height={720}
          width={1280}
          mirrored={true}
          videoConstraints={videoConstraints}
          id="webcam"
        />

        <img src="" id="pic-web" alt="" />
        <div className="overlay-bg">
          <Overlay
            width="1280"
            ref={(el) => {
              overlay = el;
            }}
          />
        </div>
        <div className="overlay">
          {/* <img
            width="500"
            //   src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/15850dda-28a6-4ce7-87dc-aec2351cf436/22e1b2a9-d3a3-4649-b0d8-75828feedfa8_rw_1920.png?h=6c559ec20a042b9d17551f97378c8f76"
            src="https://icons.iconarchive.com/icons/icons8/windows-8/256/Very-Basic-Hand-Cursor-icon.png"
          /> */}
          <br />
          <div
            className="card-wrapper"
            ref={(el) => {
              progress = el;
            }}
          >
            <div className="card">
              <div className="percent">
                <svg>
                  <circle cx="70" cy="70" r="70" />
                  <circle
                    cx="70"
                    cy="70"
                    r="70"
                    id="indicator"
                    ref={(el) => {
                      circle = el;
                    }}
                  />
                </svg>
                <div className="number">
                  <h2>
                    <span id="ind_num">0</span> %
                  </h2>
                </div>
              </div>
              <div className="desc-txt">
                <div id="desc-contain">
                  <p className="eng mt">Prediction in progress...</p>
                  <p className="eng st">Please wait a few minute</p>
                </div>
                <Link to="/forcast" id="forcast_link"></Link>
              </div>
            </div>
          </div>
          <p
            className="eng txt"
            ref={(el) => {
              tx_cp = el;
            }}
          >
            Place palm inside outline
          </p>
          <img
            src={WebcamBtn}
            onClick={capture}
            id="webcBtn"
            ref={(el) => {
              btn_cp = el;
            }}
          />
          {/* <button onClick={capture}>Capture photo</button> */}
          <span className="ouro ouro3">
            <span className="left">
              <span className="anim"></span>
            </span>
            <span className="right">
              <span className="anim"></span>
            </span>
          </span>
        </div>
      </div>
    </FadeIn>
  );
}
