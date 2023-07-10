import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Post() {
  const params = useParams() as { id: string };
  const [search, setSearch] = useSearchParams();
  const title = search.get("title");
  const description = search.get("description");
  const like = search.get("like");

  return (
    <div>
      Post: {params.id}
      <br />
      Title is : {title}
      <br />
      Desc : {description}
      <br />
      Engagement : {like === "1" ? "like" : "dislike"}
      <button
        onClick={() => {
          const tmp = Object.fromEntries(search);
          console.log(tmp);

          setSearch({ ...tmp, like: tmp.like === "1" ? "0" : "1" });
        }}
      >
        Toggle Like
      </button>
    </div>
  );
}

export default Post;
