import React from "react";
import "../style/main.scss";
import Navbar from "./subcomponent/navbar";
import { withRouter } from "react-router-dom";
import FadeIn from "react-fade-in";
import BeatLoader from "react-spinners/BeatLoader";
import image_set from "./image_set.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goods_set_id: null,
      goods: image_set,
    };

    this.title = ["ชุด เสริมดวง", "ชุด ความรัก", "ชุด สุขภาพ", "ชุด การเงิน"];
  }

  selectGoods = (id) => {
    this.setState({
      goods_set_id: id,
      goods: image_set[id],
    });
  };

  componentDidMount(){
      try{
          this.selectGoods(this.props.location.state.goods_set_id)
        }
        catch{
            //pass
        }
  }

  render() {
    let { goods_set_id, goods } = this.state;
    if (goods_set_id == null) {
      return (
        <div>
          <Navbar />
          <div id="wait-shop">
            <div className="goods">
              {goods.map((item, key) => (
                <div
                  className="good"
                  onClick={() => {
                    this.selectGoods(key);
                  }}
                >
                  <LazyLoadImage
                    src={require(`../assets/doomore_shop/${item.name}/${item.set}.jpg`)}
                    effect="blur"
                    alt={`${item.name}`}
                  />
                  <p>{item.title}</p>
                  <p>฿{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Navbar />
        <div id="shop" className="eng">
          <div className="mini-nav">
            <div className={"sec thai " + (goods_set_id == 0 ? "active" : null)} onClick={() => {this.selectGoods(0)}}>
              ชุดเสริมดวง
            </div>
            <div className={"sec thai " + (goods_set_id == 1 ? "active" : null)} onClick={() => {this.selectGoods(1)}}>
              ชุดความรัก
            </div>
            <div className={"sec thai " + (goods_set_id == 2 ? "active" : null)} onClick={() => {this.selectGoods(2)}}>
              ชุดสุขภาพ
            </div>
            <div className={"sec thai " + (goods_set_id == 3 ? "active" : null)} onClick={() => {this.selectGoods(3)}}>
              ชุดการเงิน
            </div>
          </div>
          <div className="allset">
            <LazyLoadImage
              src={require(`../assets/doomore_shop/${goods.name}/${goods.set}.jpg`)}
              effect="blur"
              width="1000"
              alt=""
            />
            <h1 className="thai">{goods.title}</h1>
            <p>฿{goods.price}</p>
          </div>
          <div className="goods">
            {goods.goods.map((item) => (
              <div className="good">
                <LazyLoadImage
                  src={require(`../assets/doomore_shop/${goods.name}/${item.name}.jpg`)}
                  effect="blur"
                  alt=""
                />
                <p>{item.name}</p>
                <p>฿{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Shop);
