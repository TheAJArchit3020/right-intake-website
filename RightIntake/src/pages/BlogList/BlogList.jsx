// pages/BlogList.jsx
import React from "react";
import { Link } from "react-router";
import blogData from "../../data/blogs";
import "./BlogList.css";
import Layout from "../layoutPage";

const BlogList = () => {
  return (
    <Layout>
      <div className="blog-list-container">
        {blogData.map((blog) => (
          <div className="blog-card" key={blog.slug}>
            <img src={blog.banner} alt={blog.title} className="banner" />
            <div className="blog-content">
              <p className="blog-date">{blog.date}</p>
              <h2>{blog.title}</h2>
              <p className="preview-text">{blog.preview}</p>
              <div className="tags">
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to={`/blog/${blog.slug}`} className="read-more">
                Read Article →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default BlogList;
