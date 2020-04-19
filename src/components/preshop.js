import React from "react";
import "../style/main.scss";
import { withRouter, Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import BeatLoader from "react-spinners/BeatLoader";
import { TweenMax } from "gsap";
import Popup from "reactjs-popup";
import Contract from "../components/subcomponent/contract2";

export default withRouter(
  class Preshop extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        card_id: this.props.match.params.card_id,
        imageStatus: "loading",
      };
      // let { card_id } = useParams();
      this.img_link = [
        "https://drive.google.com/uc?id=1kmQuPQnBNnjK1QVLjwtfCy0-5RK6mUww",
        "https://drive.google.com/uc?id=1eb5krha74-QLn4A5m_EHFBiWMaH2ds9_",
        "https://drive.google.com/uc?id=1ZnpVhEzMdq9ujbKT3Ao0J5RBv5V_IavP",
        "https://drive.google.com/uc?id=1PPGSoZY4Tk9rZie0JalsixSEkKlE0bPR",
      ];

      this.title = ["ชุด เสริมดวง", "ชุด ความรัก", "ชุด สุขภาพ", "ชุด การเงิน"];

      this.desc = [
        [["ดวงดีจนน่าอิจฉา ถ้าคุณมี"], ["เซทเสริมดวงของ Do more ไว้ครอบครอง"]],
        [
          ["เสริมความรัก สร้างความสุขถ้าคุณมี"],
          ["เซทความรักของ Do more ไว้ครอบครอง"],
        ],
        [["สุขภาพดีได้ไม่ยาก ถ้าคุณมี"], ["เซทสุขภาพของ Do more ไว้ครอบครอง"]],
        [["กระเป๋าตังไม่แฟบ ถ้าคุณมี"], ["เซทการเงินของ Do more ไว้ครอบครอง"]],
      ];
    }

    handleImageLoaded() {
      this.setState({ imageStatus: "loaded" });
      let img = document.querySelector("#goods_set");
      TweenMax.to(img, 0.7, {
        opacity: 1,
      });
    }

    handleImageErrored() {
      this.setState({ imageStatus: "failed to load" });
    }

    render() {
      let { card_id, is_loaded } = this.state;
      return (
        <div className="container thai" id="preshop">
          <div className="columns">
            <div className="image-container">
              {this.state.imageStatus != "loaded" ? (
                <div className="loading">
                  <BeatLoader
                    size={30}
                    color={"#cd983f"}
                    loading={this.state.loading}
                  />
                </div>
              ) : null}
              <img
                src={this.img_link[card_id - 1]}
                onLoad={this.handleImageLoaded.bind(this)}
                onError={this.handleImageErrored.bind(this)}
                id="goods_set"
              />
            </div>
            <FadeIn delay="500" transitionDuration="700" className="content">
              <h1>{this.title[card_id - 1]}</h1>
              <p>
                {this.desc[card_id - 1][0]} <br /> {this.desc[card_id - 1][1]}
              </p>
              <div className="columns">
                <Link to={{pathname: '/shop', state:{goods_set_id: card_id}}}>
                  <div className="btn eng">Shop Online</div>
                </Link>
                <Popup
                  trigger={<div className="btn eng">Buy</div>}
                  modal
                  closeOnDocumentClick
                  repositionOnResize
                  lockScroll
                >
                  <Contract />
                </Popup>
              </div>
            </FadeIn>
          </div>
        </div>
      );
    }
  }
);

// https://drive.google.com/thumbnail?id=1kmQuPQnBNnjK1QVLjwtfCy0-5RK6mUww
