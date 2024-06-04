import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Cart from "./icons8-cart-48 (1).png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled("black");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={style.navbar}
      style={{
        backgroundColor: scrolled,
        height: "100px",
      }}
    >
      <div className={style.logo}>
        <Link>
          <img
            src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3bc72f500a01_webclip.png"
            alt="yogart-logo"
            width="64px"
            style={{
              borderRadius: "50%",
              padding: "5px",
              backgroundColor: "#66a901",
            }}
          />
        </Link>
        <Link to="/" className={style.logoText}>
          <p>Yogart</p>
        </Link>
      </div>
      <div className={style.navbarpages}>
        <Link to="/" className={style.links}>
          Home
        </Link>
        <Link to="/about" className={style.links}>
          About
        </Link>
        <Link to="/testimonials" className={style.links}>
          Testimonials
        </Link>
        <Link to="/benefits" className={style.links}>
          Benefits
        </Link>
        <Link to="/pricing" className={style.links}>
          Pricing
        </Link>
        <Link to="/pricing" className={style.links}>
          <button className={style.contact}>Contact Us</button>
        </Link>
        <Link to="#" className={style.cartimg}>
          <img
            src={Cart}
            alt="cart"
            style={{
              backgroundColor: "#66a901",
              width: "65px",
              padding: "15px",
              borderRadius: "50%",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
