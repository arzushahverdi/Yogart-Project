import React from "react";
import style from "./Pricing.module.css";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className={style.pricing}>
      <div
        className={style.pricingboxes}
        style={{
          borderTopLeftRadius: "32px",
          borderTopRightRadius: "32px",
          backgroundColor: "black",
        }}
      >
        <h1>Basic</h1>
        <span>$ 25.00 USD</span>
      </div>
      <div
        className={style.pricingboxes}
        style={{
          borderTopLeftRadius: "32px",
          borderTopRightRadius: "32px",
          backgroundColor: "black",
        }}
      >
        <h1>Standart</h1>
        <span>$ 50.00 USD</span>
      </div>
      <div
        className={style.pricingboxes}
        style={{
          borderTopLeftRadius: "32px",
          borderTopRightRadius: "32px",
          backgroundColor: "#66a901",
        }}
      >
        <h1>Premium</h1>
        <span>$ 75.00 USD</span>
      </div>
      <div
        className={style.addtocard}
        style={{
          borderBottomLeftRadius: "32px",
          borderBottomRightRadius: "32px",
        }}
      >
        <p>Nunc a turpis blandit</p>
        <p>Sed eleifend risus nec</p>
        <p>-</p>
        <p>-</p>
        <p>-</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae est
          pulvinar, commodo eros vitae.
        </span>
        <Link className={style.readmore}>Read More</Link>
        <button className={style.button1} style={{ backgroundColor: "black" }}>
          Add To Card
        </button>
      </div>
      <div
        className={style.addtocard}
        style={{
          borderBottomLeftRadius: "32px",
          borderBottomRightRadius: "32px",
        }}
      >
        <p>Nunc a turpis blandit</p>
        <p>Sed eleifend risus nec</p>
        <p>Praesent non turpis</p>
        <p>-</p>
        <p>-</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae est
          pulvinar, commodo eros vitae.
        </span>
        <Link className={style.readmore}>Read More</Link>
        <button className={style.button2} style={{ backgroundColor: "black" }}>
          Add To Card
        </button>
      </div>
      <div
        className={style.addtocard}
        style={{
          borderBottomLeftRadius: "32px",
          borderBottomRightRadius: "32px",
        }}
      >
        <p>Nunc a turpis blandit</p>
        <p>Sed eleifend risus nec</p>
        <p>Praesent non turpis</p>
        <p>Donec facilisis dui</p>
        <p>-</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae est
          pulvinar, commodo eros vitae.
        </span>
        <Link className={style.readmore}>Read More</Link>
        <button
          className={style.button3}
          style={{ backgroundColor: "#66a901" }}
        >
          Add To Card
        </button>
      </div>
    </div>
  );
};

export default Pricing;
