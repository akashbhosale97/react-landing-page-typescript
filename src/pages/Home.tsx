import React, { useEffect, useState } from "react";
import "./home.css";
import Banner from "../components/Banner";
import HomeCard from "../components/HomeCard";
import { getEntryByURL } from "../helpers/index";

const Home = () => {
  const [home, setHome] = useState<any>([]);

  const fetchData = async () => {
    const result: any = await getEntryByURL("Page", [
      "pages.home.banner1",
      "pages.home.banner2",
      "pages.home.card1",
      "pages.home.card2",
    ]);
    setHome(result.pages[0].home);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {home.length === 0 ? (
        "loading"
      ) : (
        <div>
          <div className="banner__first" data-aos="fade-up">
            <Banner
              img={home.banner1[0].banner_img.url}
              classN="text-white"
              btntext={home.banner1[0].banner_btntxt}
              text1={home.banner1[0].banner_heading}
              text2={home.banner1[0].banner_content}
            />
          </div>
          <div data-aos="fade-up">
            <Banner
              img={home.banner2[0].banner_img.url}
              direction="row-reverse"
              background="white"
              classN="text-dark"
              btntext={home.banner2[0].banner_btntxt}
              bg="bg-transparent"
              text1={home.banner2[0].banner_heading}
              text2={home.banner2[0].banner_content}
            />
          </div>
          <div className="container my-4">
            <div className="row mb-4">
              <div className="col-lg-6 h2 text-center home__learn">
                {home.learn_title}
              </div>
              <div className="col-lg-6 d-flex justify-content-end home__view">
                <button className="btn btn-outline-dark fw-bold">
                  {home.view_btn_text}
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 my-lg-0 my-sm-3" data-aos="fade-up">
                <HomeCard
                  img={home.card1[0].banner_img.url}
                  title={home.card1[0].banner_heading}
                  content={home.card1[0].banner_content}
                />
              </div>
              <div className="col-lg-6" data-aos="fade-up">
                <HomeCard
                  img={home.card2[0].banner_img.url}
                  title={home.card2[0].banner_heading}
                  content={home.card1[0].banner_content}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
