import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home
      <br />
      <Link to="/about">go to about</Link>
    </div>
  );
}

export default Home;
