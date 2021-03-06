import React, { useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ReactComponent as FullCard1 } from "../assets/card_set/answer1.svg";
import { ReactComponent as FullCard2 } from "../assets/card_set/answer2.svg";
import { ReactComponent as FullCard3 } from "../assets/card_set/answer3.svg";
import { ReactComponent as FullCard4 } from "../assets/card_set/answer4.svg";
import { ReactComponent as Shop_button } from "../assets/shop_btn.svg";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import { useEffect } from "react";
import { TweenMax } from "gsap";
import BGMusic from "../assets/home/sound_s.mp3";

export default function Result() {
  let { card_id } = useParams();
  let cardwrap = useRef(null);
  const full_card = [
    <FullCard1 />,
    <FullCard2 />,
    <FullCard3 />,
    <FullCard4 />,
  ];

  const title = [
    "คุณต้องมีของเสริมดวง",
    "คุณต้องแสดงความรักออกมาบ้าง",
    "คุณต้องระวังเรื่องสุขภาพ",
    "คุณต้องเข้มงวดด้านการเงิน",
  ];
  const desc = [
    "การที่คุณจะประสบความสำเร็จในชีวิตนั้นนอกจากความรู้ความสามารถที่คุณได้เล่าเรียนมาแล้วนั้นก็ขึ้นอยู่กับการปฏิบัติตนที่เหมาะสมด้วยเช่นกันการไม่ประพฤติผิดในศีลธรรมไม่ทำตัวให้เป็นปัญหาแก่สังคมจะเป็นการช่วยส่งเสริมให้คุณประสบความสำเร็จในชีวิตได้ไม่ยากคุณต้องประพฤติตนในทางที่ถูกที่ควรและการดูแลบิดามารดาเป็นสิ่งสำคัญที่สุดในการเสริมดวงให้คุณประสบผลสำเร็จในชีวิตได้ประกอบกับการใช้เซ็ตเสริมดวงของเรา",
    "หากว่าคุณยังโสดมีเกณฑ์ได้พบรักครั้งใหม่ได้พบกับคนที่มีเสน่ห์น่าหลงใหลอย่างมากอยากที่จะหักห้ามใจได้นอกจากนี้การพบกันก็เจอกันท่ามกลางบรรยากาศที่สดชื่นมีโอกาสพัฒนาความสัมพันธ์กันอีกแต่ขอให้มีความตั้งใจมุ่งมั่นและแสดงความจริงใจออกมาชอบใครก็แสดงให้เขารู้ตัวหน่อยนะ \
      สำหรับคนที่มีคู่แล้วเป็นช่วงเวลาที่เต็มไปด้วยความชื่นมื่นแต่อย่าทำตามใจตนเองมากเกินไปทำอะไรต้องนึกถึงความรู้สึกอีกฝ่ายด้วยอาจมีน้อยใจบ้างให้หาของขวัญเล็กๆน้อยๆให้ชุ่มชื่นหัวใจคำพูด + ของทำมือเป็นทางเลือกที่ดี",
    "สุขภาพของคุณอยู่ในเกณฑ์ปานกลางเมื่อไหร่ที่มีไฟก็จะลุกขึ้นมาทำนั่นทำนี่ไม่หยุดพอรู้ตัวอีกทีก็ร่างกายก็ออกอาการเหนื่อยล้าควรดูแลสุขภาพอย่างสม่ำเสมอไม่หักโหมจนเกินไปหาวันหยุดเพื่อร่างกายจะได้พักผ่อนบ้าง หาเวลาทำสิ่งที่ตนเองชอบเพื่อช่วยผ่อนคลายลองหันมาออกกำลังกายที่จะช่วยเสริมสร้างภูมิคุ้มกันของร่างกายให้แข็งแรงหรือลองชวนเพื่อนไปทานบุฟเฟ่ต์ประเภทผักผลไม้ดูบ้างก็ดีนะ",
    "การที่คุณจะมีรายได้หรือความมั่นคงทางการเงินนั้นนอกจากการประกอบสัมมาอาชีพที่สุจริตแล้วดวงการเงินของคุณไม่ว่าจะฐานะทางเงินแข็งแรงหรือง่อนแง่นพอมาถึงระยะนี้ก็ยังต้องไม่ประมาทไม่ใช่เพราะการเงินของคุณกำลังแย่หรอกเพียงแต่ช่วงนี้จะมีเหตุให้คุณต้องเข้มงวดในการใช้เงินพอสมควร ไม่ว่าจะเป็นเรื่องการจับจ่ายใช้สอย ดังนั้นคุณต้องรอบคอบ เพื่อป้องกันความเสียหายที่จะตามมา ถ้าไม่ประมาทก็ไม่มีอะไรต้องวิตกกังวลมากนัก เงินไหลออกไปก็ไหลกลับเข้ามาได้แน่นอน",
  ];

  useEffect(() => {
    TweenMax.to(cardwrap, 0.7, {
      opacity: 1,
      y: 0,
    });
  });

  return (
    <div id="result" className="thai">
      <audio autoPlay preload loop volume={0.5} id="music">
        <source src={BGMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div
        className="s40"
        ref={(el) => {
          cardwrap = el;
        }}
      >
        {full_card[card_id - 1]}
      </div>
      <FadeIn className="s60" delay="500" transitionDuration="700">
        <h1>{title[card_id - 1]}</h1>
        <p>{desc[card_id - 1]}</p>
        <Link to={`/preshop/${card_id}`}>
          <Shop_button width="200" className="logo_scale"/>
        </Link>
      </FadeIn>
    </div>
  );
}
