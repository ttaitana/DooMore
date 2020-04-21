import React from "react";
import { useParams } from "react-router-dom";
import "../style/main.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function InsideBook(props) {
  let { book } = props;
  console.log('====================================');
  console.log(props.book);
  console.log('====================================');
  const img = {
    เซตความรัก: [
      "เซตความรัก1.png",
      "เซตความรัก2.png",
      "เซตความรัก3.png",
      "เซตความรัก4.png",
      "เซตความรัก5.png",
    ],
    เซตการเงิน: [
      "เซตการเงิน1.png",
      "เซตการเงิน2.png",
      "เซตการเงิน3.png",
      "เซตการเงิน4.png",
      "เซตการเงิน5.png",
    ],
    เซตสุขภาพ: [
      "เซตสุขภาพ1.png",
      "เซตสุขภาพ2.png",
      "เซตสุขภาพ3.png",
      "เซตสุขภาพ4.png",
      "เซตสุขภาพ5.png",
      "เซตสุขภาพ6.png",
    ],
  };
  return (
    <div id="inside_book">
      <div className="goods">
        <h1>{book}</h1>
        {img[book].map((image) => (
          <div className="good">
            <LazyLoadImage
              src={require(`../assets/doomore_shop/inside_book/${book}/${image}`)}
              effect="blur"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InsideBook;
