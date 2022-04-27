import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { getEntryData } from "../helpers";

const Header = () => {
  const [header, setHeader] = useState<any>([]);

  const fetchData = async () => {
    const result: any = await getEntryData("Header");
    setHeader(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {header.length === 0 ? (
        ""
      ) : (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img
                src={header.nav[0].logo.logo.logo_img.url}
                alt="..."
                className="csimg me-2"
              />
              <h3 className="pt-2 fs-4">
                {header.nav[0].logo.logo.logo_brand}
              </h3>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="btntoggle"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse navbar__header"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav mb-2 ms-auto mb-lg-0 fs-5 show"
                id="ul-toggle"
              >
                <li className="nav-item px-lg-3 mx-auto">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to={header.nav[1].nav_links.nav_links.home.href}
                  >
                    {header.nav[1].nav_links.nav_links.home.title}
                  </Link>
                </li>
                <li className="nav-item px-lg-3 mx-auto">
                  <Link
                    className="nav-link"
                    to={header.nav[1].nav_links.nav_links.about.href}
                  >
                    {header.nav[1].nav_links.nav_links.about.title}
                  </Link>
                </li>
                <li className="nav-item px-lg-3 mx-auto">
                  <Link className="nav-link" to="/blogs">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item px-lg-3 mx-auto">
                  <Link
                    className="nav-link"
                    to={header.nav[1].nav_links.nav_links.contact.href}
                  >
                    {header.nav[1].nav_links.nav_links.contact.title}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
