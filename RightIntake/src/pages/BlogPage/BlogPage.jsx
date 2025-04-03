// pages/BlogPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import "./BlogPage.css";
import Layout from "../layoutPage";
import BaseURL from "../../data/api";

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BaseURL}/blogs/get-all-blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading blog:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!blog) return <div>Blog not found.</div>;

  return (
    <Layout>
      <div className="blog-detail">
        <img className="blog-banner" src={blog.banner} alt={blog.title} />
        <div className="blog-content-container">
          <div className="blog-body">
            <div className="blog-header">
              <h1>{blog.title}</h1>
              <p className="blog-date">{blog.date}</p>
            </div>

            {blog.content.map((section, index) => (
              <div key={index} className="blog-section">
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraph && (
                  <p
                    dangerouslySetInnerHTML={{ __html: section.paragraph }}
                  ></p>
                )}
                {section.image && (
                  <img
                    src={section.image}
                    alt={section.imageAlt || ""}
                    className="blog-image"
                  />
                )}
              </div>
            ))}
            {blog.cta && (
              <div className="blog-cta-btn" onClick={() => navigate("/")}>
                <a href={blog.cta.link} className="blog-cta-a">
                  {blog.cta.text}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
