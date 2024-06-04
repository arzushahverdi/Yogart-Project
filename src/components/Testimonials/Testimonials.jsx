import React from "react";
import style from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={style.testimonials}>
      <div className={style.trainers}>
        <img
          src="https://assets.website-files.com/5f36828308ea3b53d650099f/5f36828308ea3bf7955009bd_062f.jpg"
          alt=""
        />
        <p>TRAINER</p>
        <h3>Suzanna Rice</h3>
        <span>
          Donec at leo sed est lacinia gravida quis non nisi. Maecenas gravida
          turpis.
        </span>
      </div>
      <div className={style.trainers}>
        <img
          src="https://assets.website-files.com/5f36828308ea3b53d650099f/5f36828308ea3b6eb85009ba_046m.jpg"
          alt=""
        />
        <p>TRAINER</p>
        <h3>Norbu Phoebus</h3>
        <span>
          Donec at leo sed est lacinia gravida quis non nisi. Maecenas gravida
          turpis.
        </span>
      </div>
      <div className={style.trainers}>
        <img
          src="https://assets.website-files.com/5f36828308ea3b53d650099f/5f36828308ea3b6e1f5009b6_053f.jpg"
          alt=""
        />
        <p>TRAINER</p>
        <h3>Sierra Valentine</h3>
        <span>
          Donec at leo sed est lacinia gravida quis non nisi. Maecenas gravida
          turpis.
        </span>
      </div>
      <div className={style.trainers}>
        <img
          src="https://assets.website-files.com/5f36828308ea3b53d650099f/5f36828308ea3b17555009bb_092m.jpg"
          alt=""
        />
        <p>TRAINER</p>
        <h3>Sachin Iacobus</h3>
        <span>
          Donec at leo sed est lacinia gravida quis non nisi. Maecenas gravida
          turpis.
        </span>
      </div>
    </div>
  );
};

export default Testimonials;
