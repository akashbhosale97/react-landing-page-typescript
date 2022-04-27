import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { getEntryByURL } from "../helpers/index";

const Blog = () => {
  const [blogs, setBlogs] = useState<any>([]);
  const [blogArray, setBlogArray] = useState<any>([]);

  const fetchData = async () => {
    const result: any = await getEntryByURL("Page", [
      "pages.blog.blog_reference",
      "pages.blog.blog_reference2",
      "pages.blog.blog_reference3",
    ]);
    setBlogs(result.pages[3].blog);
    setBlogArray([
      result.pages[3].blog.blog_reference[0],
      result.pages[3].blog.blog_reference2[0],
      result.pages[3].blog.blog_reference3[0],
    ]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {blogs.length !== 0 ? (
        <div style={{ paddingTop: "68px", minHeight: "85vh" }}>
          <div
            className="container-fluid py-5 text-white"
            style={{ height: "300px", background: "#715cdd" }}
            data-aos="fade-up"
          >
            <div className="row">
              <div className="blog_banner_title fs-2 col-lg-12 text-center">
                {blogs.blog_page_heading}
              </div>
              <div className="blog_banner_content fs-5 mt-3 col-lg-6 offset-lg-3">
                {blogs.blog_page_content}
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              {blogArray.map((blog: any) => {
                return (
                  <div className="col-lg-4" key={blog.blog_title}>
                    <BlogCard
                      img={blog.blog_img.url}
                      blogTitle={blog.blog_title}
                      blogContent={blog.blog_content}
                      blogAuthor={blog.blog_author}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Blog;
