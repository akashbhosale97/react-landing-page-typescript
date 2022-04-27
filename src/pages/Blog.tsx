import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEntryByURL } from "../helpers/index";

const Blog = () => {
  const [blogArray, setBlogArray] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const { id } = useParams();
  // console.log(id);
  const fetchData = async () => {
    const result: any = await getEntryByURL("Page", [
      "pages.blog.blog_reference",
      "pages.blog.blog_reference2",
      "pages.blog.blog_reference3",
    ]);
    setBlogArray([
      result.pages[3].blog.blog_reference[0],
      result.pages[3].blog.blog_reference2[0],
      result.pages[3].blog.blog_reference3[0],
    ]);
    filterData();
  };

  const filterData = () => {
    const newA = blogArray.filter((item: any) => {
      return item.blog_title === id;
    });
    setData(newA);
  };
  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <>
      {data.length !== 0 ? (
        <div
          className="container-fluid"
          style={{ background: "#f7f7f7" }}
          data-aos="fade-up"
        >
          <div className="py-5 my-5 container text-left">
            <div className="blog__title fs-1">{data[0].blog_title}</div>
            <div className="blog__author my-4 fs-3">
              Author : <span className="fw-bold">{data[0].blog_author}</span>
            </div>
            <div className="blog__content fs-5">{data[0].blog_content}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Blog;
