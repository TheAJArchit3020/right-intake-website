// src/pages/BlogCreate.jsx
import React, { useState } from "react";
import "./BlogCreate.css";
import BaseURL from "../../../data/api";

const BlogCreate = () => {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    date: "",
    banner: "",
    tags: "",
    preview: "",
    ctaText: "",
    ctaLink: "",
    content: [{ heading: "", paragraph: "", image: "", imageAlt: "" }],
  });

  const updateForm = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const updateContent = (index, key, value) => {
    const updated = [...form.content];
    updated[index][key] = value;
    setForm((prev) => ({ ...prev, content: updated }));
  };

  const addSection = () => {
    setForm((prev) => ({
      ...prev,
      content: [
        ...prev.content,
        { heading: "", paragraph: "", image: "", imageAlt: "" },
      ],
    }));
  };

  const removeSection = (index) => {
    const updated = form.content.filter((_, i) => i !== index);
    setForm((prev) => ({ ...prev, content: updated }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BaseURL}/blogs/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Blog saved successfully!");
        setForm({
          title: "",
          slug: "",
          date: "",
          banner: "",
          tags: "",
          preview: "",
          ctaText: "",
          ctaLink: "",
          content: [{ heading: "", paragraph: "", image: "", imageAlt: "" }],
        });
      } else {
        alert("❌ Failed to save blog: " + data.message);
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("❌ Error saving blog. Check console.");
    }
  };

  return (
    <div className="blog-create-container">
      <h1>Create New Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Blog Title"
          value={form.title}
          onChange={(e) => updateForm("title", e.target.value)}
        />
        <input
          placeholder="Slug"
          value={form.slug}
          onChange={(e) => updateForm("slug", e.target.value)}
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => updateForm("date", e.target.value)}
        />
        <input
          placeholder="Banner Image URL"
          value={form.banner}
          onChange={(e) => updateForm("banner", e.target.value)}
        />
        <input
          placeholder="Tags (comma separated)"
          value={form.tags}
          onChange={(e) => updateForm("tags", e.target.value)}
        />
        <textarea
          placeholder="Preview Text"
          value={form.preview}
          onChange={(e) => updateForm("preview", e.target.value)}
        />

        <h3>CTA</h3>
        <input
          placeholder="CTA Text"
          value={form.ctaText}
          onChange={(e) => updateForm("ctaText", e.target.value)}
        />
        <input
          placeholder="CTA Link"
          value={form.ctaLink}
          onChange={(e) => updateForm("ctaLink", e.target.value)}
        />

        <h2>Blog Sections</h2>
        {form.content.map((section, index) => (
          <div key={index} className="section-block">
            <input
              placeholder="Heading"
              value={section.heading}
              onChange={(e) => updateContent(index, "heading", e.target.value)}
            />
            <textarea
              placeholder="Paragraph (HTML supported)"
              value={section.paragraph}
              onChange={(e) =>
                updateContent(index, "paragraph", e.target.value)
              }
            />
            <h2>Paragraph preview:</h2>
            <p dangerouslySetInnerHTML={{ __html: section.paragraph }}></p>
            <input
              placeholder="Image URL"
              value={section.image}
              onChange={(e) => updateContent(index, "image", e.target.value)}
            />
            <h2>Image preview:</h2>
            <img src={section.image} alt="" width={"100%"} />
            <input
              placeholder="Image Alt Text"
              value={section.imageAlt}
              onChange={(e) => updateContent(index, "imageAlt", e.target.value)}
            />
            <button type="button" onClick={() => removeSection(index)}>
              Remove Section
            </button>
          </div>
        ))}
        <button type="button" onClick={addSection}>
          + Add Section
        </button>

        <br />
        <button type="submit">Save Blog</button>
      </form>
    </div>
  );
};

export default BlogCreate;
