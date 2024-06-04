import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.footer} style={{backgroundColor: "black"}}>
      <div className={style.lisenziya}>
        <Link to="/" className={style.lisentext}>Changelog</Link>
        <Link to="/" className={style.lisentext}>Styles</Link>
        <Link to="/" className={style.lisentext}>Licensing</Link>
      </div>
      <div className={style.footericons}>
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
      <div className={style.footertext}>
        <p>
          Powered by <Link className={style.webflowlink}>Webflow.com</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
