// pages/BlogPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router";
import blogData from "../../data/blogs";
import "./BlogPage.css";
import Layout from "../layoutPage";

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) return <div>Blog not found.</div>;

  return (
    <Layout>
      <div className="blog-detail">
        <img className="blog-banner" src={blog.banner} alt={blog.title} />
        <div className="blog-header">
          <button onClick={() => navigate(-1)} className="back-btn">
            ← Back
          </button>
          <h1>{blog.title}</h1>
        </div>
        <div className="blog-body">
          {blog.content.map((section, index) => (
            <div key={index} className="blog-section">
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraph && <p>{section.paragraph}</p>}
              {section.image && (
                <img
                  src={section.image}
                  alt={section.imageAlt || ""}
                  className="blog-image"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
