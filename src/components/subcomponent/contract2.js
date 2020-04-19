import React, { Component } from "react";
import "../../style/main.scss";

export default class Contract extends Component {
  render() {
    return (
      <div className="" id="contract2">
        <div className="wrapper">
          <h1>Delivery</h1>
          <p className="thai">เพียงกรอกรายละเอียดด้านล่างเราจะติดต่อกลับเร็วที่สุด</p>
        </div>
        <br/>
        <form action="" className="form">
          <p htmlFor="Name">YOUR NAME *</p>
          <input type="text" name="Name" required />

          <p htmlFor="email">YOUR E-MAIL ADDRESS *</p>
          <input type="email" name="email" required />

          <p htmlFor="subject">SUBJECT</p>
          <input type="text" name="subject" />

          <p htmlFor="message">ADDRESS</p>
          <textarea name="message" cols="30" rows="8"></textarea>
          <input type="submit" value="send message" className="send-contract eng" />
        </form>
        <br/>
      </div>
    );
  }
}
