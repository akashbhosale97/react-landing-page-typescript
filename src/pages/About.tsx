import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import "./about.css";
import { getEntryByURL } from "../helpers/index";
import AboutCard from "../components/AboutCard";

const About = () => {
  const [about, setAbout] = useState<any>([]);

  const fetchData = async () => {
    const result: any = await getEntryByURL("Page", [
      "pages.about.banner1",
      "pages.about.banner2",
      "pages.about.card1",
      "pages.about.card2",
      "pages.about.card3",
      "pages.about.card4",
    ]);
    setAbout(result.pages[1].about);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {about.length === 0 ? (
        "loading"
      ) : (
        <div className="about_wrapper">
          <div className="container">
            <div className="banner__first" data-aos="fade-up">
              <Banner
                direction=""
                background="white"
                img={about.banner1[0].banner_img.url}
                classN=""
                btntext=""
                bg=""
                text1={about.banner1[0].banner_heading}
                text2={about.banner1[0].banner_content}
              />
            </div>
          </div>
          <div className="container-fluid about-full" data-aos="fade-up">
            <div className="container">
              <div className="row">
                <h3 className="text-center py-4 fw-bold">Our Mission</h3>
              </div>
              <div className="row">
                <div className="col-lg-6 d-flex flex-column align-items-start resp">
                  <AboutCard
                    img={about.card1[0].banner_img.url}
                    title={about.card1[0].banner_heading}
                    content={about.card1[0].banner_content}
                  />
                  <AboutCard
                    img={about.card2[0].banner_img.url}
                    title={about.card2[0].banner_heading}
                    content={about.card2[0].banner_content}
                  />
                </div>
                <div className="col-lg-6 d-flex flex-column align-items-end resp">
                  <AboutCard
                    img={about.card3[0].banner_img.url}
                    title={about.card3[0].banner_heading}
                    content={about.card3[0].banner_content}
                  />
                  <AboutCard
                    img={about.card4[0].banner_img.url}
                    title={about.card4[0].banner_heading}
                    content={about.card4[0].banner_content}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container" data-aos="fade-up">
            <Banner
              background="white"
              img={about.banner2[0].banner_img.url}
              btntext=""
              text1={about.banner2[0].banner_heading}
              text2={about.banner2[0].banner_content}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default About;
