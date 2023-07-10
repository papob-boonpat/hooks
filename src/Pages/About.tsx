import React from "react";
import { Link, useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      About
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
