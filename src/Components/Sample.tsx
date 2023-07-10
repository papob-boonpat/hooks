import React, { useEffect, useState } from "react";

function Sample(props: { some: string[] }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("cleanup");
    };
  }, []);

  const some = [...props.some];
  some.push("d");
  return (
    <div>
      <ul>
        {some.map((data) => (
          <li>{data}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sample;
