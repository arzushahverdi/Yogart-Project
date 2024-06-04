import React from "react";
import style from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={style.about}> 
      <img
        src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b8198500a22_about-bg.jpg"
        alt=""
        style={{
          width: "500px",
          height: "700px",
          borderRadius: "32px",
          margin: "50px 0",
        }}
      />
      <div className={style.aboutinfo}>
        <div className={style.who_why}>
          <img
            src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b198e500a34_info-ico.svg"
            alt=""
          />
          <p style={{ color: "#66a901" }}>WHO WE ARE</p>
          <h3>Inhale The Future, Exhale The Past</h3>
          <span>
            Duis faucibus ex in vehicula dapibus. Integer imperdiet aliquet
            finibus. Nullam scelerisque, mi eget sollicitudinuste tristique,
            massa nunc pellentesque mauris, eget bibendum magna nisl nec lorem.
          </span>
          <Link to="/testimonials" className={style.buttons}>
            <button>Read More</button>
          </Link>
        </div>
        <div className={style.who_why}>
          <img
            src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b13c4500a2e_smile-ico.svg"
            alt=""
          />
          <p style={{ color: "#66a901" }}>WHY CHOOSE US</p>
          <h3>It's About Being Good To Yourself</h3>
          <span>
            Duis faucibus ex in vehicula dapibus. Integer imperdiet aliquet
            finibus. Nullam scelerisque, mi eget sollicitudinuste tristique,
            massa nunc pellentesque mauris, eget bibendum magna nisl nec lorem.
          </span>
          <Link className={style.buttons}>
            <button>Start Today</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
