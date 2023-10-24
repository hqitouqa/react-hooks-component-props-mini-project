import React from "react";
import blogData from "../data/blog";
const About = ({
  src = "https://via.placeholder.com/215",
  text = "About this blog",
}) => {
  return (
    <aside>
      <img src={src} alt={"blog logo"} />
      <p>{text}</p>
    </aside>
  );
};

export default About;
