import React from "react";
import style from "./Header.module.css";
import photo from "../../images/phot0-blob.png";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.intro}>
        <div className={style["intro-wrapper"]}>
          <h2 className={style.greet}>Hello, my name is</h2>
          <h1 className={style.name}>Rayhan Atmadja</h1>
          <div className={style.skill}>
            <div className={style["skill-wrapper"]}>
              <div className={style["skill-item"]}>UI/UX Designer</div>
              <div className={style["skill-item"]}>Frontend Web Dev</div>
            </div>
          </div>
          <p className={style.desc}>
            I design high fidelity UI using figma for websites responsive <br />
            or mobile devices, some work with Frontend things using ReactJS.
          </p>
        </div>
      </div>
      <div className={style.content}>
        <img src={photo} alt="" className={style.photo} />
      </div>
    </div>
  );
};

export default Header;
