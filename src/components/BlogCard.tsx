import React from "react";
import { Link } from "react-router-dom";
import { blogCard } from "../types/blogCard";

const BlogCard: React.FC<blogCard> = ({
  img,
  blogTitle,
  blogContent,
  blogAuthor,
}) => {
  return (
    <Link to={`/blog/${blogTitle}`} className="link-dark text-decoration-none">
      <div className="card mb-3" role="button" data-aos="fade-up">
        <div className="row g-0 align-items-center">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{blogTitle}</h5>
              <p className="fw-bold my-3">{blogAuthor}</p>
              <p className="card-text d-none">{blogContent}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
