import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.lefticons}>
        <Link className={style.iconimg}>
          <img
            src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b79c1500a1d_phone.svg"
            alt=""
          />
        </Link>
        <Link className={style.iconimg}>
          <img
            src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b3e70500a1c_mail.svg"
            alt=""
          />
        </Link>
        <Link className={style.iconimg}>
          <img
            src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b715d500a20_pin.svg"
            alt=""
          />
        </Link>
      </div>
      <div className={style.middlebox}>
        <h6 className={style.firsttext}>flexing since 2020</h6>
        <div className={style.headerbox}>
          <div className={style.headerlogo}></div> 
          <h1 className={style.headerTitle}>
            In truth, yoga doesn’t take time – it gives time
          </h1>
        </div>
        <div className={style.mainbuttons}>
          <Link className={style.buttons1}>Free Pass</Link>
          <Link className={style.buttons2}>Explore</Link>
        </div>
      </div>
      <div className={style.righticons}>
        <Link
          to="https://www.facebook.com/mindblister"
          className={style.iconimg}
        >
          <img
            src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b39e7500a23_facebook.svg"
            alt=""
          />
        </Link>
        <Link to="https://x.com/mindblister_ro" className={style.iconimg}>
          <img
            src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b37f3500a24_twitter.svg"
            alt=""
          />
        </Link>
        <Link
          to="https://www.instagram.com/mindblister"
          className={style.iconimg}
        >
          <img
            src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3bd0da500a25_instagram.svg"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
