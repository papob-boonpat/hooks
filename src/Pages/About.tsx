import React from "react";
import { Link, useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      About
      <br />
      <Link to="/posts">go to posts</Link>
      <br />
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        go Back
      </button>
    </div>
  );
}

export default About;
