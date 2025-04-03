// pages/BlogList.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import "./BlogList.css";
import Layout from "../layoutPage";
import BaseURL from "../../data/api";

const BlogList = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    fetch(`${BaseURL}/blogs/get-all-blogs`)
      .then((res) => res.json())
      .then((data) => setBlogData(data))
      .catch((err) => console.error("Error fetching blogs", err));
  }, []);
  return (
    <Layout>
      <div className="blog-list-container">
        {blogData.map((blog) => (
          <div className="blog-card" key={blog.slug}>
            <img src={blog.banner} alt={blog.title} className="banner" />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p className="blog-date">{blog.date}</p>
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
