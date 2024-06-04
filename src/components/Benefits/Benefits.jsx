import React from "react";
import style from "./Benefits.module.css";

const Benefits = () => {
  return (
    <div className={style.benefits}>
      <img
        src="https://assets.website-files.com/5f36828308ea3b14a0500991/5f36828308ea3b11d4500a18_classes-bg.jpg"
        alt=""
        style={{
          width: "500px",
          height: "750px",
          borderRadius: "32px",
          margin: "60px 0",
        }}
      />
      <div className={style.benefitsinfo}>
        <div
          className={style.benefitsboxes}
          style={{
            borderTopLeftRadius: "32px",
            borderTopRightRadius: "32px",
          }}
        >
          <h3>Kundalini</h3>
          <p>
            Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales
            porttitor erat duis sed diam in justo iaculis tristique.
          </p>
          <span>Sierra Valentine</span>
        </div>
        <div
          className={style.benefitsboxes}
          style={{
            borderTopLeftRadius: "32px",
            borderTopRightRadius: "32px",
          }}
        >
          <h3>Bikram</h3>
          <p>
            Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales
            porttitor erat duis sed diam in justo iaculis tristique.
          </p>
          <span>Sachin Iacobus</span>
        </div>
        <div className={style.benefitsboxes}>
          <h3>Hatha</h3>
          <p>
            Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales
            porttitor erat duis sed diam in justo iaculis tristique.
          </p>
          <span>Norbu Phoebus</span>
        </div>
        <div className={style.benefitsboxes}>
          <h3>Vinyasa</h3>
          <p>
            Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales
            porttitor erat duis sed diam in justo iaculis tristique.
          </p>
          <span>Sierra Valentine</span>
        </div>
        <div
          className={style.benefitsboxes}
          style={{
            borderBottomLeftRadius: "32px",
            borderBottomRightRadius: "32px",
          }}
        >
          <h3>Ashtanga</h3>
          <p>
            Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales
            porttitor erat duis sed diam in justo iaculis tristique.
          </p>
          <span>Suzanna Rice</span>
        </div>
        <div
          className={style.benefitsboxes}
          style={{
            borderBottomLeftRadius: "32px",
            borderBottomRightRadius: "32px",
          }}
        >
          <h3>Iyengar</h3>
          <p>
            Fusce ut posuere ex. Mauris hendrerit ultrices enim, sodales
            porttitor erat duis sed diam in justo iaculis tristique.
          </p>
          <span>Suzanna Rice</span>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
