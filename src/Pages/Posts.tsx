import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div>
      Posts
      <ul>
        <li>
          <Link to="1">Go to post 1</Link>
        </li>
        <li>
          <Link to="2?title=q&description=q&like=0">Go to post 2</Link>
        </li>
        <li>
          <Link to="3?title=a&description=b&like=1">Go to post 3</Link>
        </li>
        <li>
          <Link to="4?title=strong&description=helloworld&like=0">
            Go to post 4
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Posts;
