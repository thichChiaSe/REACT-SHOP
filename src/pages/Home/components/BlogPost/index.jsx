import React from "react";
import { BlogContent } from "./components/BlogContent";
import BlogTop from "./components/BlogTop";
// import BlogItem from "../../../../components/BlogItem";
import "./style.scss";
export const BlogPost = () => {
  return (
    <div className="blog">
      <div className="container-fluid">
        <BlogTop />
        <BlogContent />
      </div>
    </div>
  );
};
