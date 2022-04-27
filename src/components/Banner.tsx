import React from "react";
import "./banner.css";
import { bannerProps } from "../types/bannerProps";

const Banner: React.FC<bannerProps> = ({
  direction,
  background,
  img,
  classN,
  btntext,
  bg,
  text1,
  text2,
}) => {
  return (
    <>
      <div className="container-fluid home" style={{ background: background }}>
        <div className="container">
          <div
            className="row banner_row py-5"
            style={{ flexDirection: "initial" }}
          >
            <div className="col-lg-6 col-md-6 col-sm-12 my-auto banner_left">
              <h1
                className={`${classN} ? 'text-dark fs-1' : "fs-1 text-white" bannerheading`}
              >
                {text1}
              </h1>
              <p className={`${classN} my-4 fs-5 bannercontent`}>{text2}</p>
              <div className="banner__btn my-4">
                <button
                  className={`btn-light ${bg} btn px-3 py-2 banner_text fw-bold btn-banner`}
                >
                  {btntext}
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img src={img} alt="..." className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
