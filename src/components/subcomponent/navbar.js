import React, { Component } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Contract from "./contract";
import { ReactComponent as Letter } from "../../assets/letter.svg";
import { ReactComponent as Shop } from "../../assets/shop.svg";
import { ReactComponent as Logo } from "../../assets/nav_logo.svg";
import "../../style/navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-header">
          <div className="nav-title">
            <Link to="/home">
              <Logo width={50} />
            </Link>
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <Link to="/shop">
            <Shop width={50} id="shop-logo" />
          </Link>
          <Popup
            trigger={<Letter width={70} id="letter-logo" />}
            modal
            closeOnDocumentClick
            repositionOnResize
            lockScroll
          >
            <Contract />
          </Popup>
        </div>
      </div>
    );
  }
}
