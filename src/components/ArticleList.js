import React from "react";
import Article from "./Article";
import blogData from "../data/blog";
const ArticleList = () => {
  const articleElements = blogData.posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        preview={post.preview}
        date={post.date}
      />
    );
  });
  return <main>{articleElements}</main>;
};

export default ArticleList;
