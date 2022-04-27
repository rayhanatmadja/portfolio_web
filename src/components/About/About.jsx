import React from "react";
import style from "./About.module.css";
import photo from "../../images/about-pic.png";

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.content}>
        <div className={style["photo-bg"]}></div>
        <div className={style.photo}>
          <img src={photo} className={style.img} />
        </div>
      </div>
      <div className={style.desc}></div>
    </div>
  );
};

export default About;
