import React from "react";
import { Link } from "react-router-dom";
import "./homecard.css";
import { homeCard } from "../types/homecardProps";
const HomeCard: React.FC<homeCard> = ({ img, title, content }) => {
  return (
    <>
      <div className="card my-3">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title fw-bold homecardtitle">{title}</h5>
          <p className="card-text fs-5 my-lg-4 my-sm-5 homecardcontent">
            {content}
          </p>
          <Link to="" className="btn btn-outline-dark">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
