import React from "react";
import "./aboutcard.css";
import { aboutCard } from "../types/aboutCard";

const AboutCard: React.FC<aboutCard> = ({ img, title, content }) => {
  return (
    <>
      <div className="aboutcard d-flex my-4" data-aos="fade-up">
        <div className="left pe-4">
          <img src={img} alt="..." />
        </div>
        <div className="right">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
