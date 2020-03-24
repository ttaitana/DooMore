import React from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { ReactComponent as Next_btn } from "../assets/next-btn.svg";
import { ReactComponent as Border } from "../assets/borde.svg";

export default function Inconstruct() {
  return (
    <FadeIn className="container" delay="300" transitionDuration="500">
      <div className="frame">
        <Border width={"96vw"} />
      </div>
      <h1>We apologize for the inconvenience</h1>
      <h1>This page is under construction</h1>
      <Link to={`/home`}>
        <div className="btn-long">Back to homepage</div>
      </Link>
    </FadeIn>
  );
}
